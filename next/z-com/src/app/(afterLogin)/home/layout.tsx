export default async function Layout({ children } :{ children :React.ReactNode }) {
    return (
        <div>
            홈 레이아웃
            { children }
        </div>
    )
}