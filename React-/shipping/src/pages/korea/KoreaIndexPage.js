import IndexComponent from "../../components/KoreaShipping/IndexComponent";
import {useCallback, useEffect, useState} from "react";
import {getCourierList, getKoreaList, getTracking, insertKorea} from "../../apis/koreaShippingApi";
import KoreaLayout from "../../layouts/KoreaLayout";


const KoreaIndexPage = () => {
    const [ courierList, setCourierList ] = useState([])
    const [ tracking, setTracking ] = useState({})


    useEffect(() => {
        getCourierList().then(data => setCourierList(data))
    }, [])

    const fetchGetTracking = useCallback((shipping) => {
        getTracking(shipping).then(data => {
            if (!data.invoiceNo) {
                alert(data.msg)
                return
            }
            setTracking(data)
        })
    }, [])

    const fetchInsertKorea = useCallback( async ({courierCd, invoice}) => {
        const koreaShippingList = await getKoreaList()
        const shipping = koreaShippingList?.find(ele => ele.invoice === invoice)
        if (shipping) return

        const courier = courierList?.find(ele => ele?.Code === courierCd)
        const koreaInfo = {
            courierCd: courier?.Code,
            courierNm: courier?.Name,
            invoice
        }

        await insertKorea(koreaInfo)
    }, [])


    return (
        <KoreaLayout>
            <IndexComponent courierList={courierList} fetchGetTracking={fetchGetTracking} tracking={tracking} fetchInsertKorea={fetchInsertKorea} />
        </KoreaLayout>
    )
}


export default KoreaIndexPage;