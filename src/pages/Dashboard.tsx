import { useGameContext } from '../hooks/contextHooks/useGameContext'

const Dashboard = () => {
	const { activeUserID } = useGameContext()

	return (
		<div>
			<h1>Dahboard: {activeUserID}</h1>
		</div>
	)
}

export default Dashboard
