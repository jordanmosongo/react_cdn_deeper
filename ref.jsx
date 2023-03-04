const Field = React.forwardRef((props, ref) => {
    return <div>
        <input type='text' ref={ref} />
    </div>
})
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.inputName = null;
        this.input = React.createRef(); // second intuitive way to use reference
    }

    handleClick(e) {
        console.log('e', e);
        console.log('ref value', this.inputName.value);
        console.log('ref second', this.input.current.value);
    }

    render() {
       return <div>
            <input type='text' ref={(ref) => this.inputName = ref} />
            {/* <input type='text' ref={this.input} /> */}
            <Field ref={this.input}/>
            <button onClick={this.handleClick}>Click here !</button>
        </div>
    }
}

ReactDOM.render(<Home/>, document.querySelector('#app'));