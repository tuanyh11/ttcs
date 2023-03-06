import { create } from "zustand";


const uiStore = create((set) => ({
    product: null,
    productWishlist: null,
    isOpeningFilterProduct: false,
    isOpeningWishlist: false,
    selectProduct: (product) => set(state => ({
        ...state,
        product,
    })),
    selectProductWishlist: (product) => set(state => ({
        ...state,
        productWishlist: product,
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