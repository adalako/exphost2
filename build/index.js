'use strict';

var React = require('react');
var reactBootstrap = require('react-bootstrap');

var App = require('./App');

// From StackOverflow question:
//  http://stackoverflow.com/questions/3989095/javascripthow-to-write-document-ready-like-event-without-jquery
var ready = function ready(f) {
  /complete|loaded|interactive/.test(document.readyState) ? f() : setTimeout(ready, 9, f);
};

ready(function () {
  React.render(React.createElement(App), document.getElementById('app'));
});

module.exports = {
  App: App,
  React: React,
  reactBootstrap: reactBootstrap
};
//# sourceMappingURL=sourcemaps/index.js.map
