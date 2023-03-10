import React from 'react'
import "./loading.css"
import LoopIcon from '@mui/icons-material/Loop';

function Loading() {
  return (
    <div className='loading'>  
      <div className='content'>
        <div className='text'>
          <span>Liminality</span>
        </div>
        <div className='images'>
          <div className='img-block'/>
          <LoopIcon className='dot'/>
          <div className='img-block'/>
          <LoopIcon className='dot'/>
          <div className='img-block'/>

        </div>
      </div>
      
    </div>
  )
}

export default Loading