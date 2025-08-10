import { useState } from "react";

function App() {


  function ThemedBox({ theme, text }) {
  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "20px",
    margin: "10px",
    borderRadius: "5px",
  };

  return <div style={style}>{text}</div>;
}




function ThemeApp() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <ThemedBox theme={theme} text="Box 1" />
      <ThemedBox theme={theme} text="Box 2" />
      <ThemedBox theme={theme} text="Box 3" />
    </div>
  );
}
  return (
    <div>
      <ThemeApp/>
    </div>
  );
}

export default App;
