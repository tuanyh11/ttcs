import { useEffect, useState } from "react"


export const useDebounce = (value, time) => {
    // console.log(value)
    const [data, setData] = useState(value)
    useEffect(() => {
        const timeId = setTimeout(() => {
            setData(value)
        }, time)

        return () => clearTimeout(timeId)
    }, [value, data])


    return data 
}