import classes from "./Layout.module.css";
import Mainnavigation from "./mainnav";

function Layout(props) {
  return (
    <div>
      <Mainnavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
