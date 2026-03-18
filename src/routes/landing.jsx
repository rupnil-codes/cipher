import "../styles/routes/landing.css";
// import {useState} from "react";


function Landing() {

    const generateBinary = (length = 256) => {
        return Array.from({ length }, (_, i) => i % 2 ? 1 : 0).join("");
    }

    return (
        <>
            <section className={"landing"}>
                <section className={"hero"}>
                    <h1 className={"header-font"}>
                        C1PH
                        <span className={"sigma-font"}>Σ</span>
                        R
                    </h1>
                    <p>Build a CYBERSECURITY related project.</p>
                    <p>Get <i>laptops</i>, <i>hacker kits</i>, and more!</p>

                    <div className={"buttons"}>
                        <div className={"button-container"}>
                            Learn More
                        </div>
                        <div className={"button-container-important"}>
                            RSVP
                        </div>
                    </div>

                    <div className={"terminal"}>
                        <div className={"titlebar"}>
                            <div className={"actions"}>
                                <div className={"circle red"}></div>
                                <div className={"circle yellow"}></div>
                                <div className={"circle green"}></div>
                            </div>
                            <div className={"title-container"}>
                                <div className={"title"}>anon@hackclub - cipher</div>
                            </div>
                        </div>
                        <div className={"body"}>
                            <p>anon@hackclub ~ %</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className="content">
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>

                <h1> Deciphering</h1>
                <h2>CIPHER's Mystery</h2>
                <div className={"small-divider"}/>
                <p>Explanation here.. COMING SOONNN</p>

                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>

            </section>
        </>
    )
}

export default Landing