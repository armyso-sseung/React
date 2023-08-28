import axios from "axios";
import {xmlToJson2} from "../util/common";


export const getKoreaShipping = async ( hblNo ) => {
    const res = await axios.get(
        `/ext/rest/cargCsclPrgsInfoQry/retrieveCargCsclPrgsInfo`,
        {
            params: {
                        crkyCn: process.env.REACT_APP_API_KEY,
                        hblNo,
                        blYy: '2023'
        }})

    return xmlToJson2(res.data)
}