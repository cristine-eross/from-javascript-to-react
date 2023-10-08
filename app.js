import {useState} from "react";
import "/.app.css;

function App() {
  const [isBlue, setIsBlue] = useState(true)

  return (
    <div className="App">
      <div className={isBlue ? "blue" : "green"}></div>
      <button onClick={() => setIsBlue(!isBlue)}>Change Color</button>
    </div>
  );
}

export default App;
