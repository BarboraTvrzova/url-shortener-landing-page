import React from "react";
import styles from "/styles/Footer.module.scss";
import Svg from "react-inlinesvg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="inner-container">
        <div className={styles.footer_logo}>
          <Svg src="/images/logo.svg" alt="" />
        </div>
        <div className={styles.footer_nav}>
          <div className={styles.footer_nav_list}>
            <h3>Features</h3>
            <ul>
              <li>Link Shortening</li>
              <li>Branded links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className={styles.footer_nav_list}>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Developments</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={styles.footer_nav_list}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_socials}>
          <Svg src="/images/icon-facebook.svg" />
          <Svg src="/images/icon-twitter.svg" />
          <Svg src="/images/icon-pinterest.svg" />
          <Svg src="/images/icon-instagram.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
