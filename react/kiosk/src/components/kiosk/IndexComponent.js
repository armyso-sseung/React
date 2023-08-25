import BaseLayout from "../layout/BaseLayout";
import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";


const IndexComponent = ({ goListPage, goRegisterPage, goReservationPage }) => {
    return (
        <div className="IndexComponent">
            <Box margin={"0 auto"} width={500} textAlign={"center"} paddingY={"35vh"} display={"grid"}>
                <Button variant={"contained"} color={"primary"} sx={{ marginY: '10px' }} onClick={goListPage}>
                    List
                </Button>
                <Button variant={"contained"} color={"primary"} sx={{ marginY: '10px' }} onClick={goRegisterPage}>
                    Register
                </Button>
                <Button variant={"contained"} color={"primary"} sx={{ marginY: '10px' }} onClick={goReservationPage}>
                    Reservation
                </Button>
            </Box>
        </div>
    )
}


export default IndexComponent;