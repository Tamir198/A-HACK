import logo from './logo.svg';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginForm/>}/>
        <Route exact path='/DashBoard' element={<DashBoard/>}/>
      </Routes>

  </>
  );
}

export default App;
