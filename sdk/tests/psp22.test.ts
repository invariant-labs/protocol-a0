import { ApiPromise, Keyring } from '@polkadot/api'
import { IKeyringPair } from '@polkadot/types/types/interfaces'
import { expect } from 'chai'
import { Network } from '../src/network'
import { PSP22 } from '../src/psp22'
import { DEFAULT_PROOF_SIZE, DEFAULT_REF_TIME, initPolkadotApi } from '../src/utils'

describe('psp22', function () {
  const init = async (): Promise<{
    api: ApiPromise
    account: IKeyringPair
    testAccount: IKeyringPair
  }> => {
    const api = await initPolkadotApi(Network.Local)

    const keyring = new Keyring({ type: 'sr25519' })
    const account = await keyring.addFromUri('//Alice')
    const testAccount = await keyring.addFromUri('//Bob')

    return { api, account, testAccount }
  }

  it('deploys', async () => {
    const { api, account } = await init()

    await PSP22.create(
      api,
      null,
      DEFAULT_REF_TIME,
      DEFAULT_PROOF_SIZE,
      account,
      1000n,
      'Coin',
      'COIN',
      12n
    )
  })

  it('should set metadata', async () => {
    const { api, account } = await init()

    const token = await PSP22.create(
      api,
      null,
      DEFAULT_REF_TIME,
      DEFAULT_PROOF_SIZE,
      account,
      1000n,
      'Coin',
      'COIN',
      12n
    )

    expect(await token.tokenName(account)).to.equal('Coin')
    expect(await token.tokenSymbol(account)).to.equal('COIN')
    expect(await token.tokenDecimals(account)).to.equal(12)
  })

  it('should mint tokens', async () => {
    const { api, account } = await init()
    const token = await PSP22.create(
      api,
      null,
      DEFAULT_REF_TIME,
      DEFAULT_PROOF_SIZE,
      account,
      500n,
      'Coin',
      'COIN',
      12n
    )

    await token.mint(account, 500)
    expect(await token.balanceOf(account, account.address)).to.equal(1000)
  })

  it('should transfer tokens', async () => {
    const { api, account, testAccount } = await init()

    const token = await PSP22.create(
      api,
      null,
      DEFAULT_REF_TIME,
      DEFAULT_PROOF_SIZE,
      account,
      500n,
      'Coin',
      'COIN',
      12n
    )

    const data = api.createType('Vec<u8>', [])
    await token.transfer(account, testAccount.address, 250, data)
    expect(await token.balanceOf(account, account.address)).to.equal(250)
    expect(await token.balanceOf(account, testAccount.address)).to.equal(250)
  })

  it('should approve tokens', async () => {
    const { api, account, testAccount } = await init()
    const token = await PSP22.create(
      api,
      null,
      DEFAULT_REF_TIME,
      DEFAULT_PROOF_SIZE,
      account,
      500n,
      'Coin',
      'COIN',
      12n
    )

    await token.approve(account, testAccount.address, 250n)
    expect(await token.allowance(account, account.address, testAccount.address)).to.equal(250)
  })
})
