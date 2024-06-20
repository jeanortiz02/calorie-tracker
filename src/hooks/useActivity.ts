import { useContext } from "react"
import { ActiviyContext } from "../context/ActivityContext"


export const useActivity = () => {
    const context = useContext(ActiviyContext);

    if (!context) {
        throw new Error('El hook useActivity debe ser utilizado con el contextProvider')
    }
    return context;
}