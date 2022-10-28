import React from "react";
import styles from "/styles/Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={`${styles.stats_content} inner-container`}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.stats_cards}>
          <Card
            img="brand-recognition"
            title="Brand Recognition"
            text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <Card
            img="detailed-records"
            title="Detailed Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <Card
            img="fully-customizable"
            title="Fully Customizable"
            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;

const Card = ({ img, title, text }) => {
  return (
    <div className={styles.cards_card}>
      <div className={styles.cards_card_image}>
        <div className={styles.cards_card_image_bg}>
          <img src={`/images/icon-${img}.svg`} alt="" />
        </div>
      </div>
      <div className={styles.cards_card_content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
