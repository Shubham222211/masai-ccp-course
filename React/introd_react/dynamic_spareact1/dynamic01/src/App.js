
import { useState } from "react";


 function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    if (activePage === "home") {
      return <h2>Welcome to Home</h2>
    } else if (activePage === "about") {
      return <h2>About Us</h2>
    } else if (activePage === "contact") {
      return <h2>Contact Us</h2>;
    }
  };

  return (    <>
    
      <nav>
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("about")}>About</button>
        <button onClick={() => setActivePage("contact")}>Contact</button>
      </nav>

      
      <div>
        {renderPage()}
      </div>
    </>
)


 }



export default App;
