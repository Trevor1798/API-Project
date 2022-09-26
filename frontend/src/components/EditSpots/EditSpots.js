import { useDispatch, useSelector, } from 'react-redux'
import {useState, useEffect} from 'react'
import { useParams, useHistory,} from 'react-router'
import * as spotActions from '../../store/spots.js'
import {Redirect} from 'react-router-dom'

function EditSpots ({showModal, setShowModal}) {
    let history = useHistory()
    let dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
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
    const LAT = 12.123455
    const LNG = 12.123455
    const handleSubmit = (e) => {

        e.preventDefault()

        let data = {
            name: name,
            address: address,
            city: city,
            state:state,
            country: country,
            lat: LAT,
            lng: LNG,
            description: description,
            price: price,
            url: url

        }
        let error = []
        if (!user) {
            error.push('User must be logged in to continue')
        }
        if (!name || name.length < 4 || name.length > 100) {
            error.push('Name must be between 4 and 100 characters')
        }
        // if (!imageCheck(url)) {
        //     error.push('Image must be valid: jpg, jpeg, png, webp, avif, gif, svg')
        // }
        if (!address || address.length < 5 || address.length > 100) {
            error.push('Address must be between 5 and 100 characters')
        }
        if (!city || city.length < 5 || city.length > 100) {
            error.push('City must be between 5 and 100 characters')

        }
        if (!state || state.length < 5 || state.length > 100) {
            error.push('State must be between 5 and 100 characters')

        }
        if (!country || country.length < 5 || country.length > 255) {
            error.push('Country must be between 5 and 255 characters')
        }
        // if (!lat) {
        //     error.push('Latitude must be 8 characters')
        // }
        // if (!lng) {
        //     error.push('Longitude must be 8 characters')
        // }
        if (!description || description.length < 5 || description.length > 300) {
            error.push('Descriptions must be between 5 and 300 characters')
        }
        if (!price || price < 5 || price > 1000) {
            error.push('Price must be between $5 and $1000')
        }
        setError(error)
        if (description.length >= 5 && description.length < 300 &&
            country.length >= 5 && country.length < 255 &&
            state.length >= 5 && state.length < 100 &&
            address.length >= 5 && address.length < 100 &&
            name.length >= 5 && name.length < 100 && user)

             dispatch(spotActions.getEditSpots(data, spotId )).then(() => dispatch(spotActions.getAllSpots())).then(() => {
            setShowModal(false)
            })



        }


            // console.log('editspots errors',setError)
        // .catch(async (res) => {
            //     const data = await res.json();
            //     if (data && data.error) setError(data.error);
            //   });

            // .then(async (res) => setDispatched(true))



            return (
        <div className='wrapper'>

        <form className='spots-create' onSubmit={handleSubmit}>
            <div className='edit-place'>Edit spot</div>
        <ul className='edit-spots-error'>{error.map((error, i) => (
            <li key={i}>{error}</li>
            ))}
       </ul>


       <label>
           <input className="edit-name"
               type='text'
               value={name}
               placeholder='Name'
               onChange={(e) => setName(e.target.value)}
               required
               />
       </label>
       {/* <label>
           <input className="edit-preview-image"
           type='text'
           placeholder='Image URL'
           value={previewImage}
           onChange={(e) => setPreviewImage(e.target.value)}
           required
           />
       </label> */}
       <label>
           <input className="edit-address"
               type='text'
               placeholder='Address'
               value={address}
               onChange={(e) => setAddress(e.target.value)}
               required
               />
       </label>
       <label>
           <input className='edit-city'
               type='text'
               placeholder='City'
               value={city}
               onChange={(e) => setCity(e.target.value)}
               required
               />
       </label>
       <label>
           <input className='edit-state'
           type='text'
           placeholder="State"
           value={state}
           onChange={(e) => setState(e.target.value)}
           required
           />
       </label>
       <label>
           <input className="edit-country"
               type='text'
               placeholder='Country'
               value={country}
               onChange={(e) => setCountry(e.target.value)}
               required
               />
       </label>
       {/* <label>
           <input className='edit-lat'
               type='text'
               placeholder="Latitude"
               value={lat}
               onChange={(e) => setLat(e.target.value)}
               />
       </label>
       <label>
           <input className='edit-lng'
               type='text'
               placeholder="Longitude"
               value={lng}
               onChange={(e) => setLng(e.target.value)}
               />
       </label> */}
       <label>
           <input className='edit-description'
               type='text'
               placeholder="Describe your spot"
               value={description}
               onChange={(e) =>  setDescription(e.target.value)}
               />
       </label>
       <label>
           <input className='edit-price'
               type='text'
               placeholder="Price"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
               />
       </label>
       <button className="edit-form-button" type='submit' >
           Edit spot
       </button>

   </form>

               </div>



    )
}




export default EditSpots
