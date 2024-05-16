import React from 'react';
import ThpUseState from './components/ThpUseState';
import ThpUseEffect from './components/ThpUseEffect';
import ThpUseContext from './components/ThpUseContext';
import "./App.css"

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Trinh Huu Phuc - Hook</h1>
      <hr />
      <ThpUseState/>
      <hr/>
      <ThpUseEffect/>
      <hr/>
      <ThpUseContext/>
    </div>
  );
}
