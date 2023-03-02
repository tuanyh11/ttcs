import { create } from "zustand";


const uiStore = create((set) => ({
    product: null,
    isOpeningFilterProduct: false,
    selectProduct: (product, isOpening) => set(state => ({
        ...state,
        product,
    })),
    setIsOpeningFilterProduct: (isOpeningFilterProduct) => set(state => ({
        ...state,
        isOpeningFilterProduct,
    }))
}))

export default uiStore;