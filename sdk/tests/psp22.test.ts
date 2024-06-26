import { Keyring } from '@polkadot/api'
import { assert, expect } from 'chai'
import { Network } from '../src/network'
import { PSP22 } from '../src/psp22'
import { initPolkadotApi } from '../src/utils'
import { describe, it } from 'mocha'

const api = await initPolkadotApi(Network.Local)

const keyring = new Keyring({ type: 'sr25519' })
const account = await keyring.addFromUri('//Alice')
const testAccount = await keyring.addFromUri('//Bob')

let token0Address = await PSP22.deploy(api, account, 1000000000n, 'Coin', 'COIN', 0n)
const psp22 = await PSP22.load(api, Network.Local)

describe('psp22', function () {
  beforeEach(async () => {
    token0Address = await PSP22.deploy(api, account, 1000n, 'Coin', 'COIN', 12n)
  })

  it('should set metadata', async () => {
    expect(await psp22.tokenName(token0Address)).to.equal('Coin')
    expect(await psp22.tokenSymbol(token0Address)).to.equal('COIN')
    expect(await psp22.tokenDecimals(token0Address)).to.equal(12n)
  })

  it('should mint tokens', async () => {
    await psp22.mint(account, 500n, token0Address)
    expect(await psp22.balanceOf(account.address, token0Address)).to.equal(1500n)
  })

  it('should transfer tokens', async () => {
    const data = api.createType('Vec<u8>', [])
    await psp22.transfer(account, testAccount.address, 250n, data, token0Address)
    expect(await psp22.balanceOf(account.address, token0Address)).to.equal(750n)
    expect(await psp22.balanceOf(testAccount.address, token0Address)).to.equal(250n)
  })

  it('should change instance', async () => {
    const secondTokenAddress = await PSP22.deploy(api, account, 1000n, 'SecondCoin', 'SCOIN', 12n)
    const tokenName = await psp22.tokenName(secondTokenAddress)
    assert.equal(tokenName, 'SecondCoin')
  })

  it('should approve tokens', async () => {
    await psp22.approve(account, testAccount.address, 250n, token0Address)
    expect(await psp22.allowance(account.address, testAccount.address, token0Address)).to.equal(
      250n
    )
  })

  it('should get all balances', async () => {
    token0Address = await PSP22.deploy(api, account, 0n, 'Coin', 'COIN', 12n)
    const token1Address = await PSP22.deploy(api, account, 0n, 'Coin', 'COIN', 12n)
    const token2Address = await PSP22.deploy(api, account, 0n, 'Coin', 'COIN', 12n)
    const token3Address = await PSP22.deploy(api, account, 0n, 'Coin', 'COIN', 12n)

    await psp22.mint(account, 100n, token0Address)
    await psp22.mint(account, 200n, token1Address)
    await psp22.mint(account, 300n, token2Address)
    await psp22.mint(account, 400n, token3Address)

    const balances = await psp22.getAllBalances(
      [token0Address, token1Address, token2Address, token3Address],
      account.address
    )

    expect(balances.size).to.equal(4)
    expect(balances.get(token0Address)).to.equal(100n)
    expect(balances.get(token1Address)).to.equal(200n)
    expect(balances.get(token2Address)).to.equal(300n)
    expect(balances.get(token3Address)).to.equal(400n)
  })
})
