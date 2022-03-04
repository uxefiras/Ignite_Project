import { apiFullUrlGetter } from "../api";
import axios from "axios";

export const popGamesAsyncer = () => async (dispatch) => {
  const popGameAxios = await axios.get(apiFullUrlGetter());
  dispatch({
    type: "FETCH_GAME",
    payload: {
      popeGame: popGameAxios.data.results,
    },
  });
};
