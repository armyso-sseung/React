import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const ListComponent = ({ koreaList, fetchDeleteKorea }) => {
    return (
        <Box className={"ListComponent"}>
            <TableContainer component={Paper} sx={{width: '100%', margin: '0 auto'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={"korea-table-th"}>
                            <TableCell align="center">택배사</TableCell>
                            <TableCell align="center">송장번호</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {koreaList?.map(korea => (
                            <TableRow
                                key={korea.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align={"center"}>{korea.courierNm}</TableCell>
                                <TableCell align={"center"}>{korea.invoice}</TableCell>
                                <TableCell align={"center"}>
                                    <Button variant={"contained"} color={"error"} onClick={() => fetchDeleteKorea(korea.id)}>삭제</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}


export default ListComponent;