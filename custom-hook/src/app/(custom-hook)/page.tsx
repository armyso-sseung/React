import style from "./page.module.css"
import Link from "next/link";


const CustomHookPage = () => {
    return (
        <>
            <div className={ style.customHookWrap }>
                <Link href={"/react-hook-form"}>React-Hook-Form</Link>
            </div>
        </>
    )
}


export default CustomHookPage