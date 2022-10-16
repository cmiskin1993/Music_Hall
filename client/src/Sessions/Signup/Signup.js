import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {name, email, password} = formData

    const onSubmit = (e) =>{
        e.preventDefault()
        const user = {
            name,
            email,
            password
        }
    
        fetch(`/users`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <> 
        <form onSubmit={onSubmit}>
            <label> First Name </label>  
            <input type='text' name='name' value={name} onChange={handleChange} />
        
            <label> Email </label>
            <input type='text' name='email' value={email} onChange={handleChange} />
        
            <label> Password </label>
            <input type='password' name='password' value={password} onChange={handleChange} />
            
            <input type='submit' value='Sign up!' />
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
        </>
    )
}

export default Signup