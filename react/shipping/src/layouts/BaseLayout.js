import {Box, Container} from "@mui/material";
import "../style/css/baseLayout.css"


const BaseLayout = ({ children }) => {
    return (
        <Container maxWidth={"lx"}>
            <Box className={"BaseLayout"} justifyContent={"center"} bgcolor={"#cfe8fc"} minHeight={"100vh"} padding={10}>
                { children }
            </Box>
        </Container>
    )
}


export default BaseLayout;