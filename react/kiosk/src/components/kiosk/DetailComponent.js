import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const DetailComponent = ({ movie }) => {
    return (
        <Box className={"DetailComponent"}>
            <Grid container justifyContent={'center'} >
                <Grid xs={5}>
                    <img src={movie.path} height={'700px'} />
                </Grid>
                <Grid xs={5}>
                    <Typography variant={'h3'} height={'650px'}>
                        {movie.title}
                    </Typography>
                    <Typography variant={'h5'}>
                        가격 : {movie.price}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}


export default DetailComponent;