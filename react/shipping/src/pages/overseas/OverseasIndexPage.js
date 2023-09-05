import IndexComponent from "../../components/OverseasShipping/IndexComponent";
import OverseasLayout from "../../layouts/OverseasLayout";
import {useCallback, useEffect, useRef, useState} from "react";
import {getOverseasShipping} from "../../apis/OverseasShippingApi";


const OverseasIndexPage = () => {
    const [ value, setValue ] = useState()
    const [ shipping, setShipping ] = useState([])

    useEffect(() => {
        if (value) {
            getOverseasShipping(value).then(data => setShipping(data))
        }
    }, [value])

    const handleSearch = useCallback(value => {
        setValue(value)
    }, [value])

    return (
        <OverseasLayout>
            <IndexComponent shipping={shipping} handleSearch={handleSearch} />
        </OverseasLayout>
    )
}


export default OverseasIndexPage;