import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Editp from './Components/Editp/Editp';

function App() {
  const [userName, setUserName] = useState('');

  // Load the user's display name from local storage on initial render
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  // Update local storage whenever userName changes
  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/home' element={<Home name={userName} />} />
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/editp' element={<Editp setUserName={setUserName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
