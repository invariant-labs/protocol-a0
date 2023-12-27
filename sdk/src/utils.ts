import { ApiPromise, Keyring, WsProvider } from "@polkadot/api";
import { IKeyringPair } from "@polkadot/types/types/interfaces";
import { getSubstrateChain } from "@scio-labs/use-inkathon/chains";
import {
  getBalance,
  initPolkadotJs as initApi,
} from "@scio-labs/use-inkathon/helpers";
import { readFile } from "fs/promises";

export const initPolkadotJs = async (
  selectedChain: string
): Promise<{
  api: ApiPromise;
  account: IKeyringPair;
}> => {
  if (selectedChain === "local") {
    console.log("Using local chain");
    const wsProvider = new WsProvider(process.env.LOCAL);
    const api = await ApiPromise.create({ provider: wsProvider });
    await api.isReady;
    const keyring = new Keyring({ type: "sr25519" });
    const account = await getEnvAccount(keyring);
    await printBalance(api, account)
    return { api, account };
  } else if (selectedChain === "testnet") {
    console.log("Using testnet");
    const chainId = process.env.CHAIN;
    const chain = getSubstrateChain(chainId);

    if (!chain) {
      throw new Error("chain not found");
    }

    const { api } = await initApi(chain, { noInitWarn: true });
    const keyring = new Keyring({ type: "sr25519" });
    const account = await getEnvAccount(keyring);
    await printBalance(api, account)
    return { api, account };
  } else {
    throw new Error("Invalid network");
  }
};

const getEnvAccount = async (keyring: Keyring): Promise<IKeyringPair> => {
    const accountUri = process.env.ACCOUNT_URI;

    if (!accountUri) {
      throw new Error("invalid account uri");
    }
    return keyring.addFromUri(accountUri);
}

const printBalance = async (api: ApiPromise, account: IKeyringPair) => {
  const network = (await api.rpc.system.chain())?.toString() || "";
  const version = (await api.rpc.system.version())?.toString() || "";
  const balance = await getBalance(api, account.address);

  console.log(`network: ${network} (${version})`);
  console.log(`account: ${account.address} (${balance.balanceFormatted})\n`);
}

export const getDeploymentData = async () => {
  try {
    const abi = JSON.parse(await readFile("./metadata/contract.json", "utf-8"));
    const wasm = await readFile("./metadata/contract.wasm");

    return { abi, wasm };
  } catch (error) {
    throw new Error("contract.json or contract.wasm not found");
  }
};

export const sleep = async (ms: number) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
