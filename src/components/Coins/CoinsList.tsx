import React, { useEffect, useState } from 'react';
import styles from './Coins.module.scss';
import { observer } from 'mobx-react-lite';
import coinsStore from '../../store/coinsStore';
import CoinsItem from './CoinsItem';
import { Coin } from '../../@types/types';
import Pagination from '../Pagination.tsx/Pagination';
import Loader from '../Loader/Loader';


const CoinsList: React.FC = observer(() => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const {coins, getCoinsAction, isLoading, searchValue } = coinsStore;

    useEffect(() => {
        getCoinsAction(searchValue)
    }, [searchValue]);

    if(isLoading) return <Loader />

    const lastReposIndex = currentPage * perPage;
    const firstReposIndex = lastReposIndex - perPage;
    const currentCoins = coins?.slice(firstReposIndex,lastReposIndex);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h5>№</h5>
                <h5 className={styles.name}>Name</h5>
                <h5 className={styles.cell}>VWAP(24Hr)</h5>
                <h5 className={styles.cell}>Change(24Hr)</h5>
                <h5 className={styles.cell}>Market Cap</h5>
                <h5 className={styles.cell}>Price</h5>
                <h5 className={styles.cell}>Buy</h5>
            </div> 
            {currentCoins?.map((coin: Coin, i) => 
                <CoinsItem key={coin.id} coin={coin} index={i} />
            )}
            <Pagination 
                totalCoins={coins?.length} 
                perPage={perPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    )
});

export default CoinsList;
