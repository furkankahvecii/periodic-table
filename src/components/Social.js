import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://github.com/furkankahvecii"
        className="github social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
