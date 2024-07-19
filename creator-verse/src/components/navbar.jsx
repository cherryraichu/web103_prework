import fitnessIcon from "../assets/weights.png"
import {Link} from "react-router-dom";

const Navbar = () => {
    const fitnessIconStyle = {
        width: "8vh",
        height:"8vh",
    };
  
    return(
        <>
         {/*Nav Bar*/}
         <div id="navbar">
            <h1><img src={fitnessIcon} style={fitnessIconStyle}/> Creatorverse - Health and Fitness</h1>
            <div id="navButtons">
                <button><Link to={`/`}><h2>View All Creators</h2></Link></button>
                <button><Link to={`AddCreator`}><h2>Add a Creator</h2></Link></button>
            </div>
        </div>       
        </>
    )

}

export default Navbar;