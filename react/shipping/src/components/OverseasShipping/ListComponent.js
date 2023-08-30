import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


const ListComponent = ({ overseasList, fetchDeleteOverseas }) => {
    return (
        <Box className={"ListComponent"}>
            <TableContainer component={Paper} sx={{width: '100%', margin: '0 auto'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={"overseas-table-th"}>
                            <TableCell align="center">송장번호</TableCell>
                            <TableCell align="center">상품명</TableCell>
                            <TableCell align="center">통관진행장소</TableCell>
                            <TableCell align="center">통관진행상태</TableCell>
                            <TableCell align="center">최종상태</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {overseasList.map(overseas => (
                            <TableRow
                                key={overseas.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align={"center"}>{overseas.hblNo}</TableCell>
                                <TableCell align={"center"}>{overseas.prnm}</TableCell>
                                <TableCell align={"center"}>{overseas.dsprNm}</TableCell>
                                <TableCell align={"center"}>{overseas.csclPrgsStts}</TableCell>
                                <TableCell align={"center"}>{overseas.prgsStts}</TableCell>
                                <TableCell align={"center"}>
                                    <Button variant={"contained"} color={"error"} onClick={() => fetchDeleteOverseas(overseas.id)}>삭제</Button>
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