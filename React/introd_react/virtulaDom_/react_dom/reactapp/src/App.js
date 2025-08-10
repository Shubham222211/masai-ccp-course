import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("Title")
  const [reactUpdates, setReactUpdates] = useState(0);

  const handleReactClick = () => {
    setTitle(`Title ${reactUpdates + 1}`)
    setReactUpdates((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>DOM Updates: {reactUpdates}</p>
      <button onClick={handleReactClick}>Change Title</button>
    </div>
  );
}

export default App;
