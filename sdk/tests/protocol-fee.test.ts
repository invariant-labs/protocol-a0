import { Keyring } from '@polkadot/api'
import { assert } from 'chai'
import { Invariant } from '../src/invariant'
import { Network } from '../src/network'
import { PSP22 } from '../src/psp22'
import { assertThrowsAsync } from '../src/testUtils'
import { initPolkadotApi, newFeeTier, newPoolKey } from '../src/utils'
import { describe, it } from 'mocha'

const api = await initPolkadotApi(Network.Local)

const keyring = new Keyring({ type: 'sr25519' })
const account = await keyring.addFromUri('//Alice')
const testAccount = await keyring.addFromUri('//Bob')

let invariant = await Invariant.deploy(api, Network.Local, account, 10000000000n)
let token0Address = await PSP22.deploy(api, account, 1000000000n, 'Coin', 'COIN', 0n)
let token1Address = await PSP22.deploy(api, account, 1000000000n, 'Coin', 'COIN', 0n)
const psp22 = await PSP22.load(api, Network.Local)

const feeTier = newFeeTier(10000000000n, 1n)

describe('protocol-fee', async () => {
  beforeEach(async () => {
    invariant = await Invariant.deploy(api, Network.Local, account, 10000000000n)
    token0Address = await PSP22.deploy(api, account, 1000000000n, 'Coin', 'COIN', 0n)
    token1Address = await PSP22.deploy(api, account, 1000000000n, 'Coin', 'COIN', 0n)

    await invariant.addFeeTier(account, feeTier)

    const poolKey = newPoolKey(token0Address, token1Address, feeTier)

    await invariant.createPool(account, poolKey, 1000000000000000000000000n)

    await psp22.approve(
      account,
      invariant.contract.address.toString(),
      10000000000000n,
      token0Address
    )
    await psp22.approve(
      account,
      invariant.contract.address.toString(),
      10000000000000n,
      token1Address
    )

    await invariant.createPosition(
      account,
      poolKey,
      -10n,
      10n,
      10000000000000n,
      1000000000000000000000000n,
      0n
    )

    await psp22.approve(account, invariant.contract.address.toString(), 1000000000n, token0Address)
    await psp22.approve(account, invariant.contract.address.toString(), 1000000000n, token1Address)

    await invariant.swap(account, poolKey, true, 4999n, true, 999505344804856076727628n)
  })

  it('should withdraw protocol fee', async () => {
    const feeTier = newFeeTier(10000000000n, 1n)

    const poolKey = newPoolKey(token0Address, token1Address, feeTier)

    const token0Before = await psp22.balanceOf(account.address.toString(), token0Address)
    const token1Before = await psp22.balanceOf(account.address.toString(), token1Address)

    const poolBefore = await invariant.getPool(token0Address, token1Address, feeTier)
    assert.deepEqual(poolBefore.feeProtocolTokenX, 1n)
    assert.deepEqual(poolBefore.feeProtocolTokenY, 0n)

    await invariant.withdrawProtocolFee(account, poolKey)

    const poolAfter = await invariant.getPool(token0Address, token1Address, feeTier)
    assert.deepEqual(poolAfter.feeProtocolTokenX, 0n)
    assert.deepEqual(poolAfter.feeProtocolTokenY, 0n)

    const token0After = await psp22.balanceOf(account.address.toString(), token0Address)
    const token1After = await psp22.balanceOf(account.address.toString(), token1Address)

    if (poolKey.tokenX === token0Address) {
      assert.deepEqual(token0Before + 1n, token0After)
      assert.deepEqual(token1Before, token1After)
    } else {
      assert.deepEqual(token0Before, token0After)
      assert.deepEqual(token1Before + 1n, token1After)
    }
  })

  it('should change fee receiver', async () => {
    const feeTier = newFeeTier(10000000000n, 1n)

    const poolKey = newPoolKey(token0Address, token1Address, feeTier)

    await invariant.changeFeeReceiver(account, poolKey, testAccount.address.toString())

    const token0Before = await psp22.balanceOf(testAccount.address.toString(), token0Address)
    const token1Before = await psp22.balanceOf(testAccount.address.toString(), token1Address)

    const poolBefore = await invariant.getPool(token0Address, token1Address, feeTier)
    assert.deepEqual(poolBefore.feeProtocolTokenX, 1n)
    assert.deepEqual(poolBefore.feeProtocolTokenY, 0n)

    await invariant.withdrawProtocolFee(testAccount, poolKey)
    await assertThrowsAsync(invariant.withdrawProtocolFee(account, poolKey))

    const poolAfter = await invariant.getPool(token0Address, token1Address, feeTier)
    assert.deepEqual(poolAfter.feeProtocolTokenX, 0n)
    assert.deepEqual(poolAfter.feeProtocolTokenY, 0n)

    const token0After = await psp22.balanceOf(testAccount.address.toString(), token0Address)
    const token1After = await psp22.balanceOf(testAccount.address.toString(), token1Address)
    if (poolKey.tokenX === token0Address) {
      assert.deepEqual(token0Before + 1n, token0After)
      assert.deepEqual(token1Before, token1After)
    } else {
      assert.deepEqual(token0Before, token0After)
      assert.deepEqual(token1Before + 1n, token1After)
    }
  })
})
