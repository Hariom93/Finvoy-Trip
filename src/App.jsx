import { useState } from 'react'
import Allroutes from './routes/Allroutes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Allroutes/>
    </>
  );
}

export default App
