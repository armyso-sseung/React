import {Box, Button} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const IndexComponent = ({ goKoreaShipping, goOverseasShipping }) => {
    return (
        <Box className={"IndexComponent"}>
            <Grid container justifyContent={"center"}>
                <Grid xs={3} className={"index-button-group"}>
                    <Button variant={"contained"} fullWidth={true} onClick={goKoreaShipping}>택배조회</Button>
                    <Button variant={"contained"} fullWidth={true} onClick={goOverseasShipping}>통관조회</Button>
                </Grid>
            </Grid>
        </Box>
    )
}


export default IndexComponent;