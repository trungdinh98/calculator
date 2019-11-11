/*eslint-disable no-eval */
import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Keypad from './components/Keypad.js';
import Display from './components/Display.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      result: ""
    };
  };

  clickKeypad = button => {
    if (button === "=") {
      this.calc();
    }
    else if (button === "AC") {
      this.allclear();
    }
    else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calc = () => {
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

  allclear = () => {
    this.setState({
      result: ""
    });
  };

  render () {
    return (
      <div className="calculator-body">
        <Welcome name="Someone"/>
        <Display display={this.state.result}/>
        <Keypad onClick={this.clickKeypad}/>
      </div>
    );
  }
}

export default App;
