import axios from "axios";
import { Coin } from "../@types/types";

const key = process.env.REACT_APP_API_KEY


export const getCoins = async (searchValue: string) => {
    try {
        const res = await axios.get<{ data : Coin[]}>(`https://api.coincap.io/v2/assets?search=${searchValue}`, {
            headers: {
                'Authorization': 'Bearer ' + key
            }
        });
        return res.data;
    } catch(e) {
        console.log('ERROR', e)
    }
}

export const getCoinsById = async (id: string) => {
    try {
        const res = await axios.get<{ data : Coin}>(`https://api.coincap.io/v2/assets/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + key
            }
        });
        return res.data;
    } catch(e) {
        console.log('ERROR', e)
    }
}

export const getPopularCoins = async () => {
    try {
        const res = await axios.get<{ data : Coin[]}>('https://api.coincap.io/v2/assets', {
            headers: {
                'Authorization': 'Bearer ' + key
            }
        });
        return res.data;
    } catch(e) {
        console.log('ERROR', e)
    }
}
