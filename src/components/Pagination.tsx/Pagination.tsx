import React from 'react';
import styles from './Pagination.module.scss';

type Props = {
    totalCoins?: number;
    perPage: number
    setCurrentPage: (p: number) => void,
    currentPage: number
}

const Pagination = ({totalCoins, perPage, setCurrentPage, currentPage}: Props) => {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCoins!/perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.pageWrapper}>
        {pageNumbers.map(p =>
            <button
                onClick={() => setCurrentPage(p)} 
                key={p}
                className={p === currentPage ? styles.active : styles.page}
            >
                {p}
            </button>
        )}
    </div>
    )
}

export default Pagination;
