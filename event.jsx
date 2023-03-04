class ManualIncrementer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }

    increment(e) {
        e.preventDefault();
        this.setState((state, props) => ({counter: state.counter + 1}))
    }

    render() {
        return <div>
            Compteur: {this.state.counter} <button onClick={this.increment.bind(this)}>Incrémenter</button>
        </div>
    }
}

class ControlledIncrementer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timer: null, counter: 0, isPaused: false}
    }

    componentDidMount() {
        this.play();
    }

    componentWillUnmount() {
         window.clearInterval(this.state.timer);
    }

    play() {
        this.setState({timer: window.setInterval(this.increment.bind(this), 1000)})
        this.setState({isPaused: false})
    }

    pause() {
        window.clearInterval(this.state.timer);
        this.setState({timer: null, isPaused: true})
    }

    increment() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        return <div>
            Valeur: {this.state.counter}
            <div>
                { !this.state.isPaused ? <button onClick={this.pause.bind(this)}>Pause</button> :
                <button onClick={this.play.bind(this)}>Play</button>}
            </div>
        </div>
    }
}

ReactDOM.render(<ControlledIncrementer/>, document.querySelector('#app'))