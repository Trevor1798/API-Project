import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { createNewBooking } from '../../store/booking'
import { getBookingsBySpotId } from '../../store/booking'
import './CreateBooking.css'


const CreateBooking =({setStartDate, setEndDate, todayDate, startDate, endDate}) => {
    const [errors, setErrors] = useState([])
    const {spotId} = useParams()
}


export default CreateBooking
