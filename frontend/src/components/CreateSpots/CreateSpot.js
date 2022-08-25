import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import * as spotsActions from '../../store/spots.js'
import '../ALLCSS/CreateSpot.css'

function CreateSpots () {

    let dispatch = useDispatch()
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
    const [previewImage, setPreviewImage] = useState('')
    const [error, setError] = useState([])
    // const spots= useSelector((state) => Object.values(state.spots))


    if (dispatched) {
        return <Redirect to='/spots'/>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            previewImage: previewImage ,
            address: address ,
            city: city ,
            state: state,
            country: country ,
             lat: lat,
             lng: lng ,
            description: description ,
            price: price,
        }
        // setError([])
         dispatch(spotsActions.getCreateSpots(data))
            // .then(async (res) => setDispatched(true))
            // .catch(async (res) => {
            // const data = await res.json();
            // if (data && data.error) setError(data.error);
            // })
    }

     return (

        <form className="create-spot" onSubmit={handleSubmit}>
             <ul>{error.map((error, i) => (
                 <li key={i}>{error}</li>
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
                value={previewImage}
                onChange={(e) => setPreviewImage(e.target.value)}
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

            )
}

export default CreateSpots
