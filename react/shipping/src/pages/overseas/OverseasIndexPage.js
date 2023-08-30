import IndexComponent from "../../components/OverseasShipping/IndexComponent";
import OverseasLayout from "../../layouts/OverseasLayout";
import {useEffect, useRef, useState} from "react";
import {getOverseasShipping} from "../../apis/OverseasShippingApi";


const OverseasIndexPage = () => {
    const [ value, setValue ] = useState()
    const [ shipping, setShipping ] = useState([])

    useEffect(() => {
        if (value) {
            fetchGetOverseasShipping()
        }
    }, [value])

    const fetchGetOverseasShipping = async () => {
        const data = await getOverseasShipping(value)
        setShipping(data)
    }

    const handleSearch = (value) => {
        setValue(value)
    }

    return (
        <OverseasLayout>
            <IndexComponent shipping={shipping} handleSearch={handleSearch} />
        </OverseasLayout>
    )
}


export default OverseasIndexPage;