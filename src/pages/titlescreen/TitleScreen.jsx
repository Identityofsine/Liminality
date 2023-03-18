import React, { useEffect, useState } from 'react'
import "./TitleScreen.scss"
import sleep from '../../util/sleep';
import {authors, stories} from '../../temp/stories';






function OpenedStory({story = {name:'', authorID:0, image:'',imagebanner:'', content:[{content:'',authorID:0}]}, condense = () => {}, state = 'closing'}) {
  return(
    <div className='opened-story' data-status={state}>
      <div className='inter collapse' data-type={'close'} onClick={condense}>
        <img src='icons/collapse.svg' alt='close'/>
      </div>
      <div className='left card'>
        <div className='left-container'>
          <span>{story.name}</span>
          <div className='banner-container'>
            <div className='banner' style={{backgroundImage:`url(${story.imagebanner})`}}/>
              <div className='date'>
                <span>03/08/2023</span>
              </div>
          </div>
          <div className='author-container'>
            <div className='author-icon' style={{backgroundImage:`url(${authors[story.authorID].image})`}}/>
            <div className='author-details-container'>
              <h2>{authors[story.authorID].name}</h2>
              <span>{authors[story.authorID].bio}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='line'/>

      <div className='right card'>
        <div className='text-container'>
          <span>
          {story.content[0].content}
          </span>
        </div>
      </div>
    </div>
  )
}


function TitleScreen({setLoaded = (e) => {}}) {

  const [currentStory, setStory] = useState(stories[0]);
  const [clicked, setClicked] = useState(false);
  const [storyExpanded, setExpand] = useState({expanded:false, story:stories[0]})
  const [state, setState] = useState('none');
  const [currentImageLoaded, sil] = useState(0);


  useEffect(() => {
    if(currentImageLoaded >= stories.length)
      setLoaded(true);
      
  }, [currentImageLoaded])

  const incrementImageLoaded = () => {
    sil(currentImageLoaded + 1);
  }

  const handleExpand = async () => {
    var temp = {...storyExpanded};
    temp.expanded = !temp.expanded;
    if(temp.expanded){
      setState('opening')
    } else
      setState('closing')

    if(temp.expanded){

    } else{
      await sleep(425);
    }
    setExpand(temp)
  }

  const handleStoryClick = (e) => {
    if(clicked && currentStory === e){
      setClicked(false);
      window.dispatchEvent(new CustomEvent('onstoryclick', {detail:{lock:false}}));
      return;
    }
    setClicked(true); 
    setStory(e);
    window.dispatchEvent(new CustomEvent('onstoryclick', {detail:{lock:true}}));
  }

  return (
    <div className='title-container'>
      {storyExpanded.expanded && <OpenedStory story={currentStory} condense={handleExpand} state={state} setcondense={setState} />}
      <div className='card left'>
        <div className='card-container'>
          <div className='title'>
            <span>Explore:</span>
          </div>
          <div className={`story-container`}>
            {stories.map((d,i) => (<div data-type='story' className={`inter story ${clicked && currentStory === d ? 'forcehover' : ''}`} onClick={() => {handleStoryClick(d)}} onMouseEnter={() => {if(clicked) return; setStory(d)}} style={{backgroundImage:(() => {

              var image = new Image();
              image.onload = () => {
                const wait = async () => {
                  incrementImageLoaded();
                }
                wait();
              }
              
              image.src = d.image;
              if(currentImageLoaded >= stories.length) {
                image.onload = null;
              }
              return `url('${d.image}')`
            })()}}/>))}
            
          </div>
        </div>
      </div>
      <div className='line'/>
      <div className='card right'>
        <div className='card-container'>
          <div className='inter expand' data-type='expand' onClick={handleExpand}>
            <img src='icons/expand.svg' alt='expand'/>
          </div>
          <div className='title'>
            <span>{currentStory.name}</span>
          </div>
          <div className='image' style={{backgroundImage:`url("${currentStory.imagebanner}")`}}></div>
          <div className='text'>
            <span>
              {currentStory.abstract}
            </span>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default TitleScreen