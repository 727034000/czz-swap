import Web3 from 'web3'
import { ABI_ETH, ABI_HECO, ABI_BSC } from '../abi'

   // [{
    //   chainId: '0x64',
    //   rpcUrls: ['https://dai.poa.network'],
    //   chainName: 'xDAI Chain',
    //   nativeCurrency: { name: 'xDAI', decimals: 18, symbol: 'xDAI' },
    //   blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
    // }]

const networks = [
  {
    networkName:'ETH Ropsten',
    networkType:'ETH',
    symbolName: 'ETH',
    tokenValue: '',
    abi:ABI_ETH,
    symbol: null,
    currency: null,
    networkId: "3",
    chainId: '0x3',
    ntype:1,
    decimals:18,
    swaprouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    factoryAddress:   "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    initCodeHash: "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
    router: "0x6aE86268312A815831A5cfe35187d1f3D2B6dE76",
    weth: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    czz: '0x0041a3a63a5844f878b1c08f9d3c28e17f3ce14a',
    explorerUrl: 'https://ropsten.etherscan.io/',
    rpcUrls:'https://ropsten.infura.io/v3/9830cca0dde944d3a0e1100408fed9e4',
    provider: new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/9830cca0dde944d3a0e1100408fed9e4"),
    image:'https://cryptologos.cc/logos/ethereum-eth-logo.svg'
  },
  {
    networkName: 'HECO Test',
    networkType:'HECO',
    symbolName: 'HT',
    tokenValue: '',
    abi:ABI_HECO,
    networkId:"256",
    chainId: '0x100',
    ntype:2,
    decimals:18,
    symbol: null,
    currency: null,
    swaprouter: "0x539A9Fbb81D1D2DC805c698B55C8DF81cbA6b350",
    factoryAddress:   "0x0419082bb45f47Fe5c530Ea489e16478819910F3",
    initCodeHash: "0x06d32be9fe9b1c75a1ce7e2b362c735bcb731596b9330b99412fde52d753e3f0",
    router: "0x64Dd2D13dA5469a50D747B9CE35a5EcB4865d054",
    weth: '0xA9e7417c676F70E5a13c919e78FB1097166568C5',
    czz:'0x5E8fb243AD8B9c10B2211a8C6d0D21231A3f9039',
    explorerUrl:'https://testnet.hecoinfo.com/',
    rpcUrls:'https://http-testnet.hecochain.com/',
    provider: new Web3.providers.HttpProvider("https://http-testnet.hecochain.com/"),
    image:'https://cryptologos.cc/logos/huobi-token-ht-logo.svg'
  },
  {
    networkName: 'BSC Test',
    networkType:'BSC',
    symbolName: 'BNB',
    tokenValue: '',
    abi:ABI_BSC,
    networkId:"97",
    chainId:'0x61',
    ntype: 3,
    decimals:18,
    symbol: null,
    currency: null,
    swaprouter: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
    factoryAddress:   "0x6725F303b657a9451d8BA641348b6761A6CC7a17",
    initCodeHash: "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66",
    router: "0xb39E84c6AD0574af30fb5f0185ad2d4f2DBa4262",
    weth: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    czz:'0x507B8283aD724aA06dF09Df3d1D6eb3816EE51d5',
    explorerUrl:'https://testnet.bscscan.com/',
    rpcUrls:'https://data-seed-prebsc-2-s1.binance.org:8545/',
    provider: new Web3.providers.HttpProvider("https://data-seed-prebsc-2-s1.binance.org:8545/"),
    image:'https://cryptologos.cc/logos/binance-coin-bnb-logo.svg'
  }
]
export default networks
