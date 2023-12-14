import style from './layout.module.css'
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ZLogo from "../../../public/zlogo.png"
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrandSection from "@/app/(afterLogin)/_component/TrandSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";


type propsType = {
    children :ReactNode,
    modal :ReactNode,
}


export default function AfterLoginLayout({ children, modal } :propsType) {
    return (
        <div className={style.container}>
            {/* 왼쪽 사이드 */}
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href={"/home"}>
                            <div className={style.logoPill}>
                                <Image src={ZLogo} alt={"z.com로고"} width={40} height={40} />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href={"/compose/tweet"} className={style.postButton}>게시하기</Link>
                        </nav>
                        <LogoutButton />
                    </div>
                </section>
            </header>

            {/* 오른쪽 사이드 */}
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    {/* 콘텐츠 영역 */}
                    <main className={style.main}>{ children }</main>

                    {/* 오른쪽 메뉴 영역 */}
                    <section className={style.rightSection}>
                        <RightSearchZone />
                        <TrandSection />
                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
            { modal }
        </div>
    )
}