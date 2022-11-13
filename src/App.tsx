import { Routes, Route } from 'react-router-dom';
import './styles/style.scss';

import Authorization from './pages/Authorization';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Clips from './pages/Clips';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      {/* <Authorization /> */}
      <div className='wrapper'>
        <div className='container'>
          <Header />
          <Routes>
              <Route path="*" element={<NotFound />} />
                <Route path="/search" element={<Search />} />
                <Route path="/clips" element={<Clips />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
