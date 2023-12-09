import React from 'react';
import CoinsList from '../components/Coins/CoinsList';
import SingleCoin from '../components/SingleCoin/SingleCoin';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/cripto-coin-walet' element={<CoinsList />} />
            <Route path='/cripto-coin-walet/:id' element={<SingleCoin />} />
        </Routes>
    )
}

export default AppRoutes;
