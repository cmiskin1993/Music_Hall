import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../Concert/Style/ConcertPage.css'


    const EditConcert = ({updateConcert}) => {

    const navigate = useNavigate()


        
    const [formData, setFormData] = useState({
        title:'',
        image:'',
        price: '',
        artist:'',
        description:''
    })
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    useEffect(() => {
    fetch(`/concerts/${id}`)
    .then(res => res.json())
    .then(setFormData)
    },[])

    const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    }


    function onSubmit(e){
    e.preventDefault()
    fetch(`/concerts/${id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
    })
    .then(res => {
        if(res.ok){
        res.json().then(updateConcert)
        navigate("/concerts")
        } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
    })
    }
    return (
        <div>
    
        {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}

        <h2> Edit</h2>

        <form className='form-container' onSubmit={onSubmit}>
    
        <label>Title </label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
        
        <label>Artist/Band</label>
        <input type='text' name='artist' value={formData.artist} onChange={handleChange} />

        <label>Price</label>
        <input type='number' name='price' value={formData.price} onChange={handleChange} />
        
        <label>Image</label>
        <input type='text' name='image' value={formData.image} onChange={handleChange} />
        
        <label>About</label>
        <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
        
        <input type='submit' value='Enter' />
        </form>

        {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>

    )
    }

    export default EditConcert