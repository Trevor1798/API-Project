import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteBookingById } from "../../store/booking";
import { getBookingsBySpotId } from "../../store/booking";
import { getAllSpots } from "../../store/spots";
import './CurrentBooking.css'


const CurrentBooking = () => {
    const bookings = useSelector(state => Object.values(state.bookings))
    const todayDate = (new Date()).toISOString().slice(0, 10)
    console.log('these are my bookings', bookings)
    bookings.sort(function(a, b) {
        return new Date(a.endDate) - new Date(b.endDate)

    })

    const filteredBookings = bookings?.filter(booking => booking?.endDate >= todayDate)

    const spots = useSelector(state => state.spots)

    const {spotId} = useParams()
    const spot = spots[spotId]

    const [isLoaded, setIsLoaded] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getAllSpots()).then(() => setIsLoaded(true))

        dispatch(getBookingsBySpotId(spotId)).then(() => setIsLoaded(true))
    }, [])


    if (!isLoaded) return null

    const handleDelete = (reviewId, spotId) => {
        dispatch(deleteBookingById(reviewId, spotId))

    };

    return (
        <div className="current-booking-container">
            <div className="current-booking-inner-container">
                <div className="current-booking-header">Current Bookings for {spot?.name}</div>
                <div className="current-booking-table-container">
                    <div className="current-booking-table-inner-container">
                        <table className="current-booking-table" cellSpacing="0">
                            <tbody>
                                <tr className='current-booking-table-header'>
                                    <td className='current-booking-table-column'>Start Date</td>
                                    <td className="current-booking-table-column">End Date</td>

                                </tr>
                            </tbody>
                            {filteredBookings?.map((booking, i) => (
                                <tbody key={i}>
                                    <tr className="current-booking-content">
                                        <td className="current-booking-content-column">{new Date(booking.startDate).toISOString().split("T")[0]}</td>
                                        <td className="current-booking-content-column">{new Date(booking.endDate).toISOString().split('T')[0]}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
                <div className="current-booking-bottom">
                    <button className="current-booking-go-back" onClick={() => history.goBack()}>Go Back</button>
                </div>
            </div>
        </div>
    )
}


export default CurrentBooking
