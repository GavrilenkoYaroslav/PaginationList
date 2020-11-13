import React, {useEffect, useState} from 'react';
import User from "./User";
import styles from './Modules/Users.module.css'
import {Col, Pagination, Row} from "antd";

const Users = (props) => {

    const [random, setRandom] = useState(0);

    useEffect(() => {
        setRandom(Math.floor(Math.random() * (totalUsersMount + 1)));

        const interval = setInterval(() => {
            const rand = Math.floor(Math.random() * (totalUsersMount + 1));
            setRandom(rand);
            console.log(rand);
        }, 8000);


        return () => clearInterval(interval);

    }, [props.users]);

    const [page, setPage] = useState(1);

    const start = page * 5 - 5;
    const end = page * 5;
    const totalUsersMount = props.users.length - 1;

    const currentUsers = props.users.slice(start, end);


    return (
        <>
            <Row justify='center' align='middle' style={{height: '100vh'}}>
                <Col span={10}>
                    <div className={styles.container}>
                        <Row justify='center' align='middle'>
                            <Col span={20}>
                        {currentUsers.map(user => <User key={user.id} user={user}/>)}
                        <Pagination defaultCurrent={1} total={totalUsersMount}
                                    onChange={ (page, size)=> setPage(page) }
                                    defaultPageSize={5}/>
                            </Col>
                        </Row>
                    </div>
                </Col>


                <Col span={10}>
                <div className={styles.random}>
                    <h3>{props.users.length && `${props.users[random].name} ${props.users[random].surname}`}</h3>
                </div>
                </Col>
            </Row>
        </>
    );
};

export default Users;