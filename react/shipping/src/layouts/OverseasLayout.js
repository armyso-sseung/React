import {Box, Breadcrumbs, Container, Divider, Link} from "@mui/material";
import BaseLayout from "./BaseLayout";
import '../style/css/OverseasLayout.css'


const OverseasLayout = ({ children }) => {


    return (
        <BaseLayout>
            <Container>
                <Box className={"OverseasLayout"}>
                    <Box className={"nav"}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/"
                            >
                                HOME
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/overseas"
                            >
                                SEARCH
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/overseas/list"
                            >
                                LIST
                            </Link>
                        </Breadcrumbs>
                    </Box>

                    <Divider sx={{margin: "1em 0 2em 0"}} />

                    { children }
                </Box>
            </Container>
        </BaseLayout>
    )
}


export default OverseasLayout;