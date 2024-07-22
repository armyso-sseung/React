import {BaseLayoutType} from "@/model/layoutType";
import style from "./layout.module.css"


const CustomHookLayout = ({ children } :BaseLayoutType) => {
    return (
        <div className={ style.container }>
            { children }
        </div>
    )
}


export default CustomHookLayout