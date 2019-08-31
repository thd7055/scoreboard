import React from "react";
import { Counter } from './Counter';

export class Player extends React.PureComponent{
	render() {
		console.log(props.name, 'rendered');
		return(
			<div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => this.removePlayer(this.props.id)}> x </button>
			{this.props.name}
		</span>
				<Counter
					score={this.props.score}
					id={this.props.id}
					changeScore={this.props.changeScore}/>
			</div>
		)
	}
}

// export const Player = (props) => {
// 	console.log(props.name, 'rendered');
//
// 	return(
// 		<div className="player">
// 		<span className="player-name">
// 			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
// 			{props.name}
// 		</span>
// 			<Counter
// 				score={props.score}
// 				id={props.id}
// 				changeScore={props.changeScore}/>
// 		</div>
// 	)
// }