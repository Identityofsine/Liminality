import React, { useState } from 'react'
import "./TitleScreen.css"


const stories = [
  {
    name:'PlayArea',
   image:'/images/story/image.png',
   imagebanner:'/images/story-banner/playarea.png',
   date:0
  },
  {
    name:'Fever',
   image:'/images/story/image-2.png',
   imagebanner:'/images/story-banner/fever.png',
   date:0
  },
  {
    name:'Lost',
   image:'/images/story/image-3.png',
   imagebanner:'/images/story-banner/lost.png',
   date:0
  },
  {
    name:'Slide',
   image:'/images/story/image-4.png',
   imagebanner:'/images/story-banner/slide.png',
   date:0
  },
  {
    name:'End',
   image:'/images/story/image-1.png',
   imagebanner:'/images/story-banner/end.png',
   date:0
  },
  {
    name:'Purgatory',
   image:'/images/story/image-5.png',
   imagebanner:'/images/story-banner/purgatory.png',
   date:0
  },
  {
    name:'Dark',
   image:'/images/intro/image-1.png',
   imagebanner:'/images/story-banner/dark.png',
   date:0
  },
  {
    name:'Airport',
   image:'/images/intro/image.png',
   imagebanner:'/images/story-banner/airport.png',
   date:0
  },
  {
    name:'Arcade',
   image:'/images/intro/image-2.png',
   imagebanner:'/images/story-banner/arcade.png',
   date:0
  },
  {
    name:'Home',
   image:'/images/story/image-6.png',
   imagebanner:'/images/story-banner/home.png',
   date:0
  },
  {
    name:'Pulse',
   image:'/images/story/image-8.png',
   imagebanner:'/images/story-banner/pulse.png',
   date:0
  },
  {
    name:'Play',
   image:'/images/story/image-7.png',
   imagebanner:'/images/story-banner/play.png',
   date:0
  },
]



function OpenedStory({story = {name:'',image:'',imagebanner:''}, condense = () => {}}) {
  return(
    <div className='opened-story'>
      <div className='collapse' onClick={condense}>
        <img src='/icons/collapse.svg' alt='close'/>
      </div>
      <div className='left card'>
        <div className='left-container'>
          <span>Play Area</span>
          <div className='banner-container'>
            <div className='banner'/>
              <div className='date'>
                <span>03/08/2023</span>
              </div>
          </div>
          <div className='author-container'>
            <div className='author-icon'/>
            <div className='author-details-container'>
              <h2>IAmDrakey</h2>
              <span>i am gay i really like boys, do not contact me unless for sex</span>
            </div>
          </div>
        </div>
      </div>
      <div className='line'/>

      <div className='right card'>
        <div className='text-container'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius vestibulum nulla nec varius. Sed ac arcu orci. Mauris commodo bibendum hendrerit. Nunc vulputate id tellus in semper. Nam vel rutrum ante, quis euismod nisi. Ut id odio non est vehicula pulvinar eu id sem. Vestibulum volutpat, erat in laoreet pellentesque, orci ipsum facilisis nulla, a consequat risus lorem in leo. Aliquam convallis leo vel diam sollicitudin pulvinar. In nisl lectus, ullamcorper id ornare nec, maximus in augue.

            Sed feugiat hendrerit lorem, id viverra lacus imperdiet et. Vivamus non libero at ante molestie sodales nec convallis leo. Praesent sed velit urna. Maecenas ipsum velit, fermentum in metus pulvinar, mattis convallis elit. Cras dictum posuere lacus, in dignissim ligula aliquet in. Duis ligula neque, ullamcorper id purus eu, facilisis faucibus mauris. Sed imperdiet, eros vel viverra imperdiet, risus nibh varius velit, id tempus arcu lorem venenatis neque. Aenean sed nisl nibh. Nunc sit amet ornare metus. Integer et sodales eros, sed tristique libero. Fusce finibus felis ut nisl scelerisque porttitor.

            Vestibulum non cursus nulla, eu volutpat nisi. Proin porta tortor et erat convallis, et rhoncus dolor volutpat. Nunc non dolor nec purus dignissim hendrerit. Nullam tortor turpis, malesuada eget quam eget, ullamcorper commodo nibh. Aliquam eu mauris non metus laoreet vulputate. Donec a dignissim justo. In lorem urna, semper eu dignissim at, accumsan in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nisi augue, ut fringilla orci lobortis vitae. Ut nec mollis ligula.

            Nulla mattis libero sit amet mauris imperdiet egestas. Curabitur aliquam mauris imperdiet, scelerisque odio facilisis, lacinia nisi. Aliquam tincidunt, nibh vitae tincidunt suscipit, enim turpis maximus orci, sit amet egestas enim ligula bibendum felis. Integer eleifend justo turpis. Vivamus faucibus ac justo et varius. Quisque porttitor felis arcu, id feugiat ipsum semper ac. Praesent mattis quam et blandit vehicula.

            Curabitur ut orci convallis, feugiat lacus nec, sagittis risus. Mauris massa ante, gravida et molestie sit amet, sodales non sapien. Pellentesque congue euismod lobortis. Aenean faucibus arcu non tincidunt bibendum. Nulla eleifend sollicitudin bibendum. Sed in dignissim libero. Nam tristique dictum augue, a viverra est placerat vel.
          </span>
        </div>
      </div>
    </div>
  )
}


function TitleScreen() {

  const [currentStory, setStory] = useState(stories[0]);
  const [clicked, setClicked] = useState(false);
  const [storyExpanded, setExpand] = useState({expanded:true, story:stories[0]})


  const handleExpand = () => {
    var temp = {...storyExpanded};
    temp.expanded = !temp.expanded;
    setExpand(temp)
  }

  const handleStoryClick = (e) => {
    if(clicked && currentStory === e){
      setClicked(false);
      return;
    }
    setClicked(true); 
    setStory(e);
  }

  return (
    <div className='title-container'>
      {storyExpanded.expanded && <OpenedStory condense={handleExpand}/>}
      <div className='card left'>
        <div className='card-container'>
          <div className='title'>
            <span>Explore:</span>
          </div>
          <div className={`story-container`}>
            {stories.map((d,i) => (<div data-type='story' className={`inter story ${clicked && currentStory === d ? 'forcehover' : ''}`} onClick={() => {handleStoryClick(d)}} onMouseEnter={() => {if(clicked) return; setStory(d)}} style={{backgroundImage:`url("${d.image}")`}}/>))}
            
          </div>
        </div>
      </div>
      <div className='line'/>
      <div className='card right'>
        <div className='card-container'>
          <div className='inter expand' data-type='expand' onClick={handleExpand}>
            <img src='/icons/expand.svg' alt='expand'/>
          </div>
          <div className='title'>
            <span>{currentStory.name}</span>
          </div>
          <div className='image' style={{backgroundImage:`url("${currentStory.imagebanner}")`}}></div>
          <div className='text'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris Maecenas vitae mattis tellus, Ut et massa mi. Aliquam in hendrerit urna Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus Maecenas vitae...
            </span>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default TitleScreen