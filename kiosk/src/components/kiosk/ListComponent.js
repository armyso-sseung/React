import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";


const ListComponent = ({ movieList, fetchDeleteMovie, goDetailPage }) => {
    return (
        <Box className={"ListComponent"} padding={2}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {movieList?.map(movie => (
                    <Grid xs={3} key={movie.id}>
                        <Card xs={{ maxWidth: 400 }}>
                            <CardActionArea onClick={() => goDetailPage(movie.id)}>
                                <CardMedia
                                    component="img"
                                    image={movie.path}
                                    alt={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" component="div" fontWeight="bold">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">
                                        가격 : {movie.price} 원
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Button fullWidth={true} variant={"contained"} color={"error"} onClick={() => fetchDeleteMovie(movie.id)}>DELETE</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}


export default ListComponent;