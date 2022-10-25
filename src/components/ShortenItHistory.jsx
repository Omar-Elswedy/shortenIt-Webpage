import React from "react";

function ShortenItHistory(props) {
  return (
    <div className="original">
      <div className="historyFirstPart">{props.originalUrl}</div>
      <hr></hr>
      <div className="historySecondPart">
        <a
          className="shortenUrl"
          rel="noreferrer"
          target="_blank"
          href={props.shortenUrl}
        >
          {props.shortenUrl}
        </a>
        <div className="copyButton">{props.button}</div>
      </div>
    </div>
  );
}

export default ShortenItHistory;
