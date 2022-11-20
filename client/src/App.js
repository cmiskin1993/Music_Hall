import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import '../src/App.css'


import Home from './Static/Home'
import Navbar from './Navigation/Navbar'
import Login from './Sessions/Login/Login'
import Signup from './Sessions/Signup/Signup'
import User from './Profile/User'
import ConcertContainer from './Concert/ConcertContainer'
import ConcertForm from './Concert/ConcertForm'
import EditConcert from './Concert/EditConcert'
import ConcertDetail from './Concert/ConcertDetails'

import PageNotFound from './Errors/PageNotFound'



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
       return updatedConcert
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
    <Navbar currentUser={currentUser} updateUser={updateUser} />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element={ <Login updateUser={updateUser} /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/users/:id" element={ <User updateUser={updateUser} /> } />
          <Route path="/concerts" element = {<ConcertContainer concerts={concerts} />} />
          <Route path="/new/concert" element = {<ConcertForm addConcert={addConcert} />} />
          <Route path="/concerts/:id/edit" element = {<EditConcert updateConcert={updateConcert} concerts={concerts} />} />
          <Route path="/concerts/:id" element = {<ConcertDetail deleteConcert={deleteConcert} currentUser={currentUser} />} />
          
          <Route path="*" element={<PageNotFound />} />
          </Routes>
      </Router>

    </div>
  )
}

export default App

