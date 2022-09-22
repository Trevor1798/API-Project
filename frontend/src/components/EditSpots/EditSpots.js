import { useDispatch, useSelector, } from 'react-redux'
import {useState, useEffect} from 'react'
import { useParams, useHistory,} from 'react-router'
import * as spotActions from '../../store/spots.js'
import {Redirect} from 'react-router-dom'

function EditSpots ({showModal, setShowModal}) {
    let history = useHistory()
    let dispatch = useDispatch()
    const [dispatched, setDispatched] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [previewImage, setPreviewImage] = useState('')
    const [url, setUrl] = useState('')
    const [error, setError] = useState([])
//    const [showModal, setShowModal] = useState(false)

    const {spotId} = useParams()
    const spots= useSelector((state) => Object.values(state.spots))
    const spot = spots.find((spot) => spot.id === spotId)
    console.log('this is the', spot)
    console.log('also', spots)

    function imageCheck(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        let data = {
            name: name,
            address: address,
            city: city,
            state:state,
            country: country,
            lat: lat,
            lng: lng,
            description: description,
            price: price,
            url: url

        }
       if (!imageCheck(url)) {
        setError({error: 'Image must be valid: jpg, jpeg, png, webp, avif, gif, svg'})
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
        dispatch(spotActions.getEditSpots(data, spotId )).then(() => dispatch(spotActions.getAllSpots()))
        // .then(async (res) => setDispatched(true))

        setShowModal(false)
    }


    return (
        <div className='wrapper'>

        <form className='spots-create' onSubmit={handleSubmit}>
        <ul>{error.map((error, i) => (
            <li key={i}>{error}</li>
            ))}
       </ul>
            <div className='host-place'>Edit spot</div>

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
       <button className="host-form-button" type='submit' >
           Edit spot
       </button>
   </form>

               </div>



    )
}




export default EditSpots
