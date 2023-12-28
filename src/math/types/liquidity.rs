use core::convert::{TryFrom, TryInto};
use decimal::*;
#[decimal(6)]
#[derive(
    Default,
    Debug,
    Clone,
    Copy,
    PartialEq,
    Eq,
    PartialOrd,
    scale::Decode,
    scale::Encode,
    scale_info::TypeInfo,
    ink::storage::traits::StorageLayout,
)]
// #[cfg_attr(
//     feature = "std",
//     derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
// )]
pub struct Liquidity {
    pub v: u128,
}
