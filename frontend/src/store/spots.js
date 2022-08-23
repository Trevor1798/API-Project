import { csrfFetch } from "./csrf";

const GETSPOTS = 'spots/getSpots'
const CREATESPOTS = 'spots/createSpots'

const allSpots = (spots) => {
    return {
        type: GETSPOTS,
        spots
    }
}
const createSpots = (spots) => {
    return {
        type: CREATESPOTS,
        spots
    }
}

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('api/spots')
    if (response.ok) {
        const spots = await response.json()
        dispatch(getAllSpots(spots))
        return spots
    }
}


const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type) {
        case GETSPOTS: {
          const
        }
    }
}
