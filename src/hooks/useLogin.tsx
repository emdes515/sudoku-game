import { useLocalStorage } from "usehooks-ts"

export const useLogin = (userId: number) => {
    const user = useLocalStorage('mathstar', userId)
    console.log(user)
}