import './styles/App.css'

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Landing from "./routes/landing.jsx";
import Navbar from "./components/Navbar.jsx";
import {useState} from "react";

function App() {

    const [isInteracting, setIsInteracting] = useState(false);

    const trailerFunc = (e) => {
        const trailer = document.getElementById("trailer");

        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${ isInteracting ? 2.5 : 1 })`
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    }

  return (
    <>
        <div
            className="viewport"
            onMouseMove={trailerFunc}
        >
            <div className={"dotted-bg"}></div>
            {/*<div id={"trailer"}></div>*/}

            {/*<Navbar />*/}
            <Landing />

            <Analytics />
            <SpeedInsights />
        </div>
    </>
  )
}

export default App
