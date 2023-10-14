import React from "react";
import classes from "./ExperienceList.module.css";
import ExperienceItem from "./ExperienceItem";

const sortExperience = (Experience, ascending) => {
  return Experience.sort((experienceA, experienceB) => {
    if (ascending) {
      return experienceA.id > experienceB.id ? 1 : -1;
    } else {
      return experienceA.id < experienceB.id ? 1 : -1;
    }
  });
};

function ExperienceList(props) {
  const { experiences } = props;
  const [isSortingAssscending, setIsSortingAssscending] = React.useState(false);
  const sortedExperience = sortExperience(experiences, isSortingAssscending);

  const changeSortingHandler = () => {
    setIsSortingAssscending((prevState) => !prevState);
  };
  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAssscending ? "Desending" : "Asscending"}
        </button>
      </div>
      <ul className={classes.list}>
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </ul>
    </>
  );
}

export default ExperienceList;
