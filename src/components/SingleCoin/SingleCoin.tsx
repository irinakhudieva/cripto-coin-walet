import React, { useEffect } from 'react';
import styles from './SingleCoin.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import coinsStore from '../../store/coinsStore';
import { formatCompactNum } from '../../utils/common';
import FormBuy from '../FormBuy/FormBuy';
import Loader from '../Loader/Loader';
import { observer } from 'mobx-react-lite';

const SingleCoin: React.FC = observer(() => {
    const {id} = useParams();

    const {coin, getCoinsByIdActoin, isLoadingSingleCoin} = coinsStore;

    useEffect(() => {
      getCoinsByIdActoin(id!);
    }, [id, getCoinsByIdActoin]);


    if(isLoadingSingleCoin) return <Loader />

    return (
        <div className={styles.wrapper}>
            <div className={styles.nameCoin}>
                <p><span>{coin?.symbol}</span>{coin?.name}</p>
            </div>
            <FormBuy coin={coin} />
            <div className={styles.singleCoin}>
                <div className={styles.item}>
                    <h5 className={styles.cell}>Информация</h5>
                    <h5 className={styles.cell}>Данные о валюте</h5>
                </div> 
                <div className={styles.item}>
                    <p>Цена</p> 
                    <p>{Number(coin?.priceUsd).toFixed(2)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Доступное предложение для торговли</p> 
                    <p>{formatCompactNum(coin?.marketCapUsd!)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Общее кол-во выпущенных активов</p> 
                    <p>{formatCompactNum(coin?.supply!)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Объем торгов за последние 24 часа</p> 
                    <p>{formatCompactNum(coin?.volumeUsd24Hr!)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Средняя цена по объему за последние 24 часа</p> 
                    <p>{Number(coin?.vwap24Hr).toFixed(2)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Проценное соотношение цены за последние 24 часа</p> 
                    <p style={{color: Number(coin?.changePercent24Hr) > 0 ? 'green' : 'red'}}>{Number(coin?.changePercent24Hr).toFixed(2)} $</p> 
                </div>
                <div className={styles.item}>
                    <p>Сайт</p> 
                    <a href={coin?.explorer}>{coin?.explorer}</a> 
                </div>
            </div>
            <button className={styles.back}><NavLink to='/cripto-coin-walet'>Вернуться</NavLink></button>
        </div>
  )
})

export default SingleCoin;
