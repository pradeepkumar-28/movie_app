import React from "react";
import data from "./langaugeData";

function Langauge() {
  return (
    <div className="Movie_Container">
      <h1 className="section_Title">Watch in Your Langauge</h1>
        {data.map((val) => {
          const { id, secondaryName, PrimaryName } = val;
          return (
                <div key={id} className="langauge_Box">
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
