export enum InvariantQuery {
  ProtocolFee = 'invariantTrait::getProtocolFee',
  GetFeeTiers = 'invariantTrait::getFeeTiers',
  FeeTierExist = 'invariantTrait::feeTierExist',
  GetPool = 'invariantTrait::getPool',
  GetPools = 'invariantTrait::getPools',
  GetTick = 'invariantTrait::getTick',
  IsTickInitialized = 'invariantTrait::isTickInitialized',
  GetPosition = 'invariantTrait::getPosition',
  GetAllPositions = 'invariantTrait::getAllPositions',
  Quote = 'invariantTrait::quote',
  QuoteRoute = 'invariantTrait::quoteRoute'
}

export enum InvariantTx {
  ChangeProtocolFee = 'invariantTrait::changeProtocolFee',
  CreatePool = 'invariantTrait::createPool',
  CreatePosition = 'invariantTrait::createPosition',
  TransferPosition = 'invariantTrait::transferPosition',
  RemovePosition = 'invariantTrait::removePosition',
  ClaimFee = 'invariantTrait::claimFee',
  AddFeeTier = 'invariantTrait::addFeeTier',
  RemoveFeeTier = 'invariantTrait::removeFeeTier',
  ChangeFeeReceiver = 'invariantTrait::changeFeeReceiver',
  WithdrawProtocolFee = 'invariantTrait::withdrawProtocolFee',
  Swap = 'invariantTrait::swap',
  SwapRoute = 'invariantTrait::swapRoute'
}

export enum PSP22Query {
  TokenName = 'psp22Metadata::tokenName',
  TokenSymbol = 'psp22Metadata::tokenSymbol',
  TokenDecimals = 'psp22Metadata::tokenDecimals',
  BalanceOf = 'psp22::balanceOf',
  TotalSupply = 'psp22::totalSupply',
  Allowance = 'psp22::allowance'
}

export enum PSP22Tx {
  Mint = 'psp22Mintable::mint',
  Transfer = 'psp22::transfer',
  Approve = 'psp22::approve'
}

export enum WrappedAZEROTx {
  Deposit = 'wrappedAZERO::deposit',
  Withdraw = 'wrappedAZERO::withdraw'
}

export type Tx = InvariantTx | PSP22Tx | WrappedAZEROTx

export type Query = InvariantQuery | PSP22Query
