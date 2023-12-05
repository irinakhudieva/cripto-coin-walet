import { makeAutoObservable, runInAction} from "mobx";
import { getCoins, getCoinsById } from "../api/getCoins";
import { Coin, Coins } from "../@types/types";

class CoinsStore {
    coins?:{ data : Coin[]} = undefined;
    isLoading = false;
    coin?:{ data : Coin}  = undefined;
    isLoadingSingleCoin = false;
    searchValue = '';
    popularCoin?: Coin[] = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    getCoinsAction = async (searchValue: string) => {
        this.isLoading = true;
        const data = await getCoins(searchValue);

        runInAction(() => {
            this.coins = data;   
            this.isLoading = false;
        })
        
    }

    getCoinsByIdActoin = async (id: string) => {
        this.isLoadingSingleCoin = true;
        const data = await getCoinsById(id);

        runInAction(() => {
            this.coin = data;
            this.isLoadingSingleCoin = false;
        })   
    }

    setSearch = (value: string) => {
        this.searchValue = value !== undefined ? value : '';
    }

    setPopularCoin = (coins: Coins) => {
        this.popularCoin = coins?.data.filter((item: Coin) => Number(item.rank) <= 3); 
    }

}

export default new CoinsStore();