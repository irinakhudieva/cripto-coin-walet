import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
        <img src='https://pierrehaddad.com/cdn/shop/t/2/assets/loading.gif?v=157493769327766696621636595199' alt='loader' />
    </div>
  )
}

export default Loader
