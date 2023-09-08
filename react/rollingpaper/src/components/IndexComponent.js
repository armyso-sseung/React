import {Button} from "@mui/material";
import {Link} from "react-router-dom";


const IndexComponent = ({ moveToList, moveToRegister }) => {
    return (
        <div className={"index-component"}>
            <h4 className="index-title">ROLLING PAPER</h4>
            <div className="index-button">
                <Button variant={"contained"} color={"primary"} onClick={moveToList}>LIST</Button>
                <Button variant={"contained"} color={"primary"} onClick={moveToRegister}>REG</Button>
            </div>
        </div>
    )
}


export default IndexComponent;