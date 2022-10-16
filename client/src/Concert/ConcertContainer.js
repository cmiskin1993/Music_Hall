import ConcertCard from '../Concert/ConcertCard'


const ConcertContainer = ({concerts}) => {

    return (
     <div>
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