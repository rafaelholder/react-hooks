import { Component } from 'react';
import logo from '../../logo.svg';

class UseState extends Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <p>Use of setState to change the direction of logo rotation </p>
          <button type="button" onClick={this.handleClick}>
            Reverse {reverseClass}
          </button>
          <p>Scroll down! </p>
        </header>
      </div>
    );
  }
}
export default UseState;
