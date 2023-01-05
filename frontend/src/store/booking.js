import { csrfFetch } from "./csrf";

const GET_BY_SPOT_ID = "bookings/GET";
const GET_CURRENT = "bookings/current"
const CREATE = "bookings/CREATE";
const UPDATE = "bookings/UPDATE";
const DELETE = "bookings/DELETE";


export const getCurrentBookings = (bookings) => {
    return {
    type: GET_CURRENT,
    bookings,
    };
};

export const getBookingsByCurrentUser = () => async (dispatch) => {
    const res = await csrfFetch(`/api/bookings/current`, {
    method: 'GET'
    });
    if (res.ok) {
    const data = await res.json();
    dispatch(getCurrentBookings(data.Bookings));
    }
};

export const createBookings = (booking) => {
    return {
    type: CREATE,
    booking,
    };
};

export const createNewBooking = (spotId, bookingData) => async (dispatch) => {
    const reqData = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bookingData),
    };
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`, reqData);
    if (res.ok) {
    const data = await res.json();
    dispatch(createBookings(spotId, data));
    return data;
    }
  // return res;
};

export const getBookings = (bookings) => {
    return {
    type: GET_BY_SPOT_ID,
    bookings,
    };
};

export const getBookingsBySpotId = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/bookings`);
    if (res.ok) {
    const data = await res.json();
    dispatch(getBookings(data.Bookings));
    }
};

export const deleteBooking = (bookingId) => {
    return {
    type: DELETE,
    bookingId,
    };
};

export const deleteBookingById = (bookingId) => async (dispatch) => {
    const reqData = {
    method: "DELETE",
    };
    const res = await csrfFetch(`/api/bookings/${bookingId}`, reqData);
    if (res.ok) {
    dispatch(deleteBooking(bookingId));
    }
    return res;
};

export const updateBooking = (reviewId) => {
    return {
    type: UPDATE,
    reviewId,
    };
};

export const editBooking = (payload, reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(payload)
    })
    if (response.ok){
        const data = await response.json();
        dispatch(updateBooking(data.Bookings))
        return response;
    }
}

export default function bookingsReducer(state = {}, action) {
    let newState;
    switch (action.type) {
    case GET_BY_SPOT_ID:
        newState = { ...action.bookings };
        return newState;
    case GET_CURRENT:
        newState = {};
        action.bookings.forEach((booking) => {
        newState[booking.id] = booking
        })
        return newState
    case CREATE:
        newState = { ...state };
        newState[action.booking?.booking?.id] = action.booking?.booking;
        return newState;
    case DELETE:
        newState = { ...state };
        delete newState[action.bookingId];
        return newState;
    default:
        return state;
    }
}
