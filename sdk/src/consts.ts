import {
  getChunkSize,
  getFeeGrowthDenominator,
  getFeeGrowthScale,
  getFixedPointDenominator,
  getFixedPointScale,
  getGlobalMaxSqrtPrice,
  getGlobalMinSqrtPrice,
  getLiquidityDenominator,
  getLiquidityScale,
  getLiquidityTicksLimit,
  getMaxPoolKeysReturned,
  getMaxPoolPairsReturned,
  getMaxTickCross,
  getMaxTickmapQuerySize,
  getPercentageDenominator,
  getPercentageScale,
  getPriceDenominator,
  getPriceScale,
  getSecondsPerLiquidityDenominator,
  getSecondsPerLiquidityScale,
  getSqrtPriceDenominator,
  getSqrtPriceScale,
  getTokenAmountDenominator,
  getTokenAmountScale
} from '@invariant-labs/a0-sdk-wasm/invariant_a0_wasm.js'

export const MAX_REF_TIME = 259058343000
export const DEFAULT_REF_TIME = 1250000000000
export const DEFAULT_PROOF_SIZE = 1250000000000
export const CONCENTRATION_FACTOR = 1.00001526069123

export const TESTNET = 'alephzero-testnet'
export const MAINNET = 'alephzero-mainnet'
export const DEFAULT_LOCAL = 'ws://127.0.0.1:9944'

export const TESTNET_WAZERO_ADDRESS = '5EFDb7mKbougLtr5dnwd5KDfZ3wK55JPGPLiryKq4uRMPR46'

export const TESTNET_INVARIANT_ADDRESS = '5F5AV5bfcW24mXUdUHtcea46bdTbUEkXwTL4PgoQ4e8ZDp5p'
export const TESTNET_BTC_ADDRESS = '5EVnTmsDQpT8UcG7YjMje9fTP6LWjVnLCzRtscQGUJmBfD5z'
export const TESTNET_ETH_ADDRESS = '5Cmj5gjTt78GX9rabk9Ru4Z2P5tF6KhV2PjH4wEJ9nodptc1'
export const TESTNET_USDC_ADDRESS = '5HoJdjrFMbYyY4mjvraLbDwbYRKeDVcswSctoK68cdctjiCN'

export const FEE_GROWTH_DENOMINATOR = getFeeGrowthDenominator()
export const FIXED_POINT_DENOMINATOR = getFixedPointDenominator()
export const LIQUIDITY_DENOMINATOR = getLiquidityDenominator()
export const PERCENTAGE_DENOMINATOR = getPercentageDenominator()
export const PRICE_DENOMINATOR = getPriceDenominator()
export const SECONDS_PER_LIQUIDITY_DENOMINATOR = getSecondsPerLiquidityDenominator()
export const SQRT_PRICE_DENOMINATOR = getSqrtPriceDenominator()
export const TOKEN_AMOUNT_DENOMINATOR = getTokenAmountDenominator()

export const FEE_GROWTH_SCALE = getFeeGrowthScale()
export const FIXED_POINT_SCALE = getFixedPointScale()
export const LIQUIDITY_SCALE = getLiquidityScale()
export const PERCENTAGE_SCALE = getPercentageScale()
export const PRICE_SCALE = getPriceScale()
export const SECONDS_PER_LIQUIDITY_SCALE = getSecondsPerLiquidityScale()
export const SQRT_PRICE_SCALE = getSqrtPriceScale()
export const TOKEN_AMOUNT_SCALE = getTokenAmountScale()

export const MAX_SQRT_PRICE = getGlobalMaxSqrtPrice()
export const MIN_SQRT_PRICE = getGlobalMinSqrtPrice()
export const CHUNK_SIZE = getChunkSize()
export const MAX_TICKMAP_QUERY_SIZE = getMaxTickmapQuerySize()
export const MAX_TICK_CROSS = getMaxTickCross()
export const LIQUIDITY_TICKS_LIMIT = getLiquidityTicksLimit()
export const MAX_POOL_KEYS_RETURNED = getMaxPoolKeysReturned()
export const MAX_POOL_PAIRS_RETURNED = getMaxPoolPairsReturned()
