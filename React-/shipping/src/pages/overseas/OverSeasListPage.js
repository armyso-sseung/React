import OverseasLayout from "../../layouts/OverseasLayout";
import {Box} from "@mui/material";
import ListComponent from "../../components/OverseasShipping/ListComponent";
import {useEffect, useState} from "react";
import {deleteOverseas, getOverseasList} from "../../apis/OverseasShippingApi";


const OverSeasListPage = () => {
    const [overseasList, setOverseasList] = useState([])

    useEffect(() => {
        getOverseasList().then(data => setOverseasList(data))
    }, [])

    const fetchDeleteOverseas = async (id) => {
        await deleteOverseas(id).then(`DEL SUCCESS`)
        getOverseasList().then(data => setOverseasList(data))
    }


    return (
        <OverseasLayout>
            <Box className={"OverseasListPagee"}>
                <ListComponent overseasList={overseasList} fetchDeleteOverseas={fetchDeleteOverseas} />
            </Box>
        </OverseasLayout>
    )
}


export default OverSeasListPage;