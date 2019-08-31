import React from 'react'

export class AddPlayerForm extends React.Component {
    /*state = {
        value : ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value});
    }*/

    textInput = React.createRef()
    handleSubmit = (e) => {
        // submit의 기본 이벤트 막기(깜박거림)
        e.preventDefault();

        // html5 validation api
        const form = document.getElementById("form");
        const player = document.getElementById("player");
        console.log(player.validity.valid);
        console.log(form.checkValidity());

        // 3. 부모에게서 받은 콜백 function을 호출
        // this.props.addPlayer(this.state.value);
        // this.textInput.current. === document.getElementById("player");
        this.props.addPlayer(this.textInput.current.value);
    }
    render()
    {
        return (
            /* noValidate : html5 속성을 체크하지 않는다 */
            <form id="form" className="form" onSubmit={this.handleSubmit} noValidate>
                {/* required : 필수값을 입력하지 않으면 validation 체크*/}
                <input id="player" className="input" type="text" placeholder="enter a player's name"
                       ref={this.textInput} /*value={this.state.value} onChange={this.handleValueChange}*/ required></input>
                <input className="input" type="submit" value="Add Player"></input>
            </form>
        );
    }
}