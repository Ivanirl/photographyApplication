import bigface from "../Resources/AXKF9216.JPG";
import joko from "../Resources/Joko.JPG";

function Home() {
  return (
    <div className="bigBody">
      <div className="HomeContainer">
        <section className="heroSection">
          <div className="lefty">
            <h1 className="Heroo">
              FROZEN IN <br></br>TIME
            </h1>
            <span>Capture your finest moments forever.</span>
            <button className="elsa">Learn More</button>
          </div>
          <div className="right">
            <img className="bigFace" src={bigface} alt="ivanhead" />
          </div>
        </section>
        <section className="miniGal">
          <div className="lefty">
            <h1 className="Heroo">THE ALBUM EXPERIENCE</h1>
            <span>Bound to blow your mind</span>
            <button className="elsa">Get Started</button>
          </div>
          <div className="right">
            <div className="stack">
              <div className="other">
                <img className="pic1" src={joko} alt="picpic" />
                <img className="pic2" src={joko} alt="picpic" />
              </div>
              <img className="picky" src={joko} alt="picpic" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
