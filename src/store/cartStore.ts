import { makeAutoObservable} from "mobx";
import { Coin } from "../@types/types";
import { sumBy } from "../utils/common";
import { makePersistable } from "mobx-persist-store";

class CartStore {
    cart: Coin[] = [];
    totalPrice = 0;

    constructor() {
        makeAutoObservable(this);

        makePersistable(this, { name: 'CartStore', properties: ['cart', 'totalPrice'], storage: window.localStorage });
    }

    addToCart = (coin: Coin, quantity: number) => {
        const findItem = this.cart.find(item => item.id === coin.id);

        if(findItem) {
            findItem.quantity += quantity;
        } else {
          this.cart = [...this.cart, {...coin, quantity}];  
        }

        this.totalPrice = sumBy(this.cart);
    }

    removeItem = (id: string) => {
        this.cart = this.cart.filter(item => item.id !== id);

        this.totalPrice = sumBy(this.cart);
    }

}

export default new CartStore(); 