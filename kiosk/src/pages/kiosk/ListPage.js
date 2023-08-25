import BaseLayout from "../../components/layout/BaseLayout";
import ListComponent from "../../components/kiosk/ListComponent";
import {deleteMovie, getMovieList} from "../../apis/KioskApi";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


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
        <BaseLayout>
            <ListComponent movieList={movieList} fetchDeleteMovie={fetchDeleteMovie} goDetailPage={goDetailPage} />
        </BaseLayout>
    )
}


export default ListPage;