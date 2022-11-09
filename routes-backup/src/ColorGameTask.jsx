import React, { Component } from 'react';

let db = "allTasks"

class ColorGameTask extends Component {
  state = {
    task: null,
  };
  componentDidMount() {
    this.fetchUser(this.props.userId);
  }
  // fetch(`https://api.github.com/users/${userId}`)
  fetchUser = userId => {
    fetch(`./dbv5/${db}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          task: data,
        });
      });
  };
  render() {
    const { task } = this.state;
    if (!task) {
      return null;
    }


    // const { avatar_url, location, name } = task;
    return (

<table>
  loh
</table>

      // <div className="task">
      //   <img
      //     alt="task Avatar"
      //     src={avatar_url}
      //     className="user__avatar"
      //   />
      //   <div className="user__info">
      //     <span className="user__name">{task}</span>

      //     <span className="user__location">{img}</span>
      //   </div>
      // </div>
    );
  }
}
// function randomQuote() {
//   let random = quotes[Math.floor(Math.random() * quotes.length)];
//   quotation.innerText = `“${random.quote}.”`;
//   source.innerText = random.source;
// }

// randomQuote();

// document.querySelector("button").addEventListener('click', randomQuote)
export default ColorGameTask;