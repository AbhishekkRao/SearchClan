import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home'
import Medical from './routes/Medical';

function App() {
  return (
    <div className='w-screen h-screen font-poppins '>
      <BrowserRouter>
        <Routes>
          <Route
            path='/home'
            element=<Home />
          />
          <Route
            path='/medical'
            element=<Medical />
          />
          {/*<Route
            path='/meetings'
            element=<MeetingComponent />
          />
          <Route
            path='/vacation'
            element=<VacationComponent />
          />
          <Route
            path='/weddings'
            element=<WeddingComponent />
          /> */}
          <Route
            path='*'
            element=<Navigate to='/home' />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;