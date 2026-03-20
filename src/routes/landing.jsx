import "../styles/routes/landing.css";
import {ArrowDown, ArrowUpRight, ArrowRight} from "lucide-react";
import {useState} from "react";


function Landing() {

    const [openIndex, setOpenIndex] = useState(null);

    const generateBinary = (length = 256) => {
        return Array.from({length}, (_, i) => i % 2 ? 1 : 0).join("");
    }

    const number = "105,406";

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
            <section id={"landing"} className={"landing"}>
                <section className={"hero"}>
                    <h1
                        className={"header-font"}
                        onMouseEnter={glitchEffect}
                    >
                        {title.split("").map((char, i) =>
                                char === "Σ"
                                    ? <span key={i} className="sigma-font">Σ</span>
                                    : char
                        )}
                    </h1>
                    <p>Build intentionally <span className={"success"}><i>INSECURE</i></span> apps, hack others'.</p>
                    <p>Get <i><a href={"#ysws"}>laptops</a></i>, <i><a href={"#ysws"}>hacker kits</a></i>, and more!</p>

                    <div className={"buttons"}>
                        <a href={"#ysws"}>
                            <div className={"button-container"}>
                                Learn More <ArrowDown size={16} strokeWidth={2}/>
                            </div>
                        </a>
                        <a href={"https://rsvp.hackclub.community/cipher"} target="_blank" rel="noopener noreferrer">
                            <div className={"button-container-important"}>
                                RSVP <ArrowUpRight size={16} strokeWidth={3}/>
                            </div>
                        </a>
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
                            <p>anon@hackclub ~ % ./start --journey</p>
                            <p>OBJECTIVE: <span className={"accent"}>BUILD. BREAK. SECURE.</span><br/>
                                REWARDING: <span className={"info"}>BYTES</span><br/>
                                STATUS: <span className={"success"}>BUILDING</span>...
                                <span className={"cursor"}><b>_</b></span>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
            <section id={"ysws"} className="ysws">
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
                        <p>You make a <span className={"warn"}>vulnerable</span> website, app, games, etc., <u>along with a patched version</u>. Others will try to break it. Like:
                            </p>
                        <div className={"ideas"}>
                            <div className={"ideas-container"}>
                                Hackable Authentication
                            </div>
                            <div className={"ideas-container"}>
                                SQL Injections
                            </div>
                            <div className={"ideas-container"}>
                                Insecure Chat App
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
                        <p>Submit projects, complete <span className={"accent"}>bounties</span>, earn <span className={"info"}><i>BYTES</i></span> & buy stuff from our shop! Items include: </p>
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
                            <p>* actual shop may differ</p>
                        </div>
                    </div>
                </div>

            </section>
            <section id={"community"} className={"community"}>
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
                        <p>Connect with thousands of teen hackers on Slack, share your projects, and get help when
                            you're stuck.</p>
                        <div className={"buttons"}>
                            {/*<div className={"button-container"}>*/}
                            {/*    Learn More*/}
                            {/*</div>*/}
                            <a href={"http://hackclub.com/slack"} target="_blank" rel="noopener noreferrer">
                                <div className={"button-container-important"}>
                                    Join Slack <ArrowRight size={16} strokeWidth={3}/>
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
                                NODES: <span className="info">
                                <span className="info">
                                    {number ? number.toLocaleString() : "..." }
                                </span>
                            </span><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"faqs"} className={"faqs"}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>
                <div className={"glow"}/>

                <h1>FAQs</h1>
                <div className={"small-divider"}/>
                <p>Some of your pressing questions about <i>CIPHER</i><br/>
                    has been answered below: </p>

                <div className="container">
                    {[
                        {
                            q: "When will this start?",
                            a: <> <i>CIPHER</i> is a YSWS concept. If this gets selected for 2026 Summer Internship or if I get sponsors this will become a reality! Keep an eye on <a href={"https://hackclub.enterprise.slack.com/archives/C0ALSDTTU12"} target="_blank"
                                                                                                                                                                                       rel="noopener noreferrer"> #cipher</a>! </>
                        },
                        {
                            q: "Can I submit multiple projects?",
                            a: <>YES! in fact you are encouraged to make multiple projects.</>
                        },
                        {
                            q: 'What is "BYTES"?',
                            a: <> <i>BYTES</i> are the fake currency of Cipher. After submitting a project,
                                you will be assigned some "bounties" where you have to find others vulnerabilities. The result of the bounty hunt determines how many <i>BYTES</i> you'll receive for each
                                hour coded.<br/><br/>
                                Use the <i>BYTES</i> to buy something nice! </>
                        },
                        {
                            q: "How do I track time?",
                            a: <>Use Hackatime, an editor extension that tracks the time you spend coding. You can install it
                                <a href={"https://hackatime.hackclub.com/"} target="_blank"
                                   rel="noopener noreferrer"> here</a>
                                !</>
                        },
                        {
                            q: "I have more questions!",
                            a: <>If you have any more questions feel free to ask in
                                <a href={"https://hackclub.enterprise.slack.com/archives/C0ALSDTTU12"} target="_blank"
                                   rel="noopener noreferrer"> #cipher</a> or reach out to
                                <a href={"https://hackclub.enterprise.slack.com/archives/D0A4UTZNARL"} target="_blank"
                                   rel="noopener noreferrer"> me</a>!</>
                        }
                    ].map((item, i) => (
                        <div className="faq" key={i}>
                            <div
                                className="question"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                Q. {item.q}
                            </div>

                            <div className={`answer ${openIndex === i ? "open" : ""}`}>
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id={"footer"} className={"footer"}>
                <div className={"divider"}>
                    <div className="track">
                        <span>{generateBinary()}</span>
                        <span>{generateBinary()}</span>
                    </div>
                </div>

                <div className={"container"}>
                    <div className={"rsvp"}>
                        <h1>Want it to happen?</h1>
                        <p>CIPHER is nowhere near completion. So, if you want CIPHER to become a reality, RSVP now! and
                            keep an eye on <a href={"https://hackclub.enterprise.slack.com/archives/C0ALSDTTU12"} target="_blank"
                                              rel="noopener noreferrer"> #cipher</a>!</p>
                        <div className={"buttons"}>
                            <a href={"https://hackclub.com/slack"} target={"_blank"} rel="noopener noreferrer" >
                                <div className={"button-container"}>
                                    Join Slack <ArrowUpRight size={16} strokeWidth={3}/>
                                </div>
                            </a>
                            <a href={"https://rsvp.hackclub.community/cipher"} target={"_blank"} rel="noopener noreferrer" >
                                <div className={"button-container"}>
                                    RSVP <ArrowUpRight size={16} strokeWidth={3}/>
                                </div>
                            </a>
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