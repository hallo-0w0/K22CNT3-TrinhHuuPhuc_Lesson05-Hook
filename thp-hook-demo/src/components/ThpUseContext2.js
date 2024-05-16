import React, { useContext } from 'react'
import { ThemeContext } from './ThpUseContext'

export default function ThpUseContext2() {
    const theme = useContext(ThemeContext);

  return (
    <div className={theme }>
      <h2>ThpUseContext2</h2>
      <p>
        <b>2210900054</b>
        <b>Trinh Huu Phucs</b>
        <i>K22CNT3</i>
      </p>
    </div>
  )
}
