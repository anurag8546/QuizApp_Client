import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Result.css'
import ResultTable from './ResultTable';

export default function Result() {
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>  
                <span className='bold'>Daily Tuition</span>  
            </div>
            <div className='flex'>
                <span>Total Quiz Point</span>  
                <span className='bold'>50</span>  
            </div>  
            <div className='flex'>
                <span>Total Questions</span>  
                <span className='bold'>2</span>  
            </div>
            <div className='flex'>
                <span>Total attempts</span>  
                <span className='bold'>1</span>  
            </div>
            <div className='flex'>
                <span>Total Earn points</span>  
                <span className='bold'>10</span>  
            </div>
            <div className='flex'>
                <span>Quiz Result</span>  
                <span className='bold'>Passed</span>  
            </div>
        </div>
        <div className='start'>
        <Link className='btn'  to={'/'}>Restart</Link>
        </div>   
        <div className='container'>
          <ResultTable/>
      </div> 
    </div>
  )
}
