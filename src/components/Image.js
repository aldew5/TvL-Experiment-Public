import { useContext } from 'react';
import { ExperimentContext } from "./ExperimentContext.js";

import blackT from "../assets/blackT.png";
import blackL from '../assets/blackL.png';

import greenT from "../assets/greenT.png";
import greenL from '../assets/greenL.png';

import redL from "../assets/redL.png";
import redT from '../assets/redT.png';


import dotL from "../assets/dotL.png";
import sharpL from "../assets/sharpL.png";
import dotT from "../assets/dotT.png";
import sharpT from "../assets/sharpT.png";


import blobL from "../assets/blobL.png";
import blobT from "../assets/blobT.png";
import arrowT from "../assets/arrowT.png";
import arrowL from "../assets/arrowL.png";

const Image = ({ tilt, letter, type }) => {

    const [initials, setInitials, condition, setCondition, TvL, setTvL, practice, setPractice,
        exper, setExper, size1, setSize1, size2, setSize2, size3,
        setSize3, prob, setProb, sizes, setSizes, shuffle] = useContext(ExperimentContext);

    //Math.random() * (max - min) + min
    let top = Math.floor(Math.random() * (700 - 150)) + 150;
    let rotate = 0;
    var value = 0;

    var src = "";
    var width = "50";
    var height = "50";

    let options = ["ArrowLeft", "ArrowRight"];
    let tilt2 = options[Math.floor(Math.random() * 2)];

    // set the source image for the T based on the given colour
    if (letter === "T") {
        if (type === "red") {
            src = redT;
        }
        else if (type === "black") {
            src = blackT;
        }
        else if (type === "green") {
            src = greenT;
        }
        else if (type === "smallsharpT") {
            src = sharpT;
        }
        else if (type === "smalldotT") {
            src = dotT;
        }
        else if (type === "bigsharpT") {
            src = sharpT;

            width = "80";
            height = "80";

        }
        else if (type === "bigdotT") {
            src = dotT;

            width = "80";
            height = "80";
        }

        else if (type === "blobT"){
            src = blobT;

            width = "100";
            height = "100";
        }
        else if (type === "arrowT"){
            src = arrowT;

            width = "100";
            height = "100";
        }
    }
    else {
        if (type === "red") {
            src = redL;
        }
        else if (type === "black") {
            src = blackL;
        }
        else if (type === "green") {
            src = greenL;
        }
        else if (type === "smalldot") {
            src = dotL;
        }
        else if (type === "smallsharp") {
            src = sharpL;
        }
        else if (type === "bigsharp") {
            src = sharpL;

            width = "80";
            height = "80";
        }
        else if (type === "bigdot") {
            src = dotL;

            width = "80";
            height = "80";
        }
        else if (type === "blobL"){
            src = blobL;

            width = "100";
            height = "100";
        }
        else if (type === "arrowL"){
            src = arrowL;

            width = "100";
            height = "100";
        }


    }

    // randomly choose whether to have an inverted T
    let val = Math.floor(Math.random() * 2);

    if (letter === "T") {
        // rotations between 10 and 90
        if (tilt === "ArrowLeft") {
            if (val === 1) {
                rotate = Math.floor(Math.random() * (-60 + 30)) - 30;
            }
            else {
                rotate = Math.floor(Math.random() * (150 - 120)) + 120;
            }
            value = rotate.toString();

        }
        else if (tilt === "ArrowRight") {
            if (val === 1) {
                rotate = Math.floor(Math.random() * (60 - 30)) + 30;
            }
            else {
                rotate = Math.floor(Math.random() * (-150 + 120)) - 120;
            }
            value = rotate.toString();
        }
    }
    else {
        if (tilt2 === "ArrowLeft") {
            if (val === 1) {
                rotate = Math.floor(Math.random() * (-60 + 30)) - 30;
            }
            else {
                rotate = Math.floor(Math.random() * (150 - 120)) + 120;
            }
            value = rotate.toString();

        }
        else if (tilt2 === "ArrowRight") {
            if (val === 1) {
                rotate = Math.floor(Math.random() * (60 - 30)) + 30;
            }
            else {
                rotate = Math.floor(Math.random() * (-150 + 120)) - 120;
            }
            value = rotate.toString();
        }
    }

    var ChipStyles = {
        position: 'relative',
        top: top,
        transform: `rotate(${value}deg)`,
        display: "inline-block",
    };

    return (
        <img
            src={src}
            style={ChipStyles}
            alt="Image not found"
            width={width}
            height={height}

        />

    )
}

export default Image;