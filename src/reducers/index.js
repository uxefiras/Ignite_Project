import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import GameCounterIncreaser from "./GameCounterIncreaser";

const rootCombiner = combineReducers({
  games: gameReducer,
  increaser: GameCounterIncreaser,
});

export default rootCombiner;
