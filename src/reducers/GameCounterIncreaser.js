let init = 10;

const GameCounterIncreaser = (state = init, action) => {
  switch (action.type) {
    case "INCREASE_GAME_COUNTER":
      return state + 10;
    default:
      return state;
  }
};

export default GameCounterIncreaser;
