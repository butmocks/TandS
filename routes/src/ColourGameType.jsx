
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ColourGameType = () => {
  const gameTypeSelect = ['white', 'yellow', 'pink', 'red'];
  const [level, setLevel] = useState('white');
  const handleChange = event => {
    setLevel(event.target.value);
  };


  return (
    <div className="page__content">
      <h1>Виберіть режим гри</h1>
      <p>рівень розкутості</p>


      <label>
        Режим
        <select value={level} onChange={handleChange}>
          {gameTypeSelect.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>
      </label>


      {/* 
      <label>
        Оберіть колір складності, згідно якому змінюватимуться завдання
        <select>рівень</select>
        <select value={} onChange={}></select>
      </label> */}


      <button>
        <Link to="/start">Почати</Link>

      </button>
      <button>
        <Link to="/">головна</Link>
      </button>
      
    </div>
  );
};

export default ColourGameType;
