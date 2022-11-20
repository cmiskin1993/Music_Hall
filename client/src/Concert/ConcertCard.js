import {NavLink} from 'react-router-dom'
import './Style/ConcertCard.css'


const ConcertCard = ({concert}) => {
  
    const {artist, image, id, price} = concert


    return (
      <div className='grid-container'>
        <li className="card">
          <img src={image} className="top-card" alt="concert-img"/>
            <NavLink to={`/concerts/${id}`}> <h2>{artist}</h2> </NavLink>
            <h3> Ticket Price: ${price}</h3>
        </li>
      </div>
     
    );
  }
  
  export default ConcertCard