import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const GET_USER = 'users/getUsers'

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const getUsers = () => {
  return {
    type: GET_USER
  }
}
const getAllUsers = () => async (dispatch) => {
  const response = await csrfFetch('/api/users', {
    method: "GET"
  })
    if (response.ok) {
      const data = await response.json()
      dispatch(getUsers(data.users))

    }

}
export const login = (user) => async (dispatch) => {
  const { credential, password} = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

//session restore user thunk action
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data));
    return response;
  };

  export const signup = (user) => async (dispatch) => {
    const { username, email, password, firstName, lastName } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        firstName,
        lastName
      }),
    });
    const data = await response.json();
    dispatch(setUser(data));
    return response;
  };

  export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

export default sessionReducer;
