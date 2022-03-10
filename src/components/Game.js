import { motion } from "framer-motion";
import styled from "styled-components";

function Games({ name, img }) {
  return (
    <GameCard>
      <h1>{name}</h1>
      <img src={img} alt={name} />
    </GameCard>
  );
}

const GameCard = styled(motion.div)`
  display: felx;
  flex-direction: column;
  h1 {
    font-size: 1.2rem;
  }
  img {
  }
`;
export default Games;
