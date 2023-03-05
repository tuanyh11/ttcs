import { create } from "zustand";


const uiStore = create((set) => ({
    product: null,
    isOpeningFilterProduct: false,
    isOpeningWishlist: false,
    selectProduct: (product, isOpening) => set(state => ({
        ...state,
        product,
    })),
    setIsOpeningFilterProduct: (isOpeningFilterProduct) => set(state => ({
        ...state,
        isOpeningFilterProduct,
    })),
    setIsOpeningWishlist: (isOpeningWishlist) => set(state => ({
        ...state,
        isOpeningWishlist
    }))
}))

export default uiStore;