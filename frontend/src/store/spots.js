import { csrfFetch } from "./csrf";

export const GET_SPOTS = "spots/getSpots";
export const CREATE_SPOTS = "spots/createSpots";
export const EDIT_SPOTS = "spots/editSpots";
export const DELETE_SPOTS = "spots/deleteSpots";
export const OWNED_SPOTS = "spots/ownedSpots";

const allSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots,
  };
};
export const getAllSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots", {
    method: "GET",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(allSpots(data.Spots));
  }
  return response;
};
const createSpots = (spots) => {
  return {
    type: CREATE_SPOTS,
    spots,
  };
};
const editSpots = (spots, spotId) => {
  return {
    type: EDIT_SPOTS,
    spots,
  };
};
const deleteSpots = (spotId) => {
  return {
    type: DELETE_SPOTS,
    spotId,
  };
};

const ownerSpots = (spots) => {
  return {
    type: OWNED_SPOTS,
    spots,
  };
};

export const getCreateSpots = (spots) => async (dispatch) => {
  // const {address, city, state, country, lat, lng, name, description, price} = spots
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spots),
  });
  if (response.ok) {
    const data = await response.json();
    const imagegrab = await csrfFetch(`/api/spots/${data.id}/images`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            url: spots.url,
            previewImage: spots.previewImage
        })
    });
    const imageData = await imagegrab.json()
    data.previewImage = imageData.url
    dispatch(createSpots(data));

    }
};

export const getEditSpots = (spots, spotId) => async (dispatch) => {
  console.log('checking valid data', spotId)
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spots),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(editSpots(data));
    return data
  }
  return response;
};

export const getDeleteSpots = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteSpots(spotId));

    return response;
  }
};

export const getOwnedSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots/current", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    dispatch(allSpots(data.Spots));
    return data


  }
  return response;
};

const spotReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = {}
      action.spots.forEach((spot) => {
        newState[spot.id] = spot
      })
      return newState;
    case CREATE_SPOTS:
      newState = { ...state };
      newState[action.spots.id] = action.spots;
      return newState;
    case EDIT_SPOTS:
      newState = { ...state };
      newState[action.spots.id] = action.spots;
      return newState;
    // case OWNED_SPOTS:
    //   newState = {};
    //   action.spots.Spots.forEach((spot) => {
    //     newState[spot.id] = spot;
    //   });
      return newState;
    case DELETE_SPOTS:
      newState = {...state };
      delete newState[action.spotId];
      return newState;
    default:
      return state;
  }
};

export default spotReducer;
