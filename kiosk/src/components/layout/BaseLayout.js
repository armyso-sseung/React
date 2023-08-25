import {Box, Breadcrumbs, Container, Link, Typography} from "@mui/material";
import * as PropTypes from "prop-types";

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
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            HOME
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/kiosk"
                        >
                            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            List
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/kiosk/register"
                        >
                            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Register
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/kiosk/reservation"
                        >
                            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
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