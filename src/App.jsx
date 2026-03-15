import './styles/App.css'

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
        <div className="app">

            <h1>Cipher</h1>

            <Analytics />
            <SpeedInsights />
        </div>
    </>
  )
}

export default App
