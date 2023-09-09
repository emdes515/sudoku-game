import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts'

export const useLogin = (userId: number) => {
	const [gameObject, setGameObject] = useLocalStorage('sudoku', [])

	const userIndex = gameObject.findIndex((user) => user.id === userId)

	if (userIndex === -1) return

    
}
