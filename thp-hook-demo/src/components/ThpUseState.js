import React, { useState } from 'react';

export default function ThpUseState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  //mangr
  const[list, setList]=useState([1,5]);

  //hàm xử lý sự kiện ngẫu nhiên
  const thpHandleList=()=>{
    //sinh ngẫu nhiên 1 giá trị số
    let num= parseInt(Math.random()*100);
    //cập nhật lại state:List
    setList([
      ...list,
      num
    ])
    //orther way


  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 5)}>
        Click me
      </button>
      <hr/>
      <h3>List: {list.toString()}</h3>
      <button onClick={thpHandleList}>Thêm ngâu nhiên</button>
    </div>
  );
}
