import React, { useEffect, useState, useContext } from "react";
import "./Selection.css";
import { ExperimentContext } from "./ExperimentContext";
import firebase from "../util/firebase.js";



const Selection = ({ keyVal, keyPressed, setKeyVal, setDisplay,
    setDisplayImages, types, size, ctr, index,
    startTime, type, pos }) => {
    
    const [correct, setCorrect] = useState(false);
    
    const [initials, setInitials, condition, setCondition, TvL, setTvL, practice, setPractice,
        exper, setExper, size1, setSize1, size2, setSize2, size3,
        setSize3, prob, setProb, sizes, setSizes, shuffle, date, setDate] = useContext(ExperimentContext);
    
        
    // update the display after 2s to redisplay the Ts and Ls
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplay(true);
        }, 2000);
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {
        setDisplayImages(false);
    })

    // save the trial data
    const createTrial = (isCorrect) => {
        let current = new Date();
        let reaction_time = current - startTime; 

        let trial = "";
        // determine what type the trial was
        if (practice > 0) {
            trial = "practice";
        }
        else {
            trial = "experiment";
        }

        // calculate the number of repeititions based on the list
        // of colours
        let run = 1;
      
        for (var i = index - 1; i >= 0; i--) {
            if (types[i] === types[index]) {
                run += 1;
            }
            else {
                break;
            }
        }

        var flag = 0;
        if (run === 1) {
            flag = 1;
        }

        let error = 1;
        if (isCorrect) {
            error = 0;
        }

        let prev = "none";
        if (index > 0) {
            prev = types[index - 1];
        }
        
        let experiment = "";
        if (TvL === "1"){
            experiment = "colors";
        }
        else if (TvL === "2"){
            experiment = "size_and_shape";
        }
        else if (TvL === "3"){
            experiment = "smallSharp_and_smallPointy";
        }
        else if (TvL === "4"){
            experiment = "smallSharp_and_BigSharp";
        }

        const userRef = firebase.database().ref(initials + " " + date);

        // data that will be saved in the realtime database
        const userData = {
            blockReport: trial,
            condition: condition,
            cuestr: "",
            maskFlag: 0,
            // ctr = current trial number
            ctr: ctr,
            experiment: experiment,
            yn: 1,
            setSize: size,
            Ttype: type,
            prevType: prev,
            rep: run,
            switchFlag: flag,
            orientation: keyVal,
            response: "",
            error: error,
            message: "",
            RT: reaction_time,
            SwitchProbability: prob,
            TLoc: pos,
        }
        userRef.push(userData);
    }
    

    useEffect(() => {
        let isCorrect = false;
        if (keyPressed === keyVal) {
            setCorrect(true);
            isCorrect = true;
        }
        createTrial(isCorrect);

        let options = ["ArrowRight", "ArrowLeft"];
        setKeyVal(options[Math.floor(Math.random() *2)]);
    }, []);



    return (
        <div className="Selection">
            {practice > 0 ?
                <div>
                    {correct ? <div className="correct"><p>Correct</p> <p>{practice} practice trials left</p></div> :
                        <div className="incorrect"><p>Incorrect</p> <p>{practice} practice trials left</p></div>}
                </div>
                :
                <div>
                    {correct ? <div className="correct"><p>Correct</p> <p>{exper} experiment trials left</p></div> :
                        <div className="incorrect"><p>Incorrect</p> <p>{exper} experiment trials left</p></div>}
                </div>
            }
        </div>
    )
}

export default Selection;