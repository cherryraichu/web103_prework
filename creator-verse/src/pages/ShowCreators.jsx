import {useEffect,useState} from 'react';

import CreatorCard from '../components/creatorCard';
import {supabase} from '../client';

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
                    <button><h2>View All Creators</h2></button>
                    <button><h2>Add a Creator</h2></button>
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