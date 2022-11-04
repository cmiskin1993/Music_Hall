import { useState } from 'react';
import ConcertCard from '../Concert/ConcertCard'
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Concert/Style/ConcertCard.css'
import { AiOutlineSearch } from "react-icons/ai";


const ConcertContainer = ({concerts}) => {

  const [searchTerm, setSearchTerm] = useState("")


    return (
      <div>
        <div className='cards'>
            <h1>Concerts</h1>

            <input className='search' type="text" placeholder="Search..." 
            onChange={event => {
              setSearchTerm(event.target.value)
              }}
              />
            <AiOutlineSearch />

            <div>
                {concerts.filter((val) => {
                  if (searchTerm === "") {
                    return val
                  } else if (val.artist.toLowerCase().includes(searchTerm.toLowerCase())){
                  }
                }).map((concert) => (
                    <ConcertCard  key={concert.id} concert={concert}  />
                    ))}
            </div>
        </div>
     </div>
    );
  }
  
export default ConcertContainer