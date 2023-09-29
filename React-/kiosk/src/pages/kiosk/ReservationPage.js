import ReservationListComponent from "../../components/kiosk/ReservationListComponent";
import React, {useCallback, useEffect, useState} from "react";
import {getMovieList} from "../../apis/KioskApi";
import Grid from "@mui/material/Unstable_Grid2";
import ReservationPaymentComponent from "../../components/kiosk/ReservationPaymentComponent";
import {Divider} from "@mui/material";


const ReservationPage = () => {
    const [movieList, setMovieList] = useState([])
    const [cartList, setCartList] = useState([])


    useEffect(() => {
        getMovieList().then(data => setMovieList(data))
    }, [])

    const handleClickMovie = useCallback(movie => {
        const cart = cartList.find(cart => cart.id === movie.id)
        if (!cart) {
            setCartList(cartList.concat({...movie, count: 1}))
            return
        }

        setCartList(cartList.map(cart => cart.id === movie.id ? {...cart, count: cart.count + 1} : cart))
    }, [cartList])

    const handleClickAmount = useCallback((cart, amount) => {
        if ((cart.count + amount) <= 0) {
            setCartList(cartList.filter(c => c.id !== cart.id))
            return
        }

        setCartList(cartList.map(c => c.id === cart.id ? {...c, count: c.count + amount} : c))
    }, [cartList])


    return (
        <Grid container justifyContent={"center"}>
            <Grid xl={7.5} lg={7.5} md={7.5} xs={12} >
                <ReservationListComponent movieList={movieList} handleClickMovie={handleClickMovie} />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid xl={4} lg={4} md={4} xs={12} >
                <ReservationPaymentComponent cartList={cartList} handleClickAmount={handleClickAmount} />
            </Grid>
        </Grid>
    )
}


export default ReservationPage;