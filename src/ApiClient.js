function ApiError(code, message) {
  var err = new Error(message);
  err._isApiError = true;
  err.code = code;
  return err;
}

class ApiClient {

  _makeBaseUrl(opts) {
    let bu = opts.protocol + '://' + opts.host;
    if (opts.port) {
      bu += ':' + opts.port;
    }
    bu += opts.path;
    return bu;
  }

  constructor(opts) {

    this.opts = Object.assign({
      host: 'exp.host',
      port: null,
      protocol: 'http',
      baseUrl: undefined,
      path: '/--/api',
    }, opts);


    if (!this.opts.baseUrl) {
      this.opts.baseUrl = this._makeBaseUrl(this.opts);
    }

    // TODO: Credentials

  }

  async callMethodAsync(methodName, args) {
    let baseUrl = this.opts.baseUrl;

    // To avoid parse errors when you `stringify` then `parse` `undefined`.
    args = args || null;

    let url_ = baseUrl + '/' + encodeURIComponent(methodName) + '/' + encodeURIComponent(JSON.stringify(args));

    // require('whatwg-fetch');
    var response = await fetch(url_, {
      credentials: 'same-origin'
    });
    var json = await response.json();
    if (json.err) {
      throw ApiError(json.err.code || 'UNKNOWN_API_ERROR', json.err);
    }
    return json;

  }

}

if (typeof(window) === 'object') {
  window._apiClient = new ApiClient();
  window.apiAsync = function (...args) {
    return window._apiClient.callMethodAsync(...args);
  }
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
