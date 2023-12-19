import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeComponent from './routes/HomeComponent';
import MeetingComponent from './routes/MeetingComponent';
import MedicalComponent from './routes/MedicalComponent';
import VacationComponent from './routes/VacationComponent';
import WeddingComponent from './routes/WeddingComponent';

function App() {
  return (
    <div className='w-screen h-screen font-poppins '>
      <BrowserRouter>
        <Routes>
          <Route
            path='/home'
            element=<HomeComponent />
          />
          <Route
            path='/medical'
            element=<MedicalComponent />
          />
          <Route
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
          />
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