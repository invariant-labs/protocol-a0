use crate::{
    convert,
    storage::{pool_key::PoolKey, tick::Tick},
    types::{
        fee_growth::calculate_fee_growth_inside,
        fee_growth::FeeGrowth,
        liquidity::Liquidity,
        sqrt_price::{get_max_tick, SqrtPrice},
        token_amount::TokenAmount,
    },
    MAX_TICK,
};
use decimal::Decimal;
use serde::{Deserialize, Serialize};
use traceable_result::{function, location, ok_or_mark_trace, trace, TrackableResult};
use tsify::Tsify;
use wasm_bindgen::prelude::*;
use wasm_wrapper::wasm_wrapper;

#[derive(PartialEq, Debug, Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
#[serde(rename_all = "camelCase")]
pub struct SwapHop {
    pub pool_key: PoolKey,
    pub x_to_y: bool,
}

#[derive(Debug, Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
#[serde(rename_all = "camelCase")]
pub struct QuoteResult {
    pub amount_in: TokenAmount,
    pub amount_out: TokenAmount,
    pub target_sqrt_price: SqrtPrice,
    pub ticks: Vec<Tick>,
}

#[derive(Debug, Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
#[serde(rename_all = "camelCase")]
pub struct TokenAmounts {
    pub x: TokenAmount,
    pub y: TokenAmount,
}

#[wasm_bindgen(js_name = "_calculateFee")]
pub fn calculate_fee(
    js_lower_tick_index: JsValue,
    js_lower_tick_fee_growth_outside_x: JsValue,
    js_lower_tick_fee_growth_outside_y: JsValue,
    js_upper_tick_index: JsValue,
    js_upper_tick_fee_growth_outside_x: JsValue,
    js_upper_tick_fee_growth_outside_y: JsValue,
    js_pool_current_tick_index: JsValue,
    js_pool_fee_growth_global_x: JsValue,
    js_pool_fee_growth_global_y: JsValue,
    js_position_fee_growth_inside_x: JsValue,
    js_position_fee_growth_inside_y: JsValue,
    js_position_liquidity: JsValue,
) -> Result<JsValue, JsValue> {
    let lower_tick_index: i64 = convert!(js_lower_tick_index)?;
    let lower_tick_fee_growth_outside_x: u128 = convert!(js_lower_tick_fee_growth_outside_x)?;
    let lower_tick_fee_growth_outside_y: u128 = convert!(js_lower_tick_fee_growth_outside_y)?;
    let upper_tick_index: i64 = convert!(js_upper_tick_index)?;
    let upper_tick_fee_growth_outside_x: u128 = convert!(js_upper_tick_fee_growth_outside_x)?;
    let upper_tick_fee_growth_outside_y: u128 = convert!(js_upper_tick_fee_growth_outside_y)?;
    let pool_current_tick_index: i64 = convert!(js_pool_current_tick_index)?;
    let pool_fee_growth_global_x: u128 = convert!(js_pool_fee_growth_global_x)?;
    let pool_fee_growth_global_y: u128 = convert!(js_pool_fee_growth_global_y)?;
    let position_fee_growth_inside_x: u128 = convert!(js_position_fee_growth_inside_x)?;
    let position_fee_growth_inside_y: u128 = convert!(js_position_fee_growth_inside_y)?;
    let position_liquidity: u128 = convert!(js_position_liquidity)?;

    let (fee_growth_inside_x, fee_growth_inside_y) = calculate_fee_growth_inside(
        lower_tick_index as i32,
        FeeGrowth::new(lower_tick_fee_growth_outside_x),
        FeeGrowth::new(lower_tick_fee_growth_outside_y),
        upper_tick_index as i32,
        FeeGrowth::new(upper_tick_fee_growth_outside_x),
        FeeGrowth::new(upper_tick_fee_growth_outside_y),
        pool_current_tick_index as i32,
        FeeGrowth::new(pool_fee_growth_global_x),
        FeeGrowth::new(pool_fee_growth_global_y),
    );

    let tokens_owed_x = ok_or_mark_trace!(fee_growth_inside_x
        .unchecked_sub(FeeGrowth::new(position_fee_growth_inside_x))
        .to_fee(Liquidity::new(position_liquidity)))
    .map_err(|e| e.to_string())?;
    let tokens_owed_y = ok_or_mark_trace!(fee_growth_inside_y
        .unchecked_sub(FeeGrowth::new(position_fee_growth_inside_y))
        .to_fee(Liquidity::new(position_liquidity)))
    .map_err(|e| e.to_string())?;

    Ok(serde_wasm_bindgen::to_value(&TokenAmounts {
        x: tokens_owed_x,
        y: tokens_owed_y,
    })?)
}

#[wasm_wrapper]
pub fn is_token_x(token_candidate: String, token_to_compare: String) -> TrackableResult<bool> {
    Ok(token_candidate < token_to_compare)
}

#[wasm_wrapper("isValidTick")]
pub fn check_tick_to_sqrt_price_relationship(
    tick_index: i32,
    tick_spacing: u16,
    sqrt_price: SqrtPrice,
) -> TrackableResult<bool> {
    if tick_index + tick_spacing as i32 > MAX_TICK {
        let max_tick = get_max_tick(tick_spacing);
        let max_sqrt_price = ok_or_mark_trace!(SqrtPrice::from_tick(max_tick))?;
        if sqrt_price != max_sqrt_price {
            return Ok(false);
        }
    } else {
        let lower_bound = ok_or_mark_trace!(SqrtPrice::from_tick(tick_index))?;
        let upper_bound =
            ok_or_mark_trace!(SqrtPrice::from_tick(tick_index + tick_spacing as i32))?;
        if sqrt_price >= upper_bound || sqrt_price < lower_bound {
            return Ok(false);
        }
    }
    Ok(true)
}