import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMovies from "../../redux/actions/Movies";
import Card from "../../component/Card";

function ExtraMovies() {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  const { Data:{trays} } = useSelector((state) => state?.MoviesReducers);

  const smallLandscapeLayoutData =  trays?.filter((data) => data.layout === "SMALL_LANDSCAPE_LAYOUT")[0]

  let inputRef = null

  const onKeybordNavigationHandler = (e) => {
    const length =  smallLandscapeLayoutData?.items?.length || 0
    let order = e.which;
    // right side arrow
    if (order === 39 ) {
        setActiveIndex((lastIndex) => {
        return (lastIndex + 1)% length;
      });
      //left side arrow
    } else if (order === 37) {
        setActiveIndex((lastIndex) => {
        return lastIndex - 1 >=0 ? lastIndex -1 : lastIndex;
      });
      // top arrow
    } else if (order === 38) {
      setActiveIndex((lastIndex) => {
          return lastIndex - 5 >=0 ? lastIndex -5 : lastIndex;
        })
      // down arrow
    } else if (order === 40) {
      setActiveIndex((lastIndex) => {
          return (lastIndex + 5)% length;
        })
    }
  };

  const selectActiveIndex =(index)=>{
    setActiveIndex(index);
    inputRef?.focus()
  }


  return (
    <div className="test tranding">
      <h1 className="section_Title">
        Extra Movies (you can handle these cards usign Keybord)
      </h1>
      <input
        type="text"
        style={{ width: "100%", height:"100%", position:"absolute", opacity:"0"}}
        autoFocus
        ref={(input)=>{
            inputRef = input
        }}
        onKeyDown={(e) => onKeybordNavigationHandler(e)}
      />
      <div className="ExtraMovies_section">
        {
        smallLandscapeLayoutData?.items?.map((itemData, index) => {
              const { id, title, images } = itemData;
              return (
                <Card
                  onCardHandler={()=>selectActiveIndex(index)}
                  key={id}
                  title={title}
                  img={images?.landscape}
                  style={activeIndex === index ? "active" : "nonActic_card"}
                />
              );
            })
          }
      </div>
    </div>
  );
}

export default ExtraMovies;
