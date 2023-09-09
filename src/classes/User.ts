import uniqid from 'uniqid'

export class User {
	constructor(username: string) {
		this.username = username
		this.id = uniqid()
		this.exp = 0
		this.level = 1
		this.money = 0
	}

	public username: string
	public id: string
	public exp: number
	public level: number
	public money: number
}
