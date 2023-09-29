import { convertXML } from 'simple-xml-to-json'
import xmlParser from 'xml-parser-xo'


/**
 * 2023.08.28
 * @description XML -> JSON 변환 기능
 * @param xml
 * @returns json
 */
export const xmlToJson = ( xml ) => {
    return convertXML(xml)
}

/**
 * 2023.08.28
 * @description XML -> JSON 변환 기능
 * @param xml
 * @returns json
 */
export const xmlToJson2 = ( xml ) => {
    const shippingData =  xmlParser(xml, {
        filter: node => {
            return node.type === 'Element' || node.type === 'Text'
        }
    }).children[0].children?.find(ele => ele.name === "cargCsclPrgsInfoQryVo")

    return shippingData?.children
}