import { Keyring } from '@polkadot/api'
import {
  FeeTier,
  Liquidity,
  PoolKey,
  SqrtPrice,
  TokenAmount,
  calculateAmountDelta,
  getDeltaY,
  getGlobalMaxSqrtPrice,
  getLiquidityByX,
  getLiquidityByY,
  getLiquidityScale,
  getMaxSqrtPrice,
  getMaxTick,
  getMinTick,
  getPercentageScale,
  getSqrtPriceScale,
  getTokenAmountScale,
  toPercentage,
  toPrice
} from 'math/math.js'
import { Invariant } from './invariant.js'
import { Network } from './network.js'
import { PSP22 } from './psp22.js'
import {
  calculateFee,
  calculateSqrtPriceAfterSlippage,
  initPolkadotApi,
  newFeeTier,
  newPoolKey,
  priceToSqrtPrice
} from './utils.js'

const main = async () => {
  {
    console.log(getMinTick(1), getMaxTick(5))
  }
  {
    console.log(getSqrtPriceScale())
    console.log(getTokenAmountScale())
    console.log(getPercentageScale())
    console.log(getLiquidityScale())
  }
  {
    const sqrtPriceA: SqrtPrice = 234878324943782000000000000n

    const sqrtPriceB: SqrtPrice = 87854456421658000000000000n
    const liquidity: Liquidity = 983983249092n

    const deltaYUp = getDeltaY(sqrtPriceA, sqrtPriceB, liquidity, true)
    const deltaYDown = getDeltaY(sqrtPriceA, sqrtPriceB, liquidity, false)
    console.log(deltaYUp)
    console.log(deltaYDown)
  }
  {
    const providedAmount: TokenAmount = 47600000000n
    const poolSqrtPrice: SqrtPrice = 1000000000000000000000000000n
    const lowerTickIndex = -22000n
    const upperTickIndex = -21000n

    const { l, amount } = getLiquidityByY(
      providedAmount,
      lowerTickIndex,
      upperTickIndex,
      poolSqrtPrice,
      true
    )
    console.log('Liquidity = ', l)
    console.log('Amount = ', amount)
  }
  {
    const providedAmount = 430000n
    const initSqrtPrice: SqrtPrice = 1005012269622000000000000n
    const lowerTickIndex = 80n
    const upperTickIndex = 120n

    const { l, amount } = getLiquidityByX(
      providedAmount,
      lowerTickIndex,
      upperTickIndex,
      initSqrtPrice,
      true
    )
    console.log('Liquidity = ', l)
    console.log('Amount = ', amount)
  }
  {
    const currentTickIndex = 2n
    const currentSqrtPrice: SqrtPrice = 1000140000000000000000000n
    const liquidity: Liquidity = 5000000000000n
    const liquiditySign = true
    const upperTick = 3n
    const lowerTick = 0n
    const [x, y, updateLiquidity] = calculateAmountDelta(
      currentTickIndex,
      currentSqrtPrice,
      liquidity,
      liquiditySign,
      upperTick,
      lowerTick
    )
    console.log('x = ', x)
    console.log('y = ', y)
    console.log('updateLiquidity = ', updateLiquidity)
  }
  {
    const maxTick: bigint = getMaxTick(1n)
    console.log(maxTick)
    const globalMaxSqrtPrice = getGlobalMaxSqrtPrice()
    const maxSqrtPrice = getMaxSqrtPrice(1)
    console.log(globalMaxSqrtPrice)
    console.log(maxSqrtPrice)
  }
  {
    const feeTier: FeeTier = newFeeTier(10n, 55n)
    console.log(feeTier)
    const poolKey: PoolKey = newPoolKey(
      '5H79vf7qQKdpefChp4sGh8j4BNq8JoL5x8nez8RsEebPJu9D',
      '5DxazQgoKEPMLqyUBRpqgAV7JnGv3w6i4EACTU8RDJxPHisH',
      feeTier
    )
    console.log(poolKey)
  }

  const network = Network.getFromCli()
  console.log(`using ${network}`)

  const api = await initPolkadotApi(network)

  // initialize account, you can use your own wallet by pasting mnemonic phase
  const keyring = new Keyring({ type: 'sr25519' })
  const account = keyring.addFromUri('//Alice')

  // ###
  const INVARIANT_ADDRESS = (
    await Invariant.deploy(api, Network.Local, account, 0n)
  ).contract.address.toString()

  const TOKEN0_ADDRESS = await PSP22.deploy(api, account, 1000000000000000000000000000000n)
  const TOKEN1_ADDRESS = await PSP22.deploy(api, account, 1000000000000000000000000000000n)
  // ###

  // load invariant contract
  const invariant = await Invariant.load(api, Network.Local, INVARIANT_ADDRESS)

  // load token contract
  const psp22 = await PSP22.load(api, Network.Local, TOKEN0_ADDRESS)

  // set fee tier, make sure that fee tier with specified parameters exists
  const feeTier = newFeeTier(toPercentage(1n, 2n), 1n) // fee: 0.01 = 1%, tick spacing: 1

  // ###
  await invariant.addFeeTier(account, feeTier)
  // ###

  // set initial price of the pool, we set it to 1.00
  // all endpoints only accept sqrt price so we need to convert it before passing it
  const price = toPrice(1n, 0n)
  const initSqrtPrice = priceToSqrtPrice(price)

  // set pool key, make sure that pool with specified parameters does not exists
  const poolKey = newPoolKey(TOKEN0_ADDRESS, TOKEN1_ADDRESS, feeTier)

  const createPoolResult = await invariant.createPool(account, poolKey, initSqrtPrice)
  console.log(createPoolResult.hash) // print transaction hash

  // token y has 12 decimals and we want to add 8 actual tokens to our position
  const tokenYAmount = 8n * 10n ** 12n

  // set lower and upper tick, we want to create position in range [-10, 10]
  const lowerTick = -10n
  const upperTick = 10n

  // calculate amount of token x we need to give to open position
  const { amount: tokenXAmount, l: positionLiquidity } = getLiquidityByY(
    tokenYAmount,
    lowerTick,
    upperTick,
    initSqrtPrice,
    true
  )

  // print amount of token x and y we need to give to open position based on parameteres we passed
  console.log(tokenXAmount, tokenYAmount)

  // approve transfers of both tokens
  await psp22.setContractAddress(poolKey.tokenX)
  await psp22.approve(account, invariant.contract.address.toString(), tokenXAmount)
  await psp22.setContractAddress(poolKey.tokenY)
  await psp22.approve(account, invariant.contract.address.toString(), tokenYAmount)

  // open up position
  const createPositionResult = await invariant.createPosition(
    account,
    poolKey,
    lowerTick,
    upperTick,
    positionLiquidity,
    initSqrtPrice,
    0n
  )
  console.log(createPositionResult.hash) // print transaction hash

  // here we want to swap 6 token0
  // token0 has 12 decimals so we need to multiply it by 10^12
  const amount = 6n * 10n ** 12n

  // approve token x transfer
  await psp22.setContractAddress(poolKey.tokenX)
  await psp22.approve(account, invariant.contract.address.toString(), amount)

  // get estimated result of swap
  const quoteResult = await invariant.quote(account, poolKey, true, amount, true)

  // slippage is a price change you are willing to accept,
  // for examples if current price is 1 and your slippage is 1%, then price limit will be 1.01
  const allowedSlippage = toPercentage(1n, 3n) // 0.001 = 0.1%

  // calculate sqrt price limit based on slippage
  const sqrtPriceLimit = calculateSqrtPriceAfterSlippage(
    quoteResult.targetSqrtPrice,
    allowedSlippage,
    false
  )

  const swapResult = await invariant.swap(account, poolKey, true, amount, true, sqrtPriceLimit)
  console.log(swapResult.hash) // print transaction hash

  // query state
  const poolAfter = await invariant.getPool(account, TOKEN0_ADDRESS, TOKEN1_ADDRESS, feeTier)
  // last parameter here is position id, positions are indexed from 0
  const positionAfter = await invariant.getPosition(account, account.address, 0n)
  const lowerTickAfter = await invariant.getTick(account, poolKey, positionAfter.lowerTickIndex)
  const upperTickAfter = await invariant.getTick(account, poolKey, positionAfter.upperTickIndex)

  // pools, ticks and positions have many fee growth fields that are used to calculate fees,
  // by doing that off chain we can save gas fees,
  // so in order to see how many tokens you can claim from fees you need to use calculate fee function
  const fees = calculateFee(poolAfter, positionAfter, lowerTickAfter, upperTickAfter)

  // print amount of unclaimed x and y token
  console.log(fees)

  // claim fees
  // specify position id, positions are indexed from 0
  const positionId = 0n
  const claimFeeResult = await invariant.claimFee(account, positionId)
  console.log(claimFeeResult.hash) // print transaction hash

  // get balance of a specific token after claiming position fees and print it
  const accountBalance = await psp22.balanceOf(account, account.address)
  console.log(accountBalance)

  // remove position
  const removePositionResult = await invariant.removePosition(account, positionId)
  console.log(removePositionResult.hash) // print transaction hash

  // get balance of a specific token after removing position
  const accountToken0Balance = await psp22.balanceOf(account, account.address)
  await psp22.setContractAddress(TOKEN1_ADDRESS)
  const accountToken1Balance = await psp22.balanceOf(account, account.address)

  // print balances
  console.log(accountToken0Balance, accountToken1Balance)

  process.exit(0)
}

main()
