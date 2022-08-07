import './App.css';
import Article from './components/Article';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import upArrow from "./img/arrow_up.svg";

function App() {
  const [hideArrow, setHide] = useState(true);

  const handleScroll = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      setHide(false);
    } else {
      setHide(true);
    }
  }

  const goTop = () => {
    window.scrollTo(0,0);
    setHide(true);
  }

  return (
    <BrowserRouter>
      <div className="container" onWheel={handleScroll}>
        <Header />
        <Article />
        <Calculator />
        <Contacts />
        <Footer />
        <button onClick={goTop} id="goTop" title="Go to top"
          style={{
            display: !hideArrow ? "block" : "none"
          }}
        >
          <img src={upArrow} alt="upArrow" />
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
