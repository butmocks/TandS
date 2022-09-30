import Description from './description/Description';
import { Link } from 'react-router-dom';
import React, { Component, useState } from 'react';

const white = `«Білий» - «найм'якіший» і в основному зводиться до розповідей, розмов та спогадів на еротичні теми.`;
const yellow = `Уявивши собі, що великий палець руки чоловіка зовсім не палець, дівчина бере його в рот і дражнить джентльмена, заводячи його своєю грою. Якщо він правильно поводитиметься і далі, він має шанс випробувати це «по-дорослому». Дівчина чесно зізнається, що треба робити для цього.`;
const pink = `М'ятний чай дуже смачна та корисна річ, особливо у грі «Фанти», та ще зі шматочками льоду на додачу! Чоловік лягає на край ліжка з розсунутими ногами, а дівчина заварює свіжий м'ятний чай і, зачекавши, коли він трохи охолоне, починає своє чаювання. Але натомість солодкого у неї не менш приємне та цікаве частування. Зробивши ковток дуже теплого чаю і не до кінця проковтуючи його, панночка бере в рот член і смокче його замість цукерки. Як тільки він почне твердіти, вона перериває свої ласки і відразу проводить по стовбуру і мошонці шматочком льоду. Головне при цьому відсунути убік чашку, адже ризик, що її відфутболять до стелі надзвичайно великий! Дівчина повторює таке кілька разів, захоплено експериментуючи з льодом, чаєм та «цукеркою». Джентльмен ухвалює рішення про перехід до наступного фанта.`;
const red = `Чоловік відносить дівчину в крісло або на стілець і кохається з нею таким чином і в таких позах, які йому самому найбільше подобаються. Урізноманітнюючи техніку сексу, змінюючи положення тіл, інтенсивність, силу і глибину любовних поштовхів, він щиро насолоджується дійством. Прислухаючись до прохань і побажань панночки, він намагається зробити їй максимальне задоволення і не кінчає без дозволу. Рішення про перехід до наступного фанта приймає дівчина.`;




const ColourGameType = () => {
  const gameTypeSelect = [white, 'yellow', 'pink', 'red'];




  const [level, setLevel] = useState(white);
  const handleChange = event => {
    setLevel(event.target.value);
  };


  return (
    <div className="page__content">
      <h1>Виберіть режим гри</h1>
      <p>рівень розкутості</p>
      {/* <span>{gameTypeSelect.value}</span> */}
      <label>Рівень
      </label>
      <table>
        <span>
          <input type="radio"
            value={white}
            checked={level === white}
            onChange={handleChange} />
          {'Білий'}
        </span>
        <div>
          <input type="radio"
            value='yellow'
            checked={level === 'yellow'}
            onChange={handleChange} />
          {'Жовтий'}
        </div>

        <div>
          <input type="radio"
            value='pink'
            checked={level === 'pink'}
            onChange={handleChange} />
          {'Рожевий'}
        </div>
        <div>

          <input type="radio"
            value='red'
            checked={level === 'red'}
            onChange={handleChange} />
          {'Червоний'}
        </div>

      </table>
      {/* <label>
        Рівень
        <select className="btn" value={level} onChange={handleChange}>
          {gameTypeSelect.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>

      </label> */}



      <button className='btn' >
        <Link to="/start">Почати</Link>

      </button>
      <button className='btn' >
        <Link to="/">головна</Link>
      </button>

    </div>
  );
};

export default ColourGameType;


// // import React, { Component } from 'react';
// // import Message from './Message';

// // const text1 = 'Hello, world!';
// // const text2 = 'Another exciting text.';

// // class Page extends Component {
// //   state = {
// //     text: null
// //   }

// //   // constructor(props) {
// //   //   super(props);
// //   //   this.state = {
// //   //     text: null,
// //   //   };
// //   // }

// //   setText = text => {
// //     this.setState({
// //       text,
// //     });
// //   };

// //   render() {
// //     return (
// //       <div className="page">
// //         <Message text={this.state.text} />
// //         {/* <div className="message">Hello, world!</div> */}
// //         <div className="actions">
// //           <select className="btn" onClick={() => this.setText(text1)}>
// //             Text 1
// //           </select>
// //           <select></select>
// //           <button className="btn" onClick={() => this.setText(text2)}>
// //             Text 2
// //           </button>
// //           <button className="btn" onClick={() => this.setText('')}>
// //             Clear
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default Page;



// class ColourGameType extends Component {


//   state = {
//     text: null
//   }
//   setText = text => {
//     this.setState({
//       text,
//     })
//   }
//   render() {
//     return (
//       <div>
//         <select>hhhh</select>

//       </div>
//     )
//   }

// }
// export default ColourGameType
