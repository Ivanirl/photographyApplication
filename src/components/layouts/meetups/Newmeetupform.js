import { useRef } from "react";

import classes from "./meetup.module.css";
import Card from "../ui/card";

function Newmeetupform(props) {
  const titleInputRef = useRef();
  const AgelimitRef = useRef();
  const AddressRef = useRef();
  const descriptionRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAgelimit = AgelimitRef.current.value;
    const enteredAddress = AddressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetupData = {
      title: enteredTitle,
      Agelimit: enteredAgelimit,
      Address: enteredAddress,
      Description: enteredDescription,
    };

    props.onAddmeetup(meetupData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Address">Address</label>
          <input type="text" required id="Address" ref={AddressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Age-limit">Age limit</label>
          <input type="number" required id="Age-limit" ref={AgelimitRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Description">Description</label>
          <textarea
            type="text"
            required
            id="Description"
            rows="5"
            ref={descriptionRef}
          />
        </div>
        <div className={classes.actionhero}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default Newmeetupform;
