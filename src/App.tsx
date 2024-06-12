import { useState } from "react";
import { generateRandomPairsArray } from "./lib/utils";
import "./App.css";
function App() {
  const [gridItems, setGridItems] = useState(generateRandomPairsArray(16));
  return (
    <>
      <div className="cards-grid">
        {gridItems
          ? gridItems.map((item, index) => {
              return (
                <div className="grid-item" key={index}>
                  {item}
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default App;
