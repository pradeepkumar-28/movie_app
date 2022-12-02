import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";

function TrandingMovies({cardActive, activeCardIndex, tabId, setCardRef}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const {
    Data: { trays },
  } = useSelector((state) => state?.MoviesReducers);

  const landScapeLayout = trays?.filter(
    (data) => data.layout === "LANDSCAPE_LAYOUT"
  )[0];

  const itemDataLength = landScapeLayout?.items?.length

 
  const selectActiveIndex = (index) => {
    cardActive(index, itemDataLength)
  };

  return (
    <div className="Movie_Container tranding" >
      <h1 className="section_Title">Tranding Trailers</h1>
      <div className="Tranding_Grid">
        {landScapeLayout?.items?.map((itemData, index) => {
          const { id, title, images } = itemData;
          return (
            <Card
              onCardHandler={() => selectActiveIndex(index)}
              key={id}
              setCardRef={(cardRef)=>setCardRef(index, cardRef)}
              title={title}
              img={images?.landscape}
              style={activeCardIndex === index && tabId === 0 ? "active" : "nonActic_card"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TrandingMovies;
