import React from 'react';
import CoinsList from '../components/Coins/CoinsList';
import SingleCoin from '../components/SingleCoin/SingleCoin';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CoinsList />} />
            <Route path='/:id' element={<SingleCoin />} />
        </Routes>
    )
}

export default AppRoutes;
