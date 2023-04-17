import navstyle from "./Navbar.module.css"
// import PDF from "../Images/Abhishek_Khanna_c.v.pdf"
import PDF from "../Images/Abhishek_Khanna_Resume.pdf"
import { Link } from 'react-scroll'
import Logo from "../Images/logo.png"


function Navbar() {


    return (
        <div className={navstyle.container}>
            <div className={navstyle.navbar} id={navstyle.myTopnav}>

                <div className={navstyle.logo}>
                    <img src={Logo} alt="" />
                </div>

                <div className={navstyle.nav_links}>
                    <ul>
                        <li> <Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="into_page"
                            activeClassName="selected"
                        >
                            Home
                        </Link></li>

                        <li><Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="about_page"
                            activeClassName="selected"
                        >
                            About
                        </Link></li>

                        <li> <Link activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            to="skill_page"
                            activeClassName="selected"
                        >
                            Skills
                        </Link></li>

                        <li>
                            <Link activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="project_page"
                                activeClassName="selected"
                            >
                                Projects
                            </Link>
                        </li>


                        <li>
                            <Link activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                to="contact_page"
                                activeClassName="selected"
                            >
                                Contact
                            </Link>
                        </li>


                        <button> <a href="https://drive.google.com/file/d/1shXU-IH-X5Ij_D2QuOudpzm1j3DV6w3R/view?usp=share_link" target="_blank">Resume</a> </button>
                    </ul>
                </div>
            </div>

        </div >
    )
}


export default Navbar