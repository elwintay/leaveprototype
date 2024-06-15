import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Apply from './components/Apply'


function App() {
  const user = "eric"
  return (
    <>
      <div className="">
        <NavBar />
        <h2>Welcome {user}</h2>
        <Apply user={user}/>
      </div>
    </>
  );
}

export default App;
