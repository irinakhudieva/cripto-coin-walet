import { makeAutoObservable, runInAction} from "mobx";
import { getCoins, getCoinsById, getPopularCoins } from "../api/getCoins";
import { Coin } from "../@types/types";

class CoinsStore {
    coins?: Coin[]  = [];
    isLoading = false;
    coin?: Coin  = undefined;
    isLoadingSingleCoin = false;
    searchValue = '';
    popularCoin?: Coin[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getCoinsAction = async (searchValue: string) => {
        this.isLoading = true;
        const data = await getCoins(searchValue);

        runInAction(() => {
            this.coins = data?.data;   
            this.isLoading = false;
        })
        
    }

    getCoinsByIdActoin = async (id: string) => {
        this.isLoadingSingleCoin = true;
        const data = await getCoinsById(id);

        runInAction(() => {
            this.coin = data?.data;
            this.isLoadingSingleCoin = false;
        })   
    }

    setSearch = (value: string) => {
        this.searchValue = value !== undefined ? value : '';
    }

    getPopularCoin = async () => {
        const data = await getPopularCoins();

        runInAction(() => {
           this.popularCoin = data!.data.filter((item: Coin) => Number(item.rank) <= 3);   
        })
    }

}

export default new CoinsStore();