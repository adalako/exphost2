'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _asyncToGenerator = require('babel-runtime/helpers/async-to-generator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

function ApiError(code, message) {
  var err = new Error(message);
  err._isApiError = true;
  err.code = code;
  return err;
}

var ApiClient = (function () {
  _createClass(ApiClient, [{
    key: '_makeBaseUrl',
    value: function _makeBaseUrl(opts) {
      var bu = opts.protocol + '://' + opts.host;
      if (opts.port) {
        bu += ':' + opts.port;
      }
      bu += opts.path;
      return bu;
    }
  }]);

  function ApiClient(opts) {
    _classCallCheck(this, ApiClient);

    this.opts = _Object$assign({
      host: 'exp.host',
      port: null,
      protocol: 'http',
      baseUrl: undefined,
      path: '/--/api'
    }, opts);

    if (!this.opts.baseUrl) {
      this.opts.baseUrl = this._makeBaseUrl(this.opts);
    }

    // TODO: Credentials
  }

  _createClass(ApiClient, [{
    key: 'callMethodAsync',
    value: _asyncToGenerator(function* (methodName, args) {
      var baseUrl = this.opts.baseUrl;

      // To avoid parse errors when you `stringify` then `parse` `undefined`.
      args = args || null;

      var url_ = baseUrl + '/' + encodeURIComponent(methodName) + '/' + encodeURIComponent(JSON.stringify(args));

      // require('whatwg-fetch');
      var response = yield fetch(url_, {
        credentials: 'same-origin'
      });
      var json = yield response.json();
      if (json.err) {
        throw ApiError(json.err.code || 'UNKNOWN_API_ERROR', json.err);
      }
      return json;
    })
  }]);

  return ApiClient;
})();

if (typeof window === 'object') {
  window._apiClient = new ApiClient();
  window.apiAsync = function () {
    var _window$_apiClient;

    return (_window$_apiClient = window._apiClient).callMethodAsync.apply(_window$_apiClient, arguments);
  };
}

// if (typeof(window) === 'object') {
//   window.apiAsync = callMethodAsync;
//   window.loginAsync = function (username, password, type) {
//     return window.apiAsync('adduser', {
//       username,
//       password,
//       type,
//     }).then((result) => {
//
//     });
//
//   };
// }

ApiClient.ApiError = ApiError;

module.exports = ApiClient;
//# sourceMappingURL=sourcemaps/ApiClient.js.map
