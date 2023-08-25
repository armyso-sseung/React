import BaseLayout from "../../components/layout/BaseLayout";
import ReservationListComponent from "../../components/kiosk/ReservationListComponent";
import React, {useEffect, useState} from "react";
import {getMovieList} from "../../apis/KioskApi";
import Grid from "@mui/material/Unstable_Grid2";
import ReservationPaymentComponent from "../../components/kiosk/ReservationPaymentComponent";
import {Divider} from "@mui/material";


const ReservationPage = () => {
    const [movieList, setMovieList] = useState([])
    const [cartList, setCartList] = useState([])

    useEffect(() => {
        fetchGetMovieList()
    }, [])

    const fetchGetMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    const handleClickMovie = (movie) => {
        const cart = cartList.find(cart => cart.id === movie.id)
        if (!cart) {
            setCartList(cartList.concat({...movie, count: 1}))
            return
        }

        setCartList(cartList.map(cart => cart.id === movie.id ? {...cart, count: cart.count + 1} : cart))
    }

    const handleClickAmount = (cart, amount) => {
        if ((cart.count + amount) <= 0) {
            setCartList(cartList.filter(c => c.id !== cart.id))
            return
        }

        setCartList(cartList.map(c => c.id === cart.id ? {...c, count: c.count + amount} : c))
    }

    return (
        <BaseLayout>
            <Grid container>
                <Grid xs={7.5} >
                    <ReservationListComponent movieList={movieList} handleClickMovie={handleClickMovie} />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid xs={4} >
                    <ReservationPaymentComponent cartList={cartList} handleClickAmount={handleClickAmount} />
                </Grid>
            </Grid>
        </BaseLayout>
    )
}


export default ReservationPage;