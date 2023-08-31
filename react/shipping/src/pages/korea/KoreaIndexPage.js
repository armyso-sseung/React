import IndexComponent from "../../components/KoreaShipping/IndexComponent";
import {useEffect, useState} from "react";
import {getCourierList, getKoreaList, getTracking, insertKorea} from "../../apis/koreaShippingApi";
import KoreaLayout from "../../layouts/KoreaLayout";


const KoreaIndexPage = () => {
    const [ courierList, setCourierList ] = useState([])
    const [ tracking, setTracking ] = useState({})


    useEffect(() => {
        fetchGetCourierList()
    }, [])

    const fetchGetCourierList = async () => {
        const data = await getCourierList()
        setCourierList(data)
    }

    const fetchGetTracking = async (shipping) => {
        const data = await getTracking(shipping)
        if (!data.invoiceNo) {
            alert(data.msg)
            return
        }
        setTracking(data)
    }

    const fetchInsertKorea = async ( {courierCd, invoice} ) => {
        const koreaShippingList = await getKoreaList()
        const shipping = koreaShippingList?.find(ele => ele.courierCd === courierCd)
        if (shipping) return

        const courier = courierList?.find(ele => ele.Code === courierCd)
        const koreaInfo = {
            courierCd: courier.Code,
            courierNm: courier.Name,
            invoice
        }

        await insertKorea(koreaInfo)
    }


    return (
        <KoreaLayout>
            <IndexComponent courierList={courierList} fetchGetTracking={fetchGetTracking} tracking={tracking} fetchInsertKorea={fetchInsertKorea} />
        </KoreaLayout>
    )
}


export default KoreaIndexPage;