import './App.scss'
import { Routes, Route } from 'react-router-dom';
import LoginView from "./pages/LoginView";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <LoginView /> } />
      </Routes>
  
    </>
  );
}

export default App;
