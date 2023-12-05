import React from 'react';
import styles from './Header.module.scss';
import { IoBriefcaseOutline } from 'react-icons/io5';
import cartStore from '../../store/cartStore';
import { observer } from 'mobx-react-lite';

type Props = {
    setModal: (value: boolean) => void;
}

const Total = ({setModal}: Props) => {
    const {totalPrice} = cartStore;

    return (
        <div className={styles.total}>
                <IoBriefcaseOutline style={{color: '#299090', fontSize: 45}}/>
                <div className={styles.totalItem} onClick={() => setModal(true)}>
                    <p>Итого:</p>
                    <h5>{totalPrice.toFixed(2)} USD</h5>
                </div>
            </div>
    )
}

export default observer(Total);
