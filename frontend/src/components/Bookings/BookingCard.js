import {Link} from 'react-router-dom'
import './BookingCard.css'


const BookingCard = ({booking}) => {
    console.log('bookingcard booking object', booking.Spot.previewImage)
    const startInt = new Date(booking?.startDate).getDay()
    const endInt = new Date(booking?.endDate).getDay()

    const weekday = (day) => {
        if (day === 6) return 'Sun'
        if (day === 0) return 'Mon'
        if (day === 1) return 'Tue'
        if (day === 2) return 'Wed'
        if (day === 3) return 'Thu'
        if (day === 4) return 'Fri'
        if (day === 5) return 'Sat'

    }

    return (
        <Link className='bookingCardContainer' to={`/confirmed/${booking.Spot.id}/${booking.id}`}>
            <div className='bookingCardContainer'>
                <img className='bookingImage' src={booking.Spot?.previewImage}/>
                <div className='bookingDescription'>
                    <div className='bookingDescriptionLeft'>
                        <div className='bookingLocation'>{booking.Spot.city}, {booking.Spot.state}</div>
                        <div className='bookingCountry'>{booking.Spot.country}</div>
                        <div className='boookingCardDates'>
                            <div>{`${weekday(startInt)}, ${booking?.startDate} - ${weekday(endInt)}, ${booking?.endDate}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )


}


export default BookingCard
