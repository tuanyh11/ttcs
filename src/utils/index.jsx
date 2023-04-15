export const moveToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const generateStart = (rating = 0, className) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <i
        key={i}
        className={`fa fa-star filled text-[#fbb71c] text-xs ${
          className || ""
        }`}
      ></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i
        key={filledStars + i}
        className={`fa-light fa-star text-[#ccc] text-xs ${className || ""}`}
      ></i>
    );
  }

  return stars;
};

export const fakeData = (num, schema) => {
  return Array.from([...new Array(num)], (_, k) => {
    return {
      ...schema(k),
    };
  });
};

export function randomDateInCurrentMonth() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const startTime = startOfMonth.getTime();
  const endTime = endOfMonth.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);

  return new Date(randomTime);
}

export function sortProduct(products, sortBy, filter) {
  let newProducts = products;

  if (sortBy === "averageRating") {
    newProducts = newProducts?.sort((a, b) => {
      return Number(b?.node?.averageRating) - Number(a?.node?.averageRating);
    });
  }

  if (sortBy === "priceHigh") {
    newProducts = newProducts?.sort((a, b) => {
      return Number(a?.price.raw) - Number(b?.price.raw);
    });
  }

  if (sortBy === "priceLow") {
    newProducts = newProducts?.sort((a, b) => {
      return Number(b?.price.raw) - Number(a?.price.raw);
    });
  }

  if (filter?.category?.length > 0) {
    newProducts = newProducts?.filter((product) =>
      filter.category.find(({ _id }) => _id === product?.category?._id)
    );
  }

  if (filter?.price?.length > 0) {
    newProducts = newProducts?.filter((product) => {
      const priceOne = filter?.price?.[0];
      const priceTwo = filter?.price?.[1];
      const price = Number(product.price.raw);
      console.log(priceOne, priceTwo, price);
      return price >= priceOne && price <= priceTwo;
    });
  }

  return newProducts;
}

export function handleErrorMessage(error) {
  const { response } = error;
  const message = response?.data?.message || error.message;
  throw new Error(message);
}

export const formatMoney = (amount, currency = "VND", locale = "vi-VN") => {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    amount
  );
};

export  function handleError(error) {
  const errorMessage = error.response?.data?.message || error.message;
  return (errorMessage);
}


export const strongPassword = (value = "") => {
  if (
    /^(?=.*[A-Z\d@$!%*#?&])[\w!@#$%^&*()+={}\[\]|\-\\:";'<>?,.\/]*$/.test(value)
  ) {
    if (value?.length < 4) {
      return {
        message: "Very weak - Please enter a stronger password.",
        type: "very-weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 4 && value?.length < 11) {
      return {
        message: "Weak - Please enter a stronger password.",
        type: "weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 11 && value?.length < 13) {
      return {
        message: "Medium",
        type: "medium",
        hint: "",
      };
    }
    if (value?.length >= 13) {
      return {
        message: "Strong",
        type: "strong",
        hint: "",
      };
    }
  } else {
    if (value?.length === 0) {
      return {
        message: "",
        type: "",
        hint: "",
      };
    }
    if (value?.length < 10 && value?.length < 18) {
      return {
        message: "Very weak - Please enter a stronger password.",
        type: "very-weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 10 && value?.length < 18) {
      return {
        message: "Weak - Please enter a stronger password.",
        type: "weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 18 && value?.length < 24) {
      return {
        message: "Very weak - Please enter a stronger password.",
        type: "very-weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 24 && value?.length < 25) {
      return {
        message: "Weak - Please enter a stronger password.",
        type: "weak",
        hint: 'The password should be at least twelve characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & ).',
      };
    }
    if (value?.length >= 25 && value?.length < 29) {
      return {
        message: "Medium",
        type: "medium",
        hint: null,
      };
    }
    if (value?.length >= 29) {
      return {
        message: "Strong",
        type: "strong",
        hint: null,
      };
    }
  }
};
