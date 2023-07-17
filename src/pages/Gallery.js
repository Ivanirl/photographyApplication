import mage1 from "../Resources/one.JPG";
import mage2 from "../Resources/two.JPG";
import mage3 from "../Resources/three.JPG";

function Gallery() {
  //setInterval(imageRotator, 11000)

  function imageRotator() {
    const options = [mage1, mage2, mage3];
    let hehe = 0

    if(hehe === 2){
      hehe = hehe - 2
    }else{
      hehe = hehe + 1
    }
    let poop = options[hehe]
    const uno = document.querySelector(".uno")
}

imageRotator()
  return (
    <div className="bigBody">
      <div className="GalleryCont">
        <ul className="Carouself">
          <li className="block">
            <section className="uno">
            <img className="swimage" src={mage1}/>
            </section>
            <section className="dos">
              <h2>MAGNIFICENT</h2>
              <section class="trois">
              <p>
                Something about a detailed description of a set of photos. I
                could've easily decided to go all 'loren ipsum' on your ass but
                I respect the game too much. Instead I am going to
                counterproductively write out all of the filler text on my own.
                Beacause that's just what dedicated negroes do.
              </p>
              <button>View Pictures</button>
              </section>
            </section>
          </li>
          <li className="block">
            <section className="uno">
              <img className="swimage" src={mage2}/>
            </section>
            <section className="dos">
              <h2>MAGNIFICENT</h2>
              <section class="trois">
              <p>
                Something about a detailed description of a set of photos. I
                could've easily decided to go all 'loren ipsum' on your ass but
                I respect the game too much. Instead I am going to
                counterproductively write out all of the filler text on my own.
                Beacause that's just what dedicated negroes do.
              </p>
              <button>View Pictures</button>
              </section>
            </section>
          </li>
          <li className="block">
            <section className="uno">
              <img className="swimage" src={mage3}/>
            </section>
            <section className="dos">
              <h2>MAGNIFICENT</h2>
              <section class="trois">
              <p>
                Something about a detailed description of a set of photos. I
                could've easily decided to go all 'loren ipsum' on your ass but
                I respect the game too much. Instead I am going to
                counterproductively write out all of the filler text on my own.
                Beacause that's just what dedicated negroes do.
              </p>
              <button>View Pictures</button>
              </section>
            </section>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
