import "./NavBar.css"
import { Link } from "react-router-dom"
// import { logo } from "/public/assets/martys-bikes-logo.png"


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="navbar-links">
                    <Link>Bikes</Link>
                    <Link>Projects</Link>
                    <Link>About Me</Link>
                </div>
            </div>
            <div className="navbar-middle">
                <div className="logo">
                    <img src="/public/assets/martys-bikes-logo.png" alt="" />
                </div>
            </div>
            <div className="navbar-right"></div>
        </div>
    )
}

export default NavBar