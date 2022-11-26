import React from "react";
import Details from "./Details";
import './MovieDetails.css'

const MovieDetails = ({details,movieId, getError}) => {
        
    return (
        <div className="movieDetailsContainer">
            <Details movieId={movieId} details={details} getError={getError}/>
        </div>
    )
}

export default MovieDetails
