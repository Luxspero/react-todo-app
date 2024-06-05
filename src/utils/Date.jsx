const getFullYear = (date = new Date()) => {
    return date.getFullYear();
}

const getToday = (date = new Date()) => {
    return date
}

export { getFullYear, getToday }