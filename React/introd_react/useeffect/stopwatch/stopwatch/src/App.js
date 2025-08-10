import React, { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0)

  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer

    if (running) {
      timer = setInterval(() => {

        setSeconds(prev => prev + 1)

      }, 1000)
    }
    return () => clearInterval(timer)
  }, [running]);

  useEffect(() => {
    if (seconds === 10) {

      console.log("reached 10 seconds!");
    }
  }, [seconds])

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{seconds} seconds</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>

      <button onClick={() => { setRunning(false);setSeconds(0)}}>Reset</button>
    </div>
  )
}

export default App;
