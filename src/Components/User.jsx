import React from 'react';
import styles from './Modules/User.module.css'

const User = (props) => {
    return (
        <div className={styles.user}>
            <div>
                <h2>
                    {`${props.user.name} ${props.user.surname}`}
                </h2>
            </div>
            <div className={styles.description}>
                {props.user.desc}
            </div>
            <hr/>
        </div>
    );
};

export default User;