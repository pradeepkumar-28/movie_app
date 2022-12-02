import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";

function OriginalMovies({cardActive, activeCardIndex, tabId,setCardRef}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const {
    Data: { trays },
  } = useSelector((state) => state?.MoviesReducers);

  const portraitLayout = trays?.filter(
    (data) => data.layout === "PORTRAIT_LAYOUT"
  )[0];

  

  const selectActiveIndex = (index) => {
    cardActive(index)
  };

  return (
    <div className="Movie_Container originalMovie">
      <h1 className="section_Title">Heart Warming Originals</h1>
      <div className="Tranding_Grid">
        {portraitLayout?.items?.map((val, index) => {
          const { id, images } = val;
          return (
            <Card
              key={id}
              setCardRef={(cardRef)=>setCardRef(index, cardRef)}
              onCardHandler={() => selectActiveIndex(index)}
              img={images?.landscape}
              style={activeCardIndex === index && tabId === 1 ? "active" : "nonActic_card"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OriginalMovies;
