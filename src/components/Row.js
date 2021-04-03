import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { img300 } from "../config/config";

const Row = ({ title, fetchURL, isLargeRow }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchURL])

    console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map(movie => 
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && 'row__posterLarge' }`} 
                    src={`${img300}/${ isLargeRow 
                        ? movie.poster_path 
                        : movie.backdrop_path
                    }`} alt={movie.name}
                />)
            )}
            </div>
        </div>
    )
}

export default Row
