
const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

// List of official tokens list


export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CMC,
  COINGECKO,
 ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
