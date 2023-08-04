import filler from "../Resources/Joko.JPG";

function AboutPage() {
  return (
    <div className="bigBody">
      <div className="AboutCont">
        <section className="bighead">
          <div className="catch">
            <h1>Description</h1>
            <span className="aboutty">
              This is supposed to be an in depth and insightfull dscription of
              this website but seeing as the primary focus of creating this
              website is developing my react abilities, I will not be writing
              anything besides this.
            </span>
          </div>
        </section>
        <section className="peter">

          <div className="floater">
            <div className="imageHolster" id="ho">
              <img alt="talk talk" src={filler} />
            </div>
            <div className="imageHolster" id="centerbaby">
              <img alt="talk talk" src={filler} />
            </div>
            <div className="imageHolster" id="ha">
              <img alt="talk talk" src={filler} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
