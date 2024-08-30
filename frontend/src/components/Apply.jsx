import React, { useState } from 'react'
import ApplyForm from './ApplyForm';
import NavBar from './Navbar'
import { useSelector } from 'react-redux'

function Apply(props) {
  return (
    <>
      <div className='flex flex-row justify-center'>
        <ApplyForm />
      </div>
    </>
  );
}

export default Apply;