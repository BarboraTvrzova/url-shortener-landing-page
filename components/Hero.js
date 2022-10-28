import React from "react";
import styles from "../styles/Hero.module.scss";
import Search from "./Search";

const Hero = () => {
  return (
    <div className={`${styles.hero_wraper}`}>
      <div className="inner-container">
        <div className={styles.hero}>
          <div className={styles.hero_image}>
            <img src="/images/illustration-working.svg" alt="" />
          </div>
          <div className={`${styles.hero_content}`}>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn">Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
