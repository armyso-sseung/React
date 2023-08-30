import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import SearchComponent from "../common/SearchComponent";
import Grid from "@mui/material/Unstable_Grid2";


const IndexComponent = ({ shipping, handleSearch }) => {
    const handleFindData = ( item, name ) => {
        const ship = item?.find(ele => ele.name === name)
        return ship?.children[0]?.content
    }


    return (
        <Box className={"IndexComponent"} >
            <Grid className={"overseas-search"} container justifyContent={"center"}>
                <Grid xs={5}>
                    <SearchComponent handleSearch={handleSearch} />
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{width: '40vw', margin: '0 auto'}}>
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell className={"overseas-table-th"} align="center">상품명</TableCell>
                            <TableCell align="center">{ handleFindData(shipping, "prnm") }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={"overseas-table-th"} align="center">통관진행장소</TableCell>
                            <TableCell align="center">{ handleFindData(shipping, "dsprNm") }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={"overseas-table-th"} align="center">통관진행상태</TableCell>
                            <TableCell align="center">{ handleFindData(shipping, "csclPrgsStts") }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={"overseas-table-th"} align="center">최종상태</TableCell>
                            <TableCell align="center">{ handleFindData(shipping, "prgsStts") }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}


export default IndexComponent;