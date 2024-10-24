import { Token } from '../types'
import tokens from './tokens'
import { ChainId } from '@ape.swap/sdk'

const zapInputTokens: Partial<Record<ChainId, Record<string, Token>>> = {
  [ChainId.BSC]: {
    wbnb: tokens.wbnb,
    eth: tokens.eth,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
    dai: tokens.dai,
    wmatic: tokens.wmatic,
    avax: tokens.avax,
    ada: tokens.ada,
    btc: tokens.btc,
  },
  [ChainId.MATIC]: {
    wmatic: tokens.wmatic,
    dai: tokens.dai,
    eth: tokens.eth,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
  },
  [ChainId.TLOS]: {
    tlos: tokens.tlos,
    eth: tokens.eth,
    usdc: tokens.usdc,
    usdt: tokens.usdt,
    btc: tokens.btc,
  },
  [ChainId.ARBITRUM]: {
    eth: tokens.eth,
    usdt: tokens.usdt,
    usdc: tokens.usdc,
  },
  [ChainId.LINEA]: {
    usdc: tokens.usdc,
    usdt: tokens.usdt,
    eth: tokens.eth,
    btc: tokens.btc,
    dai: tokens.dai,
    matic: tokens.wmatic,
  },
}

export default zapInputTokens
