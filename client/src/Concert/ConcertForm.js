import React, { useState} from 'react'
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Sessions/Form.css'
import { useNavigate } from 'react-router-dom';



const ConcertForm = ({addConcert}) => {

    const navigate = useNavigate()



  const [formData, setFormData] = useState({
    title:'',
    image:'',
    price: '',
    artist:'',
    description:''
  })
  const [errors, setErrors] = useState([])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    fetch('/concerts',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
        if(res.ok){
        res.json().then(addConcert)
        navigate("/concerts")
        } else {
        res.json().then(data => {
            setErrors(Object.entries(data.errors))
        })
        }
    })
    }

    return (
        <div>
        {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}

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
        </div>
    )
    }

    export default ConcertForm