"use client"


import style from "./rightSearchZone.module.css";
import {usePathname, useSearchParams} from "next/navigation";
import {ChangeEventHandler, useState} from "react";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";


export default function RightSearchZone() {
    const pathName = usePathname()
    const searchParams = useSearchParams()


    const onChangeAll :ChangeEventHandler<HTMLInputElement> = () => {

    }

    const onChangeFollow :ChangeEventHandler<HTMLInputElement> = () => {

    }


    if ( pathName.includes('/explore') ) {
        return null
    }

    if ( pathName.includes('/search') ) {
        return (
            <div>
                <h5 className={style.filterTitle}>검색 필터</h5>
                <div className={style.filterSection}>
                    <div>
                        <label>사용자</label>
                        <div className={style.radio}>
                            <div>모든 사용자</div>
                            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                        </div>
                        <div className={style.radio}>
                            <div>내가 팔로우하는 사람들</div>
                            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ marginBottom: 60, width: 'inherit' }}>
            <SearchForm q={searchParams.get('q') || ''} />
        </div>
    )
}