import HomeVideo from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/assets/Concert - 1630.mp4'
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/Music_Hall/client/src/Static/Home.css'


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