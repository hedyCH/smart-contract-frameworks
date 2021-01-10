/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface AggregatorInterfaceInterface extends Interface {
  functions: {
    getAnswer: TypedFunctionDescription<{
      encode([roundId]: [BigNumberish]): string;
    }>;

    getTimestamp: TypedFunctionDescription<{
      encode([roundId]: [BigNumberish]): string;
    }>;

    latestAnswer: TypedFunctionDescription<{ encode([]: []): string }>;

    latestRound: TypedFunctionDescription<{ encode([]: []): string }>;

    latestTimestamp: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, updatedAt]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;

    NewRound: TypedEventDescription<{
      encodeTopics([roundId, startedBy, startedAt]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class AggregatorInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): AggregatorInterface;
  attach(addressOrName: string): AggregatorInterface;
  deployed(): Promise<AggregatorInterface>;

  on(event: EventFilter | string, listener: Listener): AggregatorInterface;
  once(event: EventFilter | string, listener: Listener): AggregatorInterface;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): AggregatorInterface;
  removeAllListeners(eventName: EventFilter | string): AggregatorInterface;
  removeListener(eventName: any, listener: Listener): AggregatorInterface;

  interface: AggregatorInterfaceInterface;

  functions: {
    getAnswer(roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;
  };

  getAnswer(roundId: BigNumberish): Promise<BigNumber>;

  getTimestamp(roundId: BigNumberish): Promise<BigNumber>;

  latestAnswer(): Promise<BigNumber>;

  latestRound(): Promise<BigNumber>;

  latestTimestamp(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      updatedAt: null
    ): EventFilter;

    NewRound(
      roundId: BigNumberish | null,
      startedBy: string | null,
      startedAt: null
    ): EventFilter;
  };

  estimate: {
    getAnswer(roundId: BigNumberish): Promise<BigNumber>;

    getTimestamp(roundId: BigNumberish): Promise<BigNumber>;

    latestAnswer(): Promise<BigNumber>;

    latestRound(): Promise<BigNumber>;

    latestTimestamp(): Promise<BigNumber>;
  };
}