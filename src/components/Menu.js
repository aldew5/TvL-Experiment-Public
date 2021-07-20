import React, { useContext } from "react";
import './Menu.css';
import { ExperimentContext } from "./ExperimentContext";


const Menu = ({ setDisplayMenu }) => {
    const [initials, setInitials, condition, setCondition, TvL, setTvL, practice, setPractice,
        exper, setExper, size1, setSize1, size2, setSize2, size3,
        setSize3, prob, setProb, sizes, setSizes, shuffle, date, setDate] = useContext(ExperimentContext);

    // create an array that will store the sizes of the ensuing trials
    function updateSizes() {
        let copy = [];
        if ((exper + practice) === 1) {
            copy.push(size1);
        }
        else if ((exper + practice) === 2) {
            copy.push(size1); copy.push(size2);
        }
        else {
            for (var i = 0; i < Math.floor((exper + practice) / 3); i++) {
                copy.push(size1);
            }
            for (i = 0; i < Math.floor((exper + practice) / 3); i++) {
                copy.push(size2);
            }
            for (i = 0; i < (exper + practice) - 2 * Math.floor((exper + practice) / 3); i++) {
                copy.push(size3);
            }
        }
        shuffle(copy);
        setSizes(copy);
    }

    // handle changing any of the menu's fields
    const initialHandler = (e) => {
        setInitials(e.target.value);
    }
    const conditionHandler = (e) => {
        setCondition(e.target.value);
    }
    const tvLHandler = (e) => {
        setTvL(e.target.value);
    }
    const practiceHandler = (e) => {
        setPractice(e.target.value);
    }
    const size1Handler = (e) => {
        setSize1(e.target.value);
    }
    const size2Handler = (e) => {
        setSize2(e.target.value);
    }
    const size3Handler = (e) => {
        setSize3(e.target.value);
    }
    const probHandler = (e) => {
        setProb(e.target.value);
    }
    const experHandler = (e) => {
        setExper(e.target.value);
    }
    const submitHandler = (e) => {
        updateSizes();
        setDisplayMenu(false);
    }


    return (
        <div className="form-style-2">
            <div className="form-style-2-heading">Input Variables</div>
            <form >
                <label htmlFor="initials">Enter Initials: <br /> </label>
                <input type="text" id="initials" name="initials"
                    value={initials} onChange={initialHandler}
                    className="input-field" /><br /><br />

                <label htmlFor="condition">Condition: 1=RedT_rgLs, 2=rgTrgLs, 3=rgbTrgbLs, 4=RedTrgbLs<br /></label>
                <input type="text" id="condition" name="condition"
                    value={condition} onChange={conditionHandler}
                    className="input-field" /><br /><br />

                <label htmlFor="tvl">1=colour, 2=shape_and_size, 3=shape, 4=size  <br /></label>
                <input type="text" id="tvl" name="tvl"
                    value={TvL} onChange={tvLHandler}
                    className="input-field" /><br /><br />

                <label htmlFor="practice">Enter number of Practice Trials:  <br /></label>
                <input type="text" id="practice" name="practice"
                    value={practice} onChange={practiceHandler}
                    className="input-field" /><br /><br />

                <label htmlFor="experiment">Enter Number of Experimental Trials: <br /></label>
                <input type="text" id="experiment" name="experiment"
                    value={exper} onChange={experHandler}
                    className="input-field" /><br /><br />

                <label htmlFor="set1">Set size 1:  <br /></label>
                <input type="text" id="size1" name="size1"
                    value={size1} onChange={size1Handler}
                    className="input-field" /><br /><br />
                <label htmlFor="set2">Set size 2:  <br /></label>
                <input type="text" id="size1" name="size1"
                    value={size2} onChange={size2Handler}
                    className="input-field" /><br /><br />

                <label htmlFor="set3">Set size 3:  <br /></label>
                <input type="text" id="size1" name="size1"
                    value={size3} onChange={size3Handler}
                    className="input-field" /><br /><br />

                <label htmlFor="prob">Switch Probabilty: <br /></label>
                <input type="text" id="prob" name="prob"
                    value={prob} onChange={probHandler}
                    className="input-field" /><br /><br />

                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Menu;