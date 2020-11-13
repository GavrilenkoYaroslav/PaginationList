import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../redux/reducer";
import {response} from "../Response";
import Users from "./Users";


const UsersContainer = (props) => {

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        // some API request may be thunk
        // const response = await axios.get(`url?page=${page}&pageSize=${size}`);
        const data = JSON.parse(response);
        dispatch(setUsers(data.users));

    }, [dispatch]);


    return (
        <>
            <Users users={users}/>
        </>
    );
};

export default UsersContainer;