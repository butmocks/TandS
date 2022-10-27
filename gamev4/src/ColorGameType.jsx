import Description from './description/Description';
import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react';

const whitegame = `«Білий» - «найм'якіший» і в основному зводиться до розповідей, розмов та спогадів на еротичні теми.`;
const yellowgame = `Уявивши собі, що великий палець руки чоловіка зовсім не палець, дівчина бере його в рот і дражнить джентльмена, заводячи його своєю грою. Якщо він правильно поводитиметься і далі, він має шанс випробувати це «по-дорослому». Дівчина чесно зізнається, що треба робити для цього.`;
const pinkgame = `М'ятний чай дуже смачна та корисна річ, особливо у грі «Фанти», та ще зі шматочками льоду на додачу! Чоловік лягає на край ліжка з розсунутими ногами, а дівчина заварює свіжий м'ятний чай і, зачекавши, коли він трохи охолоне, починає своє чаювання. Але натомість солодкого у неї не менш приємне та цікаве частування. Зробивши ковток дуже теплого чаю і не до кінця проковтуючи його, панночка бере в рот член і смокче його замість цукерки. Як тільки він почне твердіти, вона перериває свої ласки і відразу проводить по стовбуру і мошонці шматочком льоду. Головне при цьому відсунути убік чашку, адже ризик, що її відфутболять до стелі надзвичайно великий! Дівчина повторює таке кілька разів, захоплено експериментуючи з льодом, чаєм та «цукеркою». Джентльмен ухвалює рішення про перехід до наступного фанта.`;
const redgame = `Чоловік відносить дівчину в крісло або на стілець і кохається з нею таким чином і в таких позах, які йому самому найбільше подобаються. Урізноманітнюючи техніку сексу, змінюючи положення тіл, інтенсивність, силу і глибину любовних поштовхів, він щиро насолоджується дійством. Прислухаючись до прохань і побажань панночки, він намагається зробити їй максимальне задоволення і не кінчає без дозволу. Рішення про перехід до наступного фанта приймає дівчина.`;



const ColorGameType = () => {

  const gameTypeSelect = [whitegame, yellowgame, pinkgame, redgame];

  const [level, setLevel] = useState(whitegame);
  const handleChange = event => {
    setLevel(event.target.value);
  };
  // console.log(<ColorGameType />)

  return (
    <div className="page__content">
      <h1>Виберіть режим гри</h1>
      <p>{level}</p>

      <label>Рівень
      </label>
      <table>
        <div>
          <input type="radio"
            value={whitegame}
            checked={level === whitegame}
            onChange={handleChange} />
          {'Білий'}
        </div>
        <div>
          <input type="radio"
            value={yellowgame}
            checked={level === yellowgame}
            onChange={handleChange} />
          {'Жовтий'}
        </div>

        <div>
          <input type="radio"
            value={pinkgame}
            checked={level === pinkgame}
            onChange={handleChange} />
          {'Рожевий'}
        </div>
        <div>

          <input type="radio"
            value={redgame}
            checked={level === redgame}
            onChange={handleChange} />
          {'Червоний'}
        </div>

      </table>

<button>FUCK</button>
      <button className='btn' >
        <Link to="/start">Почати</Link>

      </button>
      <button className='btn' >
        <Link to="/">головна</Link>
      </button>

    </div>
  );
};

export default ColorGameType;

