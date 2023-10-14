import React from "react";
import Link from "next/link";
import classes from "./ExperienceItem.module.css";

function ExperienceItem({ experience }) {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <h6>{experience.heading}</h6>
        </blockquote>
        <figcaption>{experience.role}</figcaption>
        <figcaption>{experience.company}</figcaption>
        <p>{experience.description}</p>
      </figure>
      <Link className={classes.btn} href={`/experience/${experience.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
}

export default ExperienceItem;
