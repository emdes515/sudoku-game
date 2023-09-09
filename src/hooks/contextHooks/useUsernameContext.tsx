import { useContext } from "react";
import { UsernameContext } from "../../contexts/UsernameContext/UsernameContextProvider";

export const useUsernameContext = () => useContext(UsernameContext)
