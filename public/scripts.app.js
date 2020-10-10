'use strict';

console.log('app js is working');

//JSX
var template = React.createElement(
  'p',
  null,
  'This is here is code'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
