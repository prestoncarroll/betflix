import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original/";



function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {

        //if [], run once when the row loads and dont run again
        // if [wenfiwnfier], full it will run 
        async function fetchData() {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results);

            return request;

        }

        fetchData();
    }, [fetchUrl])

    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {/* several row posters */}

                {movies.map(movie => (

                    <img
                        key={movie.id}
                        className="row-poster"
                        src={`${base_url}${movie.poster_path}`} alt={movie.name}
                    />

                ))}
            </div>




        </div>
    )
}

export default Row
