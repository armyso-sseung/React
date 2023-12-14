"use client"

import style from "./trendSection.module.css"
import Trend from "@/app/(afterLogin)/_component/Trend";
import {usePathname} from "next/navigation";


export default function TrandSection() {
    const pathName = usePathname()
    return (
        ( !pathName.includes('/explore') && <div className={style.trendBg}>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
        )
    )
}