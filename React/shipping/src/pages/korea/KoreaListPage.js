import KoreaLayout from "../../layouts/KoreaLayout";
import ListComponent from "../../components/KoreaShipping/ListComponent";
import {useEffect, useState} from "react";
import {deleteKorea, getKoreaList, getTracking} from "../../apis/koreaShippingApi";


const KoreaListPage = () => {
    const [ koreaList, setKoreaList ] = useState([])


    useEffect(() => {
        getKoreaList().then(data => setKoreaList(data))
    }, [])

    const fetchDeleteKorea = async (id) => {
        await deleteKorea(id).then(`DEL SUCCESS`)
        getKoreaList().then(data => setKoreaList(data))
    }


    return (
        <KoreaLayout>
            <ListComponent koreaList={koreaList} fetchDeleteKorea={fetchDeleteKorea} />
        </KoreaLayout>
    )
}


export default KoreaListPage;