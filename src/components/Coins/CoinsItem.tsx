import React, { useState } from 'react';
import styles from './Coins.module.scss';
import { Coin } from '../../@types/types';
import { formatCompactNum } from '../../utils/common';
import { ImPlus } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import FormBuy from '../FormBuy/FormBuy';

type Props = {
    coin: Coin,
    index: number
}

const CoinsItem = ({coin, index}: Props) => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.item}>
            <div className={styles.item}>
                <div className={styles.num}>{index + 1}</div>
                <div className={styles.name} onClick={() => navigate(`/${coin.id}`)}>
                    <p><span>{coin.symbol}</span>{coin.name}</p>
                </div>
                <p className={styles.cell}>{Number(coin.vwap24Hr).toFixed(2)} $</p>
                <p 
                    className={styles.cell} 
                    style={{color: Number(coin.changePercent24Hr) > 0 ? 'green' : 'red'}}>
                        {Number(coin.changePercent24Hr).toFixed(2)} $
                </p>
                <p className={styles.cell}>{formatCompactNum(coin.marketCapUsd)} $</p>
                <p className={styles.cell}>{Number(coin.priceUsd).toFixed(2)} $</p>
                <p className={styles.cell}>
                    <ImPlus 
                        onClick={() => setModal(true)}
                        style={{color: '#299090', fontSize: 19, cursor: 'pointer'}}/>
                </p>
            </div> 
            <Modal modal={modal} setModal={setModal}>
                <h1 className={styles.title}>Купить <span>{coin.name}</span></h1>
                <FormBuy coin={coin} />
            </Modal>
        </div>
        
    )
}

export default CoinsItem;
