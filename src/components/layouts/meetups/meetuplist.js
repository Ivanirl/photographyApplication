import classes from "./meetup.module.css";
import MeetupItem from "./meetupitem";

function Meetuplist(props) {
  return (
    <ul className={classes.listy}>
      <div className="ivanbox"></div>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          description={meetup.description}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

console.log(MeetupItem)
export default Meetuplist;
