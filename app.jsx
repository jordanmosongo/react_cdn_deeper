let n = 0;

const render = () => {
    const title = <h1>Mon super compteur: <span>{n}</span></h1>
    ReactDOM.render(title, document.querySelector('#app'));
}

window.setInterval(() => {
    n++;
    render()
}, 1000)