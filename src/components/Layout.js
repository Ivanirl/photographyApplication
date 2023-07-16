import NavBar from "./navbar";

function DefaultLayout(props) {
  return (
    <div>
      <NavBar />
      <main className='main'>{props.children}</main>
    </div>
  );
}

export default DefaultLayout;
