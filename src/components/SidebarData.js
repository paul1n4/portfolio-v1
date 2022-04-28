import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <CgIcons.CgWebsite />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <GrIcons.GrContact />,
    cName: 'nav-text'
  },
]