import externalLinkIcon from "../assets/external-link-icon.png"
import editIcon from "../assets/edit-pen-icon.png"
import propTypes from "prop-types";

import {Link} from "react-router-dom";

const CreatorCard = (props) => {
    const iconStyle = {
        width: "2vh",
        height:"2vh",
    };

    return(
        <>
        
        <div className="CreatorCard">

            <article>
                <div className="card-header-name">
                    <h3>{props.creatorName}</h3> 
                    <button>
                        <Link to={'/EditCreator/'+props.creatorId}><img style={iconStyle} src={editIcon} alt="Edit Creator"/></Link>  
                    </button>
                    <button>
                        <a href={props.creatorUrl} target="_blank" rel="noopener noreferrer">
                        <img style={iconStyle} src={externalLinkIcon} alt="External Link"/>
                        </a>
                    </button>
                </div>
                <div className="card-description">
                    <p>{props.creatorDescription}</p>
                </div>
            </article>
        </div>

        </>
    )

}
CreatorCard.propTypes = {
    creatorName: propTypes.string,
    creatorUrl: propTypes.string,
    creatorDescription: propTypes.string,
    creatorImgUrl: propTypes.string,
    creatorId: propTypes.number
}

export default CreatorCard;