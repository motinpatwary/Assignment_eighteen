import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Update from './pages/Update';
import Create from './pages/create';
import Read from './pages/read';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Read/>} path='/'/>
          <Route element={<Create/>} path='/create' />
          <Route element={<Update/>} path='/update/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;