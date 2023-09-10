import { useContext } from "react";
import { CreateUsernameContext } from '../../contexts/UsernameContext/CreateUsernameContextProvider'

export const useCreateUsernameContext = () => useContext(CreateUsernameContext)
