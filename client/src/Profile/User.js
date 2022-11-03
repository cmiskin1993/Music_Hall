import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import "/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Profile/Style/Tickets.css"


const User = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

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

    

    


    return (
    <div>
        <h1>{user.name}</h1>
            <h3>My Tickets</h3>
                <div className='grid-container'>
                    <ul>
                        {user.tickets?.map(ticket => (
                        <li key={ticket.id} className="ticket-card">
                            <h3>{ticket.concert.title}</h3>
                            <h2>{ticket.concert.artist}</h2>
                        </li>
                        ))}
                    </ul>
                </div>
    </div>
    )
}

export default User