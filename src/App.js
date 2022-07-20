import './App.css';
import Article from './components/Article';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Article />
        <Calculator />
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
