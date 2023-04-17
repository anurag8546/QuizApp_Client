import React from 'react'
import Questions from './Questions';
import { Link } from 'react-router-dom';



export default function Quiz() {
  function onNext(){
    console.log("next is triggered");
  }
  function onPrev(){
    console.log("Prev is triggered");
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>
      <Questions />
      <div className='grid'>
        <button className='btn prev' onClick={onPrev()}>Previous</button>
        <button className='btn next' onClick={onNext()}>Next</button>
      </div>
      <div className='start'>
        <Link className='btn' to={'/result'}>Result</Link>
      </div>
    </div>
  )
}
