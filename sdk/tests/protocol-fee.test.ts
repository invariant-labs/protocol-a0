import { Keyring } from '@polkadot/api'
import { assert } from 'chai'
import { InvariantError } from 'math/math.js'
import { Invariant } from '../src/invariant'
import { Network } from '../src/network'
import { PSP22 } from '../src/psp22'
import { assertThrowsAsync } from '../src/testUtils'
import { initPolkadotApi, newFeeTier, newPoolKey } from '../src/utils'

const api = await initPolkadotApi(Network.Local)

const keyring = new Keyring({ type: 'sr25519' })
const account = await keyring.addFromUri('//Alice')
const testAccount = await keyring.addFromUri('//Bob')

let invariant = await Invariant.deploy(api, Network.Local, account, { v: 10000000000n })
let token0 = await PSP22.deploy(api, Network.Local, account, 1000000000n, 'Coin', 'COIN', 0n)
let token1 = await PSP22.deploy(api, Network.Local, account, 1000000000n, 'Coin', 'COIN', 0n)
const psp22 = token0

const feeTier = newFeeTier({ v: 10000000000n }, 1n)

describe('protocol fee', async () => {
  beforeEach(async () => {
    invariant = await Invariant.deploy(api, Network.Local, account, { v: 10000000000n })
    token0 = await PSP22.deploy(api, Network.Local, account, 1000000000n, 'Coin', 'COIN', 0n)
    token1 = await PSP22.deploy(api, Network.Local, account, 1000000000n, 'Coin', 'COIN', 0n)

    await invariant.addFeeTier(account, feeTier)

    await invariant.createPool(
      account,
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier,
      { v: 1000000000000000000000000n },
      0n
    )

    await psp22.setContractAddress(token0.contract.address.toString())
    await psp22.approve(account, invariant.contract.address.toString(), 10000000000000n)
    await psp22.setContractAddress(token1.contract.address.toString())
    await psp22.approve(account, invariant.contract.address.toString(), 10000000000000n)

    const poolKey = newPoolKey(
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )

    await invariant.createPosition(
      account,
      poolKey,
      -10n,
      10n,
      { v: 10000000000000n },
      { v: 1000000000000000000000000n },
      { v: 1000000000000000000000000n }
    )

    await psp22.setContractAddress(token0.contract.address.toString())
    await psp22.approve(account, invariant.contract.address.toString(), 1000000000n)
    await psp22.setContractAddress(token1.contract.address.toString())
    await psp22.approve(account, invariant.contract.address.toString(), 1000000000n)

    await invariant.swap(account, poolKey, true, 4999n, true, {
      v: 999505344804856076727628n
    })
  })

  it('should withdraw protocol fee', async () => {
    const feeTier = newFeeTier({ v: 10000000000n }, 1n)

    const poolKey = newPoolKey(
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )

    await psp22.setContractAddress(token0.contract.address.toString())
    const token0Before = await psp22.balanceOf(account, account.address.toString())
    await psp22.setContractAddress(token1.contract.address.toString())
    const token1Before = await psp22.balanceOf(account, account.address.toString())

    const poolBefore = await invariant.getPool(
      account,
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )
    assert.deepEqual(poolBefore.feeProtocolTokenX, 1n)
    assert.deepEqual(poolBefore.feeProtocolTokenY, 0n)

    await invariant.withdrawProtocolFee(account, poolKey)

    const poolAfter = await invariant.getPool(
      account,
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )
    assert.deepEqual(poolAfter.feeProtocolTokenX, 0n)
    assert.deepEqual(poolAfter.feeProtocolTokenY, 0n)

    await psp22.setContractAddress(token0.contract.address.toString())
    const token0After = await psp22.balanceOf(account, account.address.toString())
    await psp22.setContractAddress(token1.contract.address.toString())
    const token1After = await psp22.balanceOf(account, account.address.toString())

    if (poolKey.tokenX === token0.contract.address.toString()) {
      assert.deepEqual(token0Before + 1n, token0After)
      assert.deepEqual(token1Before, token1After)
    } else {
      assert.deepEqual(token0Before, token0After)
      assert.deepEqual(token1Before + 1n, token1After)
    }
  })

  it('should change fee receiver', async () => {
    const feeTier = newFeeTier({ v: 10000000000n }, 1n)

    const poolKey = newPoolKey(
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )

    await invariant.changeFeeReceiver(account, poolKey, testAccount.address.toString())

    await psp22.setContractAddress(token0.contract.address.toString())
    const token0Before = await psp22.balanceOf(account, testAccount.address.toString())
    await psp22.setContractAddress(token1.contract.address.toString())
    const token1Before = await psp22.balanceOf(account, testAccount.address.toString())

    const poolBefore = await invariant.getPool(
      account,
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )
    assert.deepEqual(poolBefore.feeProtocolTokenX, 1n)
    assert.deepEqual(poolBefore.feeProtocolTokenY, 0n)

    await invariant.withdrawProtocolFee(testAccount, poolKey)
    assertThrowsAsync(
      invariant.withdrawProtocolFee(account, poolKey),
      InvariantError.NotFeeReceiver
    )

    const poolAfter = await invariant.getPool(
      account,
      token0.contract.address.toString(),
      token1.contract.address.toString(),
      feeTier
    )
    assert.deepEqual(poolAfter.feeProtocolTokenX, 0n)
    assert.deepEqual(poolAfter.feeProtocolTokenY, 0n)

    await psp22.setContractAddress(token0.contract.address.toString())
    const token0After = await psp22.balanceOf(account, testAccount.address.toString())
    await psp22.setContractAddress(token1.contract.address.toString())
    const token1After = await psp22.balanceOf(account, testAccount.address.toString())
    if (poolKey.tokenX === token0.contract.address.toString()) {
      assert.deepEqual(token0Before + 1n, token0After)
      assert.deepEqual(token1Before, token1After)
    } else {
      assert.deepEqual(token0Before, token0After)
      assert.deepEqual(token1Before + 1n, token1After)
    }
  })
})
