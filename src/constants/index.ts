import { ArticleItemType, CointItemType, FeatureItemType, StepsType } from "../types"


export const navTitles=[
    'Home',
    'Businesses',
    'Trade',
    'Market',
    'Learn'
]

export const coinsData :CointItemType[]=[
    {
        id:1,
        caption:'bitcoin',
        lastPrice:'$56,623.54',
        logo:'/images/coin-ic-1.svg',
        change:1.41,
    marketState:'/images/btc-chart.svg',
    name:'BTC'
    },
    {
        id:2,
        caption:'ethereum',
        lastPrice:'$4,267.90',
        logo:'/images/coin-ic-2.svg',
        change:2.22,
    marketState:'/images/eth-chart.svg',
    name:'ETH'
    },
    {
        id:3,
        caption:'binance',
        lastPrice:'$587.74',
        logo:'/images/coin-ic-3.svg',
        change:0.82,
    marketState:'/images/bnb-chart.svg',
    name:'BNB'
    },
    {
        id:4,
        caption:'tether',
        lastPrice:'$0.9998',
        logo:'/images/coin-ic-4.svg',
        change:0.03,
    marketState:'/images/usdt-chart.svg',
    name:'USDT'
    },
    {
        id:5,
        caption:'solana',
        lastPrice:'$213.67',
        logo:'/images/coin-ic-5.svg',
        change:-0.54,
    marketState:'/images/sol-chart.svg',
    name:'SOL'
    },
    {
        id:6,
        caption:'XRP',
        lastPrice:'$01.04',
        logo:'/images/coin-ic-6.svg',
        change:-0.44,
    marketState:'/images/xrp-chart.svg',
    name:'XRP'
    },
    {
        id:7,
        caption:'USD coin',
        lastPrice:'$1.00',
        logo:'/images/coin-ic-7.svg',
        change:-0.03,
    marketState:'/images/usdc-chart.svg',
    name:'USDC'
    },
]

export const featuresData:FeatureItemType[]=[
    {
        id:1,
        title:'Manage Portfolio',
        icon:'feature-image-1',
        link:'/',
        text:'Buy and sell popular digital currencies, keep track of them in the one place.'
    },
    {
        id:2,
        title:'Protected Securely',
        icon:'feature-image-2',
        link:'/',
        text:'All cash balances are covered by FDIC insurance, up to a maximum of $250,000.'
    },
    {
        id:3,
        title:'Cryptocurrency Variety',
        icon:'feature-image-3',
        link:'/',
        text:'Supports a variety of the most popular digital currencies and always uptodate.'
    },
    {
        id:4,
        title:'Learn Best Practice',
        icon:'feature-image-4',
        link:'/',
        text:'Easy to know how to cryptocurrency works and friendly to newbie.'
    },
]

export const categories=[
    'Popular',
    'Metaverse',
    'Entertainment',
    'Energy',
    'Gaming',
    'Music',
    'See All 12+'
]
export const setpsData:StepsType[]=[
    {
        id:1,
        icon:'get-started-icon-1',
        text:'Your account and personal identity are guaranteed safe.',
        title:'Create Your Account'
    },
    {
        id:2,
        icon:'get-started-icon-2',
        text:'Connect the bank account to start transactions.',
        title:'Connect Bank Account'
    },
    {
        id:3,
        icon:'get-started-icon-3',
        text:'Buy and sell popular currencies and keep track of them.',
        title:'Start Build Portfolio'
    },
]

export const articles:ArticleItemType[]=[
    {
        id:1,
        title:'What is cryptocurrency? all you need to know',
        text:'Cryptocurrencies are basically digital assets. It is secured by cryptography.. ',
        caption:'CRYPTO BASIC',
        thumbnail:'Thumbnail-1'
    },
    {
        id:2,
        title:'Can crypto really replace your bank account?',
        text:'From direct deposit to earning yield, key ways crypto can help you take control..',
        caption:'CRYPTO BASIC',
        thumbnail:'Thumbnail-2'
    },
    {
        id:3,
        title:'How to setup crypto wallet in your account',
        text:'A crypto wallet is a place where you can securely keep your crypto..',
        caption:'TIPS & TRICKS',
        thumbnail:'Thumbnail-3'
    },
    {
        id:4,
        title:'The fact about bitcoin must you know',
        text:"Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure..",
        caption:'CRYPTO BASIC',
        thumbnail:'Thumbnail-4'
    },
    {
        id:5,
        title:'When is the best time to invest in crypto?',
        text:'When prices are fluctuating, how do you know when to buy?',
        caption:'TIPS & TRICKS',
        thumbnail:'Thumbnail-5'
    },
    {
        id:6,
        title:'What Is DeFi? Inside the Wild West of Cryptocurrency.',
        text:'Welcome to decentralized finance or DeFi, the new frontier of crypto that will..',
        caption:'TIPS & TRICKS',
        thumbnail:'Thumbnail-6'
    },
]

export const social=[
    'hugeicons:instagram',
    'ic:baseline-facebook',
    'mdi:twitter',
    'mdi:youtube'
]

export const footerNavs=[
    {
        title:'about us',
        navs:[
            'About','Careers','Blog','Legal & privacy'
        ]
    },
    {
        title:'Services',
        navs:[
            'Aplications','Buy Crypto','Affilliate','Institutional Services'
        ]
    },
    {
        title:'Learn',
        navs:[
            'What is Cryptocurency?','Crypto Basic','Tips and Tutorials','Market Update'
        ]
    }
]