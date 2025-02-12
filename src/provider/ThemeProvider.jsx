import { useState } from "react"
import ThemeContext from "../context/ThemeContext"


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(false)
  
   const themeInfo ={
    theme,
    setTheme
   }
  return (
   <ThemeContext.Provider value={themeInfo}>
    {children}
   </ThemeContext.Provider> 
  )
}

export default ThemeProvider