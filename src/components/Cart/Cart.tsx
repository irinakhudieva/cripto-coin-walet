import { observer } from 'mobx-react-lite'
import React from 'react';
import styles from './Cart.module.scss';
import cartStore from '../../store/cartStore';
import CartItem from './CartItem';

const Cart: React.FC = observer(() => {
    const {cart, removeItem, totalPrice} = cartStore;

    return (
        <div className={styles.cart}>
            <h1>Портфель</h1>
            {cart.length ? (
                <>
                    <div className={styles.item}>
                        <h5 className={styles.name}>Название</h5>
                        <h5 className={styles.cell}>Цена</h5>
                        <h5 className={styles.cell}>Кол-во</h5>
                        <h5 className={styles.cell}>Итого</h5>
                        <h5 className={styles.cell}>{' '}</h5>
                    </div>
                    {cart.map(item => 
                        <CartItem key={item.id} coin={item} removeItem={removeItem} />
                    )}
                    <p>Итого: <b>{totalPrice.toFixed(2)} $</b></p>
                </>
            ) : (
                <p>Ваш портфель пуст.</p>
            )}
        </div>
    )
})

export default Cart;
