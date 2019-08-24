import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import { Player } from "./components/Player";


// // 펑션 컴포넌트는 반드시 대문자로 시작
// // react element를 리턴해야 한다.
// const Header = ({title, totalPlayers}) => {
//   return (
//     <header className="header">
//       <h1 className="h1">{title}</h1>
//       <span className="stats">Players: {totalPlayers}</span>
//     </header>
//   )
// }



// class Counter extends React.Component {
//   state = {
//     score: 0,
//     a: 10
//   }
//   constructor() {
//     super();
//     this.handleChangeScore = this.handleChangeScore.bind(this);
//   }
//
//   handleChangeScore(delta) {
//     console.log('incrementScore', this);
//     // state를 변경하는 방법은 setState() 밖에 없다.
//     // this.state.score += 1;
//     this.setState(prevState => ({score: prevState.score + delta}));
//   }
//
//   // 이벤트의 오른쪽은 함수 선언문이 들어가야 한다.
//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={() => this.handleChangeScore(-1)}> - </button>
//         <span className="counter-score">{this.state.score}</span>
//         <button className="counter-action increment" onClick={() => this.handleChangeScore(1)}> + </button>
//       </div>
//     )
//   }
// }

// const Player = (props) => (
//   <div className="player">
// 		<span className="player-name">
// 			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
//       {props.name}
// 		</span>
//     <Counter/>
//   </div>
// )

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  }
  constructor() {
    super();
    this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />

        {/*Player List*/}
        {
          this.state.players.map(player => {
            return (
              <Player name={player.name} key={player.id}
                      id={player.id}
                      removePlayer={this.handleRemovePlayer}/>
            )
          })
        }
      </div>
    )
  }
  handleRemovePlayer(id) {
    console.log(this);
    console.log('handleRemovePlayer', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id)
      return {players}
    })
  }
}

export default App;
