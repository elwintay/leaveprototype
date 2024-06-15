import React, { useState } from 'react'
import ApplyForm from './ApplyForm';



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