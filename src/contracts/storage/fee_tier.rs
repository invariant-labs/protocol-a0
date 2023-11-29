use crate::math::types::percentage::Percentage;
#[derive(scale::Decode, scale::Encode, Debug, Copy, Clone, PartialEq)]
#[cfg_attr(
    feature = "std",
    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)
)]
pub struct FeeTier {
    pub fee: Percentage,
    pub tick_spacing: u16,
}

impl FeeTier {
    pub fn new(fee: Percentage, tick_spacing: u16) -> FeeTier {
        FeeTier { fee, tick_spacing }
    }
}
