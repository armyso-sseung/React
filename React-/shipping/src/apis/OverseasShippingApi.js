import axios from "axios";
import {xmlToJson2} from "../util/common";
import {esES, etEE} from "@mui/material/locale";


const BASE_URL = `http://localhost:80/overseasShipping`


export const getOverseasShipping = async ( hblNo ) => {
    return  await axios.get(
        `/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo`,
        {
            params: {
                        crkyCn: process.env.REACT_APP_API_KEY,
                        hblNo,
                        blYy: '2023'
        }})
        .then(r => {
            const jsonData = xmlToJson2(r.data)
            if (!jsonData) {
                alert("등록되지 않은 송장번호 입니다.")
                return
            }

            insertOverseas(jsonData)
            return  jsonData
        })
        .catch(error => {console.error(error)})
}

export const getOverseasList = async () => {
    const res = await axios.get(`${BASE_URL}`)
    return res.data
}

export const insertOverseas = async (overseas) => {
    const overseasInfo = {
        hblNo: overseas?.find(ele => ele.name === "hblNo")?.children[0]?.content,
        prnm: overseas?.find(ele => ele.name === "prnm")?.children[0]?.content,
        dsprNm: overseas?.find(ele => ele.name === "dsprNm")?.children[0]?.content,
        csclPrgsStts: overseas?.find(ele => ele.name === "csclPrgsStts")?.children[0]?.content,
        prgsStts: overseas?.find(ele => ele.name === "prgsStts")?.children[0]?.content
    }

    const overseasList = await getOverseasList()
    if (!overseasList.find(ele => ele.hblNo === overseasInfo.hblNo)) {
        await axios.post(`${BASE_URL}`, overseasInfo)
    }
}

export const deleteOverseas = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`)
        .then(r => console.log(`API 통신에 성공하였습니다.`))
        .catch(error => console.error(error))
}