import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './Header.module.scss';
import coinsStore from '../../store/coinsStore';

const PopularCoins: React.FC = () => {

    const {popularCoin, getPopularCoin} = coinsStore;

    React.useEffect(() => {
        getPopularCoin()
    }, [])

    return (
        <div className={styles.popular}>
            <p className={styles.title}>Популярные криптовалюты:</p>
            <div className={styles.popularCoins}>
                {popularCoin?.map(item => {
                    return (
                        <div key={item.id}>
                            <p><b>{item.name}</b></p>
                            <p>{Number(item.priceUsd).toFixed(2)} $</p>
                        </div>
                    )     
                    }
                )}
            </div>
        </div>
    )
}

export default observer(PopularCoins);
