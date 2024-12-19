// 获取过去 24 小时交易数据
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// 配置 GraphQL 客户端
const client = new ApolloClient({
  uri: 'https://indexer.d9network.com:4350/graphql',
  cache: new InMemoryCache(),
});

// GraphQL 查询语句
const TRADE_24H_QUERY = gql`
  query Trade24H {
    trade24H {
      percentageChange24H
      tradeCount24H
      tradingVolume24H
    }
  }
`;

/**
 * 获取过去 24 小时的交易数据
 * @returns {Promise<{ percentageChange24H: string | null, tradeCount24H: number, tradingVolume24H: string }>} 交易数据
 */
export async function getTrade24H() {
  try {
    const response = await client.query({ query: TRADE_24H_QUERY });

    if (response?.data?.trade24H?.length > 0) {
      const tradeData = response.data.trade24H[0];
      console.log('过去 24 小时交易数据:', tradeData);
      return tradeData;
    } else {
      console.warn('未获取到交易数据。');
      return null;
    }
  } catch (error) {
    console.error('获取交易数据时发生错误:', error);
    throw error;
  }
}





// GraphQL 查询语句 (获取兑换交易数据列表)
const MARKET_CONVERSIONS_QUERY = gql`
  query MarketConversions($limit: Int!) {
    marketConversions(orderBy: blockNumber_DESC, limit: $limit) {
      id
      lost
      got
      timestamp
      toToken
      fromToken
      fee
      extrinsicHash
      blockNumber
      blockHash
      who {
        id
      }
    }
  }
`;


export async function getMarketConversions(limit = 20) {
  try {
    const response = await client.query({
      query: MARKET_CONVERSIONS_QUERY,
      variables: { limit },
    });

    const conversions = response?.data?.marketConversions || [];

    const formattedConversions = conversions.map(conversion => ({
      ...conversion,
      timeago: new Date(conversion.timestamp).toLocaleString(),
      volume: conversion.toToken === 'D9' ? conversion.lost : conversion.got,
      amount: conversion.toToken === 'D9' ? conversion.got : conversion.lost,
    }));

    console.log('获取的兑换交易数据列表:', formattedConversions);
    return formattedConversions;
  } catch (error) {
    console.error('获取兑换交易数据时发生错误:', error);
    throw error;
  }
}

// GraphQL 查询语句 (获取转账记录)
const TRANSFERS_QUERY = gql`
  query Transfers($fromId: String!, $toId: String!, $token: Token!) {
  transfers(
    limit: 10
    orderBy: timestamp_DESC
    where: {token_eq: $token, AND: {to: {id_eq: $toId}, OR: {from: {id_eq: $fromId}}}}
  ) {
    id
    blockNumber
    timestamp
    extrinsicHash
    fee
    token
    amount
    to {
      id
      __typename
    }
    from {
      id
      __typename
    }
    __typename
  }
}
`;

export function getTransfers(address, token) {
    return new Promise((resolve, reject) => {
      client
        .query({
          query: TRANSFERS_QUERY,
          variables: {
            fromId: address,
            toId: address,
            token // 直接传入正确的枚举值，确保是 'D9' 或 'USDT'
          },
        })
        .then((response) => {
          const transfers = response?.data?.transfers || [];
          const formattedTransfers = transfers.map((transfer) => ({
            id: transfer.id,
            blockNumber: transfer.blockNumber,
            timestamp: new Date(transfer.timestamp).toLocaleString(),
            amount: transfer.amount,
            fee: transfer.fee,
            token: transfer.token,
            extrinsicHash: transfer.extrinsicHash,
            from: transfer.from.id,
            to: transfer.to.id,
            isIncoming: transfer.to.id === address,
            isOutgoing: transfer.from.id === address,
          }));
  
          console.log('获取的转账记录:', formattedTransfers);
          resolve(formattedTransfers);
        })
        .catch((error) => {
          console.error('获取转账记录时发生错误:', error.message);
          reject(error);
        });
    });
  }
  