import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { RootState } from './state/store';
import Tables from './Component/Table';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
  })
  return (
    <>
    <div>

      <Tables/>
    </div>
    </>
  );
}

export default App;
