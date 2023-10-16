import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      products: [],
      add: (newProduct) => {
        set((state) => {
          const existingProductIndex = state.products.findIndex(
            (product) => product._id === newProduct._id
          );

          if (existingProductIndex !== -1) {
            const updatedProducts = [...state.products];
            updatedProducts[existingProductIndex].total += 1;
            updatedProducts[existingProductIndex].totalPrice +=
              newProduct.price;
            return { products: updatedProducts };
          } else {
            newProduct.total = 1;
            newProduct.totalPrice = newProduct.price;
            return { products: [...state.products, newProduct] };
          }
        });
      },
      getItems() {
        return get().products;
      },
      increaseQuantity: (productId) => {
        set((state) => {
          const updatedProducts = state.products.map((product) => {
            if (product._id === productId) {
              product.total += 1;
              product.totalPrice += product.price;
            }
            return product;
          });
          return { products: updatedProducts };
        });
      },
      decreaseQuantity: (productId) => {
        set((state) => {
          const updatedProducts = state.products.map((product) => {
            if (product._id === productId && product.total > 1) {
              product.total -= 1;
              product.totalPrice -= product.price;
            }
            return product;
          });
          return { products: updatedProducts };
        });
      },
      remove: (productId) => {
        set((state) => {
          const updatedProducts = state.products.filter(
            (product) => product?._id !== productId
          );
          return { products: updatedProducts };
        });
      },
      totalPrice: () => {
        const products = get().products;
        const total = products.reduce(
          (acc, product) => acc + product.totalPrice,
          0
        );
        return total;
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
