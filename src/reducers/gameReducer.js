const initState = {
  popGame: [],
  upComingGames: [],
  currentGame: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAME":
      return { ...state, popGame: action.payload.popeGame };
    default:
      return { ...state };
  }
};

export default gameReducer;
