import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  handleAddItem = () => {
    const newList = [...this.state.list, this.state.item];
    this.setState({ list: newList, item: '' });
  };

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <h1>Todo List</h1>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.handleAddItem}>Add</button>
        <ul className='items-container'>
          {this.state.list.map((item) => {
            return (
              <li key={item} className='todo'>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
