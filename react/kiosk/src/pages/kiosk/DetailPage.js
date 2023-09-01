import {useParams} from "react-router-dom";
import {getMovie} from "../../apis/KioskApi";
import {useEffect, useState} from "react";
import DetailComponent from "../../components/kiosk/DetailComponent";


const DetailPage = () => {
    const { id } = useParams()
    const [ movie, setMovie ] = useState([])

    useEffect(() => {
        fetchGetMovie()
    }, [])

    const fetchGetMovie = async () => {
        const data = await getMovie(id)
        setMovie(data)
    }

    return (
        <DetailComponent movie={movie} />
    )
}


export default DetailPage;