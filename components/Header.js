import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import Svg from "react-inlinesvg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header id="header" className={`inner-container ${styles.header}`}>
      <div className={styles.header_svgs}>
        <div className={styles.header_svgs_logo}>
          <Svg src="/images/logo.svg" alt="" />
        </div>
        <div
          className={styles.header_svgs_nav}
          onClick={() => setNavOpen(!navOpen)}
        >
          <Svg src="/images/hamburger.svg" alt="" />
        </div>
      </div>
      {navOpen && (
        <nav className={styles.header_nav}>
          <ul className={styles.header_nav_links}>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className={styles.header_nav_login}>
            <li>Login</li>
            <li>
              <div className={`btn ${styles.header_nav_login_signUp}`}>
                Sign up
              </div>
            </li>
          </ul>
        </nav>
      )}

      <nav className={styles.header_nav_large}>
        <ul className={styles.header_nav_large_links}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <ul className={styles.header_nav_large_login}>
          <li>Login</li>
          <li>
            <div className={`btn ${styles.header_nav_large_login_signUp}`}>
              Sign up
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
