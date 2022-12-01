import axios from "axios";

const url = "https://pastebin.com/raw/9t6wDYfh"

const getMovies = () => {
    return async (dispatch) => {
      try {
        const response = await axios(url);
        dispatch({
          type: "getMovies",
          payload: response.data.results,
        });
      } catch (error) {
        return console.log(error);
      }
    };
  };

export default getMovies  