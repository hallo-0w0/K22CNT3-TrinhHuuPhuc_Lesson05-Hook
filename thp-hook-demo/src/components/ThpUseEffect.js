import React,{ useEffect, useState } from 'react'

export default function ThpUseEffect() {
    //state: count
    const[count, setCount]= useState(0);

    //hàm xử lý sự kiện click me
    const thpHandleClick=()=>{
        setCount(prev => prev +1 );
    }
    //Sử dụng hàm effect để cập nhật lại title, có 1 tham số
    useEffect(() => {
        document.title = `Trinh Huu Phuc: You click ${count} times`;
        console.log(`You click ${count} times`);
      });
    //use effect: tham số thứ 2 là mãng rống
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - Một lần");
    },[])

    //[deps]
    useEffect(()=>{
        console.log(`useEffect count click:`,{count});

    },[count])

  return (
    <div>
        <h2>Demo - use Effect : You click {count} times</h2>
        
        <button onClick={thpHandleClick}>
          Click me
        </button>
    </div>
  )
}
