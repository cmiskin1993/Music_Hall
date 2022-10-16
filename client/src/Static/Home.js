import ConcertContainer from '../Concert/ConcertContainer'
import ConcertImage from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/assets/the-fillmore-philadelphia-balcony-new-crtsy-the-fillmore-2200x1237px.jpeg'

function Home({concerts}){
    return(
    <div>
        <img src={ConcertImage} alt="music" ></img> 
        <ConcertContainer concerts={concerts} />
    </div>
    )
}

export default Home