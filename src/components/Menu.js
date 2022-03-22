import { useContext } from "react";
import '../styles/Menu.css';
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

    const initialHandler = (e) => {
        setInitials(e.target.value);
    }
    const submitHandler = (e) => {
        updateSizes();
        setDisplayMenu(false);
    }

    return (
        <div className="form-style-2">
            <div className="form-style-2-heading">Input Variables</div>
            <form >
                <label htmlFor="initials">Enter your MTurk ID: <br /> </label>
                <input type="text" id="initials" name="initials"
                    value={initials} onChange={initialHandler}
                    className="input-field" /><br /><br />

                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default Menu;