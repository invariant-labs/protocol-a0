import { ApiPromise } from '@polkadot/api'
import { ContractPromise } from '@polkadot/api-contract'
import { Bytes } from '@polkadot/types'
import { WeightV2 } from '@polkadot/types/interfaces'
import { IKeyringPair } from '@polkadot/types/types'
import { DeployedContract } from '@scio-labs/use-inkathon'
import { deployContract } from '@scio-labs/use-inkathon/helpers'
import { Network } from './network.js'
import { PSP22Query, PSP22Tx } from './schema.js'
import {
  DEFAULT_PROOF_SIZE,
  DEFAULT_REF_TIME,
  getDeploymentData,
  sendQuery,
  sendTx
} from './utils.js'

export class PSP22 {
  contract: ContractPromise
  api: ApiPromise
  gasLimit: WeightV2
  storageDepositLimit: number | null = null
  waitForFinalization: boolean

  private constructor(
    api: ApiPromise,
    network: Network,
    storageDepositLimit: number | null = null,
    refTime: number = DEFAULT_REF_TIME,
    proofSize: number = DEFAULT_PROOF_SIZE,
    abi: any,
    deploymentAddress: string
  ) {
    this.api = api
    this.gasLimit = api.registry.createType('WeightV2', {
      refTime,
      proofSize
    }) as WeightV2
    this.storageDepositLimit = storageDepositLimit
    this.waitForFinalization = network !== Network.Local
    this.contract = new ContractPromise(this.api, abi, deploymentAddress)
  }

  static async create(
    api: ApiPromise,
    storageDepositLimit: number | null = null,
    refTime: number = DEFAULT_REF_TIME,
    proofSize: number = DEFAULT_PROOF_SIZE,
    account: IKeyringPair,
    supply: bigint,
    name: string,
    symbol: string,
    decimals: bigint
  ): Promise<PSP22> {
    const tokenData = await getDeploymentData('psp22')

    const tokenDeploy = await deployContract(api, account, tokenData.abi, tokenData.wasm, 'new', [
      supply,
      name,
      symbol,
      decimals
    ])

    const token = new PSP22(
      api,
      Network.Local,
      storageDepositLimit,
      refTime,
      proofSize,
      tokenData.abi,
      tokenDeploy.address
    )
    return token
  }

  async deploy(
    account: IKeyringPair,
    abi: any,
    wasm: Buffer,
    supply: bigint,
    name: string,
    symbol: string,
    decimals: bigint
  ): Promise<DeployedContract> {
    return deployContract(this.api, account, abi, wasm, 'new', [supply, name, symbol, decimals])
  }

  async load(deploymentAddress: string, abi: any): Promise<void> {
    this.contract = new ContractPromise(this.api, abi, deploymentAddress)
  }

  async mint(account: IKeyringPair, value: number, block: boolean = true): Promise<string> {
    return sendTx(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      0,
      account,
      PSP22Tx.Mint,
      [value],
      this.waitForFinalization,
      block
    )
  }

  async transfer(
    account: IKeyringPair,
    to: string,
    value: number,
    data: Bytes,
    block: boolean = true
  ): Promise<string> {
    return sendTx(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      0,
      account,
      PSP22Tx.Transfer,
      [to, value, data],
      this.waitForFinalization,
      block
    )
  }

  async approve(
    account: IKeyringPair,
    spender: string,
    value: bigint,
    block: boolean = true
  ): Promise<string> {
    if (!this.contract) {
      console.log('contract not loaded')
    }
    return sendTx(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      0,
      account,
      PSP22Tx.Approve,
      [spender, value],
      this.waitForFinalization,
      block
    )
  }

  async tokenName(account: IKeyringPair): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.TokenName,
      []
    )
  }

  async tokenSymbol(account: IKeyringPair): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.TokenSymbol,
      []
    )
  }

  async tokenDecimals(account: IKeyringPair): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.TokenDecimals,
      []
    )
  }

  async balanceOf(account: IKeyringPair, owner: string): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.BalanceOf,
      [owner]
    )
  }

  async totalSupply(account: IKeyringPair): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.TotalSupply,
      []
    )
  }

  async allowance(account: IKeyringPair, owner: string, spender: string): Promise<unknown> {
    return sendQuery(
      this.contract,
      this.gasLimit,
      this.storageDepositLimit,
      account,
      PSP22Query.Allowance,
      [owner, spender]
    )
  }
}
