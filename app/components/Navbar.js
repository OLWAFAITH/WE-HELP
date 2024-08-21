// components/Navbar.js
"use client"; // This directive ensures the component is rendered on the client-side

import { useState } from 'react';
import styles from './Navbar.module.css';
// import { SignUp } from '@clerk/nextjs';
import { SignUpButton, SignInButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>WE~HELP</div>
        <ul className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
          <li className={styles.navItem}><a href="#">Home</a></li>
          <li className={styles.navItem}><a href="#">Help</a></li>
          <li className={styles.navItem}>
            <button onClick={toggleDropdown} className={styles.dropdownToggle}>About</button>
            <ul className={`${styles.dropdownMenu} ${isOpen ? styles.show : ''}`}>
              <li><a href="#">About 1</a></li>
              <li><a href="#">About 2</a></li>
              <li><a href="#">About 3</a></li>
            </ul>
          </li>
          <li className={styles.navItem}><a href="#">Contact</a></li>
          <SignInButton mode="modal">
          <button className={styles.navItem}><a href="#">Login</a></button>
          </SignInButton>
          <SignUpButton mode="modal">
          <button  className={styles.navItem}>Sign Up</button>
          </SignUpButton>
        </ul>
        <button className={styles.hamburger} onClick={toggleDropdown}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
