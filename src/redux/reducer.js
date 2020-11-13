
const SET_USERS = 'REDUCER/SET_USERS';

const initialState = {
    users : []
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
       case SET_USERS : {
           return {...state, users: [ ...action.users ]}
       }
       default : {
           return state;
       }
   }
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};