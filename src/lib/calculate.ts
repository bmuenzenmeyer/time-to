const createUTCDate = (year, month, day, hour = 0, minute = 0, second = 0, millisecond = 0) => {
    return new Date(Date.UTC(year, month, day, hour, minute, second, millisecond));
}



const formatDateAndTime = (dateString: string, locale: string): string => {
    const then = new Date(dateString)
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: locale, 
        timeZoneName: "long", 
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return formatter.format(then);
}

const calculateTimeFromNowTo = (dateString: string, locale: string): string => {
    const now = new Date()
    const utcNow = createUTCDate(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds())
    const then = new Date(dateString)
    const diff = then.getTime() - utcNow.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

export { calculateTimeFromNowTo, formatDateAndTime }