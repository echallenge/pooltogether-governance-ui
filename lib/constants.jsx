export const SUPPORTED_CHAIN_IDS = [1, 4, 31337, 1234]

export const SECONDS_PER_BLOCK = 13

export const DEFAULT_TOKEN_PRECISION = 18

export const MAINNET_POLLING_INTERVAL = process.env.NEXT_JS_DOMAIN_NAME ? 22 * 1000 : 16 * 1000

export const MAX_SAFE_INTEGER = 9007199254740991

// cookie names
export const TRANSACTIONS_KEY = 'txs'
export const SHOW_MANAGE_LINKS = 'showManageLinks'
export const MAGIC_EMAIL = 'magicEmail'
export const SELECTED_WALLET_COOKIE_KEY = 'selectedWallet'

// strings
export const CONFETTI_DURATION_MS = 12000

export const DEFAULT_INPUT_CLASSES =
  'w-full text-inverse inline-flex items-center justify-between trans'

const domain = process.env.NEXT_JS_DOMAIN_NAME && `.${process.env.NEXT_JS_DOMAIN_NAME}`
export const COOKIE_OPTIONS = {
  sameSite: 'strict',
  secure: process.env.NEXT_JS_DOMAIN_NAME === 'pooltogether.com',
  domain
}

export const CONTRACT_ADDRESSES = {
  1: {
    GovernorAlpha: '0xB3a87172F555ae2a2AB79Be60B336D2F7D0187f0',
    GovernanceToken: '0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e'
  },
  3: {},
  4: {
    GovernorAlpha: '0x9B63243CD27102fbEc9FAf67CA1a858dcC16Ee01',
    GovernanceToken: '0xc4E90a8Dc6CaAb329f08ED3C8abc6b197Cf0F40A',
    MerkleDistributor: '0x5fcD21897939B09eAF9c81eF8C2C4CD64FA75558'
  }
}

export const QUERY_KEYS = {
  accountGovernanceDataQuery: 'accountGovernanceDataQuery',
  governorAlphaDataQuery: 'governorAlphaDataQuery',
  proposalVotesQuery: 'proposalVotesQuery',
  delegateDataQuery: 'delegateDataQuery',
  delegatesQuery: 'delegatesQuery',
  tokenHolderQuery: 'tokenHolderQuery',
  twitterProfileQuery: 'twitterProfileQuery',
  voteDataQuery: 'voteDataQuery',
  proposalsQuery: 'proposalsQuery',
  tokenFaucetAddresses: 'tokenFaucetAddresses',
  usePools: 'usePools',
  prizePoolContractAddresses: 'prizePoolContractAddresses',
  etherscanContractAbi: 'etherscanContractAbi'
}

export const ETHERSCAN_API_KEY = process.env.NEXT_JS_ETHERSCAN_API_KEY

export const POOLTOGETHER_CURRENT_GOVERNANCE_GRAPH_URIS = {
  1: process.env.NEXT_JS_GOVERNANCE_SUBGRAPH_URI_MAINNET,
  4: process.env.NEXT_JS_GOVERNANCE_SUBGRAPH_URI_RINKEBY
}

export const POOLTOGETHER_SUBGRAPH_URIS = {
  1: process.env.NEXT_JS_SUBGRAPH_URI_MAINNET,
  4: process.env.NEXT_JS_SUBGRAPH_URI_RINKEBY
}

export const PROPOSAL_STATUS = {
  pending: 'pending',
  active: 'active',
  cancelled: 'cancelled',
  defeated: 'defeated',
  succeeded: 'succeeded',
  queued: 'queued',
  expired: 'expired',
  executed: 'executed'
}

// Note: Order matches contracts
export const PROPOSAL_STATES = [
  PROPOSAL_STATUS.pending,
  PROPOSAL_STATUS.active,
  PROPOSAL_STATUS.cancelled,
  PROPOSAL_STATUS.defeated,
  PROPOSAL_STATUS.succeeded,
  PROPOSAL_STATUS.queued,
  PROPOSAL_STATUS.expired,
  PROPOSAL_STATUS.executed
]

export const VOTERS_PER_PAGE = 5
export const DELEGATES_PER_PAGE = 15
