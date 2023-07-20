import { useNavigate } from "react-router-dom";

function SignUp() {
  // const navy = useNavigate()

  // const move = navy("/")

  const erg = () => {
    window.alert(
      "Sorry we're experiencing some technical difficulties at this time. Please try again later."
    );
  };

  return (
    <div className="bigBody">
      <div className="signupCont">
        <div className="container">
          <div className="borderControl">
            <form className="holding">
              <div className="heathens">
                <h1>Sign Up</h1>
                <span>
                  Sign up to continue browsing for<br></br> the perfect photo
                  shoot package for you.
                </span>
              </div>
              <input placeholder="Name" type="text"></input>
              <input placeholder="Email" type="email"></input>
              <button onClick={erg}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
