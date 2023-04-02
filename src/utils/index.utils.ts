export const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const transformFormatDate = (date: Date = new Date()) => {
    return date.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit", year: "numeric"})
}