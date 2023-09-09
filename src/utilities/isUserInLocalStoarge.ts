import { useReadLocalStorage } from 'usehooks-ts'
import { User } from '../classes/User'

export const isUserInLocalStoarge = () => {
	const users = (useReadLocalStorage('sudoku') as User[]) ?? false
	if (!users) return false
	if (users.length !== 0) return true
	return false
}
