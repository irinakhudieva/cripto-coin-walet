import React, { ReactNode } from 'react';
import styles from './Modal.module.scss';
import { MdClose } from 'react-icons/md';

type Props = {
    modal: boolean,
    setModal: (modal: boolean) => void,
    children: ReactNode
}

const Modal = ({children, modal, setModal}: Props) => {

    const rootClasses = [styles.myModal]

    if(modal) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} >
            <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
                <MdClose onClick={() => setModal(false)} className={styles.close} />
                {children}
            </div>
        </div>
    )
}

export default Modal;
