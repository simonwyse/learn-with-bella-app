import { useContext } from "react";
import { AppContext } from "../AppContext";
import bella from "../assets/bella-avatar.png";

function Result() {
    const { view, score } = useContext(AppContext);

    if (view === 3) {
        return (
            <section className="flex flex-col items-center">
                <img src={bella.src} className="bella-lg" alt="" />
                <h1>
                    Well done!
                    <br />
                    You&apos;ve got {score} Bella Points!
                </h1>
            </section>
        );
    }

    return false;
}

export default Result;
