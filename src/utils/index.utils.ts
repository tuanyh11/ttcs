export const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const transformFormatDate = (date: Date = new Date()) => {
    return date.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit", year: "numeric"})
}

export const formatMoney = (amount: number, currency = "VND", locale = "vi-VN") => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};
 
export function handleError(error: any) {
  const errorMessage = error.response?.data?.message || error.message;
  return errorMessage;
}