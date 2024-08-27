import React, { useState } from 'react'
import ApplyForm from './ApplyForm';
import NavBar from './Navbar'
import { useSelector } from 'react-redux'

function Apply(props) {
  const user = useSelector(function(store) {
      return store.user.value;
  });
  return (
    <>
      <div className='flex flex-row justify-center'>
        <h4>Welcome {user}</h4>
        <ApplyForm user={props.user}/>
      </div>
    </>
  );
}

export default Apply;