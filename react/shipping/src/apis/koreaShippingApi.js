import axios from "axios";
import {xmlToJson2} from "../util/common";


const SWEETTRACKER_URL = 'http://info.sweettracker.co.kr/api/v1'
const BASE_URL = 'http://localhost:80/koreaShipping'


export const getCourierList = async () => {
    return await axios.get(`${SWEETTRACKER_URL}/companylist`,
        {
            params: {
                t_key: process.env.REACT_APP_SWEETTRACKER_API_KEY
            }
        })
        .then(r => {return r.data.Company})
        .catch(error => console.error(error))
}

export const getTracking = async ({ code, invoice }) => {
    return await axios.get(`${SWEETTRACKER_URL}/trackingInfo`,
        {
            params: {
                t_key: process.env.REACT_APP_SWEETTRACKER_API_KEY,
                t_code: code,
                t_invoice: invoice
            }
        })
        .then(r => { return r.data })
        .catch(error => console.error(error))
}


export const getKoreaList = async () => {
    const res = await axios.get(`${BASE_URL}`)
    return res.data
}

export const insertKorea = async (korea) => {
    await axios.post(`${BASE_URL}`, korea)
        .then(r => console.log(`API 통신에 성공하였습니다.`))
        .catch(error => console.error(error))
}