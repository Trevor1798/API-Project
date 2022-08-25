import { csrfFetch } from "./csrf";

export const GET_SPOTS = 'spots/getSpots'
export const CREATE_SPOTS = 'spots/createSpots'
export const EDIT_SPOTS ='spots/editSpots'
export const DELETE_SPOTS = 'spots/deleteSpots'
export const OWNED_SPOTS = 'spots/ownedSpots'

const allSpots = (spots) => {
    return {
        type: GET_SPOTS,
        spots
    }
}
const createSpots = (spots) => {
    return {
        type: CREATE_SPOTS,
        spots
    }
}
const editSpots = (spots) => {
    return {
        type: EDIT_SPOTS,
        spots
    }
}
const deleteSpots = (id) => {
    return {
        type: DELETE_SPOTS,
        id
    }
}

const ownerSpots = (spots) => {
    return {
        type: OWNED_SPOTS,
        spots
    }
}

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'GET'
    })
    if (response.ok) {
        const spots = await response.json()
        dispatch(allSpots(spots))
    }
}

export const getCreateSpots = (spots) => async (dispatch) => {
    // const {address, city, state, country, lat, lng, name, description, price} = spots
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(spots)
    })
    if (response.ok) {
        const data = await response.json()
        console.log('createSpots - res', response)
        dispatch(createSpots(data))

    }
}

export const getEditSpots = (spots) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: {"Content-type": 'application/json'},
        body: JSON.stringify(spots)
    })
        if (response.ok) {
            console.log('here', response)
            const data = await response.json()
            dispatch(editSpots(data))
            return data
        }
}

export const getDeleteSpots = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'DELETE'
    })
        if (response.ok) {
            const data = await response.json()
            dispatch(deleteSpots(id))
            return data
        }
}

export const getOwnedSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/users/current/spots')
    if (response.ok) {
        const data = await response.json()
        dispatch(ownerSpots(data))
        return data
    }
}



 const spotReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case GET_SPOTS:
           newState = {...state, ...action.spots['Spots']}
           return newState
           case CREATE_SPOTS:
            newState = {...state}
               newState[action.spots.id] = action.spots
               return newState;
            case EDIT_SPOTS:
                newState = {...state, ...action.spots}
                return newState
            case OWNED_SPOTS:
                newState = {...state, ...action.spots}
                return newState
            case DELETE_SPOTS:
                newState = {...state}
                delete newState[action.spotId]
                return newState
               default:
                  return state

    }
}

export default spotReducer
