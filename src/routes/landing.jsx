import "../styles/routes/landing.css";
// import {useState} from "react";


function Landing() {
    return (
        <>
            <section className={"landing"}>
                <section className={"hero"}>
                    <h1 className={"header"}>CIPHER</h1>
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
        </>
    )
}

export default Landing