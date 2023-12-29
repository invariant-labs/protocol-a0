use super::sqrt_price::SqrtPrice;
use crate::alloc::string::ToString;
use core::convert::{TryFrom, TryInto};
use decimal::*;
use traceable_result::*;

#[decimal(0)]
#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, PartialOrd, scale::Decode, scale::Encode)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]

pub struct TokenAmount(pub u128);

impl TokenAmount {
    pub fn from_big_sqrt_price(value: U256) -> TrackableResult<TokenAmount> {
        let result: u128 = value
            .checked_div(SqrtPrice::one())
            .ok_or_else(|| err!(TrackableError::DIV))?
            .try_into()
            .map_err(|_| err!(TrackableError::cast::<Self>().as_str()))?;

        Ok(TokenAmount(result))
    }

    pub fn from_big_sqrt_price_up(value: U256) -> TrackableResult<TokenAmount> {
        let result: u128 = value
            .checked_add(SqrtPrice::almost_one())
            .ok_or_else(|| err!(TrackableError::ADD))?
            .checked_div(SqrtPrice::one())
            .ok_or_else(|| err!(TrackableError::DIV))?
            .try_into()
            .map_err(|_| err!(TrackableError::cast::<Self>().as_str()))?;
        Ok(TokenAmount(result))
    }
}
