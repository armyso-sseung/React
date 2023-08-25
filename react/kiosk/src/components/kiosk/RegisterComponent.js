import {
    Box,
    Button, Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { DataGrid } from '@mui/x-data-grid';
import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {insertMovie} from "../../apis/KioskApi";


DataGrid.propTypes = {
    columns: PropTypes.any,
    rows: PropTypes.any
};
const RegisterComponent = ({movieList}) => {
    const [ movie, setMovie ] = useState({
        title: "",
        price: "",
        path: ""
    })

    const handleChangeTitle = (e) => {
        setMovie({...movie, title: e.target.value})
    }

    const handleChangePrice = (e) => {
        setMovie({...movie, price: e.target.value})
    }

    const handleChangePath = (e) => {
        setMovie({...movie, path: e.target.value})
    }

    const handleClick = async (e) => {
        if (movie.title && movie.price) {
            await insertMovie(movie)
            return
        }

        e.preventDefault()
    }

    return (
        <Box className={"RegisterComponent"}>
            <Grid container justifyContent={'center'}>
                <Grid xs={5} padding={10}>
                    <img src={movie.path} width={220} />
                    <Box component={"form"} onSubmit={handleClick} sx={{display: 'grid'}}>
                        <TextField variant={"outlined"} type={"text"} label={"제목"} sx={{marginY: 1}} value={movie.title} onChange={handleChangeTitle} />
                        <TextField variant={"outlined"} type={"number"} label={"가격"} sx={{marginY: 1}} value={movie.price} onChange={handleChangePrice} />
                        <TextField variant={"outlined"} type={"text"} label={"이미지"} sx={{marginY: 1}} value={movie.path} onChange={handleChangePath} />
                        <Button variant={"contained"} type="submit">ADD</Button>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={5} padding={10}>
                    <TableContainer component={Paper} sx={{width: '40vw', margin: '0 auto'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">TITLE</TableCell>
                                    <TableCell align="center">PRICE</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {movieList.map(movie => (
                                    <TableRow
                                        key={movie.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align={"center"}>{movie.title}</TableCell>
                                        <TableCell align={"center"}>{movie.price}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    )
}


export default RegisterComponent;