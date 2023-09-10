export const getFromLocalStorage = (key: string) =>
	JSON.parse(localStorage.getItem(key) as string)

export const setToLocalStorage = <TOfValue>(key: string, value: TOfValue) =>
	localStorage.setItem(key, JSON.stringify(value))
