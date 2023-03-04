class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            favorite: 'preason break',
            checked: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.areaHandleChange = this.areaHandleChange.bind(this);
        this.selectHandleChange = this.selectHandleChange.bind(this);
        this.checkHandleChange = this.checkHandleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const type = e.target.type;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;     

        this.setState({[name]: value})
    }

    areaHandleChange(e) {
        e.preventDefault();
        this.setState({comment: e.target.value})
    }

    selectHandleChange(e) {
        e.preventDefault();
        // this.setState({favorite: e.target.value})
        this.setState({favorite: Array.from(e.target.selectedOptions).map(o => o.value)})
    }

    checkHandleChange(e) {
        e.preventDefault();
        this.setState({checked: e.target.checked})
    }

    render() {
        return <div>
            <label htmlFor="name">Nom utilisateur</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
            <br />

            <label htmlFor="comment">Laisser un commentaire</label>
            <textarea name="comment" id="comment" cols="30" rows="10" onChange={this.handleChange}></textarea>
            <br />

            <label htmlFor="favorite">Séries favorites</label>
            <select name="favorite" id="favorite" onChange={this.selectHandleChange} multiple>
                <option value="preason break">Preason break</option>
                <option value="Casa de papel">Casa de papel</option>
                <option value="24h chrono">24h chrono</option>
            </select>
            <div>
                selected Item: {JSON.stringify(this.state.favorite)}
            </div>
            <label htmlFor="nom">Es-tu satisfait ?</label>  
            <input type="checkbox" name="checked" checked={this.state.checked} onChange={this.handleChange} />
            <p>{this.state.checked ? 'Vous avez coché': null}</p>
            <div>
                {JSON.stringify(this.state)}
            </div>
        </div>
    }    
}

ReactDOM.render(<Home/>, document.querySelector('#app'))