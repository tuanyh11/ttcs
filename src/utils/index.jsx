

export const generateStart =  (rating = 0, className) => {
    const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <i key={i} className={`fa fa-star filled text-[#F6BC3E] text-xs ${className || ''}`}></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i
        key={filledStars + i}
        className={`fa-regular fa-star text-[#ccc] text-xs ${className || ''}`}
      ></i>
    );
  }

  return stars;
}

export const fakeData = (num, schema) => {
  return Array.from([...new Array(num)], ( _, k) => {
    return {
     ...schema(k)
    }
  });
}
