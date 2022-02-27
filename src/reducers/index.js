import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const rootCombiner = combineReducers({
  games: gameReducer,
});

export default rootCombiner;
