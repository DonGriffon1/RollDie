import React from 'react';
import {
    BOARD_INITIALIZATION,
    SET_CURRENT_PLAYER,
    SET_MOVED_PLAYER,
    SET_QUESTION_MODE,
    SET_SCORE,
    SET_TILE,
} from "../App/constants";
import {connect} from "react-redux";
import {CoordSchema} from "./coordSchema";
import {chooseNewPlayer, createSendObject} from "../../utils/helpers";
import './dice.css';
import styled from 'styled-components';

const DiceNoClick = styled.div`
   ${props => props.NoClick ? 'pointer-events: none;' : ''}
`;
const classes = ['rollStart', 'roll1', 'roll2', 'roll3', 'roll4', 'roll5', 'roll6'];

class Dice extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            diceValue: 6,
            noClick: false
        };
    }

    componentWillMount() {
        const {gameData, playersNumber} = this.props.global;
        if(!Object.keys(gameData.scores).length) {
            let initial = {};
            for (let i = 1; i <= playersNumber; i++) {
                initial[i] = 0;
            }
            let initialFalse = {};
            for (let y = 1; y <= playersNumber; y++) {
                initialFalse[y] = false;
            }
            this.props.setTile(initial);
            this.props.setScore(initial);
        }
    }
     componentDidMount() {
        this.props.boardInitialization(true);
         this.die.classList.add(`rollStart`);
     }

     calculateNewTile =(diceValue) => {
        const {gameData, questions} = this.props.global;
        let max = gameData.tiles[gameData.currentPlayer] + diceValue;
        if(max > Object.keys(CoordSchema).length - 1) {
            max = Object.keys(CoordSchema).length - 1;
        }
             for (let i = gameData.tiles[gameData.currentPlayer] + 1; i <= max; i++) {
                 if (CoordSchema[i].type) {
                     if(questions[CoordSchema[i].index].questions[gameData.questionIndex[CoordSchema[i].index]]) {
                         return i;
                     }
                 }
             }
            return max;
    };

    turnOnQuestionMode = () => {
        const {gameData, questions, playersData} = this.props.global;
        const tile = gameData.tiles[gameData.currentPlayer];
        if(questions[CoordSchema[tile].index].questions[gameData.questionIndex[CoordSchema[tile].index]]) {
            this.props.setMovedPlayer(gameData.currentPlayer);
            this.props.changeQuestionMode(true);
        } else {
            let player = chooseNewPlayer(gameData.currentPlayer, playersData);
            this.props.setCurrentPlayer(player)
        }
    };

    setTiles = (tileValue) => {
        const {gameData} = this.props.global;
        let temporaryValue = gameData.tiles[gameData.currentPlayer];
        let jumping = setInterval(() => {
            if(gameData.tiles[gameData.currentPlayer] < tileValue) {
                temporaryValue += 1;
                this.props.setTile(createSendObject(gameData.currentPlayer, temporaryValue));
            }
        }, 500);
        setTimeout(() => {
            clearInterval(jumping);
            jumping = null;
        }, ((tileValue - gameData.tiles[gameData.currentPlayer]) * 500) + 100 );
    };

    spinDice = () => {
        const {gameData, playersData} = this.props.global;
        const tile = gameData.tiles[gameData.currentPlayer];
        let player = chooseNewPlayer(gameData.currentPlayer, playersData);
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
        let tileValue = this.calculateNewTile(diceValue);
        setTimeout(() => this.setTiles(tileValue), 600);
        this.die.classList.add(`roll${diceValue}`);
        this.props.playSound('diceThrow');
        setTimeout(() => {
            this.setState({
                noClick: false
            });
        }, 1100 + (tileValue - tile) * 500);
        setTimeout(() => {
            this.setState({
                diceValue: diceValue
            })
        }, 1000);
        if (Object.keys(gameData.tiles).length && CoordSchema[tileValue].type && !gameData.questionMode) {
            setTimeout(() => this.turnOnQuestionMode(), 1100 + (tileValue - tile) * 500);
        } else {
            setTimeout(() => this.props.setCurrentPlayer(player), 1100 + (tileValue - tile) * 500);
        }
    };

    render() {
        const {gameData} = this.props.global;
        // face styles
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
            <DiceNoClick NoClick={this.state.noClick || gameData.questionMode || gameData.confirmMode || this.props.global.spinner}>
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
            </DiceNoClick>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setScore: (payload) => dispatch({type: SET_SCORE, payload}),
        setCurrentPlayer: (payload) => dispatch({type: SET_CURRENT_PLAYER, payload}),
        setTile: (payload) => dispatch({type: SET_TILE, payload}),
        changeQuestionMode: (payload) => dispatch({type: SET_QUESTION_MODE, payload}),
        setMovedPlayer: (payload) => dispatch({type: SET_MOVED_PLAYER, payload}),
        boardInitialization: (payload) => dispatch({type: BOARD_INITIALIZATION, payload}),
    };
}

function mapStateToProps (state) {
    return {
        global: state.global
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dice);