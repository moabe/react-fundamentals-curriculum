var React = require('react');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');



ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

