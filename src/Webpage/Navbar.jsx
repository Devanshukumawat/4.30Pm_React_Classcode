import NavStyle from "./navbar.module.css"
import { Link } from "react-router-dom"
function Navbar() {
    return (  
        <>
            <div className={NavStyle.navbar}>
                <ul className={NavStyle.items}>
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/aboutpage">About</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/mui">Mui</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;