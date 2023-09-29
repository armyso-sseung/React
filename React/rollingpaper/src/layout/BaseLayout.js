import {Link} from "react-router-dom";

const BaseLayout = ({ children }) => {
    return (
        <div className="baselayout">
            <div className="nav">
                <ul className={"nav-ul"}>
                    <li className={"nav-li"}><Link to={"/"}>HOME</Link></li>
                    <li className={"nav-li"}><Link to={"/list"}>LIST</Link></li>
                    <li className={"nav-li"}><Link to={"/register"}>REG</Link></li>
                </ul>
            </div>

            <div className="container">
                { children }
            </div>

            <div className="footer">
                <p className="footer-title">Rolling Paper</p>
                <p className="footer-title-sub">By. SSEUNG</p>
            </div>
        </div>
    )
}


export default BaseLayout;