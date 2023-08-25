import BaseLayout from "../layouts/BaseLayout";
import IndexComponent from "../components/IndexComponent";
import {useNavigate} from "react-router-dom";


const IndexPage = () => {
    const navigate = useNavigate()

    const goKoreaShipping = () => {
        navigate("/korea")
    }

    const goOverseasShipping = () => {
        navigate("/overseas")
    }

    return (
        <BaseLayout>
            <IndexComponent goKoreaShipping={goKoreaShipping} goOverseasShipping={goOverseasShipping} />
        </BaseLayout>
    )
}


export default IndexPage;