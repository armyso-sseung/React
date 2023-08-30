import {Box, Breadcrumbs, Container, Divider, Link} from "@mui/material";
import BaseLayout from "./BaseLayout";
import '../style/css/KoreaLayout.css'


const KoreaLayout = ({ children }) => {
    return (
        <BaseLayout>
            <Container>
                <Box className={"KoreaLayout"}>
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
                                href="/korea"
                            >
                                SEARCH
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/korea/list"
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


export default KoreaLayout;