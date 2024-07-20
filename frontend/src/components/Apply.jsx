import React, { useState } from 'react'
import ApplyForm from './ApplyForm';
import NavBar from './Navbar'



function Apply(props) {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <ApplyForm user={props.user}/>
      </div>
    </>
  );
}

export default Apply;