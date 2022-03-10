import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popGamesAsyncer } from "../Action/gameAction";
import styeld from "styled-components";
import { motion } from "framer-motion";
import Games from "../components/Game";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(popGamesAsyncer());
  }, [dispatch]);
  const games = useSelector((state) => state.games);

  return (
    <GamesToList>
      {games.popGame.map((game) => (
        <Games name={game.name} img={game.background_image} />
      ))}
    </GamesToList>
  );
}

const GamesToList = styeld(motion.div)`

`;
export default Home;
