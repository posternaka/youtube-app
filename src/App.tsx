import { Routes, Route } from 'react-router-dom';

import Authorization from './pages/Authorization';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Authorization />} />
        
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
