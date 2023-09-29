import IndexComponent from "../components/IndexComponent";
import {useNavigate} from "react-router-dom";


const IndexPage = () => {
    const navigate = useNavigate()


    const moveToList = () => {
        navigate("/list")
    }

    const moveToRegister = () => {
        navigate("/register")
    }


    return (
        <div className={"index-page"}>
            <IndexComponent moveToList={moveToList} moveToRegister={moveToRegister} />
        </div>
    )
}


export default IndexPage;