import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  
  const showSidebar = () => setSidebar(!sidebar)


  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <nav className="navbar">
        <LinkS to='/' onClick={toggleHome} className='menu-logo'>Paulina Valero</LinkS>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
          <ul className='nav-top'>
            <li>
              <LinkS to='about' 
                smooth={true} 
                spy={true} 
                exact='true' 
                offset={-190}
              >About</LinkS>
            </li>
            <li><LinkS to='projects' smooth={true}  >Projects</LinkS></li>
            <li><LinkS to='contact' smooth={true} >Contact</LinkS></li>
          </ul>
      </nav>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle' >
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="nav-link"><LinkS to='about' smooth={true}
          spy={true} 
          exact='true' 
          offset={-190}
          >About</LinkS></li>
          <li className="nav-link"><LinkS to='projects' smooth={true} >Projects</LinkS></li>
          <li className="nav-link"><LinkS to='contact' smooth={true} >Contact</LinkS></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar