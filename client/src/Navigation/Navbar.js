import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar({currentUser}) {
  const [menu, setMenu] = useState(false)

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        currentUser(false)
      }
    })
  }


  return (
    <div>
      <h1>Miskin Music Hall</h1>
      <div className='menu'>
        <button onClick={handleLogOut}>Log Out</button>
        {!menu ? (
          <div onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </div>
        ) : (
          <ul>
          <li onClick={() => setMenu(!menu)}>x</li>
            <li><NavLink to='/users/1'>User Page</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/concerts'>Concerts</NavLink></li>
            <li><NavLink to='/'> Home</NavLink></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar