import { useState } from "react";
import { supabase } from "../client";

import Navbar from "../components/navbar";


const AddCreator = () => {
    const [formInput, setformInput] = useState({
        name: "",
        description: "",
        socialMedia: "",
        image: ""
    })

    function handleInput(event) {
        const value = event.target.value;
        console.log(event.target.value);
        setformInput({
          ...formInput,
          [event.target.name]: value
        });
        console.log(formInput)
    }

    async function submitCreator() {
        const { data, error } = await supabase.from('creator').insert([formInput])    
        if (error) {
            console.log('error',error);
        }
        else {
            window.alert("Changes were successful");
        }
    }

    return(
        <>
        <Navbar/>
        {/*Form to Add or Edit a Creator*/}
        <div id="AddEditCreatorContainer">
            <form id="addCreatorForm" onSubmit={e => e.preventDefault()}>
                <label><h2>Creator Name</h2></label>
                <input type="text" id="name" name="name" onChange={handleInput} required/>
                
                <br/><br/>
                <label><h2>Image</h2> <p><h3 className="labelDescription"><i>Provide a link to an image of your creator. Be sure to include the http://</i></h3></p>
                </label>
                <input type="text" id="image" name="image" onChange={handleInput}/>
                
                <br/><br/>
                <label><h2>Description</h2> <p><h3 className="labelDescription"><i>Provide a description of the creator. Who are they? What makes them interesting?</i></h3></p>
                </label>
                <textarea name="description" rows="3" cols="50" id="description" onChange={handleInput} required></textarea>
                
                <label><h2>Social Media </h2><p><h3 className="labelDescription"><i>Provide one of the creator's social media links.</i></h3></p></label>  
                <input type="text" id="socialMedia" name="socialMedia" onChange={handleInput} required/>
                <br/><br/>
                <button id="AddEditSubmitBtn" type="submit" onClick={submitCreator}><h2>Submit</h2></button>
            </form>
        </div>
            
        </>
    )
}

export default AddCreator;