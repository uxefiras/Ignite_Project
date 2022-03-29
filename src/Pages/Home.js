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
  const increasment = useSelector((state) => state.increaser);

  return (
    <GamesToList>
      <GameListInner>
        {games.popGame.map((game) => (
          <Games
            fullarr={games.popGame}
            key={game.id}
            name={game.name}
            img={game.background_image}
          />
        ))}
      </GameListInner>
    </GamesToList>
  );
}

const GamesToList = styeld(motion.div)`
display: flex;
width: 100vw;
justify-content: center;
align-items: center;


`;
const GameListInner = styeld(motion.div)`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: flex-start;


margin: auto;

`;
export default Home;
