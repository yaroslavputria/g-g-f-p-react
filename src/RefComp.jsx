import React from 'react';

class RefComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.textInput = input} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
        <NameForm />
      </div>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}   style={{margin:'15px'}}>
        Name:
        <input type="text" defaultValue="Bob" ref={(input) => this.input = input} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export {RefComp};