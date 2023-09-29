import BaseLayout from "../../components/layout/BaseLayout";
import IndexComponent from "../../components/kiosk/IndexComponent";
import {useNavigate} from "react-router-dom";
import KioskLayout from "../../components/layout/KioskLayout";


const IndexPage = () => {
    const navigate = useNavigate()

    const goListPage = () => {
        navigate('/kiosk')
    }

    const goRegisterPage = () => {
        navigate('/kiosk/register')
    }

    const goReservationPage = () => {
        navigate('/kiosk/reservation')
    }

    return (
        <IndexComponent goListPage={goListPage} goRegisterPage={goRegisterPage} goReservationPage={goReservationPage} />
    )
}


export default IndexPage;