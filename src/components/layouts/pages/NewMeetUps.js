import { useNavigate } from "react-router-dom";

import Newmeetupform from "../components/meetups/Newmeetupform";


function NewMeetUpPage() {
  const Navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-learning-891b8-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      Navigate("/");
    });
    console.log("nosh me bollocks");
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <Newmeetupform onAddmeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
