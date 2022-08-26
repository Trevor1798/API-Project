import { csrfFetch } from "./csrf";

export const GET_REVIEW = 'reviews/getReview'
export const CREATE_REVIEW = 'reviews/createReview'
export const UPDATE_REVIEW = 'reviews/updateReview'
export const DELETE_REVIEW = 'reviews/deleteReview'


const getReview = (review) => {
    return {
        type: GET_REVIEW,
        review
    }
}


const createReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

const updateReview = (review) => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const deleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}


export const getReviews = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch(getReview(data))
        return response
    }
}

export const getCreateReviews = (spotId, review) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })
    const data = await response.json()
    dispatch(createReview(data))
    return response
}



const reviewReducer = (state ={}, action) => {
    let newState;
        switch(action.type){
            case CREATE_REVIEW:
            newState = {...state}
            newState[action.review.id] = action.review
            console.log(newState)
            return newState
            case GET_REVIEW:
            newState = {}
          action.review.Reviews.forEach((review) => {
            newState[review.id] = review
        })
            return newState
            default:
                return state
        }
}


export default reviewReducer
