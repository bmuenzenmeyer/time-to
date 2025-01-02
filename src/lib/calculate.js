export const createUTCDate = (
	year,
	month,
	day,
	hour = 0,
	minute = 0,
	second = 0,
	millisecond = 0,
) => {
	return new Date(Date.UTC(year, month, day, hour, minute, second, millisecond))
}

export const calculateTimeFromNowTo = (dateString) => {
	const now = new Date()
	const utcNow = createUTCDate(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		now.getHours(),
		now.getMinutes(),
		now.getSeconds(),
		now.getMilliseconds(),
	)
	const then = new Date(dateString)
	const diff = then.getTime() - utcNow.getTime()
	const days = Math.floor(diff / (1000 * 60 * 60 * 24))
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
	const seconds = Math.floor((diff % (1000 * 60)) / 1000)

	return `${days}d ${hours}h ${minutes}m ${seconds}s`
}
