import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import UsersContainer from "./Components/UsersContainer";
import styles from './App.module.css'
import backgound from './background/background.svg'
import {Col, Row} from "antd";


const App = (props) => {

    return (
        <BrowserRouter>

                <div>
               <img src={backgound} alt={''} className={styles.back}/>
                </div>

            <Route exact path={'/'} render={() =>
                <Row justify='center' align='middle' style={ {height : '100vh'} }>
                    <Col span={12}>
                <div className={styles.enterLink}>
                    <NavLink to='/users'><b>Go find some people</b></NavLink>
                </div>
                    </Col>
                </Row>
            }/>

            <Route exact path={'/users'} render={() => <UsersContainer/>}/>


        </BrowserRouter>
    );
};

export default App;