import React, { useState } from "react";
import styles from "../styles/Search.module.scss";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [err, setErr] = useState(false);
  const [linksObject, setLinksObject] = useState([]);

  const links = [];

  const shorten = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        links.push(...linksObject, {
          ["shortLink"]: data.result.short_link2,
          ["originalLink"]: data.result.original_link,
        });
        setLinksObject(links);
      })
      .catch((err) => {
        setErr(true);
        console.log(err);
      });
  };

  console.log(linksObject);

  return (
    <>
      <div className={styles.search_wraper}>
        <div className="inner-container">
          <div className={`${styles.search}`}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setErr(false);
              }}
              className={
                err
                  ? `${styles.search_field} ${styles.err}`
                  : `${styles.search_field}`
              }
              placeholder="Shorten a link here..."
            />
            {err && <p>Please add a link</p>}
            <button
              className={`${styles.search_field} btn`}
              onClick={() => {
                !inputText ? setErr(true) : null;
                inputText ? shorten(inputText) : null;
              }}
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>
      {linksObject && <ShortLinks links={linksObject} />}
    </>
  );
};

export default Search;

const ShortLinks = ({ links }) => {
  const linksList = links.map((link) => {
    return (
      <div className={`${styles.shortLink}`}>
        <div className={styles.shortLink_original}>{link.originalLink}</div>
        <div className={styles.shortLink_new}>{link.shortLink}</div>
        <div className={styles.shortLink_copy_wraper}>
          <button
            className={` btn ${styles.shortLink_copy}`}
            onClick={() => {
              navigator.clipboard.writeText(link.shortLink);
            }}
          >
            Copy
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className={`${styles.shortLinks_wraper}`}>
      <div className={`inner-container`}>{linksList}</div>
    </div>
  );
};
