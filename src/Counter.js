import { observer } from 'mobx-react';
import { Component } from 'react';
import './App.css';

class Counter extends Component {
  render() {
    return(
      <div>
        Counter: {this.props.store.count} <br/>
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    )
  }
  handleInc =() => this.props.store.increment();
  handleDec =() => this.props.store.decrement();
}

export default observer(Counter);
