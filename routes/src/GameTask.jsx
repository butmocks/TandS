import React from 'react';
import { Link } from 'react-router-dom';

const GameTask = () => {
  return (
    <div className="page__content">
      <h1>Завдання для...</h1>
      <h3>наприклад</h3>
      <p>Раптом чомусь вийшло, що на одному з партнерів залишилося більше одягу!?
        З метою більшої справедливості роздягнений знімає одну частину одягу з другого гравця і замінює один жовтий фант у рожевому колоді.</p>
      <button>Виконано</button>
      <Link to="/">На головну</Link>
      <Link to="/gametype">вибір режиму гри</Link>
    </div>
  );
};

export default GameTask;
