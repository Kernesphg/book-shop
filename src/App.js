import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import FullBook from './pages/FullBook';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="global-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<FullBook />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
