import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createNewBooking } from '../../store/booking'
import { getBookingsBySpotId } from '../../store/booking'
import './CreateBooking.css'


const CreateBooking =({setStartDate, setEndDate, todayDate, startDate, endDate}) => {
    const [errors, setErrors] = useState([])
    const {spotId} = useParams()

    const spots = useSelector(state => state.spots)

    const spot = spots[spotId]

    const sessionUser = useSelector(state => state.session.user)

    const dispatch = useDispatch()
    const history = useHistory()

    const bookings = useSelector(state => Object.values(state.bookings))

    const startDateNum = new Date(startDate) - 0
    const endDateNum = new Date(endDate) - 0

    const handleValidation= () => {
        let errors = []
        bookings?.map((booking) => {
            let bookingStart = (new Date(booking?.startDate) - 0)
            let bookingEnd = (new Date(booking?.endDate) - 0 )

            if (startDateNum >= endDateNum) {
                errors.push('Checkout date cannot be the same as or before Check-in')
            }

            if ((startDateNum === bookingStart) || (startDateNum === bookingEnd) || (endDateNum === bookingStart) || (endDateNum === bookingEnd)) {
                errors.push('Chosen dates conflicts with an existing booking')

            }
            if ((startDateNum > bookingStart) && (startDateNum < bookingEnd)) {
                errors.push('Chosen dates conflicts with an existing booking')
            }
            if ((startDateNum < bookingStart) && (endDateNum > bookingStart) && (endDateNum < bookingEnd)) {
                errors.push('Chosen dates conflict with an existing booking')

            }
            if ((startDateNum < bookingStart) && (endDateNum > bookingEnd)) {
                errors.push('Chosen dates conflcit with an existing booking')
            }

            return setErrors(errors)
        })
    }
    useEffect(() => {
        dispatch(getBookingsBySpotId(spotId))
        handleValidation()
    }, [startDateNum, endDateNum])

    let errorsli;

    if (errors.length > 0) {
        errorsli = (
            <div className='createBookingError'>
                {(errors).map((error, i) =>{
                    <div className='errorMessageContainer' key={i}>
                        <i className='fa-solid fa-exclamation exclamation-point'></i>
                        <div className='errorMessage'>{error}</div>
                        </div>
                })}
            </div>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefualt()
        let data = {
            startDate,
            endDate,
        }

        if (spot.ownerId === sessionUser.id) {
            let errors = []
            errors.push('User cannot book their own spot')
            setErrors(errors)
        }

        if (errors.length === 0 && spot.ownerId !== sessionUser.id) {
            dispatch(createNewBooking(spotId, data)).then((res) => history.push(`/confirmed/${spotId}/${res.booking.id}`))
        }

    }

    return (
        <div className='CreateBookingFormWrapper'>
            <div className='CreateBookingFormContainer'>
                <form className='CreateBookingForm' onSubmit={handleSubmit}>
                    <div className='CreateBookingErrorContainer'>
                        {errorsli}
                    </div>
                    <div className='CreateBookingDiv'>
                        <div className='CreateSpotCheckIn'>CHECK-IN</div>
                        <input className='CreateBookingInputCheckIn'
                            type="date"
                            onChange={(e) => setStartDate(e.target.value)}
                            required
                            min={todayDate}
                            max={'9999-12-31'}
                        />


                    <div className='CreateBookingInputContainer'>
                        <div className='CreateSpotCheckout'>CHECKOUT</div>
                        <input className='CreateBookingInputCheckout'
                        type="date"
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        min={todayDate}
                        max="9999-12-31"
                        />
                    </div>
                </div>
                <div className='CreateBookingGuest'>
                    <div className='CreateBookingGuestOne'>GUESTS</div>
                    <div className='CreateBookingGuestTwo'>2 GUESTS</div>
                </div>

                <div className='CreateBookingContainer'>
                    <input className='CreateBookingSubmit' type='submit' defaultValue='Reserve' />
                </div>
            </form>
        </div>
    </div>

    )

}


export default CreateBooking
