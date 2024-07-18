import {useEffect,useState} from 'react';

import CreatorCard from '../components/creatorCard';
import {supabase} from '../client';
import {Link} from "react-router-dom";


const ShowCreators = () => {
    const [creatorsLst, setCreatorsLst] = useState([]);
    async function fetchAllCreators() {
        const {data,error} = await supabase.from('creator').select('*');
        if (error) {
          console.log('error',error);
        }
        else {
            setCreatorsLst(data);
        } 
    }
    
    useEffect(() => {
        fetchAllCreators();
    },[])

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

            {/* WIP - Container for all Creator Cards*/}
            <div id="CreatorCardsContainer">
                {creatorsLst.length > 0? 
                    creatorsLst.map((currCreator)=>{
                    return <CreatorCard creatorName={currCreator.name}
                    creatorUrl={currCreator.url} creatorDescription={currCreator.description} creatorImgUrl={currCreator.image_url}/>;
                }) 
                : <p>No Creators Yet</p>}

            </div>
        </>
    )

}

export default ShowCreators;