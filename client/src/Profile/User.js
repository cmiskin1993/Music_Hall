import { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import '../Profile/Style/Tickets.css'

const User = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    
    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    console.log(user.tickets)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>

    const deleteUser = (id) => setUsers(current => current.filter(user => user.id !== id))


    const handleDelete = () => {
        fetch(`/users/${user.id}`,{
          method:'DELETE',
          headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
          if(res.ok){
            deleteUser(id)
            navigate('/')
          }
        })
      }
    

    return (
    <div>
        <h1>{user.name}</h1>
            <h3>My Tickets</h3>
                <div className='grid-container'>
                    <ul>
                        {user.tickets?.map(ticket => (
                        <li key={ticket.id} className="ticket-card">
                            <img src={ticket.concert.image} className="top-ticket" alt="ticket-img" />
                            <h2>{ticket.concert.artist}</h2>
                        </li>
                        ))}
                    </ul>
                </div>
            <button onClick={handleDelete}>Delete Account</button>
    </div>
    )
}

export default User