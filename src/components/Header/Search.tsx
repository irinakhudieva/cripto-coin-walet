import React, { useState } from 'react';
import styles from './Header.module.scss';
import coinsStore from '../../store/coinsStore';
import { GoSearch } from 'react-icons/go';
import { observer } from 'mobx-react-lite';

const Search = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const {setSearch} = coinsStore;

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleClick = () => {
        setSearch(searchValue);
        setSearchValue('')
    }

    return (
        <div className={styles.search}>
            <input 
                type='text'
                value={searchValue}
                onChange={handleChange}
                placeholder='Поиск...'/>
            <button onClick={handleClick}><GoSearch style={{fontSize: 21}}/></button>
        </div>
    )
}

export default observer(Search);
