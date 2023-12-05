import React, { useState } from 'react';
import styles from './Header.module.scss';
import PopularCoins from './PopularCoins';
import Modal from '../Modal/Modal';
import Cart from '../Cart/Cart';
import Total from './Total';
import Search from './Search';
import { observer } from 'mobx-react-lite';

const Header: React.FC = () => {
    const [modal, setModal] = useState<boolean>(false);

    return (
        <header className={styles.header}>
            <PopularCoins />
            <Search />
            <Total setModal={setModal} />
            <Modal modal={modal} setModal={setModal}>
                <Cart />
            </Modal>
        </header>
    )
}

export default observer(Header);
