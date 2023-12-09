import React from 'react';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { observer } from 'mobx-react-lite';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div>
                <AppRoutes />
            </div>
        </div>
    );
}

export default observer(App);

