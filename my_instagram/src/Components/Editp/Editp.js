import React, { useState } from 'react';
import './Editp.css';
import { Link } from 'react-router-dom';

function Editp({ setUserName }) {
  const [newName, setNewName] = useState('');

  const handleChangeName = () => {
    setUserName(newName);
  };

  return (
    <body className='a'>
    <div className='div'>
      <header className='header'>
        <h2 className='backtohome'>
          <Link className='homelink' to='/home'>
            Home
          </Link>
        </h2>
        <h1 className='editprofiletext'>Edit Profile</h1>
        <div></div>
      </header>
      <body className='bodystyle'>
        <div className='name_changing_side'>
          <h2 className='setnewnametext'>Enter new name</h2>
          <input
            className='setnameinput'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder='Enter new name'
          ></input>
          <div>
            <Link to='/home'>
              <button className='subbutton' type='submit' onClick={handleChangeName}>
                Edit
              </button>
            </Link>
          </div>
        </div>
      </body>
    </div>
    </body>
  );
}

export default Editp;
