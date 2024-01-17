use crate::{
    contracts::{PoolKey, Tick},
    InvariantError,
};
use ink::storage::Mapping;

#[ink::storage_item]
#[derive(Debug, Default)]
pub struct Ticks {
    ticks: Mapping<(PoolKey, i32), Tick>,
}

impl Ticks {
    pub fn add(
        &mut self,
        pool_key: PoolKey,
        index: i32,
        tick: &Tick,
    ) -> Result<(), InvariantError> {
        self.ticks
            .get((pool_key, index))
            .map_or(Ok(()), |_| Err(InvariantError::TickAlreadyExist))?;

        self.ticks.insert((pool_key, index), tick);
        Ok(())
    }

    pub fn update(
        &mut self,
        pool_key: PoolKey,
        index: i32,
        tick: &Tick,
    ) -> Result<(), InvariantError> {
        self.get(pool_key, index)?;

        self.ticks.insert((pool_key, index), tick);
        Ok(())
    }

    pub fn remove(&mut self, pool_key: PoolKey, index: i32) -> Result<(), InvariantError> {
        self.get(pool_key, index)?;

        self.ticks.remove((pool_key, index));
        Ok(())
    }

    pub fn get(&self, pool_key: PoolKey, index: i32) -> Result<Tick, InvariantError> {
        let tick = self
            .ticks
            .get((pool_key, index))
            .ok_or(InvariantError::TickNotFound)?;

        Ok(tick)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::contracts::FeeTier;
    use decimal::*;
    use ink::primitives::AccountId;
    use math::percentage::Percentage;

    #[ink::test]
    fn test_add() {
        let ticks = &mut Ticks::default();
        let token_x = AccountId::from([0x01; 32]);
        let token_y = AccountId::from([0x02; 32]);
        let fee_tier = FeeTier {
            fee: Percentage::new(0),
            tick_spacing: 1,
        };
        let pool_key = PoolKey::new(token_x, token_y, fee_tier).unwrap();
        let tick = Tick::default();

        ticks.add(pool_key, 0, &tick).unwrap();
        assert_eq!(ticks.get(pool_key, 0), Ok(tick));
        assert_eq!(ticks.get(pool_key, 1), Err(InvariantError::TickNotFound));

        let result = ticks.add(pool_key, 0, &tick);
        assert_eq!(result, Err(InvariantError::TickAlreadyExist));
    }

    #[ink::test]
    fn test_update() {
        let ticks = &mut Ticks::default();
        let token_x = AccountId::from([0x01; 32]);
        let token_y = AccountId::from([0x02; 32]);
        let fee_tier = FeeTier {
            fee: Percentage::new(0),
            tick_spacing: 1,
        };
        let pool_key = PoolKey::new(token_x, token_y, fee_tier).unwrap();
        let tick = Tick::default();
        let new_tick = Tick {
            seconds_outside: 1,
            ..Tick::default()
        };

        ticks.add(pool_key, 0, &tick).unwrap();

        ticks.update(pool_key, 0, &new_tick).unwrap();
        assert_eq!(ticks.get(pool_key, 0), Ok(new_tick));

        let result = ticks.update(pool_key, 1, &new_tick);
        assert_eq!(result, Err(InvariantError::TickNotFound));
    }

    #[ink::test]
    fn test_remove() {
        let ticks = &mut Ticks::default();
        let token_x = AccountId::from([0x01; 32]);
        let token_y = AccountId::from([0x02; 32]);
        let fee_tier = FeeTier {
            fee: Percentage::new(0),
            tick_spacing: 1,
        };
        let pool_key = PoolKey::new(token_x, token_y, fee_tier).unwrap();
        let tick = Tick::default();

        ticks.add(pool_key, 0, &tick).unwrap();

        ticks.remove(pool_key, 0).unwrap();
        assert_eq!(ticks.get(pool_key, 0), Err(InvariantError::TickNotFound));

        let result = ticks.remove(pool_key, 0);
        assert_eq!(result, Err(InvariantError::TickNotFound));
    }
}
