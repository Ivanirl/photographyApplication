import filler from "../Resources/Joko.JPG"

function AboutPage() {
  return (
    <div className="bigBody">
      <div className="AboutCont">
        <section className="peter">
          <div className="head">
            <h1>ABOUT</h1>
          </div>
          <div className="floater">
            <div className="imageHolster" id="ho">
              <img alt="talk talk" src={filler} />
              <div className="overlay">
                <span className="big">ELEGANCE</span>
                <span className="smo">Color shit and other shit.</span>
              </div>
            </div>
            <div className="imageHolster" id="centerbaby">
              <img alt="talk talk" src={filler} />
              <div className="overlay">
                <span className="big">ELEGANCE</span>
                <span className="smo">Color shit and other shit.</span>
              </div>
            </div>
            <div className="imageHolster" id="ha">
              <img alt="talk talk" src={filler} />
              <div className="overlay">
                <span className="big">ELEGANCE</span>
                <span className="smo">Color shit and other shit.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
