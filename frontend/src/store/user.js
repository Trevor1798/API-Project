import { csrfFetch } from "./csrf";

const GET_USER = "users/getUsers";

const getUsers = (users) => {
  return {
    type: GET_USER,
    users
  };
};
export const getAllUsers = () => async (dispatch) => {
  const response = await csrfFetch("/api/users", {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    console.log('hit the backend', data)
    dispatch(getUsers(data.users));
    return data
  }
  return response
};

export const userReducer = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case GET_USER:
      action.users.forEach((users) => (newState[users.id] = users));
      return newState;
    default:
      return state;
  }
};
