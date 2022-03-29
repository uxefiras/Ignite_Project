import { motion } from "framer-motion";
import styled from "styled-components";

function Games({ name, img, fullarr }) {
  console.log(fullarr.length === 10);
  return (
    <GameCard>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p></p>

      <button>Details</button>
    </GameCard>
  );
}

// grid-rwo-template : ${fullarr.length == 10?}

const GameCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-basis: 20vw;
  padding: 1rem 1rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px #f5f5f5;
  margin-bottom: 1rem;
  img {
    top: 0;
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
  button {
    background-color: #ffc107;
    color: white;
    border: none;
    border-radius: 0.22rem;
    padding: 1rem 1rem;
  }
`;
export default Games;
