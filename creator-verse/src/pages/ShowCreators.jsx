import {useEffect,useState} from 'react';

import CreatorCard from '../components/creatorCard';
import Navbar  from '../components/navbar';

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
            <Navbar/>
            {/* Container for all Creator Cards*/}
            <div id="CreatorCardsContainer">
                {creatorsLst.length > 0? 
                    creatorsLst.map((currCreator)=>{
                    return <CreatorCard creatorName={currCreator.name}
                    creatorUrl={currCreator.url} creatorDescription={currCreator.description} creatorImgUrl={currCreator.image_url}
                    creatorId={currCreator.id}/>;
                }) 
                : <p>No Creators Yet</p>}

            </div>
        </>
    )

}

export default ShowCreators;