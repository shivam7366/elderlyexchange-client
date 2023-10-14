import React from "react";
import { useRef, useState } from "react";
import Card from "../UI/Card";
import Loading from "../ui/Loading";
import Button from "@mui/material/Button";
import classes from "./ExperienceForm.module.css";

function ExperienceForm() {
  const [isEntering, setIsEntering] = useState(false);

  const roleInputRef = useRef();
  const companyInputRef = useRef();
  const headingInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredRole = roleInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredHeading = headingInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const experienceData = {
      role: enteredRole,
      company: enteredCompany,
      heading: enteredHeading,
      description: enteredDescription,
    };
    console.log(experienceData);
    handleAddExperience(experienceData);

    // optional: Could validate here

    // props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleAddExperience = async (data) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience`, {
        method: "POST",

        body: JSON.stringify({
          role: data.role,
          company: data.company,
          heading: data.heading,
          description: data.description,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      console.log(json);
      // localStorage.setItem("token", json.token);
      // localStorage.setItem("userId", json.user._id);
    } catch (error) {
      console.log(error);
    }
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const finishEntereingHandler = () => {
    setIsEntering(false);
  };
  return (
    <>
      {/* <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure to want to leave? Your entered data will be lost. "
        }
      /> */}
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {/* {props.isLoading && (
            <div className={classes.loading}>
              <Loading />
            </div>
          )} */}
          <div className={`${classes.control}`}>
            <label htmlFor="role">Role</label>
            <input type="text" id="role" ref={roleInputRef} />
          </div>
          <div className={`${classes.control}`}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" ref={companyInputRef} />
          </div>{" "}
          <div className={`${classes.control} `}>
            <label htmlFor="heading">Heading</label>
            <input type="text" id="heading" ref={headingInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button
              variant="contained"
              type="submit"
              onClick={finishEntereingHandler}
              className={classes.btn}
            >
              Add Experience
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default ExperienceForm;
