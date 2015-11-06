var React = require('react');
var ReactDom = require('react-dom')
var App = require('./flux/components/app.es6');

var mountnode = document.getElementById('app');


var run = function(){
  ReactDom.render(
    <App /> , mountnode
  );

};


if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
;
