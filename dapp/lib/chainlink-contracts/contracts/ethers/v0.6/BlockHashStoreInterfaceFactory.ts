/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { BlockHashStoreInterface } from "./BlockHashStoreInterface";

export class BlockHashStoreInterfaceFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlockHashStoreInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BlockHashStoreInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256"
      }
    ],
    name: "getBlockhash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];