import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import '../Navigation/Navbar.css'


const Navbar = ({ currentUser, updateUser }) => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const navigate = useNavigate()



  const handleLogOut = () => {
    fetch('/logout',{
      method: "DELETE"
    })
    updateUser("")
        navigate("/")
  }


  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }


  return (
    <div className="navBar">
          <button onClick={handleToggle} > 
          {navbarOpen ? (
            <h3 style={{ color: "#000000", width: "40px", height: "40px" }}> <AiOutlineClose size={30} /></h3>
          ) : (
            <h3  style={{ color: "#ffffff", width: "40px", height: "40px" }}> <FiMenu size={40} /></h3>
          )}
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <NavLink to="/" id="logo" className="active-link" onClick={() => closeMenu()} >Home</NavLink>
            <li>{currentUser ? <NavLink to={`/users/${currentUser.id}`}>My Account</NavLink> : null }</li>
            <li><NavLink to='/signup' className="active-link" onClick={() => closeMenu()}>Sign Up</NavLink></li>
            <li><NavLink to='/login' className="active-link" onClick={() => closeMenu()}>Login</NavLink></li>
            <li><NavLink to='/concerts' className="active-link" onClick={() => closeMenu()}>Concerts</NavLink></li>
            <li><NavLink to='/new/concert' className="active-link" onClick={() => closeMenu()}>Add Concert</NavLink></li>

          </ul>

        <button className='logout-button' onClick={handleLogOut}>Log Out</button>

    </div>
  );
}

export default Navbar