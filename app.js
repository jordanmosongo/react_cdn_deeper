let counter = 0;

const render = () => {
    const title = React.createElement('h1', {
        className: 'title'  
    }, 'Mon super compteur : ', 
    React.createElement('span',  {className: 'counter'}, counter)
    );
    ReactDOM.render(title, document.querySelector('#app'));
}

const render2 = () => {
    document.querySelector('#app').innerHTML = `<h1 class='title'>Mon super compteur : <span class='counter'>${counter}</span></h1>`
}

window.setInterval(() => {
    counter++;
    render();   
}, 1000);