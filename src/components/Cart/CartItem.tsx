import React from 'react';
import styles from './Cart.module.scss';
import { Coin } from '../../@types/types';
import { MdClose } from 'react-icons/md';

type Props = {
    coin: Coin,
    removeItem: (id: string) => void
}

const CartItem = ({coin, removeItem}: Props) => {
    
    return (
        <div className={styles.item}>
            <p className={styles.name}>{coin.name}</p>
            <p className={styles.cell}>{Number(coin.priceUsd).toFixed(2)} $</p>
            <p className={styles.cell}>{coin.quantity}</p>
            <p className={styles.cell}>{(+coin.priceUsd * coin.quantity).toFixed(2)} $</p>
            <p className={styles.cell}>
            <MdClose 
                onClick={() => removeItem(coin.id)}
                className={styles.close}
            />
            </p>
        </div>
    )
}

export default CartItem;
