import { Link } from "react-router-dom";
import "../styles/Instructions.css";
import rightT from "../assets/rightT.png";
import leftT from "../assets/leftT.png";

const Instructions = () => {
  return (
    <div>
      <div className="instructions">
        <p>Instructions:</p>
        <p className="text">Press the right arrow key if the T is titled right and the
          left arrow key if the T is oriented left. Please expand your browser window to full size.
        </p>
        <p className="text">When you have completed all of the trials, a message will notify
          you that the experiment has been completed.
        </p>
      </div>

      <div className="images">
        <figure className="image1">
          <img src={rightT} />
          <figcaption>Right tilted T</figcaption>
        </figure>
        <figure className="image2">
          <img src={leftT} />
          <figcaption>Left tilted T</figcaption>
        </figure>
        <p><br /><br /></p>
      </div>

      <div className="bttn">
        <Link to="/experiment"><button className="button">Begin Experiment</button></Link>
      </div>
    </div>
  )

}

export default Instructions;