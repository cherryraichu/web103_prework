import {Link} from "react-router-dom";
const ViewCreator = () => {
    return(
        <>
         {/*Nav Bar*/}
         <div id="navbar">
            <h1>Creatorverse - Health and Fitness</h1>
            <div id="navButtons">
                <button><Link to={`/`}><h2>View All Creators</h2></Link></button>
                <button><Link to={`AddCreator`}><h2>Add a Creator</h2></Link></button>
            </div>
        </div>
       
        <h1>View Creator Page</h1>
        
        
        </>
    )


}

export default ViewCreator;