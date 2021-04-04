// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

//uso de MDB React estilos de bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import './global.css';

//const element = <h1>Hello, Platzi Badges! from react </h1>;

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<BadgeNew/>, container);
ReactDOM.render(<App/>, container);
