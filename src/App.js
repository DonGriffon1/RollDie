import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DieNoClick, DieContainer, Die} from "./styles";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dieValue: 6,
            noClick: false,
            dieClass: 'start'
        };
    }

    spinDie = () => {
        this.setState({
            noClick: true
        });
        let dieValue = Math.floor(Math.random() * 6) + 1;
            this.setState({
                dieValue: dieValue,
                dieClass: dieValue
            });
        setTimeout(() => {
            this.setState({
                noClick: false
            });
        }, 1000);
    };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <DieNoClick NoClick={this.state.noClick}>
              <DieContainer onClick={this.spinDie}>
                  <Die DieClass={this.state.dieClass}>
                      <div className="face six">
                          <span className="dot dot1"/>
                          <span className="dot dot2"/>
                          <span className="dot dot3"/>
                          <span className="dot dot5"/>
                          <span className="dot dot6"/>
                          <span className="dot dot7"/>
                      </div>
                      <div className="face one">
                          <span className="dot dot4"/>
                      </div>
                      <div className="face five">
                          <span className="dot dot1"/>
                          <span className="dot dot2"/>
                          <span className="dot dot4"/>
                          <span className="dot dot6"/>
                          <span className="dot dot7"/>
                      </div>
                      <div className="face two">
                          <span className="dot dot2"/>
                          <span className="dot dot6"/>
                      </div>
                      <div className="face three">
                          <span className="dot dot2"/>
                          <span className="dot dot4"/>
                          <span className="dot dot6"/>
                      </div>
                      <div className="face four">
                          <span className="dot dot1"/>
                          <span className="dot dot2"/>
                          <span className="dot dot6"/>
                          <span className="dot dot7"/>
                      </div>
                  </Die>
              </DieContainer>
          </DieNoClick>
      </div>
    );
  }
}

export default App;
