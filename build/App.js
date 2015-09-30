'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var React = require('react');

var _require = require('react-bootstrap');

var Button = _require.Button;
var Jumbotron = _require.Jumbotron;

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Jumbotron,
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(
          'p',
          null,
          'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            Button,
            { bsStyle: 'primary' },
            'Learn more'
          )
        )
      );
    }
  }]);

  return App;
})(React.Component);

module.exports = App;
//# sourceMappingURL=sourcemaps/App.js.map
