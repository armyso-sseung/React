import BaseLayout from "../../components/layout/BaseLayout";
import ListComponent from "../../components/kiosk/ListComponent";
import {deleteMovie, getMovieList} from "../../apis/KioskApi";
import {useCallback, useEffect, useRef, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import KioskLayout from "../../components/layout/KioskLayout";


const ListPage = () => {
    const [ movieList, setMovieList ] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        getMovieList().then(data => setMovieList(data))
    }, [])

    const fetchDeleteMovie = useCallback(async (id) => {
        await deleteMovie(id).then(result => console.log(`DEL RESULT : ${ result }`))
        getMovieList().then(data => setMovieList(data))
    }, [])

    const goDetailPage = (id) => {
        const movie = movieList.find(movie => movie.id === id)
        if (movie) {
            navigate(`/kiosk/${id}`)
        }
    }


    return (
        <ListComponent movieList={movieList} fetchDeleteMovie={fetchDeleteMovie} goDetailPage={goDetailPage} />
    )
}


export default ListPage;