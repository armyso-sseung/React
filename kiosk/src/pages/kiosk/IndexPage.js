import BaseLayout from "../../components/layout/BaseLayout";
import IndexComponent from "../../components/kiosk/IndexComponent";
import {useNavigate} from "react-router-dom";


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
        <BaseLayout>
            <IndexComponent goListPage={goListPage} goRegisterPage={goRegisterPage} goReservationPage={goReservationPage} />
        </BaseLayout>
    )
}


export default IndexPage;