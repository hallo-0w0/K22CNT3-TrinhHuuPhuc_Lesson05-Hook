import React, { createContext, useContext, useState } from 'react'
import ThpUseContext1 from './ThpUseContext1';
export const ThemeContext = createContext('red');//tạo ngữ cảnh để chia sẻ
export default function ThpUseContext() {
    //state
    const[theme, setTheme] = useState('red');

    //hàm thay đổi theme
    const thpHandleChange=()=>{
        setTheme(theme=='red'?'blue':'red');
    }


  return (
    <ThemeContext.Provider value= {theme}>
        <div className='alert'>
                <h2>Demo useContext</h2>
                <ThpUseContext1/>
                <button onClick={thpHandleChange}>Change BgColor</button>
            </div>
       
    </ThemeContext.Provider>
     )
}
