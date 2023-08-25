import {Box, Button, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const SearchComponent = ({ inputSize }) => {
    const LABEL = {
                        search: "송장번호"
                    }

    return (
        <Box className={"SearchComponent"}>
            <Grid container={true} maxWidth={`${ inputSize }vw`}>
                <Grid xs={8}>
                    <TextField label={LABEL.search} size={"small"} fullWidth={true} />
                </Grid>
                <Grid xs={4}>
                    <Button variant={"contained"} fullWidth={true}>ss</Button>
                </Grid>
            </Grid>
        </Box>
    )
 }


 export default SearchComponent;