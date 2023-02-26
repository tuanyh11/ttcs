

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

export  function randomDateInCurrentMonth() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const startTime = startOfMonth.getTime();
  const endTime = endOfMonth.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);

  return new Date(randomTime);
}

export function sortProduct(products, sortBy) {
  if(sortBy === 'averageRating') {
    return products?.data?.sort((a, b) => {
      return Number(b?.node?.averageRating) - Number(a?.node?.averageRating)
    })
  }

  if(sortBy === 'priceHigh') {
    return products?.data?.sort((a, b) => {
      return Number(a?.node?.regularPrice?.substring(1)) - Number(b?.node?.regularPrice?.substring(1))
    })
  }

  if(sortBy === 'priceLow') {
    return products?.data?.sort((a, b) => {
      return Number(b?.node?.regularPrice?.substring(1)) - Number(a?.node?.regularPrice?.substring(1))
    })
  }

  return products?.data
}