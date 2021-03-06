import React from "react";
import { Counter } from './Counter';
import PropTypes from 'prop-types';

export class Player extends React.Component{
    static propTypes = {
        // 5가지 type정의
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func,
        id: PropTypes.number,
        name: PropTypes.string,
        score: PropTypes.number

    }
	render() {
		console.log(this.props.name, 'rendered');
		const {removePlayer, id, name, score, changeScore} = this.props
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{name}
				</span>
				<Counter
					score={score}
					id={id}
					changeScore={changeScore}/>
			</div>
		)
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log(nextProps);
		//score가 다를 경우에만 true를 return
		return this.props.score !== nextProps.score;

	}
}

/*export const Player = (props) => {
	console.log(props.name, 'rendered');

	return(
		<div className="player">
		<span className="player-name">
			<button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
			{props.name}
		</span>
			<Counter
				score={props.score}
				id={props.id}
				changeScore={props.changeScore}/>
		</div>
	)
}*/


