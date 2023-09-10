import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext/GameContextProvider";

export const useGameContext = () => useContext(GameContext)
