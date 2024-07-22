import { useState,useEffect,createRef} from "react";
import {useParams} from "react-router-dom";
import { supabase } from "../client";
import Navbar from "../components/navbar";

const EditCreator = () => {
    const params = useParams();
    const [originalForm, setoriginalForm] = useState({
        name: "",
        description: "",
        socialMedia: "",
        image: ""
    })
    const [updatedForm, setUpdatedForm] = useState({
        name: "",
        description: "",
        socialMedia: "",
        image: ""
    })

    const nameRef = createRef(null);
    const descriptionRef = createRef(null);
    const socialMediaRef = createRef(null);
    const imgRef = createRef(null);

    async function fetchCreator(id) {
        const {data,error} = await supabase.from('creator').select('*').eq('id',id);
        if (error) { console.log('error',error);}
        else { setoriginalForm(data);} 
    }

    useEffect(()=>{
        fetchCreator(params.id);
    },[])
    useEffect(()=>{
        if (nameRef.current) {
            nameRef.current.value = originalForm[0]?.name || "";
        }

        if (descriptionRef.current) {
            descriptionRef.current.value = originalForm[0]?.description || "";
        }

        if (socialMediaRef.current) {
            socialMediaRef.current.value = originalForm[0]?.socialMedia || "";
        }

        if (imgRef.current) {
            imgRef.current.value = originalForm[0]?.image || "";
        }
    },[originalForm.name,
        originalForm.description,
        originalForm.socialMedia,
        originalForm.image
    ])

    
    function handleInput(event) {
        const value = event.target.value;
        if (nameRef.current) {
            setUpdatedForm((prevState) => ({
              ...prevState,
              name: nameRef.current.value,
            }));
          }
        if (descriptionRef.current) {
        setUpdatedForm((prevState) => ({
            ...prevState,
            description: descriptionRef.current.value,
        }));
        }
        if (imgRef.current) {
            setUpdatedForm((prevState) => ({
                ...prevState,
                image: imgRef.current.value,
            }));
        }
        if (socialMediaRef.current) {
            setUpdatedForm((prevState) => ({
                ...prevState,
                socialMedia: socialMediaRef.current.value,
            }));
        }
        console.log(updatedForm)
    }

    async function submitCreatorChanges() {
        const { data, error } = await supabase.from('creator').update(updatedForm).eq('id',params.id)    
        if (error) {
            console.log('error',error);
        }
        else{
            window.alert("Changes were successful");
        }
    }

    async function deleteCreator() {
        const { data, error } = await supabase.from('creator').delete().eq('id',params.id)    
        if (error) {
            console.log('error',error);
        }
        else{
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
                <input ref={nameRef} type="text" id="name" name="name" onChange={handleInput}required/>


                <br/><br/>
                <label><h2>Image</h2> <p><h3 className="labelDescription"><i>Provide a link to an image of your creator. Be sure to include the http://</i></h3></p>
                </label>
                <input ref={imgRef} type="text" id="image" name="image" onChange={handleInput}/>
                
                <br/><br/>
                <label><h2>Description</h2> <p><h3 className="labelDescription"><i>Provide a description of the creator. Who are they? What makes them interesting?</i></h3></p>
                </label>
                <textarea ref={descriptionRef} name="description" rows="3" cols="50" id="description" onChange={handleInput} required></textarea>
                
                <label><h2>Social Media </h2><p><h3 className="labelDescription"><i>Provide one of the creator's social media links.</i></h3></p></label>  
                <input ref={socialMediaRef} type="text" id="socialMedia" name="socialMedia" onChange={handleInput} required/>
                <br/><br/>
                <button id="EditBtn" type="submit" onClick={submitCreatorChanges}><h2>Submit Changes</h2></button>
                <br/> <br/>
                <button id="DeleteCreatorBtn" type="submit" onClick={deleteCreator}><h2>⚠️ Delete Creator</h2></button>

            </form>
        </div>
        
        
        </>
    )


}

export default EditCreator;