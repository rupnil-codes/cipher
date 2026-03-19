import "../styles/routes/landing.css";
import {ArrowDown, ArrowUpRight} from "lucide-react";
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
                    <p>Build a <span className={"success"}>CYBERSECURITY</span> related project.</p>
                    <p>Get <i><a href={"#"}>laptops</a></i>, <i><a href={"#"}>hacker kits</a></i>, and more!</p>

                    <div className={"buttons"}>
                        <div className={"button-container"}>
                            Learn More <ArrowDown size={16} strokeWidth={2} />
                        </div>
                        <div className={"button-container-important"}>
                            RSVP <ArrowUpRight size={16} strokeWidth={3}/>
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
                <p>If you are still confused about <i>CIPHER</i><br/>
                    and what this is about: </p>

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
            <section className={"faqs"}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>

                <h1>FAQs</h1>
                <div className={"small-divider"}/>
                <p>Some of  your pressing questions about <i>CIPHER</i><br/>
                    has been answered below: </p>

                <div className={"container"}>
                    <div className={"faq"}>
                        <div className={"question"}>Q. When will this start?</div>
                        <div className={"answer"}><i>CIPHER</i> is a YSWS concept. If this gets selected for 2026 Summer Internship or if I get sponsors this will become a reality! Keep an eye on #cipher!</div>
                    </div>
                    <div className={"faq"}>
                        <div className={"question"}>Q. Can I submit multiple projects?</div>
                        <div className={"answer"}>YES! in fact you are encouraged to make multiple projects.</div>
                    </div>
                    <div className={"faq"}>
                        <div className={"question"}>Q. What is <i>"BYTES"</i>?</div>
                        <div className={"answer"}>
                            <i>BYTES</i> are the fake currency of Cipher. After submitting a project, it will go through voting. The result of the voting determines how many <i>BYTES</i> you'll receive for each hour coded.<br/><br/>
                            Use the <i>BYTES</i> to buy something nice!</div>
                    </div>
                    <div className={"faq"}>
                        <div className={"question"}>Q. How do I track time?</div>
                        <div className={"answer"}>
                            Use Hackatime, an editor extension that tracks the time you spend coding. You can install it
                            <a href={"https://hackatime.hackclub.com/"}  target="_blank" rel="noopener noreferrer"> here</a>
                            !
                        </div>
                    </div>
                </div>
            </section>
            <section className={"footer"}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>

                <div className={"container"}>
                    <div className={"rsvp"}>
                        <h1>Want it to happen?</h1>
                        <p>CIPHER is nowhere near completion. So, if you want CIPHER to become a reality, RSVP now! and keep an eye on #cipher!</p>
                        <div className={"buttons"}>
                            <div className={"button-container"}>
                                Join Slack
                            </div>
                            <div className={"button-container"}>
                                RSVP
                            </div>
                        </div>
                    </div>
                    <div className={"footer"}>
                        Made with 💖 by rupnil.codes
                        <p>* Cipher is not (yet!) officially endorsed by Hack Club. This website is just a concept.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing