import React from "react";
import logo from "./watch1.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedlist,
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input,
    });
  }

  render() {
    return (
      <div>
        <br />
        <img src={logo} width="150" height="100" className="logo" />
        <h1 className="App-title">TODO APP</h1>
        <div className="container">
          Add an item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add To Do
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      value={this.state.newItem.isDone}
                      // checked={item.isDone}
                      onChange={(e) => this.updateInput(e.target.value)}
                    />
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// function App(){
//   return(
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo"/>
//     <h1>Sharmistha Mandal</h1>
//     <p>I am a student</p>
//     </header>
//     </div>
//   );
// }

export default App;
