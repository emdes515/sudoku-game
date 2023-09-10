import { useReadLocalStorage } from 'usehooks-ts'
import { User } from '../classes/User'

export const isAnyUserInLocalStoarge = () => {
	const users = JSON.parse(localStorage.getItem('users') as string) ?? false
	if (!users) return false
	if (users.length !== 0) return true
	return false
}