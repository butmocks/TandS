import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="page__content">
      <h1>Тут будуть інпути імен</h1>
      <Link to="/gametype">Обрати режим гри</Link>
      <Link to="/start">Почати гру</Link>
    </div>
  );
}
export default Home;
