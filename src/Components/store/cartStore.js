import currency from "currency.js";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const CART_STORAGE_KEY = "shopping_cart";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      wishItems: [],
      addItem: (item) => set(state => {
        const existingItem = state.items.find(oldItem => oldItem._id === item._id);

        if (existingItem) {
          return {
            items: state.items.map(oldItem => {
              if (oldItem._id === item._id) {
                return { ...oldItem, quantity: oldItem?.quantity + item.quantity };
              }
              return oldItem;
            }),
          };
        }
        return { items: [...state.items, { ...item, quantity: item.quantity }] };
      }),

      addItemWishtoCart: (item) => set(state => {
        const existingItem = state.items.find(oldItem => oldItem._id === item._id);

        if (existingItem) {
          return {
            items: state.items.map(oldItem => {
              if (oldItem._id === item._id) {
                return {
                  ...oldItem,
                  quantity: oldItem?.quantity ? oldItem.quantity + 1 : 1
                };
              }
              return oldItem;
            }),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),

      // addItemWithQuantity: (item) => set(state => {
      //   const existingItem = state.items.find(oldItem => oldItem._id === item._id);
      //   if (existingItem) {
      //     return {
      //       items: state.items.map(oldItem => {
      //         if (oldItem._id === item._id) {
      //           return {
      //             ...oldItem,
      //             quantity: Number(oldItem?.quantity) + Number(item?.quantity),
      //           };
      //         }
      //         return oldItem;
      //       }),
      //     };
      //   }
      //   return { items: [...state.items, { ...item, quantity: item?.quantity || 1 }] };
      // }),

      addToWishlistItems: (item) => set(state => {
        const existingItem = state.wishItems.find(oldItem => oldItem._id === item._id);

        if (existingItem) {
          return {
            wishItems: state.wishItems.map(oldItem => {
              if (oldItem._id === item._id) {
                return {
                  ...oldItem,
                  quantity: oldItem?.quantity,
                  dateNow: new Date(),

                }
              }
              return {
                ...oldItem,
                dateNow: new Date(),
              }
            }

            ),
          };
        }
        return { wishItems: [...state.wishItems, { ...item, quantity: 1, dateAddWish: new Date() }] };
      }),
      clearCart() {
        set(state => ({...state, items: []}))
      },

      upadateItemWithQuantity: (items) => set(state => {
        return {
          ...state, 
          items,
        }
      }),
      getTotal: () => get().items?.reduce((total, item) => total + item.quantity, 0 ),
      getTotalWithQuantity: () => get().items?.reduce((total, item) => total + (item.quantity * item.price.raw), 0),
      isInWishList: productId => get().wishItems?.some(item => item._id === productId),
      hasProduct: productId => get().items.some(item => item._id === productId),
      length: () => get().items.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0),
      removeItem: (itemId) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item._id !== itemId);
          const updatedTotal = updatedItems.reduce(
            (total, item) => total + item.price,
            0
          );
          return { items: updatedItems, total: updatedTotal };
        }),
      removeItemWish: (itemId) =>
        set((state) => {
          const updatedItems = state.wishItems.filter((item) => item._id !== itemId);
          const updatedTotal = updatedItems.reduce(
            (total, item) => total + item.price,
            0
          );
          return { wishItems: updatedItems, total: updatedTotal };
        }),
    }),
    {
      name: CART_STORAGE_KEY,
    }
  )
);

export default useCartStore;
