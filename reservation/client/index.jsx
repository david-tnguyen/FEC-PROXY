import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Reservation from './components/Footer';
require('./styles/style.scss');

ReactDOM.render(<Reservation/>, document.getElementById('reservation'));