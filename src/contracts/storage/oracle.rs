use ink::prelude::{vec, vec::Vec};
use math::types::sqrt_price::sqrt_price::SqrtPrice;

#[derive(Default, Debug, PartialEq, Clone)]
pub struct Oracle {
    pub data: Vec<Record>,
    pub head: u16,
    pub amount: u16,
    pub size: u16,
}

#[derive(Default, Debug, PartialEq, Copy, Clone)]
pub struct Record {
    pub timestamp: u64,
    pub price: SqrtPrice,
}

impl Oracle {
    pub fn new() -> Self {
        Self {
            data: vec![Record::default(); 256],
            head: 0,
            amount: 0,
            size: 256,
        }
    }
}
