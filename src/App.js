import React, { useState } from "react";
import ExtraMovies from "./layout/ExtraMovies/ExtraMovies";
import OriginalMovies from "./layout/origional/OriginalMovies";
import TrandingMovies from "./layout/Tranding/TrandingMovies";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabId, setTabId] = useState(0);
  let inputRef = null;
  const cardItemRef = [];
  const onKeybordNavigationHandler = (e, tabid) => {
    let order = e.which;
    let length = 15;
    setTabId(tabid);
    // right side arrow
    if (order === 39) {
      cardItemRef[tabid][activeIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
      setActiveIndex((lastIndex) => {
        return (lastIndex + 1) % length;
      });

      //left side arrow
    } else if (order === 37) {
      cardItemRef[tabid][activeIndex - 1].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
      setActiveIndex((lastIndex) => {
        return lastIndex - 1 >= 0 ? lastIndex - 1 : lastIndex;
      });

      // top arrow
    } else if (order === 38) {

      setTabId((lastId) => {
        return lastId === 0 ? 0 : lastId - 1;
      });
      // down arrow
    } else if (order === 40) {
      setTabId((lastId) => {
        return lastId === 0 ? lastId + 1 : 0 || tabId === 1 ? lastId + 1 : 0;
      });
    }
  };

  const setCardRef = (tabId, index, ref) => {
    if(cardItemRef && cardItemRef[tabId]){
      cardItemRef[tabId][index] = ref;
    }else{
      cardItemRef[tabId] = [ref];

    }
    return ref;
  };
  const onCardActiveHandler = (index, tabid) => {
    setActiveIndex(index);
    inputRef?.focus();
    setTabId(tabid);
  };

  return (
    <>
      <div className="test">
        <input
          type="text"
          autoFocus
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: "0",
          }}
          ref={(input) => {
            inputRef = input;
          }}
          onKeyDown={(e) => onKeybordNavigationHandler(e, tabId)}
        />
        <TrandingMovies
          setCardRef={(index, cardRef) => setCardRef(0, index, cardRef)}
          cardActive={(index) => onCardActiveHandler(index, 0)}
          activeCardIndex={activeIndex}
          onKeybordNavigationHandler={(e) => onKeybordNavigationHandler(e, 0)}
          tabId={tabId}
        />
        <OriginalMovies
          setCardRef={(index, cardRef) => setCardRef(1, index, cardRef)}
          cardActive={(index) => onCardActiveHandler(index, 1)}
          activeCardIndex={activeIndex}
          onKeybordNavigationHandler={(index) =>
            onKeybordNavigationHandler(index, 1)
          }
          tabId={tabId}
        />
        <ExtraMovies
        setCardRef={(index, cardRef) => setCardRef(2, index, cardRef)}
        cardActive={(index) => onCardActiveHandler(index, 2)}
        activeCardIndex={activeIndex}
        onKeybordNavigationHandler={(index) =>
          onKeybordNavigationHandler(index, 2)
        }
        tabId={tabId}
      />
      </div>
    </>
  );
}

export default App;
