import  { Link, useParams, useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Concert/Style/ConcertPage.css'

const ConcertDetail = ({deleteConcert}) => {


  const [concert, setConcert] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  
  const params = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
    fetch(`/concerts/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setConcert(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

  function handleDelete(){
    fetch(`/concerts/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
        deleteConcert(id)
        navigate('/')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  const handleBuy = () => {
    fetch(`/tickets`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({concert_id:id, user_id:1, price:30.50})
    })
    .then(res => {
      if(res.ok){
        navigate('/users/1')
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
  }

  
  
 
  if(loading) return <h1>Loading</h1>
  if(errors) return <h1>{errors}</h1>

  const {id, title, artist, image, description} = concert 
  
  return (
      <div>
        <h1>{title}</h1>
          <div className='wrapper'>
          <img src={image} alt="music-img"/>
            <div>
              <h2>{artist}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className='center-buttons'>
            <Link to={`/concerts/${id}/edit`}>Edit Concert</Link>
            <button onClick={handleDelete}>Delete Concert</button>
            <button onClick={handleBuy} >Buy Ticket</button>
          </div>
      </div>
    )
  }

  
  export default ConcertDetail