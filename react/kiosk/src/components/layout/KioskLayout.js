import BaseLayout from "./BaseLayout";
import {Outlet} from "react-router-dom";


const KioskLayout = () => {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    )
}


export default KioskLayout;