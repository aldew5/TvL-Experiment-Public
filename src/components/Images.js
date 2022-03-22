import { useContext, useEffect, useState } from "react";
import Image from "./Image";
import { ExperimentContext } from "../components/ExperimentContext";

const Images = ({ setType, size, keyVal, setStartTime, types, setTypes, setPos, type }) => {

    const [initials, setInitials, condition, setCondition, TvL, setTvL, practice, setPractice,
        exper, setExper, size1, setSize1, size2, setSize2, size3,
        setSize3, prob, setProb, sizes, setSizes, shuffle, date, setDate] = useContext(ExperimentContext);

    const [letters, setLetters] = useState([]);

    useEffect(() => {

        let start = new Date();
        setStartTime(start.getTime());

        // make a list of Ls evenly distributed
        let index = 0;
        let Ls = [];


        var style = "";
        // create an array with a single T
        // fill the rest of it with Ls (these correspond to the images that will be rendered)
        let arr = ["T"];
        for (var i = 0; i < size - 1; i++) {
            arr.push("L");
        }

        // randomly shuffle the array
        arr = shuffle(arr);

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "T") {
                setPos(i);
            }
        }

        let rand = Math.random();

        if (TvL === "1") {

            if (type === "") {
                style = "black";
            }

            // set the colour of the T
            if (condition === "1" || condition === "4") {
                style = "red";

                // red and green Ls
                if (condition === "1") {
                    for (var i = 0; i < (size - 1) / 2; i++) {
                        Ls.push("red");
                    }
                    for (var i = (size - 1) / 2; i < (size - 1); i++) {
                        Ls.push("green");
                    }
                }
                // red, green, and black Ls
                else if (condition === "4") {
                    for (var i = 0; i < (size - 1) / 3; i++) {
                        Ls.push("green");
                    }
                    for (var i = 0; i < (size - 1) / 3; i++) {
                        Ls.push("red");
                    }
                    for (var i = 0; i < (size - 1) - 2 * ((size - 1) / 3); i++) {
                        Ls.push("black");
                    }
                }
            }
            else if (condition === "2") {
                //let colours = ["red", "green"];
                if (style === "black") {
                    style = "red";
                }

                if (rand <= prob) {
                    if (type === "green") {
                        style = "red";
                    }
                    else {
                        style = "green";
                    }
                }
                else {
                    if (type !== "") {
                        style = type;
                    }
                }

                // red or green Ls
                for (var i = 0; i < (size - 1) / 2; i++) {
                    Ls.push("green");
                }
                for (var i = 0; i < (size - 1) - (size - 1) / 2; i++) {
                    Ls.push("red");
                }
            }
            else if (condition === "3") {

                if (type === "") {
                    style = "black";
                }

                // colours = ["red", "green", "black"];

                // we can have red, green, and black Ls
                for (var i = 0; i < (size - 1) / 3; i++) {
                    Ls.push("green");
                }
                for (var i = 0; i < (size - 1) / 3; i++) {
                    Ls.push("red");
                }
                for (var i = 0; i < (size - 1) - 2 * ((size - 1) / 3); i++) {
                    Ls.push("black");
                }

                if (rand <= prob) {
                    if (type === "black") {
                        let colours = ["red", "green"];
                        style = colours[Math.floor(Math.random() * 2)];
                    }
                    else if (type === "green") {
                        let colours = ["red", "black"];
                        style = colours[Math.floor(Math.random() * 2)];
                    }
                    else {
                        let colours = ["black", "green"];
                        style = colours[Math.floor(Math.random() * 2)];
                    }
                }
                else {
                    if (type !== "") {
                        style = type;
                    }
                }
            }
        }
        else if (TvL === "2") {
            let vals = [];

            if (type === "") {
                style = "bigdotT";
            }

            if (rand <= prob) {
                if (type === "bigsharpT") {
                    vals = ["bigdotT", "smallsharpT", "smalldotT"];
                }
                else if (type === "bigdotT") {
                    vals = ["bigsharpT", "smallsharpT", "smalldotT"];
                }
                else if (type === "smallsharpT") {
                    vals = ["bigdotT", "bigsharpT", "smalldotT"];
                }
                // accounting for the initial black starting style
                else {
                    vals = ["bigdotT", "smallsharpT", "bigsharpT"];
                }
                style = vals[Math.floor(Math.random() * 3)];
            }
            else {
                if (type !== "") {
                    style = type;
                }
            }

            for (var i = 0; i < (size - 1) / 4; i++) {
                Ls.push("bigdot");
            }
            for (var i = 0; i < (size - 1) / 4; i++) {
                Ls.push("bigsharp");
            }
            for (var i = 0; i < (size - 1) / 4; i++) {
                Ls.push("smalldot");
            }
            for (var i = 0; i < (size - 1) - 3 * ((size - 1) / 4); i++) {
                Ls.push("smallsharp");
            }

        }
        else if (TvL === "3") {

            if (type === "") {
                console.log("HEREsdfsa");
                style = "smalldotT";
            }

            if (rand <= prob) {
                if (type === "smallsharpT") {
                    style = "smalldotT";
                }
                else {
                    style = "smallsharpT";
                }
            }
            else {
                if (type !== "") {
                    style = type;
                }
            }
            for (var i = 0; i < (size - 1) / 2; i++) {
                Ls.push("smalldot");
            }
            for (var i = 0; i < (size - 1) - (size - 1) / 2; i++) {
                Ls.push("smallsharp");
            }

        }
        else if (TvL === "4") {

            if (type === "") {
                style = "smallsharpT";
            }

            if (rand <= prob) {
                if (type === "smallsharpT") {
                    style = "bigsharpT";
                }
                else {
                    style = "smallsharpT";
                }
            }
            else {
                if (type !== "") {
                    style = type;
                }
            }

            for (var i = 0; i < (size - 1) / 2; i++) {
                Ls.push("bigsharp");
            }
            for (var i = 0; i < (size - 1) - (size - 1) / 2; i++) {
                Ls.push("smallsharp");
            }

        }
        setType(style);


        // update the list of rendered T types
        let copy = types;
        copy.push(style);
        setTypes(copy);

        shuffle(Ls);

        let letters2 = []
        // render images of Ls and Ts in the same order as in the array
        for (i = 0; i < size; i++) {
            if (arr[i] !== "T") {
                letters2.push(
                    <Image
                        tilt={keyVal}
                        letter={arr[i]}
                        type={Ls[index]}
                    />)

                index++;
            }
            else {
                letters2.push(
                    <Image
                        tilt={keyVal}
                        letter={arr[i]}
                        type={style}
                    />)
            }


        }
        setLetters(letters2);
    }, []);

    return (
        <div>{letters}</div>
    )

}


export default Images;