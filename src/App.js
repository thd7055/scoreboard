import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Player } from './components/Player';
import { AddPlayerForm } from './components/AddPlayerForm';

class App extends React.Component {
    state = {
        players: [
            {name: 'LDK', score: 0, id: 1},
            {name: 'HONG', score: 10, id: 2},
            {name: 'KIM', score: 20, id: 3},
            {name: 'PARK', score: 30, id: 4},
        ]
    }

    maxId = 4;

    constructor() {
        super();
        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
        this.handleChangeScore = this.handleChangeScore.bind(this);
    }
    render() {
        return (
            <div className="scoreboard">
                <Header players={this.state.players} />

                {/*Player List*/}
                {
                    this.state.players.map(player => {
                        return (
                            <Player name={player.name} key={player.id}
                                    id={player.id}
                                    score={player.score}
                                    changeScore={this.handleChangeScore}
                                    removePlayer={this.handleRemovePlayer} />
                        )
                    })
                }
                 {/*2. 콜백 function을 props로 내려주기*/}
                <AddPlayerForm addPlayer={this.handleAddPlayer}/>
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
    handleChangeScore(id, delta) {
        console.log(id, delta);
        this.setState(prevState => {
            // id에 해당되는  player를 찾은 다음 score에 delta를 더한다.
            const players = [ ...prevState.players ];
            players.forEach(player => {
                if (player.id === id) {
                    player.score += delta;
                }
            })
            return {players}
        })
    }
    // 1. 콜백function 정의
    handleAddPlayer = (name) => {
     console.log(name);
     // add player 로직
    this.setState(prevState =>{
        //원본 배열을 훼손하면 안된다. => deep copy 해야한다.
        const players = [...prevState.players]; // [] -> 새로운 메모리(바구니)
        players.push({name, score:0, id: ++this.maxId});
        return {players};
    });
    }
}

export default App;
