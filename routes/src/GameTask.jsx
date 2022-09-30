import React from 'react';
import { Link } from 'react-router-dom';

const GameTask = ({ userData }) => {

  return (
      
    <div className="page page__content">
      <div className="cart-title">{`${userData}, твій хід`}</div>
     
      <h3>наприклад</h3>
      <p>Раптом чомусь вийшло, що на одному з партнерів залишилося більше одягу!?
        З метою більшої справедливості роздягнений знімає одну частину одягу з другого гравця і замінює один жовтий фант на рожевий у колоді.</p>
      
      <button className="btn" type='refresh'>Виконано</button>
      {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}


      <button className="btn" type="refresh">Замінити завдання</button>
      
      {/* <button className='resetButton' type="refresh" onClick={resetRadioState}>Замінити завдання</button> */}
      
      
      
      
      <button className="btn">
        <Link to="/">На головну</Link>
      </button>
      <button className="btn">
        <Link to="/gametype">Вибір режиму гри</Link>
      </button>
      
    </div>
  );
};

export default GameTask;
