import React from "react";
import data from "./langaugeData";

function Langauge({ cardActive, activeCardIndex, tabId }) {
  const selectActiveIndex = (index) => {
    cardActive(index);
  };
  


  return (
    <div className="Movie_Container">
      <h1 className="section_Title">Watch in Your Langauge</h1>
      {data.map((val, index) => {
        const { id, secondaryName, PrimaryName } = val;
        return (
          <div
            key={id}
            className={
              activeCardIndex === index && tabId === 2
                ? "active_langaugeBox"
                : "langauge_Box"
            }
            onClick={() => selectActiveIndex(index)}
          >
            <div className="langauge">
              {secondaryName}
              <br />
              {PrimaryName}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Langauge;
