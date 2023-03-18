import logo from './logo.svg';
import './App.scss';
import Header from './pages/components/header/Header';
import Loading from './pages/loading/Loading';
import TitleScreen from './pages/titlescreen/TitleScreen';
import { useEffect, useRef } from 'react';

const Trailer = () => {
  const iconref = useRef();
  useEffect(() => {

    window.addEventListener("onstoryclick", (e) => {
      if(e.detail.lock){
        iconref.current.className = 'fa-solid fa-unlock'
      } else
        iconref.current.className = 'fa-solid fa-book'
    });

    onmousemove = e => {
      const logic = (e, boolean, obj) => {
        const element = document.getElementById('trailer');
        const x = e.clientX - element.offsetHeight / 2,
              y = e.clientY - element.offsetWidth / 2;
        const keyframes = {
          transform:`translate(${x}px, ${y}px) scale(${boolean ? 2 : 1})`,
        }
        element.animate(keyframes, {duration:100, fill:'forwards'})

        if(boolean){
          element.dataset.status='on';
            switch(obj.dataset.type){
              case 'story':
                iconref.current.className = 'fa-solid fa-book'
                const classes = obj.className + "";
                if(classes.split(" ")[2]){
                  iconref.current.className = 'fa-solid fa-unlock'

                }
                break;
              case 'expand':
                iconref.current.className = 'fa-solid fa-expand'
                break;
              case 'close':
                iconref.current.className = 'fa-solid fa-compress'
                break;
              default:
              break;
            }
        } else{
          element.dataset.status='off';
        }
      }
      const interactable = e.target.closest('.inter'),
        interacting = interactable !== null;
      logic(e, interacting, interactable);
    }
  }, [])
  return(
    <div id='trailer' data-status='off'>
      <i ref={iconref} class="fa-solid fa-book"></i>
    </div>
  )

}


function App() {
  return (
    // <Loading/>
    <>
      <Header/>
      <Trailer/>
      <div className='wrapper'>
        <TitleScreen/>
      </div>
    </>
  );
}

export default App;
