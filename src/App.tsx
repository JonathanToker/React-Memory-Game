import { useState, useEffect } from "react";
import {
  generateRandomPairsArray,
  isTheOtherSelectMatching,
} from "./lib/utils";
import "./App.css";
function App() {
  const [gridItems, setGridItems] = useState(generateRandomPairsArray(16));
  const [selectCount, setSelectCount] = useState(0);
  const handleRegenerate = () => {
    setGridItems(generateRandomPairsArray(16));
  };

  const handleSelect = (selectedIndex: number) => {
    setSelectCount((prev) => prev + 1);
    setGridItems((prev) =>
      prev.map((item, index) => {
        if (index === selectedIndex) {
          if (!item.isInvisble && selectCount <= 1) {
            return { ...item, isSelected: true };
          }
        }
        return { ...item };
      })
    );
  };
  const makeSelectedPairInvisble = () => {
    setGridItems((prev) =>
      prev.map((item) => {
        if (item.isSelected) {
          return { ...item, isSelected: false, isInvisble: true };
        }
        return { ...item };
      })
    );
    setSelectCount(0);
  };
  const unselectPair = () => {
    setGridItems((prev) =>
      prev.map((item) => {
        if (item.isSelected === true) {
          return { ...item, isSelected: false };
        }
        return { ...item };
      })
    );
    setSelectCount(0);
  };
  useEffect(() => {
    setTimeout(() => {
      if (selectCount >= 2) {
        if (isTheOtherSelectMatching(gridItems)) {
          makeSelectedPairInvisble();
        } else {
          unselectPair();
        }
      }
    }, 300);
    console.log(selectCount);
  }, [selectCount]);

  return (
    <>
      <div className="button-wrapper">
        <button className="regenerate-button" onClick={handleRegenerate}>
          Shuffle &amp; Regenerate
        </button>
      </div>
      <div className="cards-grid">
        {gridItems
          ? gridItems.map((item, index) => {
              return (
                <div
                  className={`grid-item ${
                    item.isInvisble ? "invisble-bg" : null
                  }`}
                  key={index}
                  aria-disabled={item.isInvisble}
                  onClick={() => handleSelect(index)}
                >
                  {item.isSelected && item.isInvisble === false
                    ? item.value
                    : ""}
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default App;
