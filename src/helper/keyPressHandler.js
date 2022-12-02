const onKeybordNavigationHandler = (e, data, setActiveIndex) => {
    const length =  data || 0
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

  export default onKeybordNavigationHandler