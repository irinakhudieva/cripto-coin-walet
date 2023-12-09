export interface Coin extends CoinDetails {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    vwap24Hr: string,
    changePercent24Hr: string,
    marketCapUsd: string,
    priceUsd: string,
    quantity: number   
}

export interface CoinDetails {
    explorer: string,
    volumeUsd24Hr: string,
    supply: string
}
   
