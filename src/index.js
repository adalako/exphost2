let React = require('react');
let reactBootstrap = require('react-bootstrap');

let App = require('./App');
let ApiClient = require('./ApiClient');

// From StackOverflow question:
//  http://stackoverflow.com/questions/3989095/javascripthow-to-write-document-ready-like-event-without-jquery
var ready = function (f) {
  (/complete|loaded|interactive/.test(document.readyState)) ?
      f() :
      setTimeout(ready, 9, f);
};

ready(function () {
  React.render(React.createElement(App), document.getElementById('app'));
});

window._apiClient = new ApiClient({
});

window.cl = (...args) => {
  console.log(...args);
}

window.ce = (...args) => {
  console.error(...args);
}

module.exports = {
  ApiClient,
  App,
  React,
  reactBootstrap,
};
