import "../styles/routes/landing.css";
// import {useState} from "react";


function Landing() {
    return (
        <>
            <section className={"landing"}>
                <div className={"container"}>
                    <div className={"side-container"}>
                        <h1 className={"header-font"}>C1PH<span className={"sigma-font"}>Σ</span>R<span className={"cursor"}>_</span></h1>
                        <p>Build a CYBERSECURITY related project.</p>
                        <p>Get laptops, hacker kits, and more! </p>
                    </div>
                    <div className={"title-terminal-container"}>
                        <div className={"titlebar"}>
                            <div className={"actions"}>
                                <div className={"circle red"}></div>
                                <div className={"circle yellow"}></div>
                                <div className={"circle green"}></div>
                            </div>
                            <div className={"title-container"}>
                                <div className={"title"}>cipher.hackclub.com</div>
                            </div>
                        </div>
                        <div className={"terminal-body"}>
                            {/*<h1 className={"header-font"}>C1PH<span className={"sigma-font"}>Σ</span>R</h1>*/}
                            <p>[Initializing] DONE...</p>
                            <p>[Hacking] DONE...</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing



// function Landing() {
//     const DEFAULT_TITLE = "C1PHΣR"
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const [title, setTitle] = useState("C1PHΣR");
//
//     const glitchEffect  = () => {
//         let iterations = 0;
//
//         const interval = setInterval(() => {
//             setTitle(
//                 title.split("")
//                     .map((letter, index) => {
//                         if (index < iterations) {
//                             return DEFAULT_TITLE[index];
//                         }
//
//                         return letters[Math.floor(Math.random() * 26)]
//                     })
//                     .join("")
//             );
//
//             if (iterations >= DEFAULT_TITLE.length) clearInterval(interval);
//
//             iterations += 1/3;
//         }, 30);
//
//     };
//
//     return (
//         <>
//             <div className={"landing"}>
//                 <h1
//                     className={"header-font"}
//                     onMouseOver={glitchEffect}
//                 >
//                     {title.split("").map((char, i) =>
//                         char === "Σ"
//                             ? <span key={i} className="sigma-font">Σ</span>
//                             : char
//                     )}
//                 </h1>
//                 <h2>
//                     press
//                     <span className={"enter"}> ENTER </span>
//                     to continue
//                     <span className={"cursor"}> █</span>
//                 </h2>
//             </div>
//         </>
//     )
// }