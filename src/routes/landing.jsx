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
            <section className="ysws">
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>

                <h1>What is this?</h1>
                {/*<h2>What is this?</h2>*/}
                <div className={"small-divider"}/>
                <p>If you are still confused about <i>CIPHER</i></p>
                <p>and what this is about: </p>

                <div className={"cards"}>
                    <div className={"card ys"}>
                        <div className={"header"}>
                            <h1>You ship</h1>
                        </div>
                        <p>You make any Cybersecurity related project, like website, app, games, etc! Some ideas
                            include: </p>
                        <div className={"ideas"}>
                            <div className={"ideas-container"}>
                                Encryption Algorithms
                            </div>
                            <div className={"ideas-container"}>
                                A Hacker Sim Game
                            </div>
                            <div className={"ideas-container"}>
                                A password manager
                            </div>
                            <div className={"ideas-container"}>
                                Capture the Flags
                            </div>
                        </div>
                    </div>

                    <div className="arrow"/>

                    <div className={"card ws"}>
                        <div className={"header"}>
                            <h1>We ship</h1>
                        </div>
                        <p>Submit projects earn <i>BYTES</i> & buy stuff from our shop! Items include: </p>
                        <div className={"ideas"}>
                            <div className={"ideas-container"}>
                                Hackduckies
                            </div>
                            <div className={"ideas-container"}>
                                Yubikeys
                            </div>
                            <div className={"ideas-container"}>
                                Proxmark 3 RDVs
                            </div>
                            <div className={"ideas-container"}>
                                Laptops & More
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className={"community"}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>

                <h1>Community</h1>
                <div className={"small-divider"}/>

                <div className={"container"}>
                    <div className={"description"}>
                        <h2>Join the community</h2>
                        <p>Connect with thousands of teen hackers on Slack, share your projects, and get help when you're stuck.</p>
                        <div className={"buttons"}>
                            {/*<div className={"button-container"}>*/}
                            {/*    Learn More*/}
                            {/*</div>*/}
                            <a href={"http://hackclub.com/slack"} target="_blank" rel="noopener noreferrer">
                                <div className={"button-container-important"}>
                                    Join Slack
                                </div>
                            </a>
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
                            <p>anon@hackclub ~ % <span className={"bright"}>./connect --community</span></p>
                            <p>
                                INIT handshake...<br/>
                                RESOLVING: <span className="accent">hackclub.com/slack</span><br/>
                                STATUS: <span className="success">FRIENDLY</span><br/>
                                NODES: <span className="info">49,567</span><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{
                height: "100vh",
                width: "100%",
            }}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>
            </section>
        </>
    )
}

export default Landing