import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";
import Card from "../../component/Card";

function ExtraMovieBottomLayout({cardActive, activeCardIndex, tabId, setCardRef}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const {
    Data: { trays },
  } = useSelector((state) => state?.MoviesReducers);

  const smallLandscapeLayoutData = trays?.filter(
    (data) => data.layout === "SQUARE_LAYOUT"
  )[0];

 

  const selectActiveIndex = (index) => {
    cardActive(index)
  };
  
  return (
    <div className="Movie_Container tranding">
      <h1 className="section_Title">
       Old Movies
      </h1>
      <div className="Tranding_Grid">
        {smallLandscapeLayoutData?.items?.map((itemData, index) => {
          const { id, title, images } = itemData;
          return (
            <Card
              onCardHandler={() => selectActiveIndex(index)}
              key={id}
              setCardRef={(cardRef)=>setCardRef(index, cardRef)}
              title={title}
              img={images?.landscape}
              style={activeCardIndex === index && tabId === 3 ? "active" : "nonActic_card"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExtraMovieBottomLayout;
