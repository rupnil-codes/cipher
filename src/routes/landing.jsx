import "../styles/routes/landing.css";
import {useState} from "react";

function Landing() {
    const DEFAULT_TITLE = "C1PHΣR"
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const [title, setTitle] = useState("C1PHΣR");

    const glitchEffect  = () => {
        let iterations = 0;

        const interval = setInterval(() => {
            setTitle(
                title.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return DEFAULT_TITLE[index];
                        }

                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("")
            );

            if (iterations >= DEFAULT_TITLE.length) clearInterval(interval);

            iterations += 1/3;
        }, 30);

    };

    return (
        <>
            <div className={"landing"}>
                <h1
                    className={"header-font"}
                    onMouseOver={glitchEffect}
                >
                    {title.split("").map((char, i) =>
                        char === "Σ"
                            ? <span key={i} className="sigma-font">Σ</span>
                            : char
                    )}
                </h1>
                <h2>
                    press
                    <span className={"enter"}> ENTER </span>
                    to continue
                    <span className={"cursor"}> █</span>
                </h2>
            </div>
        </>
    )
}

export default Landing