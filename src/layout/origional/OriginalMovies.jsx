import React, { useEffect } from "react";
import Card from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";

function OriginalMovies() {
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

  return (
    <div className="Movie_Container originalMovie">
      <h1 className="section_Title">Heart Warming Originals</h1>
      <div className="Tranding_Grid">
        {portraitLayout?.items?.map((val) => {
          const { id, images } = val;
          return (
            <Card key={id} img={images?.landscape} style="OriginalMovie_card" />
          );
        })}
      </div>
    </div>
  );
}

export default OriginalMovies;
