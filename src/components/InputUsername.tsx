import { ChangeEvent, FormEvent } from 'react'
import { useCreateUsernameContext } from '../hooks/contextHooks/useUsernameContext'
import { useGameContext } from '../hooks/contextHooks/useGameContext'

const InputUsername = () => {
	const {
		setUsername,
		username,
		validateUsername,
		setUsernameValidated,
		usernameVaildated: { state },
	} = useCreateUsernameContext()

	const { createNewUser } = useGameContext()

	const changeEventInputUsernameHandler = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement>) => {
		const validated = validateUsername(value)
		setUsernameValidated(validated)
		if (validated.state) setUsername(value)
	}

	const submitEventFromUsernameHandler = (
		event: FormEvent<HTMLFormElement>,
	) => {
		if (!state) event.preventDefault()

		const newUser = createNewUser(username)

		if(!newUser) {
			event.preventDefault()	
		}
	}

	return (
		<form onSubmit={submitEventFromUsernameHandler}>
			<input
				id="input-username"
				type="text"
				placeholder="username"
				className={`input input-bordered input-lg w-full max-w-xs ${
					state === 'empty'
						? 'input-primary'
						: state
						? 'input-success'
						: 'input-error'
				}`}
				onChange={changeEventInputUsernameHandler}
			/>
		</form>
	)
}

export default InputUsername
