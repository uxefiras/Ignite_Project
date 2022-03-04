import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { popGamesAsyncer } from "../Action/gameAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popGamesAsyncer());
  });
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default Home;
