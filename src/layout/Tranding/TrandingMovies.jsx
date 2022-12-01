import React, { useEffect } from "react";
import Card from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";

function TrandingMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const { Data:{trays} } = useSelector((state) => state?.MoviesReducers);

  const landScapeLayout =  trays?.filter((data) => data.layout === "LANDSCAPE_LAYOUT")[0]


  return (
    <div className="Movie_Container tranding">
      <h1 className="section_Title">Tranding Trailers</h1>
        <div className="Tranding_Grid">
          {landScapeLayout?.items?.map((itemData) => {
                const { id, title, images } = itemData;
                return (
                  <Card
                    key={id}
                    title={title}
                    img={images?.landscape}
                    style="Main_card"
                  />
                );
              })
            }
        </div>
    </div>
  );
}

export default TrandingMovies;
