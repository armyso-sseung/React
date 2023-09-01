import {Box, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const DetailComponent = ({ movie }) => {
    return (
        <Box className={"DetailComponent"}>
            <Grid container className={"detail-wrap"} justifyContent={'center'} >
                <Grid xs={5} className={"detail-img-wrap"}>
                    <img src={movie.path} />
                </Grid>
                <Grid xs={5} className={"detail-info-wrap"}>
                    <Box className={"detail-info-h3"}>
                        <Typography variant={'h3'}>
                            {movie.title}
                        </Typography>
                    </Box>
                    <Box className={"detail-info-h5"}>
                        <Typography variant={'h5'}>
                            가격 : {movie.price}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


export default DetailComponent;