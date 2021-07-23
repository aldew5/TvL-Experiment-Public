import React, { useState, useEffect, useContext } from 'react';
import "./Experiment.css"
import Selection from "../components/Selection.js";
import { ExperimentContext } from "../components/ExperimentContext";
import Complete from "../components/Complete.js";
import Images from "../components/Images.js";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const Experiment = () => {

  const [initials, setInitials, condition, setCondition, TvL, setTvL, practice, setPractice,
    exper, setExper, size1, setSize1, size2, setSize2, size3,
    setSize3, prob, setProb, sizes, setSizes, shuffle, date, setDate] = useContext(ExperimentContext);

  const [keyVal, setKeyVal] = useState("ArrowLeft");
  const [keyPressed, setKeyPressed] = useState("");

  const [display, setDisplay] = useState(true);
  const [displayImages, setDisplayImages] = useState(false);

  const [isPress, setIsPress] = useState(false);
  const [index, setIndex] = useState(0);
  const [type, setType] = useState("");
  const [ctr, setCtr] = useState(0);
  const [types, setTypes] = useState([]);
  const [canPress, setCanPress] = useState(false);

  const [startTime, setStartTime] = useState(0);
  const [pos, setPos] = useState(-1);
  const forceUpdate = useForceUpdate();

  // number of images in the current trial
  let size = sizes[index];

  // handle any key press
  function handleKeyDown(event) {
    // we only handle a press when there are items on the screen
    // (otherwise it is not valid)
    // valid key press
    if ((event.key === "ArrowLeft" || event.key === "ArrowRight") && canPress) {
      setCanPress(false);
      setKeyPressed(event.key);
      setDisplay(false);
      setDisplayImages(false);
      // the the button to pressed -> the other useEffect will update the 
      // trial count
      setIsPress(true);
      forceUpdate();
    }
  }

  // add the event listener (for key presses)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);
    return () => {
      window.removeEventListener('keyup', handleKeyDown);
    };

  });


  // count the trials 
  useEffect(() => {
    if (isPress) {
      if (practice > 0) {
        setPractice(practice - 1);
      }

      else if (exper > 0) {
        setExper(exper - 1);
      }
      setIsPress(false);
      setIndex(index + 1);
    }

  }, [isPress]);

  // delay the image display so that 
  // the O will attend to the blue square
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayImages(true);
    }, 1000);
    return () => clearTimeout(timer);
  })

  useEffect(() => {

    if (displayImages && display) {
      setCanPress(true);
      forceUpdate();
    }
  }, [displayImages, display])


  return (
    // output one less T and then the last one will
    // be titled
    <div className={display ? "Experiment-display" : "Experiment-completion"} >
      {(exper !== 0) ?
        <div>
          {display ?
            <div>
              {displayImages ?
                <Images
                  size={size}
                  setType={setType}
                  keyVal={keyVal}
                  setStartTime={setStartTime}
                  setTypes={setTypes}
                  types={types}
                  setPos={setPos}
                  type={type}
                /> :
                <div></div>
              }
              {/*focusing box*/}
              <div className="box"></div>
            </div> :
            <div>
              <Selection
                keyVal={keyVal}
                setDisplay={setDisplay}
                keyPressed={keyPressed}

                setKeyVal={setKeyVal}
                setDisplayImages={setDisplayImages}

                type={type}
                size={size}
                startTime={startTime}
                ctr={ctr}
                setCtr={setCtr}
                types={types}
                pos={pos}
                index={index}
              />
            </div>}

        </div> :
        <Complete />
      }
    </div>

  )
}

export default Experiment;