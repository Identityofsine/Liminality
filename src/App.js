import logo from './logo.svg';
import './App.css';
import Header from './pages/components/header/Header';
import Loading from './pages/loading/Loading';
import TitleScreen from './pages/titlescreen/TitleScreen';

function App() {
  return (
    // <Loading/>
    <>
      <Header/>
      <div className='wrapper'>
        <TitleScreen/>
      </div>
    </>
  );
}

export default App;
