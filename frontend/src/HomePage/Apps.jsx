import React,{ useState } from 'react'
import Body from './Body'
import Nav from './Nav'
import "./App.css";
function Apps() {
  const [count, setCount] = useState(0)
  return (
<React.StrictMode>
<div className='app'>
<Nav/>
<div className='Body'>
<Body/>
</div>
</div>
</React.StrictMode>
  )
}

export default Apps;
