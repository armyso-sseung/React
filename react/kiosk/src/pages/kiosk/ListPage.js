import BaseLayout from "../../components/layout/BaseLayout";
import ListComponent from "../../components/kiosk/ListComponent";
import {deleteMovie, getMovieList} from "../../apis/KioskApi";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Box} from "@mui/material";
import KioskLayout from "../../components/layout/KioskLayout";


const ListPage = () => {
    const [ movieList, setMovieList ] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetchGetMovieList()
    }, [])

    const fetchGetMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    const fetchDeleteMovie = async (id) => {
        await deleteMovie(id)
        fetchGetMovieList()
    }

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