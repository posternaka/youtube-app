import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';

import Authorization from './pages/Authorization';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import Header from './components/Header/Header';

function App() {
  return (
    <>
      {/* <Authorization /> */}
          <Header />
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
          </Routes>
    </>
  );
}

export default App;
