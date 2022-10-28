import React from "react";
import styles from "/styles/Boost.module.scss";

const Boost = () => {
  return (
    <div className={styles.boost_wraper}>
      <div className="inner-container">
        <h2>Boost your links today</h2>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Boost;
