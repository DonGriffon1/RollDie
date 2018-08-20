import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const classes = ['rollStart', 'roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6'];
const DiceNoClick = styled.div`
   ${props => props.NoClick ? 'pointer-events: none;' : ''}
`;


class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            diceValue: 6,
            noClick: false
        };
    }

    componentDidMount() {
        this.die.classList.add(`rollStart`);
    }

    spinDice = () => {
        this.setState({
            noClick: true
        });
        classes.map(
            (diceClass) => {
                if (this.die.classList.contains(diceClass)) {
                    this.die.classList.remove(diceClass)
                }
            }
        );
        void this.die.offsetWidth;
        let diceValue = Math.floor(Math.random() * 6) + 1;
        this.die.classList.add(`roll${diceValue}`);
        setTimeout(() => {
            this.setState({
                diceValue: diceValue
            })
        }, 1000);
    }

  render() {

      let dieSize = 84;
      let faceStyle = {
          background: '#fff',
          boxShadow: 'inset 0 0 15px #ccc',
          borderRadius: '5px',
          height: `${dieSize}px`,
          position: 'absolute',
          width: `${dieSize}px`,
      };
      let f1Style = { transform: `rotateX(180deg) translateZ(${dieSize / 2}px)` };
      let f2Style = { transform: `rotateY(-90deg) translateZ(${dieSize / 2}px)` };
      let f3Style = { transform: `rotateX(90deg) translateZ(${dieSize / 2}px)` };
      let f4Style = { transform: `rotateX(-90deg) translateZ(${dieSize / 2}px)` };
      let f5Style = { transform: `rotateY(90deg) translateZ(${dieSize / 2}px)` };
      let f6Style = { transform: `rotateY(0deg) translateZ(${dieSize / 2}px)` };
      // dot styles
      let dotSize =dieSize / 6 - 2;
      let dotStyle = {
          background: '#444',
          boxShadow: 'inset 5px 0 10px #000',
          height: `${ dotSize }px`,
          width: `${ dotSize }px`
      };
      let d1Style = { top: `${dieSize/6}px`, left: `${dieSize/6}px` };
      let d2Style = { top: `${dieSize/6}px`, right: `${dieSize/6}px` };
      let d3Style = { top: `${dieSize/2 - dotSize/2}px`, left: `${dieSize/6}px` };
      let d4Style = { top: `${dieSize/2 - dotSize/2}px`, left: `${dieSize/2 - dotSize/2}px` };
      let d5Style = { top: `${dieSize/2 - dotSize/2}px`, right: `${dieSize/6}px` };
      let d6Style = { bottom: `${dieSize/6}px`, left: `${dieSize/6}px` };
      let d7Style = { bottom: `${dieSize/6}px`, right: `${dieSize/6}px` };
      // roll styles
      let rollStyle = {
          animationDuration: `1s`,
          height: `${dieSize}px`,
          width: `${dieSize}px`
      };
      // container styles
      let containerStyle = {
          margin: `5px 5px 15px 5px`,
          display: 'inline-block',
          perspective: '1000px'
      };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="die-container" onClick={this.spinDice} style={containerStyle}>
              <div className="die" ref={die => this.die = die} style={rollStyle}>
                  <div className="face six" style={Object.assign({}, faceStyle, f6Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d1Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d2Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d3Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d5Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d6Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d7Style)} />
                  </div>
                  <div className="face one" style={Object.assign({}, faceStyle, f1Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d4Style)} />
                  </div>
                  <div className="face five" style={Object.assign({}, faceStyle, f5Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d1Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d2Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d4Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d6Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d7Style)} />
                  </div>
                  <div className="face two" style={Object.assign({}, faceStyle, f2Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d2Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d6Style)} />
                  </div>
                  <div className="face three" style={Object.assign({}, faceStyle, f3Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d2Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d4Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d6Style)} />
                  </div>
                  <div className="face four" style={Object.assign({}, faceStyle, f4Style)}>
                      <span className="dot" style={Object.assign({}, dotStyle, d1Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d2Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d6Style)} />
                      <span className="dot" style={Object.assign({}, dotStyle, d7Style)} />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
