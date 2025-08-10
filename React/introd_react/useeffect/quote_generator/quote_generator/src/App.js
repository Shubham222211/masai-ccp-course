import { useState } from "react";
import { useEffect } from "react";

function App() {



  const [quote, setQuote] = useState({})

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
  };

  useEffect(() => {
    getQuote();
    const timer = setInterval(getQuote, 30000)
    return () => clearInterval(timer)
  }, []);


  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Random Quote</h2>
      
      <p>-{quote.content}</p>
      <p>- {quote.author}</p>
      <button onClick={getQuote}>Get New Quote</button>
    </div>
  );

}
export default App;
