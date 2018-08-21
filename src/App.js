import React from 'react';
import {DieNoClick, DieContainer, Die, AppWrapper} from "./styles";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            dieValue: 6,
            noClick: false,
            firstClick: true
        };
    }

    spinDie = () => {
        let dieValue = Math.floor(Math.random() * 6) + 1;
        this.setState({
            dieValue: dieValue,
            noClick: true
        });
        if(this.state.firstClick) {
            this.setState({
                firstClick: false
            });
        }
        setTimeout(() => {
            this.setState({
                noClick: false
            });
        }, 1000);
    };


  render() {
    return (
      <AppWrapper>
          <DieNoClick NoClick={this.state.noClick}>
              <DieContainer onClick={this.spinDie}>
                  <Die DieClass={this.state.firstClick ? 'start' : this.state.dieValue}>
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
      </AppWrapper>
    );
  }
}

export default App;
