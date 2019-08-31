import React from 'react'

export class Stopwatch extends React.Component {
    tickRef;
    state = {
        isRunning: false,
        timer: 0
    }

    handleStopwathch = () =>{
        this.setState(prevState => ({isRunning: !prevState.isRunning}))
    }

    handleReset = () => {
        this.setState(prevState => ({timer: 0}))
    }
    render() {
        return (
            <div className="stopwatch">
                <h2>stopWatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                {/*시간에 따라 변하는 데이터 state로 관리해야한다.*/}
                <button onClick={this.handleStopwathch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }

    tick = () => {
        // time update logic
        if(this.state.isRunning){
            this.setState(prevState => ({timer: prevState.timer +1}));
        }
    }

    //DOM이 렌더링 된 직후에 호출되는 라이프 사이클
    // 네트워크 호출
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000); // 1초마다 호출
    }

    // DOM이 파괴되기 직전에 호출되는 라이프 사이클
    // 리소스 해제 등등
    componentWillMount() {
        clearInterval(this.tickRef);
    }
}