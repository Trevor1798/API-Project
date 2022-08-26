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

export const getCreateReviews = (reviewData) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${reviewData.spotId}/reviews`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reviewData)
    } )
    console.log('this is response', response)
    const data = await response.json()
    dispatch(createReview(data))
    return response
}

export const getDeleteReviews = (reviewId) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
      
    })
    dispatch(deleteReview(reviewId))

}


const reviewReducer = (state ={}, action) => {
    let newState;
        switch(action.type){
            case CREATE_REVIEW:
                action.review.Review.forEach((review) => {
                    newState[review.id] = review
                })
                // if (!state[action.review.id]) {
                //     const newStateForm = { ...state};
                //     newStateForm[action.review.id] = action.review
                //     return newStateForm
                // }

                // return {
                //     ...state,
                //     [action.review.id]: {
                //         ...state[action.review.id],
                //         ...action.payload
                //     }
                // }
            return newState
            case GET_REVIEW:
            newState = {}
          action.review.Reviews.forEach((review) => {
            newState[review.id] = review
        })
            return newState
            case DELETE_REVIEW:
                newState = {...state}
                delete newState[action.reviewId]
                return newState
            default:
                return state
        }
}


export default reviewReducer
