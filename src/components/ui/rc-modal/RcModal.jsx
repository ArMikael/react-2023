import React from 'react';
import classes from "./RcModal.module.scss";

const RcModal = ({ children, visible, setVisible}) => {
    let modalClasses = `${classes.rcModal}`;

    if (visible) {
        modalClasses = modalClasses + ` ${classes.active}`;
    }

    return (
        <div className={modalClasses} onClick={() => setVisible(false)}>
            <div className={ classes.rcModalContent }
                 onClick={(e) => e.stopPropagation()}>
                { children }
            </div>
        </div>
    );
};

export default RcModal;