import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Apply from './components/Apply'


function App() {
  const user = "Test"
  return (
    <>
      <div>
        <NavBar />
        {/* <h2 className='text-xl font-bold lg:py-5 px-20 py-4'>Welcome {user}</h2> */}
        <Apply user={user}/>
      </div>
    </>
  );
}

export default App;
