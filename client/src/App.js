import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'


import Home from './Static/Home'
import Navbar from './Navigation/Navbar'
import Login from './Sessions/Login/Login'
import Signup from './Sessions/Signup/Signup'
import User from './Profile/User'
import ConcertContainer from './Concert/ConcertContainer'



const App = () => {

  const [concerts, setConcerts] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)



  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          fetchConcerts()
          console.log(user)
        });
      }
    })
  },[])

  const fetchConcerts = () => {
    fetch('/concerts')
    .then(res => {
      if(res.ok){
        res.json().then(setConcerts)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  const addConcert = (concert) => setConcerts(current => [...current,concert])

  const updateConcert = (updatedConcert) => setConcerts(current => {
    return current.map(concert => {
     if(concert.id === updateConcert.id){
       return updateConcert
     } else {
       return concert
     }
    })
  })

  const deleteConcert = (id) => setConcerts(current => current.filter(concert => concert.id !== id))


  const updateUser = (user) => setCurrentUser(user)
 
  
  if(errors) return <h1>{errors}</h1>


  return (
    <div className='global-style'>
    <Router>
    <Navbar currentUser={currentUser} />
        <Routes>
          <Route path="/" element = {<Home concerts={concerts} />} />
          <Route path="/login" element={ <Login updateUser={updateUser} /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/users/:id" element={ <User updateUser={updateUser} /> } />
          <Route path="/concerts" element = {<ConcertContainer />} />
          </Routes>
      </Router>

    </div>
  )
}

export default App

