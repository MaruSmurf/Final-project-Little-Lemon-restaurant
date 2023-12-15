import {useState, useEffect} from "react";



export default function Navbar(){
    const[navActive, setNavActive] = useState(false);
    const toggleNav=()=>{
        setNavActive(!navActive)
    };
    const closeMenu=()=>{
        setNavActive(false)
    };
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<=500){
                closeMenu()
            }
        }
        window.addEventListener("resize", handleResize)
        return()=>{
            window.removeEventListener("resize",handleResize)
        }
    }, [])
    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);
   return(

           <nav className={`navbar ${navActive ? "active" : ""}`}>

      <div className="navbar-logo"><a href="/">
    <img src="./images/Logo .svg" alt="logo" id="logo"></img></a>
      </div>

               <a
                   className={`nav-hamburger ${navActive ? "active" : ""}`}
                   onClick={toggleNav}
               >
                   <span className="nav-hamburger-line"></span>
                   <span className="nav-hamburger-line"></span>
                   <span className="nav-hamburger-line"></span>

               </a>
               <div className={`navbar-items ${navActive ? "active" : ""}`}>
                   <ul>
                       <li>
                           <a href="/"
                               onClick={closeMenu}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                               activeClass="navbar-active-content"
                               className="navbar-content"
                           >
                               Home
                           </a>
                       </li>
                       <li>
                           <a href="/menu"
                               onClick={closeMenu}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                               activeClass="navbar-active-content"
                               className="navbar-content"
                           >
                               Menu
                           </a>
                       </li>

                       <li>
                           <a href='/reservation'
                              onClick={closeMenu}

                              activeClass="navbar-active-content"
                              className="navbar-content"
                           >
                               Reservation
                           </a>
                       </li>
                       <li>
                           <a href='order'
                              onClick={closeMenu}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                               activeClass="navbar-active-content"
                               className="navbar-content"
                           >
                               Order online
                           </a>
                       </li>
                       <li>
                           <a href='login'
                               onClick={closeMenu}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                               activeClass="navbar-active-content"
                               className="navbar-content"
                           >
                               Login
                           </a>
                       </li>
                   </ul>

               </div>

           </nav>
   );
}




