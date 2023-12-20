"use client"

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
    // use client 에서는 동작 하지 않음
    // server 쪽에서 redirect 하는 방식
    // redirect("/i/flow/login")


    // client 쪽에서 redirect 하는 방식
    const router = useRouter()
    router.replace("/i/flow/login")

    return (
        <Main />
    )
}


// router.push
// localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기 하면 바로 뒤로 감

// router.replace
// localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기 하면 바로 뒤가 아닌 메인으로 간다