import "./Header.css"
import Logo from "../../assets/icon/logo.png"
import { Link } from "react-router-dom";
import Butoom from "../butoom/Butoom";
// import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <Header>
        <div className="container">
            <div>
                <img src={Logo} alt="" />
                <ul>
                    <li>
                        <Link to={"/About"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/Courses"}>Courses</Link>
                    </li>
                    <li>
                        <Link to={"/Events"}>Events</Link>
                    </li>
                    <li>
                        <Link to={"/Blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link to={"/Contacts"}>Contacts</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Butoom/>
                 <div>
                    {/* <img src={CgProfile} alt="" /> */}
                    <Link>Logo</Link>
                    <span>/</span>
                    <Link>Register</Link>
                 </div>
            </div>
        </div>
    </Header>
      
    
  )
}
export default Header; 