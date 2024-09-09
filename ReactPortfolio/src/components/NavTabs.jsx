import './styles/NavTabs.css';
import { useState } from 'react';
// Import Link from react-router-dom if using React Router
import { Link } from 'react-router-dom';



export default function NavTabs() {
  const [activeLink, setActiveLink] = useState('/');
  
  const handleLinkClick = (path) => {
    setActiveLink(path); 
  };


  const getLinkStyle = (path) => (path === activeLink ? 'active-link' : '');

  return (
    <div className="navBody">
      <h1 className="title">Christopher Romero</h1>
      <ul className="navBar">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className={getLinkStyle('/')}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={() => handleLinkClick('/portfolio')}
            className={getLinkStyle('/portfolio')}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            onClick={() => handleLinkClick('/resume')}
            className={getLinkStyle('/resume')}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => handleLinkClick('/contact')}
            className={getLinkStyle('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}