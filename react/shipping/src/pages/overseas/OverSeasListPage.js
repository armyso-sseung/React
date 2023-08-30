import OverseasLayout from "../../layouts/OverseasLayout";
import {Box} from "@mui/material";
import ListComponent from "../../components/OverseasShipping/ListComponent";
import {useEffect, useState} from "react";
import {deleteOverseas, getOverseasList} from "../../apis/OverseasShippingApi";


const OverSeasListPage = () => {
    const [overseasList, setOverseasList] = useState([])

    useEffect(() => {
        fetchGetOverseasList()
    }, [])

    const fetchGetOverseasList = async () => {
        const data = await getOverseasList()
        setOverseasList(data)
    }

    const fetchDeleteOverseas = async (id) => {
        await deleteOverseas(id)
            .then(fetchGetOverseasList())
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