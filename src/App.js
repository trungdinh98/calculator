import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import KeypadComponent from './components/Keypad.js';
import DisplayComponent from './components/Display.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      result: ""
    };
  };

  onClick = button => {
    if (button === "=") {
      this.calculate();
    }
    else if (button === "AC") {
      this.reset();
    }
    else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = '';
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--','+');
    }
    else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(checkResult) || "" ) + ""
      });
    } catch (e) {
      this.setState({
          result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render () {
    return (
      <div className="calculator-body">
        <Welcome name="Someone"/>
        <DisplayComponent display={this.state.result}/>
        <KeypadComponent onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
