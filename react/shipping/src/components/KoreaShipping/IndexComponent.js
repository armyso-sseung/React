import {Box} from "@mui/material";
import SearchComponent from "../common/SearchComponent";
import Grid from "@mui/material/Unstable_Grid2";
import {useEffect, useState} from "react";
import {getKoreaShipping} from "../../apis/koreaShippingApi";


const IndexComponent = () => {
    const [ value, setValue ] = useState()
    const [ shipping, setShipping ] = useState([])

    useEffect(() => {
        if (value) {
            fetchGetKoreaShipping()
        }
    }, [value])

    const handleSearch = (value) => {
        setValue(value)
    }

    const fetchGetKoreaShipping = async () => {
        const data = await getKoreaShipping(value)
        setShipping(data)
    }

    const handleFindData = ( item, name ) => {
        const content = item.name === name ? item.children[0]?.content : ''
        if (content) {
            return content
        }
    }

    return (
        <Box className={"IndexComponent"}>
            <Grid container>
                <Grid xs={3}>
                    <SearchComponent handleSearch={handleSearch} />
                </Grid>
            </Grid>
            { shipping.map((item, idx) => (
                <p key={idx}>{handleFindData(item, "prnm")}</p>
            )) }
        </Box>
    )
}


export default IndexComponent;