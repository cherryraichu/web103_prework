import {useParams} from "react-router-dom";
import { useEffect,useState,createRef } from "react";
import Navbar from "../components/navbar";

import { supabase } from "../client";


const ViewCreator = () => {
    const params = useParams();
    const editCreatorLnk = `/EditCreator/${params.id}`
    const nameRef = createRef(null);
    const descriptionRef = createRef(null);
    const socialMediaRef = createRef(null);
    const imgRef = createRef(null);

    const [creatorProfile, setCreatorProfile] = useState({
        name: "",
        description: "",
        socialMedia: "",
        image: ""
    })

    async function fetchCreator(id) {
        const {data,error} = await supabase.from('creator').select('*').eq('id',id);
        if (error) { console.log('error',error);}
        else { setCreatorProfile(data);
            console.log(creatorProfile)
        } 
    }
    useEffect(()=>{
        fetchCreator(params.id);
    },[])

    useEffect(()=>{
        console.log("useEffect for setting profile")
        if (nameRef.current) {
            nameRef.current.innerHTML = creatorProfile[0]?.name || "";
            socialMediaRef.current.innerHTML =  "@"+creatorProfile[0]?.name || "";
            imgRef.current.alt = creatorProfile[0]?.name || "";
        }

        if (descriptionRef.current) {
            descriptionRef.current.innerHTML = creatorProfile[0]?.description || "";
        }

        if (socialMediaRef.current) {
            socialMediaRef.current.href = creatorProfile[0]?.socialMedia || "";
        }

        if (imgRef.current) {
            imgRef.current.src = creatorProfile[0]?.image || "";
        }
    },[creatorProfile.name,
        creatorProfile.description,
        creatorProfile.socialMedia,
        creatorProfile.image
    ])

    async function deleteCreator() {
        const { data, error } = await supabase.from('creator').delete().eq('id',params.id)    
        if (error) {
            console.log('error',error);
        }
        else{
            window.alert("Changes were successful");
            window.location = "/";
        }
    }

    return(
        <>
        <Navbar/>
        <div className="ViewCreator">
            <section className="creator-image">
                <img ref={imgRef} id="viewCreatorImg" />
            </section>
            <section className="creator-content">
                <section className="creator-info">
                    <h2 ref={nameRef}>Creator</h2>
                    <p ref={descriptionRef}>Description</p>
                    <button className="social-button"><a ref={socialMediaRef} target="_blank" rel="noopener noreferrer">@Creator</a></button>
                </section>
                <section className="modify-creator">
                    <a href={editCreatorLnk}><button>Edit Creator</button></a>
                    <br/><br/>
                    <button className="delete-button" onClick={deleteCreator}>⚠️Delete Creator</button>
                </section>
            </section>
        </div>              
        </>
    )


}

export default ViewCreator;