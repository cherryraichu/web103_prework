import {Link} from "react-router-dom";
import fitnessIcon from "../assets/weights.png"

const AddCreator = () => {
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
        
        {/*WIP - Form to Add or Edit a Creator*/}
        <div id="AddEditCreatorContainer">
            <form id="addCreatorForm">
                <label><h2>Creator Name</h2></label>
                <input type="text" id="name" name="name" required="" value=""/>
                
                <br/><br/>
                <label><h2>Image</h2> <p><h3 className="labelDescription"><i>Provide a link to an image of your creator. Be sure to include the http://</i></h3></p>
                </label>
                <input type="text" id="image" name="image" required="" value=""/>
                
                <br/><br/>
                <label><h2>Description</h2> <p><h3 className="labelDescription"><i>Provide a description of the creator. Who are they? What makes them interesting?</i></h3></p>
                </label>
                <textarea name="description" rows="3" cols="50" id="description" required=""></textarea>
                
                <label><h2>Social Media </h2><p><h3 className="labelDescription"><i>Provide one of the creator's social media links.</i></h3></p></label>  
                <input type="text" id="youtube" name="youtube" value=""/>
                <br/><br/>
                <button id="AddEditSubmitBtn" type="submit"><h2>Submit</h2></button>
            </form>
        </div>
            
        </>
    )
}

export default AddCreator;