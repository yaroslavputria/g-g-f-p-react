import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = {date: new Date()};
    this.state = {date: 0};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    ReactDOM.render(
      <Form namePlaceholder="Type name here"/>,
      document.querySelector('#foForm')
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    // this.setState({
    //   date: new Date()
    // });
    this.setState((prevState, props) => ({
      date: prevState.date + 1
    }));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
          <h2>It is {this.state.date}.</h2>
        </div>
        <div id="foForm">
        </div>
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.processForm = this.processForm.bind(this);

  }
  processForm(e) {
    e.preventDefault();
    console.dir(this);
    ReactDOM.render(
      <DataSent />,
      document.querySelector('#resMes')
    );
  };
  render() {
    return (
      <form >
        <p>Name: <input type="text" name="name" placeholder={this.props.namePlaceholder}/></p>
        <p>Email: <input type="email" name="email"/></p>
        <p><input type="radio" name="sex" value="male" defaultChecked/>Male</p>
        <p><input type="radio" name="sex" value="female"/>Female</p>
        <p><button type="submit" onClick={this.processForm}>Send</button></p>
        <p id="resMes"><DataNotSent/></p>
      </form>
    );
  }
}

function DataSent(props) {
  return <span>Data was sent</span>;
}

function DataNotSent(props) {
  return <span>Data wasnt sent yet</span>;
}

export default App;
