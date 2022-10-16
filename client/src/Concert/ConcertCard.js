import {Link} from 'react-router-dom'


const ConcertCard = ({concert}) => {
    const {title, artist, image, id} = concert
    console.log(concert)


    return (
      <div className='card'>
      <div>
      <Link to={`/concerts/${id}`}> <h2>{title}</h2></Link>
        <p>{artist}</p>
      </div>
      <img src={image} alt="concert-img"/>
      </div>
     
    );
  }
  
  export default ConcertCard