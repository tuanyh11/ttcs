import { useEffect, useState } from "react";

export const useDebounce = (value, time) => {
  // console.log(value)
  const [data, setData] = useState(value);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setData(value);
    }, time);

    return () => clearTimeout(timeId);
  }, [value, data]);

  return data;
};

export const useDate = () => {
  function getDate(
    date = new Date(),
    locales = "en-Us",
    options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  ) {
    return new Date(date).toLocaleDateString(locales, options);
  }
  return getDate;
};
