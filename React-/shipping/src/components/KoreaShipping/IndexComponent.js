import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell, TableContainer, TableHead,
    TableRow
} from "@mui/material";
import SearchComponent from "../common/SearchComponent";
import Grid from "@mui/material/Unstable_Grid2";
import {useCallback, useState} from "react";
import {getTracking} from "../../apis/koreaShippingApi";


const IndexComponent = ({ courierList, fetchGetTracking, tracking, fetchInsertKorea }) => {
    const [ courier, setCourier ] = useState('')


    const handleChange = useCallback(event => {
        setCourier(event.target.value)
    }, [courier])

    const handleSearch = useCallback(value => {
        if (!courier) {
            alert("택배사를 선택해주시기 바랍니다.")
            return
        }

        const shipping = {
            courierCd: courier,
            invoice: value.trim()
        }

        fetchGetTracking(shipping)
        fetchInsertKorea(shipping)
    }, [courier])

    const findCourierName = useCallback(code => {
        return courierList.find( ele => ele.Code === code )?.Name
    }, [courierList])


    return (
        <Box className={"IndexComponent"}>
            <Grid className={"korea-search"} container justifyContent={"center"}>
                <Grid xs={2} className={"korea-courier"}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">택배사</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={courier}
                            label="택배사"
                            size={"small"}
                            onChange={handleChange}
                        >
                            { courierList.map(ele => (
                                <MenuItem key={ele.Code} value={ele.Code}>{ele.Name}</MenuItem>
                            )) }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={4}>
                    <SearchComponent handleSearch={handleSearch} />
                </Grid>
            </Grid>

            <Box sx={{width: '40vw', margin: '0 auto'}}>
                <Box sx={{marginBottom: '5em', fontWeight: 'bold'}}>
                    <p>운송장 번호 : { tracking.invoiceNo }</p>
                    <p>택배사 : { findCourierName(courier) }</p>
                </Box>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead className={"korea-table-th"}>
                            <TableRow>
                                <TableCell align={"center"}>시간</TableCell>
                                <TableCell align={"center"}>현재 위치</TableCell>
                                <TableCell align={"center"}>배송 상태</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { tracking.trackingDetails?.map( (ele, index) => (
                                <TableRow key={index}>
                                    <TableCell align={"center"}>{ ele.timeString }</TableCell>
                                    <TableCell align={"center"}>{ ele.where }</TableCell>
                                    <TableCell align={"center"}>{ ele.kind }</TableCell>
                                </TableRow>
                            ) ) }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}


export default IndexComponent;