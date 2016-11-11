import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: 'Oats on milk'
    }
    this.onH1ClickHandler = this.onH1ClickHandler.bind(this);
  }
  onH1ClickHandler(e) {
    console.dir(this.props.children);
    this.setState((prevState, props) => ({
      dish: prevState.dish + ' AND WITH FUCKING SUGER!'
    }));
  }
  render() {
    return(
      <div style={{margin:'15px'}}>
        <button onClick={this.onH1ClickHandler}>Click on me to add suger in oats!!!</button>
        <Dish dish={this.state.dish}/>
      </div>
    )
  }
}

function Dish(props) {
  return (
    <code>{props.dish}</code>
  )
}

Dish.defaultProps = {
  dish: 'nothing'
}

Dish.propType = {
  dish: React.PropTypes.number
};

export {Test1};