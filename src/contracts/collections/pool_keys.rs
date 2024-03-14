use crate::{contracts::PoolKey, InvariantError};
use alloc::vec::Vec;
use ink::storage::Mapping;
#[ink::storage_item]
#[derive(Debug, Default)]
pub struct PoolKeys {
    pool_keys: Mapping<PoolKey, u16>,
    pool_keys_by_index: Mapping<u16, PoolKey>,
    pool_keys_length: u16,
}

impl PoolKeys {
    pub fn get(&self, pool_key: PoolKey) -> Option<u16> {
        self.pool_keys.get(pool_key)
    }

    pub fn add(&mut self, pool_key: PoolKey) -> Result<(), InvariantError> {
        if self.contains(pool_key) {
            return Err(InvariantError::PoolKeyAlreadyExist);
        }

        self.pool_keys.insert(pool_key, &self.pool_keys_length);
        self.pool_keys_by_index
            .insert(self.pool_keys_length, &pool_key);
        self.pool_keys_length += 1;

        Ok(())
    }

    #[allow(dead_code)]
    pub fn remove(&mut self, pool_key: PoolKey) -> Result<(), InvariantError> {
        let extracted_pool_key = self.get(pool_key);
        if extracted_pool_key.is_none() {
            return Err(InvariantError::PoolKeyNotFound);
        }

        let pool_key_index = extracted_pool_key.unwrap();

        self.pool_keys.remove(pool_key);
        self.pool_keys_by_index.remove(pool_key_index);
        self.pool_keys_length -= 1;
        Ok(())
    }

    pub fn contains(&self, pool_key: PoolKey) -> bool {
        self.pool_keys.get(pool_key).is_some()
    }

    pub fn get_all(&self, size: u8) -> Result<Vec<PoolKey>, InvariantError> {
        if size > 220 {
            return Err(InvariantError::InvalidSize);
        }
        let mut pool_keys = Vec::new();
        for i in 0..self.pool_keys_length {
            if size as u16 == i {
                return Ok(pool_keys);
            }

            let pool_key = self.pool_keys_by_index.get(i).unwrap();
            pool_keys.push(pool_key);
        }
        Ok(pool_keys)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::{contracts::FeeTier, math::percentage::Percentage};
    use decimal::*;
    use ink::primitives::AccountId;

    #[ink::test]
    fn test_add() {
        let pool_keys = &mut PoolKeys::default();
        let pool_key = PoolKey::default();
        let token_x = AccountId::from([1; 32]);
        let token_y = AccountId::from([2; 32]);
        let fee_tier = FeeTier {
            fee: Percentage::new(0),
            tick_spacing: 1,
        };
        let new_pool_key = PoolKey::new(token_x, token_y, fee_tier).unwrap();

        pool_keys.add(pool_key).unwrap();
        assert!(pool_keys.contains(pool_key));
        assert!(!pool_keys.contains(new_pool_key));

        let result = pool_keys.add(pool_key);
        assert_eq!(result, Err(InvariantError::PoolKeyAlreadyExist));
    }

    #[ink::test]
    fn test_remove() {
        let pool_keys = &mut PoolKeys::default();
        let pool_key = PoolKey::default();

        pool_keys.add(pool_key).unwrap();

        pool_keys.remove(pool_key).unwrap();
        assert!(!pool_keys.contains(pool_key));

        let result = pool_keys.remove(pool_key);
        assert_eq!(result, Err(InvariantError::PoolKeyNotFound));
    }

    #[ink::test]
    fn test_get_all() {
        let pool_keys = &mut PoolKeys::default();
        let pool_key = PoolKey::default();
        let token_x = AccountId::from([1; 32]);
        let token_y = AccountId::from([2; 32]);
        let fee_tier = FeeTier {
            fee: Percentage::new(0),
            tick_spacing: 1,
        };
        let new_pool_key = PoolKey::new(token_x, token_y, fee_tier).unwrap();

        let result = pool_keys.get_all(3).unwrap();
        assert_eq!(result, vec![]);
        assert_eq!(result.len(), 0);

        pool_keys.add(pool_key).unwrap();
        pool_keys.add(new_pool_key).unwrap();

        let result = pool_keys.get_all(3).unwrap();
        assert_eq!(result, vec![pool_key, new_pool_key]);
        assert_eq!(result.len(), 2);
    }
}
