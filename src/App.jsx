import './styles/App.css'

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Landing from "./routes/landing.jsx";

function App() {

  return (
    <>
        <div className="app">

            <Landing />

            <Analytics />
            <SpeedInsights />
        </div>
    </>
  )
}

export default App
