import ConcertCard from '../Concert/ConcertCard'
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Concert/Style/ConcertCard.css'



const ConcertContainer = ({concerts}) => {

  console.log(concerts)

    return (
     <div className='cards'>
         <h1>Concerts</h1>
         <div>
             {concerts?.map((concert) => (
                <ConcertCard  key={concert.id} concert={concert}  />
                ))}
         </div>
     </div>
    );
  }
  
export default ConcertContainer