export const formatMoney = (amount, currency = "VND", locale = "vi-VN") => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};
 