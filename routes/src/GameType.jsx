import React from 'react';
import { Link } from 'react-router-dom';

const GameType = () => {
  return (
    <div className="page__content">
      <h1>Виберіть режим гри</h1>
      <p>рівень розкутості</p>
<label>
  Оберіть колір складності, згідно якому змінюватимуться завдання
       <select>рівень</select>
        {/* <select value={} onChange={}></select> */}
</label>
      <Link to="/">головна</Link>
    </div>
  );
};

export default GameType;
