import React, { useState } from 'react';
import styles from './FormBuy.module.scss';
import { Coin } from '../../@types/types';
import cartStore from '../../store/cartStore';

type Props = {
    coin?: Coin
}

const FormBuy: React.FC<Props> = ({coin}) => {
    const [quantity, setQuantity] = useState<number>();
    const [showTotal, setShowTotal] = useState<boolean>(false);

    const {addToCart} = cartStore;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(+e.target.value)
    }

    const buyCoin = () => {
        addToCart(coin!, quantity!)
        setShowTotal(true);
    }

    return (
        <div className={styles.form}>
            <h3>Введите количество:</h3>
            <input 
                type='number'
                value={quantity}
                onChange={handleChange} 
                min='0'
            />
            <button onClick={buyCoin}>Купить</button>
            {showTotal && (
                <p>Вы купили {coin!.name} на сумму {(Number(+coin!.priceUsd) * quantity!).toFixed(2)} $.</p>
            )}
        </div>
    )
}

export default FormBuy;
