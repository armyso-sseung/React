import {Box, Button, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {AiOutlineSearch} from "react-icons/ai";
import {useState} from "react";
import "../../style/css/common.css"


const SearchComponent = ({ handleSearch }) => {
    const LABEL = {
                        search: "송장번호"
                    }

    const [value, setValue] = useState('')

    const handleChange = ( event ) => {
        setValue(event.target.value)
    }

    const handleClick = ( event ) => {
        if (value && (event.key === "Enter" || event.type === "click")) {
            handleSearch(value)
            setValue('')
        }
    }

    return (
        <Box className={"SearchComponent"}>
            <Grid container={true} >
                <Grid xs={9}>
                    <TextField label={LABEL.search} size={"small"} fullWidth={true} value={value} onChange={handleChange} onKeyDown={handleClick} color={"success"} />
                </Grid>
                <Grid xs={3} paddingLeft={1}>
                    <Button variant={"contained"} fullWidth={true} color={"success"} onClick={handleClick} >
                        <AiOutlineSearch />
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
 }


 export default SearchComponent;