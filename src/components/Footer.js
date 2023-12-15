import {Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";



    const socials = [
        {
            icon: faEnvelope,
            url: "mailto: hello@example.com",
        },
        {
            icon: faInstagram,
            url: "https://www.instagram.com",
        },
        {
            icon: faFacebook,
            url: "https://www.facebook.com",
        },

    ];
    export default function Footer() {

        return (
            <footer className="footer-section">
                <div className="footer-link-container">
                    <div> <a href="/">
                        <img src="./images/Logo .svg" alt="logo" id="logo"></img>
                    </a>
                    </div>
                    <div className="footer-items">
                        <h6>Important Links</h6>
                        <ul>
                            <li>
                                <Link
                                    activeClass="navbar-active-content"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="heroSection"
                                    className="navbar-content"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="/menu"
                                   activeClass="navbar-active-content"
                                   className="navbar--content"
                                >
                                    Menu
                                </a>
                            </li>


                            <li>
                                <a href='/reservation'

                                   activeClass="navbar-active-content"
                                   className="navbar-content"
                                >
                                    Reservation
                                </a>
                            </li>
                            <li>
                                <a href='order'

                                   activeClass="navbar-active-content"
                                   className="navbar-content"
                                >
                                    Order online
                                </a>
                            </li>
                            <li>
                                <a href='login'

                                   activeClass="navbar-active-content"
                                   className="navbar-content"
                                >
                                    Login
                                </a>
                            </li>

                        </ul>

                    </div>
                    <div className="contact-items">
                        <h6>Contacts</h6>
                        <ul>
                            <li>
                                <img src="./images/home.png"
                                     alt="logo-home"
                            id="logo-home"/>
                            242 W Garfield Blvd, Chicago,<br/>
                            IL 60609, USA
                            </li>
                            <li><img src="./images/phone.png"
                                     alt="logo-phone"
                                     id="logo-phone"/>
                                     +17732856300
                            </li>
                        </ul>
                    </div>
                    <div className="socials">

                        {socials.map(({icon, url}) => (
                            <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={icon} size="xl" key={url} />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>


        )

}