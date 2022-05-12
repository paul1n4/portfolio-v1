import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import {Link} from 'react-router-dom'
import {SidebarData} from '../SidebarData'
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
        <Link to='/' onClick={toggleHome} className='menu-logo'>Paulina Valero</Link>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
          <ul className='nav-top'>
            <li><LinkS to='about' 
                smooth={true} 
                spy={true} 
                exact='true' 
                offset={-190}
            >About</LinkS></li>
            <li><LinkS smooth={true}  to='projects'>Projects</LinkS></li>
            <li><LinkS smooth={true} to='contact'>Contact</LinkS></li>
          </ul>
      </nav>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle' >
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title} </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar