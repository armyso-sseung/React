import BaseLayout from "../../components/layout/BaseLayout";
import RegisterComponent from "../../components/kiosk/RegisterComponent";
import {useEffect, useState} from "react";
import {getMovieList} from "../../apis/KioskApi";
import KioskLayout from "../../components/layout/KioskLayout";


const RegisterPage = () => {
    const [ movieList, setMovieList ] = useState([])

    useEffect(() => {
        fetchGetMovieList()
    }, [])

    const fetchGetMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    return (
        <RegisterComponent movieList={movieList} />
    )
}


export default RegisterPage;