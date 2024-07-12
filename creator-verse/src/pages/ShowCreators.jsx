import React from 'react';


//Fetch the data from the database



const ShowCreators = () => {
    return(
        <>
            <div id="navbar">
                <h1>Creatorverse - Health and Fitness</h1>
                <div id="navButtons">
                    <button><h2>View All Creators</h2></button>
                    <button><h2>Add a Creator</h2></button>
                </div>
            </div>

            <h1>Show Creators Page</h1>
            <div id="allCreatorCards">
            {/* Put the creator cards here*/}
            


            </div>
        </>
    )

}

export default ShowCreators;