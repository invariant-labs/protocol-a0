use decimal::*;

use crate::alloc::string::ToString;

#[decimal(6)]
#[derive(Default, Debug, Clone, Copy, PartialEq, Eq, PartialOrd)]
pub struct Liquidity {
    pub v: u128,
}
