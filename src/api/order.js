import axiosInstance from "./config"

export const paymentWithBank = async (data) => {
    return (await axiosInstance.post('/payment/stripe/create-payment-intent', data)).data
}

export const createOrderProduct = async (data) => {
    return (await axiosInstance.post('/order/', data)).data
}

export const createPayment = async (data) => {
    return (await axiosInstance.post('/payment/', data)).data
}