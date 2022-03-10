import { useState, createContext } from "react"

export const ExperimentContext = createContext();

export const ExperimentProvider = (props) => {
    const [initials, setInitials] = useState("AD");
    const [condition, setCondition] = useState("3");
    const [TvL, setTvL] = useState("5");
    const [practice, setPractice] = useState(10);
    const [exper, setExper] = useState(200);

    const [size1, setSize1] = useState(4);
    const [size2, setSize2] = useState(7);
    const [size3, setSize3] = useState(10);
    const [sizes, setSizes] = useState([]);

    var now = new Date();
    const [date, setDate] = useState(now.getTime());

    // probability of changing colour
    const [prob, setProb] = useState(0.5);

    // Fisher-Yates Shuffle
    function shuffle(array) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    return (
        <ExperimentContext.Provider
            value={[initials, setInitials, condition, setCondition, TvL, setTvL,
                practice, setPractice, exper, setExper, size1, setSize1, size2, setSize2,
                size3, setSize3, prob, setProb, sizes, setSizes, shuffle, date, setDate]
            }>
            {props.children}
        </ExperimentContext.Provider>
    )
}