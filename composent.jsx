const WelcomeFunc = ({name, children}) => {
    return <React.Fragment>
        <h1>Bonjour {name}</h1>
        <p>{children}</p>
    </React.Fragment>
}

class Welcome extends React.Component {
    render() {
      return <React.Fragment>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
    </React.Fragment>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return <div>
            Il est {this.state.date.toDateString()} - {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {counter: this.props.start}
        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(this.increment.bind(this), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    // we base on default props to take care of step

    increment() {
        // this.setState((state, {step}) => ({counter: step ? state.counter + step : state.counter + 1}))
        this.setState((state, props) => ({counter: state.counter + props.step}))
    }

    render() {
        return <div>
            Notre super compteur: {this.state.counter}
            </div>
    }
}

// we can define component defaultProps as alternative

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

const Home = () => {
    return <div>
        <WelcomeFunc name="Jean"/>
        <Welcome name="Pierre"/>
        <Clock/>
        <Incrementer start={10}/>
        <Incrementer start={20} step={10}/>
    </div>
}

ReactDOM.render(<Home />, document.querySelector('#app'));