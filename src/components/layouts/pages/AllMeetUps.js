import { useState, useEffect } from "react";

import Meetuplist from "../components/meetups/meetuplist";

function AllMeetUps(props) {
  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);

  useEffect(() => {
    setisloading(true);
    fetch(
      "https://react-learning-891b8-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        //console.log(response)
        return response.json;
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          console.log(data)
          meetups.push(meetup);
        }
        console.log(meetups)

        setisloading(false);
        setloadedmeetups(meetups);
      });
  }, []);

  if (isloading) {
    return (
      <section>
        <div>
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: 5 }}>
      <h1>NEW PLACES</h1>
      <Meetuplist meetups={loadedmeetups} />
    </section>
  );
}

export default AllMeetUps;
