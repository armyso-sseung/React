import {ReactNode} from "react";
import styles from "@/app/page.module.css"


export default function Layout({ children, modal } :{ children :ReactNode, modal :ReactNode }) {
    return (
        <div className={styles.container}>
            { children }
            { modal }
        </div>
    )
}

// 주소가 메인 일때는 default.tsx
// /i/flow/login 일 때 page.tsx