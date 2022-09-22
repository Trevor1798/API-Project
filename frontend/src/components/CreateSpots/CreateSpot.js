import { useState } from "react";
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router";
import * as spotsActions from '../../store/spots.js'
import '../ALLCSS/SpotDetails.css'
import '../ALLCSS/CreateSpot.css'



function CreateSpots () {

    let dispatch = useDispatch()
    const {spotId} = useParams()
    const user = useSelector(state => state.session.user)
    const [dispatched, setDispatched] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState([])
    // const spots= useSelector((state) => Object.values(state.spots))

    if (dispatched) {
        return <Redirect to='/'/>
    }
    const imageCheck = (url) => {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data ={

            name,
            previewImage:  true,
            address,
            city,
            state,
            country,
            lat,
            lng,
            description,
            price,
            url: url,
          
        }
        if (!user) {
            setError({error: 'User must be logged in to continue'})
        }
        if (!name || name.length < 4 || name.length > 100) {
            setError({error: 'Name must be between 4 and 100 characters'})
        }
        if (!imageCheck(url)) {
            setError({error: 'Image must be valid: jpg, jpeg, png, webp, avif, gif, svg'})
        }
        if (!address || address.length < 5 || address.length > 100) {
            setError({error: 'Address must be between 5 and 100 characters'})
        }
        if (!city || city.length < 5 || city.length > 100) {
            setError({error: 'City must be between 5 and 100 characters'})

        }
        if (!state || state.length < 5 || state.length > 100) {
            setError({error: 'State must be between 5 and 100 characters'})

        }
        if (!country || country.length < 5 || country.length > 255) {
            setError({error: 'Country must be between 5 and 255 characters'})
        }
        if (!lat || lat.length < 8 || lat.length > 8 ) {
            setError({error: 'Latitude must be 8 characters'})
        }
        if (!lng || lng.length < 8 || lng.length > 8) {
            setError({error: 'Longitude must be 8 characters'})
        }
        if (!description || description.length < 10 || description.length > 300) {
            setError({error: 'Descriptions must be between 10 and 300 characters'})
        }
        if (!price || price < 5 || price > 1000) {
            setError({error: 'Price must be between $5 and $1000'})
        }
            console.log(data)
             dispatch(spotsActions.getCreateSpots(data))
            .then(async (res) => setDispatched(true))



        }

     return (
        <div className="create-spot">

        <form className="create-spots" onSubmit={handleSubmit}>
             <ul>{Object.values(error).map((error, i) => (
                 <li className="error-map" key={i}>{error}</li>
                 ))}
            </ul>
                 <div className='host-place'>Become a host!</div>

            <label>
                <input className="host-name"
                    type='text'
                    value={name}
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
            </label>
            <label>
                <input className="preview-image"
                type='text'
                placeholder='Image URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                />
            </label>
            <label>
                <input className="host-address"
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
            </label>
            <label>
                <input className='host-city'
                    type='text'
                    placeholder='City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    />
            </label>
            <label>
                <input className='host-state'
                type='text'
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                />
            </label>
            <label>
                <input className="host-country"
                    type='text'
                    placeholder='Country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    />
            </label>
            <label>
                <input className='host-lat'
                    type='text'
                    placeholder="Latitude"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                    />
            </label>
            <label>
                <input className='host-lng'
                    type='text'
                    placeholder="Longitude"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                    />
            </label>
            <label>
                <input className='host-description'
                    type='text'
                    placeholder="Describe your spot"
                    value={description}
                    onChange={(e) =>  setDescription(e.target.value)}
                    />
            </label>
            <label>
                <input className='host-price'
                    type='text'
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
            </label>
            <button className="host-form-button" type='submit'>
                Create your spot!
            </button>
        </form>
                    </div>

            )
}

export default CreateSpots
