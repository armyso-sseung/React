import {Box, Breadcrumbs, Container} from "@mui/material";
import * as PropTypes from "prop-types";
import {Link, Outlet} from "react-router-dom";
import "../../style/baseLayout.css"


function GrainIcon(props) {
    return null;
}

GrainIcon.propTypes = {
    sx: PropTypes.shape({mr: PropTypes.number}),
    fontSize: PropTypes.string
};

function WhatshotIcon(props) {
    return null;
}

WhatshotIcon.propTypes = {
    sx: PropTypes.shape({mr: PropTypes.number}),
    fontSize: PropTypes.string
};
const BaseLayout = ({ children }) => {
    return (
        <Container maxWidth={"lx"} className={"BaseLayout"}>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Box className={"Nav"} margin={"0 20px"}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to={'/'} sx={{display: 'flex', alignItems: 'center'}}>
                            HOME
                        </Link>
                        <Link to={'/kiosk/list'} sx={{display: 'flex', alignItems: 'center'}}>
                            List
                        </Link>
                        <Link to={'/kiosk/register'} sx={{display: 'flex', alignItems: 'center'}}>
                            Register
                        </Link>
                        <Link to={'/kiosk/reservation'} sx={{display: 'flex', alignItems: 'center'}}>
                            Reservation
                        </Link>
                    </Breadcrumbs>
                </Box>

                {children}
            </Box>
        </Container>
    )
}


export default BaseLayout;