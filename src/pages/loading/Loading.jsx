import React, {useEffect, useState} from 'react'
import "./loading.scss"
import LoopIcon from '@mui/icons-material/Loop';
import sleep from '../../util/sleep';

function Loading({doneLoadingState, setLoadingDone}) {


  const [finishloading, setFinish] = useState(doneLoadingState); //animation handler
  const [_finishloading, _setFinishLoading] = useState(false);


  useEffect(() => {
    const delayed_function = async () => {
      setFinish(true);
    }
    if(doneLoadingState === true){
      delayed_function();
    }
  }, [doneLoadingState])

  const animationEndHandler = async () => {
    _setFinishLoading(true);
  }

  const zoomEndHandler = async () => {
    await sleep(175);
    setFinish(true);
    setLoadingDone(true);
  }

  
  return (
    <div className={`loading ${_finishloading && 'animate'}`}>  
      <div className={`content ${_finishloading && 'animate'}`} onAnimationEnd={() => {zoomEndHandler()}}>
        <div className={`text ${finishloading && 'animate'}`} onAnimationEnd={() => {animationEndHandler()}}>
          <span>Liminality</span>
        </div>
        <div className={`images ${finishloading && 'animate'}`}>
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