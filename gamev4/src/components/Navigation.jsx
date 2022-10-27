import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "blue" } }}

      >


        <button onClick={() => this.onSetSidebarOpen(true)}>
          Меню
        </button>
        <div>
          <Link />




        </div>
      </Sidebar>
    );
  }
}

export default App;
