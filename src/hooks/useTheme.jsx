import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


export const useTheme = ()=>{
    const getTheme = useContext(ThemeContext)
    return getTheme
}