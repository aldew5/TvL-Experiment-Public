import Menu from "../components/Menu";
import "../styles/Landing.css"
import { useState } from "react";
import Instructions from "../components/Instructions.js";

const Landing = () => {
    const [displayMenu, setDisplayMenu] = useState(true);

    return (
        <div>
            {displayMenu ?
                <div className="Landing">
                    <h1>TvL Experiment</h1>
                    <Menu
                        setDisplayMenu={setDisplayMenu}
                    />
                </div>
                :
                <Instructions />
            }
        </div>
    );
}

export default Landing;
