import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactTutorial extends Component {
  constructor(props) {
    super(props);
    //this.state = {date: new Date()};
    this.state = {date: 0};
  }

  numbers = [1, 2, 3, 4, 5];
  listItems = this.numbers.map((number) =>
    <li key={'id' + number}>{'Item №' + number}</li>
  );

  render() {
    return (
      <div id="forGreeting">
        <ul>{this.listItems}</ul>
        <Greeting isLoggedIn={true} />
      </div>
    );
  }
}



function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default ReactTutorial;
