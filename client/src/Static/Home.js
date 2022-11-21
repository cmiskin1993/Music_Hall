import HomeVideo from '../assets/Concert - 1630.mp4'
import '../Static/Home.css'


const Home = () =>{

    return(
    <div>
        <div className="overlay"></div>
        <h1 className="headline"> Music is the soundtrack <br/> of your life </h1>
        <video className='grayscale' src={HomeVideo} autoPlay loop ></video>
    </div>
    )
}

export default Home