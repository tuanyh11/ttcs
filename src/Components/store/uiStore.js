import { create } from "zustand";


const uiStore = create((set) => ({
    product: null,
    selectProduct: (product, isOpening) => set(state => ({
        ...state,
        product,
    }))
}))

export default uiStore;