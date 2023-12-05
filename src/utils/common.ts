import { Coin } from "../@types/types";

export const formatCompactNum = (num: string) => {
    const number = Number(num);
    const formatter = Intl.NumberFormat('ru', {
        notation: 'compact',
    });
    return formatter.format(number);
}

export const sumBy = (cart: Coin[]) => cart.reduce((sum, obj) => Number(obj.priceUsd) * obj.quantity + sum, 0);