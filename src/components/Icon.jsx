import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

function Icon() {
  return (
    <ul className="socialMedia">
      <li>
        <FaFacebookSquare />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaPinterest />
      </li>
      <li>
        <FaInstagram />
      </li>
    </ul>
  );
}

export default Icon;
