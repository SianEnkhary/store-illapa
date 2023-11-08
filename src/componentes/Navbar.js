import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-scroll';
import {AiOutlineMenu} from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './Logo';

const Navbar = () => {

  const [navBarOpen, setNavBarOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className={styles.navBar}>
      <Logo />
      <AiOutlineMenu />
      {
        navBarOpen &&
        <ul>
        {links.map(x => (
          <div>
            <Link>{x.link === "HowWeWork" ? "How We Work" : x.link}</Link>
          </div>
        ))}
      </ul>
      }
    </div>
  )
}

export default Navbar
