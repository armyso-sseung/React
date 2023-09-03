import RegisterComponent from "../../components/kiosk/RegisterComponent";
import {useCallback, useEffect, useState} from "react";
import {getMovieList, insertMovie} from "../../apis/KioskApi";


const RegisterPage = () => {
    const [ movieList, setMovieList ] = useState([])


    useEffect(() => {
        getMovieList().then(data => setMovieList(data))
    }, [])

    const fetchInsertMovie = useCallback(movie => {
        insertMovie(movie).then(result => console.log(`INSERT RESULT : ${result}`))
    }, [])


    return (
        <RegisterComponent movieList={movieList} fetchInsertMovie={fetchInsertMovie} />
    )
}


export default RegisterPage;