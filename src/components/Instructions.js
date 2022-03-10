import { Link } from "react-router-dom";
import "../styles/Instructions.css";
import rightT from "../assets/rightdotT.png";
import leftT from "../assets/leftsharpT.png";
import blobLeft from "../assets/blobLeft.png";
import arrowRight from "../assets/arrowRight.png";

const Instructions = () => {
  return (
    <div>
      <div className="instructions">
        <p>Instructions:</p>
        <p className="text">Press the right arrow key if the T is titled right and the
          left arrow key if the T is oriented left. Examples with the two different shapes
          of Ts are shown below. Please expand your browser window to full size before beginning
          the experiment.
        </p>
        <p className="text">When you have completed all of the trials, a message will notify
          you that the experiment has been completed.
        </p>
      </div>

      <div className="images">
        <figure className="image1">
          <img src={arrowRight} width="200" height="200"/>
          <figcaption>Right tilted T</figcaption>
        </figure>
        <figure className="image2">
          <img src={blobLeft} width="200" height="200"/>
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