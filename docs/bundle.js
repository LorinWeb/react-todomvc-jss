webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(215);

	var _reactRedux = __webpack_require__(220);

	var _reactDom = __webpack_require__(248);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(249);

	var _App2 = _interopRequireDefault(_App);

	var _store = __webpack_require__(411);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default })
	  )
	), document.getElementById('root'), function () {
	  if (true) {
	    // In production, remove the server-side generated styles and let
	    // the live app take over (for auto-mount/unmount and lazy-loading)
	    var ssStyles = document.getElementById('server-side-styles');
	    ssStyles.parentNode.removeChild(ssStyles);
	  }
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(2);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(155);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(160);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(162);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(192);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(193);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(194);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(196);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(198);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(197);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(199);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(200);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(201);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(202);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(203);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(189);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(204);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(205);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(209);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(210);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(211);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(214);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(206);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(3);

	var _deprecateObjectProperties = __webpack_require__(156);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(159);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (false) {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (false) {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (false) {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (false) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(3);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = Object.create(null);

	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ?  false ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(163);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(178);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(159);

	var _RouterContext = __webpack_require__(189);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(2);

	var _RouterUtils = __webpack_require__(191);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // Deprecated:
	    parseQueryString: func,
	    stringifyQuery: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	     false ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ?  false ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	       false ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	       false ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	     false ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	     false ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(164);

	var _PathUtils = __webpack_require__(165);

	var _ExecutionEnvironment = __webpack_require__(166);

	var _DOMUtils = __webpack_require__(167);

	var _DOMStateStorage = __webpack_require__(168);

	var _createDOMHistory = __webpack_require__(169);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	         false ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	     false ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	     false ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	     false ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	   false ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	       false ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	       false ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(166);

	var _DOMUtils = __webpack_require__(167);

	var _createHistory = __webpack_require__(170);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(171);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(165);

	var _AsyncUtils = __webpack_require__(174);

	var _Actions = __webpack_require__(164);

	var _createLocation2 = __webpack_require__(175);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(176);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(177);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	       false ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(172);
	var isArguments = __webpack_require__(173);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 172 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 173 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(164);

	var _PathUtils = __webpack_require__(165);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	     false ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	     false ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	     false ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(179);

	var _runTransitionHook = __webpack_require__(176);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(165);

	var _deprecate = __webpack_require__(177);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	       false ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	       false ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	       false ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(180);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _computeChangedRoutes2 = __webpack_require__(182);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(183);

	var _isActive2 = __webpack_require__(185);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(186);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(188);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	       false ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	         false ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	             false ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes

	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(160);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(184);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	       false ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 184 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(160);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(184);

	var _makeStateWithLocation = __webpack_require__(187);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(156);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (false) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(184);

	var _makeStateWithLocation = __webpack_require__(187);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(160);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	               false ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	               false ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(156);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(190);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(2);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	       false ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (false) {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ?  false ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(160);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(156);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (false) {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(155);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);

	    if (event.defaultPrevented) return;

	    !this.context.router ?  false ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;

	    event.preventDefault();

	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;
	    var hash = _props.hash;
	    var state = _props.state;

	    var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	    this.context.router.push(location);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	     false ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }

	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(192);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(195);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(155);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;

	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },

	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ?  false ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;

	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;

	      var router = this.props.router || this.context.router;
	      var props = _extends({}, this.props, { router: router });

	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }

	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(197);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(2);

	var _PatternUtils = __webpack_require__(160);

	var _InternalPropTypes = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(2);

	var _InternalPropTypes = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	         false ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(2);

	var _InternalPropTypes = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ?  false ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	     false ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ?  false ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ?  false ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(178);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	   false ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(189);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	     false ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _Actions = __webpack_require__(164);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(206);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(181);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(2);

	var _RouterUtils = __webpack_require__(191);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ?  false ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation && router.createLocation(redirectLocation, _Actions.REPLACE), nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(178);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(207);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(208);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(166);

	var _PathUtils = __webpack_require__(165);

	var _runTransitionHook = __webpack_require__(176);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(177);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	           false ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(165);

	var _Actions = __webpack_require__(164);

	var _createHistory = __webpack_require__(170);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ?  false ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ?  false ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	         false ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(178);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(207);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(189);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(157);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  if (false) {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }

	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);

	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(212);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(213);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(164);

	var _PathUtils = __webpack_require__(165);

	var _ExecutionEnvironment = __webpack_require__(166);

	var _DOMUtils = __webpack_require__(167);

	var _DOMStateStorage = __webpack_require__(168);

	var _createDOMHistory = __webpack_require__(169);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ?  false ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(209);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(163);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(213);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

	var _reducer = __webpack_require__(216);

	Object.defineProperty(exports, 'LOCATION_CHANGE', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.LOCATION_CHANGE;
	  }
	});
	Object.defineProperty(exports, 'routerReducer', {
	  enumerable: true,
	  get: function get() {
	    return _reducer.routerReducer;
	  }
	});

	var _actions = __webpack_require__(217);

	Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
	  enumerable: true,
	  get: function get() {
	    return _actions.CALL_HISTORY_METHOD;
	  }
	});
	Object.defineProperty(exports, 'push', {
	  enumerable: true,
	  get: function get() {
	    return _actions.push;
	  }
	});
	Object.defineProperty(exports, 'replace', {
	  enumerable: true,
	  get: function get() {
	    return _actions.replace;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _actions.go;
	  }
	});
	Object.defineProperty(exports, 'goBack', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goBack;
	  }
	});
	Object.defineProperty(exports, 'goForward', {
	  enumerable: true,
	  get: function get() {
	    return _actions.goForward;
	  }
	});
	Object.defineProperty(exports, 'routerActions', {
	  enumerable: true,
	  get: function get() {
	    return _actions.routerActions;
	  }
	});

	var _sync = __webpack_require__(218);

	var _sync2 = _interopRequireDefault(_sync);

	var _middleware = __webpack_require__(219);

	var _middleware2 = _interopRequireDefault(_middleware);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports.syncHistoryWithStore = _sync2['default'];
	exports.routerMiddleware = _middleware2['default'];

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.routerReducer = routerReducer;
	/**
	 * This action type will be dispatched when your history
	 * receives a location change.
	 */
	var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

	var initialState = {
	  locationBeforeTransitions: null
	};

	/**
	 * This reducer will update the state with the most recent location history
	 * has transitioned to. This may not be in sync with the router, particularly
	 * if you have asynchronously-loaded routes, so reading from and relying on
	 * this state is discouraged.
	 */
	function routerReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      type = _ref.type,
	      payload = _ref.payload;

	  if (type === LOCATION_CHANGE) {
	    return _extends({}, state, { locationBeforeTransitions: payload });
	  }

	  return state;
	}

/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This action type will be dispatched by the history actions below.
	 * If you're writing a middleware to watch for navigation events, be sure to
	 * look for actions of this type.
	 */
	var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

	function updateLocation(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: CALL_HISTORY_METHOD,
	      payload: { method: method, args: args }
	    };
	  };
	}

	/**
	 * These actions correspond to the history API.
	 * The associated routerMiddleware will capture these events before they get to
	 * your reducer and reissue them as the matching function on your history.
	 */
	var push = exports.push = updateLocation('push');
	var replace = exports.replace = updateLocation('replace');
	var go = exports.go = updateLocation('go');
	var goBack = exports.goBack = updateLocation('goBack');
	var goForward = exports.goForward = updateLocation('goForward');

	var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = syncHistoryWithStore;

	var _reducer = __webpack_require__(216);

	var defaultSelectLocationState = function defaultSelectLocationState(state) {
	  return state.routing;
	};

	/**
	 * This function synchronizes your history state with the Redux store.
	 * Location changes flow from history to the store. An enhanced history is
	 * returned with a listen method that responds to store updates for location.
	 *
	 * When this history is provided to the router, this means the location data
	 * will flow like this:
	 * history.push -> store.dispatch -> enhancedHistory.listen -> router
	 * This ensures that when the store state changes due to a replay or other
	 * event, the router will be updated appropriately and can transition to the
	 * correct router state.
	 */
	function syncHistoryWithStore(history, store) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
	      _ref$selectLocationSt = _ref.selectLocationState,
	      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
	      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
	      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

	  // Ensure that the reducer is mounted on the store and functioning properly.
	  if (typeof selectLocationState(store.getState()) === 'undefined') {
	    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
	  }

	  var initialLocation = void 0;
	  var isTimeTraveling = void 0;
	  var unsubscribeFromStore = void 0;
	  var unsubscribeFromHistory = void 0;
	  var currentLocation = void 0;

	  // What does the store say about current location?
	  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
	    var locationState = selectLocationState(store.getState());
	    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
	  };

	  // Init initialLocation with potential location in store
	  initialLocation = getLocationInStore();

	  // If the store is replayed, update the URL in the browser to match.
	  if (adjustUrlOnReplay) {
	    var handleStoreChange = function handleStoreChange() {
	      var locationInStore = getLocationInStore(true);
	      if (currentLocation === locationInStore || initialLocation === locationInStore) {
	        return;
	      }

	      // Update address bar to reflect store state
	      isTimeTraveling = true;
	      currentLocation = locationInStore;
	      history.transitionTo(_extends({}, locationInStore, {
	        action: 'PUSH'
	      }));
	      isTimeTraveling = false;
	    };

	    unsubscribeFromStore = store.subscribe(handleStoreChange);
	    handleStoreChange();
	  }

	  // Whenever location changes, dispatch an action to get it in the store
	  var handleLocationChange = function handleLocationChange(location) {
	    // ... unless we just caused that location change
	    if (isTimeTraveling) {
	      return;
	    }

	    // Remember where we are
	    currentLocation = location;

	    // Are we being called for the first time?
	    if (!initialLocation) {
	      // Remember as a fallback in case state is reset
	      initialLocation = location;

	      // Respect persisted location, if any
	      if (getLocationInStore()) {
	        return;
	      }
	    }

	    // Tell the store to update by dispatching an action
	    store.dispatch({
	      type: _reducer.LOCATION_CHANGE,
	      payload: location
	    });
	  };
	  unsubscribeFromHistory = history.listen(handleLocationChange);

	  // support history 3.x
	  if (history.getCurrentLocation) {
	    handleLocationChange(history.getCurrentLocation());
	  }

	  // The enhanced history uses store as source of truth
	  return _extends({}, history, {
	    // The listeners are subscribed to the store instead of history
	    listen: function listen(listener) {
	      // Copy of last location.
	      var lastPublishedLocation = getLocationInStore(true);

	      // Keep track of whether we unsubscribed, as Redux store
	      // only applies changes in subscriptions on next dispatch
	      var unsubscribed = false;
	      var unsubscribeFromStore = store.subscribe(function () {
	        var currentLocation = getLocationInStore(true);
	        if (currentLocation === lastPublishedLocation) {
	          return;
	        }
	        lastPublishedLocation = currentLocation;
	        if (!unsubscribed) {
	          listener(lastPublishedLocation);
	        }
	      });

	      // History listeners expect a synchronous call. Make the first call to the
	      // listener after subscribing to the store, in case the listener causes a
	      // location change (e.g. when it redirects)
	      listener(lastPublishedLocation);

	      // Let user unsubscribe later
	      return function () {
	        unsubscribed = true;
	        unsubscribeFromStore();
	      };
	    },


	    // It also provides a way to destroy internal listeners
	    unsubscribe: function unsubscribe() {
	      if (adjustUrlOnReplay) {
	        unsubscribeFromStore();
	      }
	      unsubscribeFromHistory();
	    }
	  });
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = routerMiddleware;

	var _actions = __webpack_require__(217);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
	 * provided history object. This will prevent these actions from reaching your
	 * reducer or any middleware that comes after this one.
	 */
	function routerMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type !== _actions.CALL_HISTORY_METHOD) {
	          return next(action);
	        }

	        var _action$payload = action.payload,
	            method = _action$payload.method,
	            args = _action$payload.args;

	        history[method].apply(history, _toConsumableArray(args));
	      };
	    };
	  };
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(221);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(224);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(3);

	var _storeShape = __webpack_require__(222);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(223);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	if (false) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(3);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports["default"] = connect;

	var _react = __webpack_require__(3);

	var _storeShape = __webpack_require__(222);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(225);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(226);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(223);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(229);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(195);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (false) {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (false) {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (false) {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (false) {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;


	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (false) {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}

/***/ },
/* 225 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(227);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(228);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(243);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(245);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(246);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(247);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(244);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(229);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(239);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(230),
	    getPrototype = __webpack_require__(236),
	    isObjectLike = __webpack_require__(238);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(231),
	    getRawTag = __webpack_require__(234),
	    objectToString = __webpack_require__(235);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(232);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(233);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 233 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(231);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 235 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(237);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 237 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 238 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(240);


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(242);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(241)(module)))

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 242 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(228);

	var _isPlainObject = __webpack_require__(229);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(244);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (false) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(247);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 247 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(5);


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(227);

	var _reactRedux = __webpack_require__(220);

	var _Header = __webpack_require__(336);

	var _Header2 = _interopRequireDefault(_Header);

	var _MainSection = __webpack_require__(389);

	var _MainSection2 = _interopRequireDefault(_MainSection);

	var _todos = __webpack_require__(397);

	var TodoActions = _interopRequireWildcard(_todos);

	var _style = __webpack_require__(410);

	var _style2 = _interopRequireDefault(_style);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          todos = _props.todos,
	          actions = _props.actions,
	          children = _props.children,
	          classes = _props.sheet.classes;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: classes.normal },
	          _react2.default.createElement(_Header2.default, { addTodo: actions.addTodo }),
	          _react2.default.createElement(_MainSection2.default, { todos: todos, actions: actions }),
	          children
	        )
	      );
	    }
	  }]);
	  return App;
	}(_react.Component)) || _class);


	function mapStateToProps(state) {
	  return {
	    todos: state.todos
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(251), __esModule: true };

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(252);
	module.exports = __webpack_require__(263).Object.getPrototypeOf;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(253)
	  , $getPrototypeOf = __webpack_require__(255);

	__webpack_require__(261)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(254);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 254 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(256)
	  , toObject    = __webpack_require__(253)
	  , IE_PROTO    = __webpack_require__(257)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 256 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(258)('keys')
	  , uid    = __webpack_require__(260);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(259)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 259 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 260 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(262)
	  , core    = __webpack_require__(263)
	  , fails   = __webpack_require__(272);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(259)
	  , core      = __webpack_require__(263)
	  , ctx       = __webpack_require__(264)
	  , hide      = __webpack_require__(266)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 263 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(265);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(267)
	  , createDesc = __webpack_require__(275);
	module.exports = __webpack_require__(271) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(268)
	  , IE8_DOM_DEFINE = __webpack_require__(270)
	  , toPrimitive    = __webpack_require__(274)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(271) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(269);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(271) && !__webpack_require__(272)(function(){
	  return Object.defineProperty(__webpack_require__(273)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(272)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(269)
	  , document = __webpack_require__(259).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(269);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 276 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(278);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(280);
	var $Object = __webpack_require__(263).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(262);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(271), 'Object', {defineProperty: __webpack_require__(267).f});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(282);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(283);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(312);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	__webpack_require__(307);
	module.exports = __webpack_require__(311).f('iterator');

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(286)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(288)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(287)
	  , defined   = __webpack_require__(254);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 287 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(289)
	  , $export        = __webpack_require__(262)
	  , redefine       = __webpack_require__(290)
	  , hide           = __webpack_require__(266)
	  , has            = __webpack_require__(256)
	  , Iterators      = __webpack_require__(291)
	  , $iterCreate    = __webpack_require__(292)
	  , setToStringTag = __webpack_require__(305)
	  , getPrototypeOf = __webpack_require__(255)
	  , ITERATOR       = __webpack_require__(306)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 289 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(266);

/***/ },
/* 291 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(293)
	  , descriptor     = __webpack_require__(275)
	  , setToStringTag = __webpack_require__(305)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(266)(IteratorPrototype, __webpack_require__(306)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(268)
	  , dPs         = __webpack_require__(294)
	  , enumBugKeys = __webpack_require__(303)
	  , IE_PROTO    = __webpack_require__(257)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(273)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(304).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(267)
	  , anObject = __webpack_require__(268)
	  , getKeys  = __webpack_require__(295);

	module.exports = __webpack_require__(271) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(296)
	  , enumBugKeys = __webpack_require__(303);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(256)
	  , toIObject    = __webpack_require__(297)
	  , arrayIndexOf = __webpack_require__(300)(false)
	  , IE_PROTO     = __webpack_require__(257)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(298)
	  , defined = __webpack_require__(254);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(299);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(297)
	  , toLength  = __webpack_require__(301)
	  , toIndex   = __webpack_require__(302);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(287)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(287)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 303 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(259).document && document.documentElement;

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(267).f
	  , has = __webpack_require__(256)
	  , TAG = __webpack_require__(306)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(258)('wks')
	  , uid        = __webpack_require__(260)
	  , Symbol     = __webpack_require__(259).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(308);
	var global        = __webpack_require__(259)
	  , hide          = __webpack_require__(266)
	  , Iterators     = __webpack_require__(291)
	  , TO_STRING_TAG = __webpack_require__(306)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(309)
	  , step             = __webpack_require__(310)
	  , Iterators        = __webpack_require__(291)
	  , toIObject        = __webpack_require__(297);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(288)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(306);

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(313), __esModule: true };

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(314);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	module.exports = __webpack_require__(263).Symbol;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(259)
	  , has            = __webpack_require__(256)
	  , DESCRIPTORS    = __webpack_require__(271)
	  , $export        = __webpack_require__(262)
	  , redefine       = __webpack_require__(290)
	  , META           = __webpack_require__(315).KEY
	  , $fails         = __webpack_require__(272)
	  , shared         = __webpack_require__(258)
	  , setToStringTag = __webpack_require__(305)
	  , uid            = __webpack_require__(260)
	  , wks            = __webpack_require__(306)
	  , wksExt         = __webpack_require__(311)
	  , wksDefine      = __webpack_require__(316)
	  , keyOf          = __webpack_require__(317)
	  , enumKeys       = __webpack_require__(318)
	  , isArray        = __webpack_require__(321)
	  , anObject       = __webpack_require__(268)
	  , toIObject      = __webpack_require__(297)
	  , toPrimitive    = __webpack_require__(274)
	  , createDesc     = __webpack_require__(275)
	  , _create        = __webpack_require__(293)
	  , gOPNExt        = __webpack_require__(322)
	  , $GOPD          = __webpack_require__(324)
	  , $DP            = __webpack_require__(267)
	  , $keys          = __webpack_require__(295)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(323).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(320).f  = $propertyIsEnumerable;
	  __webpack_require__(319).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(289)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(266)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(260)('meta')
	  , isObject = __webpack_require__(269)
	  , has      = __webpack_require__(256)
	  , setDesc  = __webpack_require__(267).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(272)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(259)
	  , core           = __webpack_require__(263)
	  , LIBRARY        = __webpack_require__(289)
	  , wksExt         = __webpack_require__(311)
	  , defineProperty = __webpack_require__(267).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(295)
	  , toIObject = __webpack_require__(297);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(295)
	  , gOPS    = __webpack_require__(319)
	  , pIE     = __webpack_require__(320);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 320 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(299);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(297)
	  , gOPN      = __webpack_require__(323).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(296)
	  , hiddenKeys = __webpack_require__(303).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(320)
	  , createDesc     = __webpack_require__(275)
	  , toIObject      = __webpack_require__(297)
	  , toPrimitive    = __webpack_require__(274)
	  , has            = __webpack_require__(256)
	  , IE8_DOM_DEFINE = __webpack_require__(270)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(271) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 325 */
/***/ function(module, exports) {

	

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316)('asyncIterator');

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316)('observable');

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(329);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(333);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(282);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(330), __esModule: true };

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(331);
	module.exports = __webpack_require__(263).Object.setPrototypeOf;

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(262);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(332).set});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(269)
	  , anObject = __webpack_require__(268);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(264)(Function.call, __webpack_require__(324).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(334), __esModule: true };

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(335);
	var $Object = __webpack_require__(263).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(262)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(293)});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(337);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _style = __webpack_require__(388);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'handleSave',
	    value: function handleSave(text) {
	      if (text.length) {
	        this.props.addTodo(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = this.props.sheet.classes;

	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'h1',
	          { className: classes.h1 },
	          'Todos'
	        ),
	        _react2.default.createElement(_TodoTextInput2.default, {
	          newTodo: true,
	          onSave: this.handleSave.bind(this),
	          placeholder: 'What needs to be done?' })
	      );
	    }
	  }]);
	  return Header;
	}(_react.Component)) || _class);
	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(339);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(340);

	var _style2 = _interopRequireDefault(_style);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoTextInput = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(TodoTextInput, _Component);

	  function TodoTextInput(props, context) {
	    (0, _classCallCheck3.default)(this, TodoTextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (TodoTextInput.__proto__ || (0, _getPrototypeOf2.default)(TodoTextInput)).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (e.which === 13) {
	        this.props.onSave(text);
	        if (this.props.newTodo) {
	          this.setState({ text: '' });
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      var text = e.target.value.trim();
	      if (!this.props.newTodo) {
	        this.props.onSave(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = this.props.sheet.classes;


	      var cls = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, classes.edit, this.props.editing), (0, _defineProperty3.default)(_classnames, classes.new, this.props.newTodo), _classnames));

	      return _react2.default.createElement('input', { className: cls,
	        type: 'text',
	        autoFocus: 'true',
	        placeholder: this.props.placeholder,
	        value: this.state.text,
	        onBlur: this.handleBlur.bind(this),
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	  return TodoTextInput;
	}(_react.Component)) || _class);
	exports.default = TodoTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(278);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _newState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var newState = (_newState = {
	  position: 'relative',
	  margin: 0,
	  width: '100%',
	  fontSize: '24px',
	  fontFamily: 'inherit',
	  fontWeight: 'inherit',
	  lineHeight: '1.4em',
	  border: 0,
	  outline: 'none',
	  color: 'inherit',
	  padding: '6px'
	}, (0, _defineProperty3.default)(_newState, 'border', '1px solid #999'), (0, _defineProperty3.default)(_newState, 'boxShadow', 'inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2)'), (0, _defineProperty3.default)(_newState, 'boxSizing', 'border-box'), (0, _defineProperty3.default)(_newState, 'fontSmoothing', 'antialiased'), _newState);

	exports.default = {

	  'new': (0, _extends3.default)({}, newState, {
	    padding: '16px 16px 16px 60px',
	    border: 'none',
	    background: 'rgba(0, 0, 0, 0.003)',
	    boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)'
	  }),

	  edit: newState,

	  editing: {
	    display: 'block',
	    width: '506px',
	    padding: '13px 17px 12px 17px',
	    margin: '0 0 0 43px'
	  }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(342);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(343), __esModule: true };

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(344);
	module.exports = __webpack_require__(263).Object.assign;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(262);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(345)});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(295)
	  , gOPS     = __webpack_require__(319)
	  , pIE      = __webpack_require__(320)
	  , toObject = __webpack_require__(253)
	  , IObject  = __webpack_require__(298)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(272)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SheetsRegistry = exports.SheetsRegistryProvider = exports.jss = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.create = create;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _jss = __webpack_require__(347);

	var _jssPresetDefault = __webpack_require__(370);

	var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

	var _hoistNonReactStatics = __webpack_require__(195);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _SheetsRegistryProvider = __webpack_require__(387);

	var _SheetsRegistryProvider2 = _interopRequireDefault(_SheetsRegistryProvider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Wrap a Component into a JSS Container Component.
	 *
	 * @param {Jss} jss
	 * @param {Component} WrappedComponent
	 * @param {Object} styles
	 * @param {Object} [options]
	 * @return {Component}
	 */
	function wrap(jss, WrappedComponent, styles) {
	  var _class, _temp;

	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var refs = 0;
	  var sheet = null;

	  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	  if (!options.meta) options.meta = displayName;

	  function attach() {
	    if (!sheet) sheet = jss.createStyleSheet(styles, options);
	    sheet.attach();
	  }

	  function detach() {
	    sheet.detach();
	  }

	  function ref() {
	    if (refs === 0) attach();
	    refs++;
	    return sheet;
	  }

	  function deref() {
	    refs--;
	    if (refs === 0) detach();
	  }

	  return _temp = _class = function (_Component) {
	    _inherits(Jss, _Component);

	    function Jss() {
	      _classCallCheck(this, Jss);

	      return _possibleConstructorReturn(this, (Jss.__proto__ || Object.getPrototypeOf(Jss)).apply(this, arguments));
	    }

	    _createClass(Jss, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.sheet = ref();
	        var jssSheetsRegistry = this.context.jssSheetsRegistry;

	        if (jssSheetsRegistry) jssSheetsRegistry.add(this.sheet);
	      }
	    }, {
	      key: 'componentWillUpdate',
	      value: function componentWillUpdate() {
	        if (false) {
	          // Support React Hot Loader.
	          if (this.sheet !== sheet) {
	            this.sheet.detach();
	            this.sheet = ref();
	          }
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (this.sheet && !sheet && !refs) {
	          this.sheet.detach();
	          var jssSheetsRegistry = this.context.jssSheetsRegistry;

	          if (jssSheetsRegistry) jssSheetsRegistry.remove(this.sheet);
	        } else deref();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, { sheet: this.sheet }));
	      }
	    }]);

	    return Jss;
	  }(_react.Component), _class.wrapped = WrappedComponent, _class.displayName = 'Jss(' + displayName + ')', _class.contextTypes = {
	    jssSheetsRegistry: _react.PropTypes.instanceOf(_jss.SheetsRegistry)
	  }, _temp;
	}

	var Container = function Container(_ref) {
	  var children = _ref.children;
	  return children || null;
	};

	var jss = exports.jss = (0, _jss.create)((0, _jssPresetDefault2['default'])());

	// global index counter to preserve source order.
	var indexCounter = -100000;

	/**
	 * Create a `injectSheet` function that will use the passed JSS instance.
	 *
	 * @param {Jss} jss
	 * @return {Function}
	 * @api public
	 */
	function create() {
	  var localJss = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : jss;

	  return function injectSheet(styles) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (options.index === undefined) {
	      options.index = indexCounter++;
	    }
	    return function () {
	      var WrappedComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Container;

	      var Jss = wrap(localJss, WrappedComponent, styles, options);
	      return (0, _hoistNonReactStatics2['default'])(Jss, WrappedComponent, { wrapped: true });
	    };
	  };
	}

	/**
	 * Exports injectSheet function as default.
	 * Returns a function which needs to be invoked with a Component.
	 *
	 * `injectSheet(styles, [options])(Component)`
	 *
	 * @param {Object} styles
	 * @param {Object} [options]
	 * @return {Function}
	 * @api public
	 */
	exports['default'] = create();
	exports.SheetsRegistryProvider = _SheetsRegistryProvider2['default'];
	exports.SheetsRegistry = _jss.SheetsRegistry;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = exports.sheets = exports.RulesContainer = exports.SheetsRegistry = undefined;

	var _Jss = __webpack_require__(348);

	var _Jss2 = _interopRequireDefault(_Jss);

	var _SheetsRegistry = __webpack_require__(354);

	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

	var _RulesContainer = __webpack_require__(356);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	var _sheets = __webpack_require__(353);

	var _sheets2 = _interopRequireDefault(_sheets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * SheetsRegistry for SSR.
	 */

	/**
	 * A better abstraction over CSS.
	 *
	 * @copyright Oleg Slobodskoi 2014-present
	 * @website https://github.com/cssinjs/jss
	 * @license MIT
	 */
	exports.SheetsRegistry = _SheetsRegistry2['default'];

	/**
	 * RulesContainer for plugins.
	 */

	exports.RulesContainer = _RulesContainer2['default'];

	/**
	 * Default global SheetsRegistry instance.
	 */

	exports.sheets = _sheets2['default'];

	/**
	 * Creates a new instance of Jss.
	 */

	var create = exports.create = function create(options) {
	  return new _Jss2['default'](options);
	};

	/**
	 * A global Jss instance.
	 */
	exports['default'] = create();

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(282);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _StyleSheet = __webpack_require__(349);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	var _PluginsRegistry = __webpack_require__(362);

	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

	var _plugins = __webpack_require__(363);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _sheets = __webpack_require__(353);

	var _sheets2 = _interopRequireDefault(_sheets);

	var _generateClassName = __webpack_require__(368);

	var _generateClassName2 = _interopRequireDefault(_generateClassName);

	var _createRule2 = __webpack_require__(357);

	var _createRule3 = _interopRequireDefault(_createRule2);

	var _findRenderer = __webpack_require__(350);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var Jss = function () {
	  function Jss(options) {
	    (0, _classCallCheck3['default'])(this, Jss);
	    this.version = "6.1.1";
	    this.plugins = new _PluginsRegistry2['default']();

	    this.use.apply(this, _plugins2['default']); // eslint-disable-line prefer-spread
	    this.setup(options);
	  }

	  (0, _createClass3['default'])(Jss, [{
	    key: 'setup',
	    value: function setup() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      this.options = (0, _extends3['default'])({}, options, {
	        generateClassName: options.generateClassName || _generateClassName2['default']
	      });
	      var plugins = this.options.plugins;

	      if (plugins) this.use.apply(this, plugins); // eslint-disable-line prefer-spread
	      return this;
	    }

	    /**
	     * Create a Style Sheet.
	     */

	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(styles, options) {
	      return new _StyleSheet2['default'](styles, (0, _extends3['default'])({
	        jss: this,
	        generateClassName: this.options.generateClassName
	      }, options));
	    }

	    /**
	     * Detach the Style Sheet and remove it from the registry.
	     */

	  }, {
	    key: 'removeStyleSheet',
	    value: function removeStyleSheet(sheet) {
	      sheet.detach();
	      _sheets2['default'].remove(sheet);
	      return this;
	    }

	    /**
	     * Create a rule without a Style Sheet.
	     */

	  }, {
	    key: 'createRule',
	    value: function createRule(name) {
	      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      // Enable rule without name for inline styles.
	      if ((typeof name === 'undefined' ? 'undefined' : (0, _typeof3['default'])(name)) === 'object') {
	        options = style;
	        style = name;
	        name = undefined;
	      }

	      if (!options.classes) options.classes = {};
	      if (!options.jss) options.jss = this;
	      if (!options.Renderer) options.Renderer = (0, _findRenderer2['default'])(options);
	      if (!options.generateClassName) {
	        options.generateClassName = this.options.generateClassName || _generateClassName2['default'];
	      }

	      var rule = (0, _createRule3['default'])(name, style, options);
	      this.plugins.onProcessRule(rule);

	      return rule;
	    }

	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     */

	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;

	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }

	      plugins.forEach(function (plugin) {
	        return _this.plugins.use(plugin);
	      });
	      return this;
	    }
	  }]);
	  return Jss;
	}();

	exports['default'] = Jss;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _findRenderer = __webpack_require__(350);

	var _findRenderer2 = _interopRequireDefault(_findRenderer);

	var _RulesContainer = __webpack_require__(356);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var StyleSheet = function () {
	  function StyleSheet(styles, options) {
	    (0, _classCallCheck3['default'])(this, StyleSheet);

	    var Renderer = (0, _findRenderer2['default'])(options);
	    var index = typeof options.index === 'number' ? options.index : 0;

	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	    this.classes = Object.create(null);
	    this.options = (0, _extends3['default'])({
	      sheet: this,
	      parent: this,
	      classes: this.classes,
	      index: index,
	      Renderer: Renderer
	    }, options);
	    this.renderer = new Renderer(this);
	    this.renderer.createElement();
	    this.rules = new _RulesContainer2['default'](this.options);

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Attach renderable to the render tree.
	   */


	  (0, _createClass3['default'])(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }

	    /**
	     * Remove renderable from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }

	    /**
	     * Add a rule to the current stylesheet.
	     * Will insert a rule also after the stylesheet has been rendered first time.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var queue = this.queue;

	      // Plugins can create rules.
	      // In order to preserve the right order, we need to queue all `.addRule` calls,
	      // which happen after the first `rules.add()` call.

	      if (this.attached && !queue) this.queue = [];

	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);

	      if (this.attached) {
	        if (!this.deployed) return rule;
	        // Don't insert rule directly if there is no stringified version yet.
	        // It will be inserted all together when .attach is called.
	        if (queue) queue.push(rule);else {
	          var renderable = this.renderer.insertRule(rule);
	          if (renderable && this.options.link) rule.renderable = renderable;
	          if (this.queue) {
	            this.queue.forEach(this.renderer.insertRule, this.renderer);
	            this.queue = undefined;
	          }
	        }
	        return rule;
	      }

	      // We can't add rules to a detached style node.
	      // We will redeploy the sheet once user will attach it.
	      this.deployed = false;

	      return rule;
	    }

	    /**
	     * Create and add rules.
	     * Will render also after Style Sheet was rendered the first time.
	     */

	  }, {
	    key: 'addRules',
	    value: function addRules(styles, options) {
	      var added = [];
	      for (var name in styles) {
	        added.push(this.addRule(name, styles[name], options));
	      }
	      return added;
	    }

	    /**
	     * Get a rule by name.
	     */

	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Delete a rule by name.
	     * Returns `true`: if rule has been deleted from the DOM.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(name) {
	      var rule = this.rules.get(name);

	      if (!rule) return false;

	      this.rules.remove(rule);

	      if (this.attached && rule.renderable) {
	        return this.renderer.deleteRule(rule.renderable);
	      }

	      return true;
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Deploy pure CSS string to a renderable.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy(this);
	      this.deployed = true;
	      return this;
	    }

	    /**
	     * Link renderable CSS rules with their corresponding models.
	     */

	  }, {
	    key: 'link',
	    value: function link() {
	      var cssRules = this.renderer.getRules();

	      // Is undefined when VirtualRenderer is used.
	      if (cssRules) {
	        for (var i = 0; i < cssRules.length; i++) {
	          var CSSStyleRule = cssRules[i];
	          var rule = this.rules.get(CSSStyleRule.selectorText);
	          if (rule) rule.renderable = CSSStyleRule;
	        }
	      }
	      this.linked = true;
	      return this;
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.rules.toString(options);
	    }
	  }]);
	  return StyleSheet;
	}();

	exports['default'] = StyleSheet;

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = findRenderer;

	var _isInBrowser = __webpack_require__(351);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _DomRenderer = __webpack_require__(352);

	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

	var _VirtualRenderer = __webpack_require__(355);

	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 */
	function findRenderer() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  if (options.Renderer) return options.Renderer;
	  var useVirtual = options.virtual || !_isInBrowser2['default'];
	  return useVirtual ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
	}

/***/ },
/* 351 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

	exports.default = isBrowser;

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _sheets = __webpack_require__(353);

	var _sheets2 = _interopRequireDefault(_sheets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Get a style property.
	 */
	function getStyle(rule, prop) {
	  try {
	    return rule.style.getPropertyValue(prop);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return '';
	  }
	}

	/**
	 * Set a style property.
	 */
	function setStyle(rule, prop, value) {
	  try {
	    rule.style.setProperty(prop, value);
	  } catch (err) {
	    // IE may throw if property is unknown.
	    return false;
	  }
	  return true;
	}

	/**
	 * Get the selector.
	 */
	function getSelector(rule) {
	  return rule.selectorText;
	}

	/**
	 * Set the selector.
	 */
	function setSelector(rule, selectorText) {
	  rule.selectorText = selectorText;

	  // Return false if setter was not successful.
	  // Currently works in chrome only.
	  return rule.selectorText === selectorText;
	}

	/**
	 * Find attached sheet with an index higher than the passed one.
	 */
	function findHigherSheet(registry, index) {
	  for (var i = 0; i < registry.length; i++) {
	    var sheet = registry[i];
	    if (sheet.attached && sheet.options.index > index) {
	      return sheet;
	    }
	  }
	  return null;
	}

	/**
	 * Find attached sheet with the highest index.
	 */
	function findHighestSheet(registry) {
	  for (var i = registry.length - 1; i >= 0; i--) {
	    var sheet = registry[i];
	    if (sheet.attached) return sheet;
	  }
	  return null;
	}

	/**
	 * Find a comment with "jss" inside.
	 */
	function findCommentNode(head) {
	  for (var i = 0; i < head.childNodes.length; i++) {
	    var node = head.childNodes[i];
	    if (node.nodeType === 8 && node.nodeValue.trim() === 'jss') {
	      return node;
	    }
	  }
	  return null;
	}

	/**
	 * Find a node before which we can insert the sheet.
	 */
	function findPrevNode(head, index) {
	  var registry = _sheets2['default'].registry;


	  if (registry.length > 1) {
	    // Try to insert before the next higher sheet.
	    var sheet = findHigherSheet(registry, index);
	    if (sheet) return sheet.renderer.element;

	    // Otherwise insert after the last attached.
	    sheet = findHighestSheet(registry);
	    if (sheet) return sheet.renderer.element.nextElementSibling;
	  }

	  // Try find a comment placeholder if registry is empty.
	  var comment = findCommentNode(head);
	  if (comment) return comment.nextSibling;
	  return null;
	}

	var DomRenderer = function () {

	  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
	  function DomRenderer(sheet) {
	    (0, _classCallCheck3['default'])(this, DomRenderer);
	    this.getStyle = getStyle;
	    this.setStyle = setStyle;
	    this.setSelector = setSelector;
	    this.getSelector = getSelector;

	    this.sheet = sheet;
	    // There is no sheet when the renderer is used from a standalone RegularRule.
	    if (sheet) _sheets2['default'].add(sheet);
	  }

	  /**
	   * Create and ref style element.
	   */


	  (0, _createClass3['default'])(DomRenderer, [{
	    key: 'createElement',
	    value: function createElement() {
	      var _ref = this.sheet ? this.sheet.options : {},
	          media = _ref.media,
	          meta = _ref.meta,
	          element = _ref.element;

	      this.head = document.head || document.getElementsByTagName('head')[0];
	      this.element = element || document.createElement('style');
	      this.element.type = 'text/css';
	      this.element.setAttribute('data-jss', '');
	      if (media) this.element.setAttribute('media', media);
	      if (meta) this.element.setAttribute('data-meta', meta);
	    }

	    /**
	     * Insert style element into render tree.
	     */

	  }, {
	    key: 'attach',
	    value: function attach() {
	      // In the case the element node is external and it is already in the DOM.
	      if (this.element.parentNode || !this.sheet) return;
	      var prevNode = findPrevNode(this.head, this.sheet.options.index);
	      this.head.insertBefore(this.element, prevNode);
	    }

	    /**
	     * Remove style element from render tree.
	     */

	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }

	    /**
	     * Inject CSS string into element.
	     */

	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      this.element.textContent = '\n' + sheet.toString() + '\n';
	    }

	    /**
	     * Insert a rule into element.
	     */

	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      var sheet = this.element.sheet;
	      var cssRules = sheet.cssRules;

	      var index = cssRules.length;
	      var str = rule.toString();

	      if (!str) return false;

	      try {
	        sheet.insertRule(str, index);
	      } catch (err) {
	        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
	        return false;
	      }

	      return cssRules[index];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'deleteRule',
	    value: function deleteRule(rule) {
	      var sheet = this.element.sheet;
	      var cssRules = sheet.cssRules;

	      for (var index = 0; index < cssRules.length; index++) {
	        if (rule === cssRules[index]) {
	          sheet.deleteRule(index);
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * Get all rules elements.
	     */

	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      return this.element.sheet.cssRules;
	    }
	  }]);
	  return DomRenderer;
	}();

	exports['default'] = DomRenderer;

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SheetsRegistry = __webpack_require__(354);

	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * This is a global sheets registry. Only DomRenderer will add sheets to it.
	 * On the server one should use an own SheetsRegistry instance and add the
	 * sheets to it, because you need to make sure to create a new registry for
	 * each request in order to not leak sheets across requests.
	 */
	exports['default'] = new _SheetsRegistry2['default']();

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Sheets registry to access them all at one place.
	 */
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    (0, _classCallCheck3['default'])(this, SheetsRegistry);
	    this.registry = [];
	  }

	  (0, _createClass3['default'])(SheetsRegistry, [{
	    key: 'add',


	    /**
	     * Register a Style Sheet.
	     */
	    value: function add(sheet) {
	      var registry = this.registry;
	      var index = sheet.options.index;


	      if (!registry.length || index >= registry[registry.length - 1].options.index) {
	        registry.push(sheet);
	        return;
	      }

	      for (var i = 0; i < registry.length; i++) {
	        var options = registry[i].options;

	        if (options.index > index) {
	          registry.splice(i, 0, sheet);
	          return;
	        }
	      }
	    }

	    /**
	     * Reset the registry.
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.registry = [];
	    }

	    /**
	     * Remove a Style Sheet.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(sheet) {
	      var index = this.registry.indexOf(sheet);
	      this.registry.splice(index, 1);
	    }

	    /**
	     * Convert all attached sheets to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.filter(function (sheet) {
	        return sheet.attached;
	      }).map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);
	  return SheetsRegistry;
	}();

	exports['default'] = SheetsRegistry;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/* eslint-disable class-methods-use-this */

	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    (0, _classCallCheck3['default'])(this, VirtualRenderer);
	  }

	  (0, _createClass3['default'])(VirtualRenderer, [{
	    key: 'createElement',
	    value: function createElement() {}
	  }, {
	    key: 'setStyle',
	    value: function setStyle() {
	      return true;
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      return '';
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector() {
	      return true;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector() {
	      return '';
	    }
	  }, {
	    key: 'attach',
	    value: function attach() {}
	  }, {
	    key: 'detach',
	    value: function detach() {}
	  }, {
	    key: 'deploy',
	    value: function deploy() {}
	  }, {
	    key: 'insertRule',
	    value: function insertRule() {
	      return true;
	    }
	  }, {
	    key: 'deleteRule',
	    value: function deleteRule() {
	      return true;
	    }
	  }, {
	    key: 'getRules',
	    value: function getRules() {}
	  }]);
	  return VirtualRenderer;
	}();

	exports['default'] = VirtualRenderer;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _createRule = __webpack_require__(357);

	var _createRule2 = _interopRequireDefault(_createRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Contains rules objects and allows adding/removing etc.
	 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
	 */
	var RulesContainer = function () {
	  // Rules registry for access by .get() method.
	  // It contains the same rule registered by name and by selector.
	  function RulesContainer(options) {
	    (0, _classCallCheck3['default'])(this, RulesContainer);
	    this.map = Object.create(null);
	    this.index = [];

	    this.options = options;
	    this.classes = options.classes;
	  }

	  /**
	   * Create and register rule.
	   *
	   * Will not render after Style Sheet was rendered the first time.
	   */


	  // Used to ensure correct rules order.


	  (0, _createClass3['default'])(RulesContainer, [{
	    key: 'add',
	    value: function add(name, style, options) {
	      var _options = this.options,
	          parent = _options.parent,
	          sheet = _options.sheet,
	          jss = _options.jss,
	          Renderer = _options.Renderer,
	          generateClassName = _options.generateClassName;


	      options = (0, _extends3['default'])({
	        classes: this.classes,
	        parent: parent,
	        sheet: sheet,
	        jss: jss,
	        Renderer: Renderer,
	        generateClassName: generateClassName
	      }, options);

	      if (!options.className) options.className = this.classes[name];

	      var rule = (0, _createRule2['default'])(name, style, options);
	      this.register(rule);

	      var index = options.index === undefined ? this.index.length : options.index;
	      this.index.splice(index, 0, rule);
	      return rule;
	    }

	    /**
	     * Get a rule.
	     */

	  }, {
	    key: 'get',
	    value: function get(name) {
	      return this.map[name];
	    }

	    /**
	     * Delete a rule.
	     */

	  }, {
	    key: 'remove',
	    value: function remove(rule) {
	      this.unregister(rule);
	      this.index.splice(this.indexOf(rule), 1);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.index.indexOf(rule);
	    }

	    /**
	     * Run `onProcessRule()` plugins on every rule.
	     */

	  }, {
	    key: 'process',
	    value: function process() {
	      var plugins = this.options.jss.plugins;
	      // We need to clone array because if we modify the index somewhere else during a loop
	      // we end up with very hard-to-track-down side effects.

	      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
	    }

	    /**
	     * Register a rule in `.map` and `.classes` maps.
	     */

	  }, {
	    key: 'register',
	    value: function register(rule) {
	      if (rule.name) this.map[rule.name] = rule;
	      if (rule.className && rule.name) this.classes[rule.name] = rule.className;
	      if (rule.selector) this.map[rule.selector] = rule;
	    }

	    /**
	     * Unregister a rule.
	     */

	  }, {
	    key: 'unregister',
	    value: function unregister(rule) {
	      delete this.map[rule.name];
	      delete this.map[rule.selector];
	      delete this.classes[rule.name];
	    }

	    /**
	     * Convert rules to a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var str = '';

	      for (var index = 0; index < this.index.length; index++) {
	        var rule = this.index[index];
	        var css = rule.toString(options);

	        // No need to render an empty rule.
	        if (!css) continue;

	        if (str) str += '\n';
	        str += css;
	      }

	      return str;
	    }
	  }]);
	  return RulesContainer;
	}();

	exports['default'] = RulesContainer;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = createRule;

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	var _RegularRule = __webpack_require__(358);

	var _RegularRule2 = _interopRequireDefault(_RegularRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Create a rule instance.
	 */
	function createRule(name) {
	  var decl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var options = arguments[2];
	  var jss = options.jss;

	  if (jss) {
	    var rule = jss.plugins.onCreateRule(name, decl, options);
	    if (rule) return rule;
	  }

	  // It is an at-rule and it has no instance.
	  if (name && name[0] === '@') {
	    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
	  }

	  return new _RegularRule2['default'](name, decl, options);
	}

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(282);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _toCss = __webpack_require__(359);

	var _toCss2 = _interopRequireDefault(_toCss);

	var _toCssValue = __webpack_require__(360);

	var _toCssValue2 = _interopRequireDefault(_toCssValue);

	var _findClassNames = __webpack_require__(361);

	var _findClassNames2 = _interopRequireDefault(_findClassNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var parse = JSON.parse,
	    stringify = JSON.stringify;

	var RegularRule = function () {

	  /**
	   * We expect `style` to be a plain object.
	   * To avoid original style object mutations, we clone it and hash it
	   * along the way.
	   * It is also the fastetst way.
	   * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	   */
	  function RegularRule(name, style, options) {
	    (0, _classCallCheck3['default'])(this, RegularRule);
	    this.type = 'regular';
	    var generateClassName = options.generateClassName,
	        sheet = options.sheet,
	        Renderer = options.Renderer;

	    var styleStr = stringify(style);
	    this.style = parse(styleStr);
	    this.name = name;
	    this.options = options;
	    this.originalStyle = style;
	    this.className = '';
	    if (options.className) this.className = options.className;else if (generateClassName) this.className = generateClassName(styleStr, this, options.sheet);
	    this.selectorText = options.selector || '.' + this.className;
	    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
	  }

	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement
	   * selectorText setter, so this may result in rerendering of entire Style Sheet.
	   */


	  (0, _createClass3['default'])(RegularRule, [{
	    key: 'prop',


	    /**
	     * Get or set a style property.
	     */
	    value: function prop(name, value) {
	      // Its a setter.
	      if (value != null) {
	        this.style[name] = value;
	        // Only defined if option linked is true.
	        if (this.renderable) this.renderer.setStyle(this.renderable, name, value);
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = this.renderer.getStyle(this.renderable, name);
	      }
	      return this.style[name];
	    }

	    /**
	     * Apply rule to an element inline.
	     */

	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      var json = this.toJSON();
	      for (var prop in json) {
	        this.renderer.setStyle(renderable, prop, json[prop]);
	      }return this;
	    }

	    /**
	     * Returns JSON representation of the rule.
	     * Fallbacks are not supported.
	     * Useful as inline style.
	     */

	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var json = Object.create(null);
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3['default'])(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
	      }
	      return json;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _toCss2['default'])(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set(selector) {
	      var sheet = this.options.sheet;

	      // After we modify a selector, ref by old selector needs to be removed.

	      if (sheet) sheet.rules.unregister(this);

	      this.selectorText = selector;
	      this.className = (0, _findClassNames2['default'])(selector);

	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.rules.register(this);
	        return;
	      }

	      var changed = this.renderer.setSelector(this.renderable, selector);

	      if (changed && sheet) {
	        sheet.rules.register(this);
	        return;
	      }

	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      if (sheet) {
	        sheet.rules.register(this);
	        sheet.deploy().link();
	      }
	    }

	    /**
	     * Get selector string.
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.renderer.getSelector(this.renderable);
	      }

	      return this.selectorText;
	    }
	  }]);
	  return RegularRule;
	}();

	exports['default'] = RegularRule;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCss;

	var _toCssValue = __webpack_require__(360);

	var _toCssValue2 = _interopRequireDefault(_toCssValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Indent a string.
	 * http://jsperf.com/array-join-vs-for
	 */
	function indentStr(str, indent) {
	  var result = '';
	  for (var index = 0; index < indent; index++) {
	    result += '  ';
	  }return result + str;
	}

	/**
	 * Converts a Rule to CSS string.
	 */

	function toCss(selector, style) {
	  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  var _options$indent = options.indent,
	      indent = _options$indent === undefined ? 0 : _options$indent;
	  var fallbacks = style.fallbacks;

	  var result = '';

	  indent++;

	  // Apply fallbacks first.
	  if (fallbacks) {
	    // Array syntax {fallbacks: [{prop: value}]}
	    if (Array.isArray(fallbacks)) {
	      for (var index = 0; index < fallbacks.length; index++) {
	        var fallback = fallbacks[index];
	        for (var prop in fallback) {
	          var value = fallback[prop];
	          if (value != null) {
	            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
	          }
	        }
	      }
	    }
	    // Object syntax {fallbacks: {prop: value}}
	    else {
	        for (var _prop in fallbacks) {
	          var _value = fallbacks[_prop];
	          if (_value != null) {
	            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
	          }
	        }
	      }
	  }

	  for (var _prop2 in style) {
	    var _value2 = style[_prop2];
	    if (_value2 != null && _prop2 !== 'fallbacks') {
	      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
	    }
	  }

	  if (!result) return result;

	  indent--;
	  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

	  return result;
	}

/***/ },
/* 360 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toCssValue;
	var joinWithSpace = function joinWithSpace(value) {
	  return value.join(' ');
	};

	/**
	 * Converts array values to string.
	 *
	 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
	 * `border: ['1px', '2px']` > `border: 1px, 2px;`
	 */
	function toCssValue(value) {
	  if (!Array.isArray(value)) return value;

	  // Support space separated values.
	  if (Array.isArray(value[0])) {
	    return toCssValue(value.map(joinWithSpace));
	  }

	  return value.join(', ');
	}

/***/ },
/* 361 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = findClassNames;
	var dotsRegExp = /[.]/g;
	var classesRegExp = /[.][^ ,]+/g;

	/**
	 * Get class names from a selector.
	 */
	function findClassNames(selector) {
	  var classes = selector.match(classesRegExp);

	  if (!classes) return '';

	  return classes.join(' ').replace(dotsRegExp, '');
	}

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    (0, _classCallCheck3['default'])(this, PluginsRegistry);
	    this.creators = [];
	    this.processors = [];
	  }

	  (0, _createClass3['default'])(PluginsRegistry, [{
	    key: 'onCreateRule',


	    /**
	     * Call `onCreateRule` hooks and return an object if returned by a hook.
	     */
	    value: function onCreateRule(name, decl, options) {
	      for (var i = 0; i < this.creators.length; i++) {
	        var rule = this.creators[i](name, decl, options);
	        if (rule) return rule;
	      }
	      return null;
	    }

	    /**
	     * Call `onProcessRule` hooks.
	     */

	  }, {
	    key: 'onProcessRule',
	    value: function onProcessRule(rule) {
	      if (rule.isProcessed) return;
	      for (var i = 0; i < this.processors.length; i++) {
	        this.processors[i](rule, rule.options.sheet);
	      }
	      rule.isProcessed = true;
	    }

	    /**
	     * Register a plugin.
	     * If function is passed, it is a shortcut for `{onProcessRule}`.
	     */

	  }, {
	    key: 'use',
	    value: function use(plugin) {
	      if (typeof plugin === 'function') {
	        this.processors.push(plugin);
	        return;
	      }

	      if (plugin.onCreateRule) this.creators.push(plugin.onCreateRule);
	      if (plugin.onProcessRule) this.processors.push(plugin.onProcessRule);
	    }
	  }]);
	  return PluginsRegistry;
	}();

	exports['default'] = PluginsRegistry;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SimpleRule = __webpack_require__(364);

	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

	var _KeyframeRule = __webpack_require__(365);

	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);

	var _ConditionalRule = __webpack_require__(366);

	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

	var _FontFaceRule = __webpack_require__(367);

	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var classes = {
	  '@charset': _SimpleRule2['default'],
	  '@import': _SimpleRule2['default'],
	  '@namespace': _SimpleRule2['default'],
	  '@keyframes': _KeyframeRule2['default'],
	  '@media': _ConditionalRule2['default'],
	  '@supports': _ConditionalRule2['default'],
	  '@font-face': _FontFaceRule2['default']
	};

	/**
	 * Generate plugins which will register all rules.
	 */
	exports['default'] = Object.keys(classes).map(function (key) {
	  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
	  var re = new RegExp('^' + key);
	  var onCreateRule = function onCreateRule(name, decl, options) {
	    return re.test(name) ? new classes[key](name, decl, options) : null;
	  };
	  return { onCreateRule: onCreateRule };
	});

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var SimpleRule = function () {
	  function SimpleRule(name, value, options) {
	    (0, _classCallCheck3['default'])(this, SimpleRule);
	    this.type = 'simple';

	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  (0, _createClass3['default'])(SimpleRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.value)) {
	        var str = '';
	        for (var index = 0; index < this.value.length; index++) {
	          str += this.name + ' ' + this.value[index] + ';';
	          if (this.value[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return this.name + ' ' + this.value + ';';
	    }
	  }]);
	  return SimpleRule;
	}();

	exports['default'] = SimpleRule;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _createRule = __webpack_require__(357);

	var _createRule2 = _interopRequireDefault(_createRule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var toCssOptions = { indent: 1 };

	var KeyframeRule = function () {
	  function KeyframeRule(selector, frames, options) {
	    (0, _classCallCheck3['default'])(this, KeyframeRule);
	    this.type = 'keyframe';

	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }

	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   */


	  (0, _createClass3['default'])(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = (0, _extends3['default'])({}, this.options, {
	          parent: this,
	          className: name,
	          selector: name
	        });
	        var rule = (0, _createRule2['default'])(name, frames[name], options);
	        options.jss.plugins.onProcessRule(rule);
	        newFrames[name] = rule;
	      }
	      return newFrames;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.frames) {
	        str += this.frames[name].toString(toCssOptions) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	  return KeyframeRule;
	}();

	exports['default'] = KeyframeRule;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _RulesContainer = __webpack_require__(356);

	var _RulesContainer2 = _interopRequireDefault(_RulesContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Conditional rule for @media, @supports
	 */
	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    (0, _classCallCheck3['default'])(this, ConditionalRule);
	    this.type = 'conditional';

	    this.selector = selector;
	    this.options = options;
	    this.rules = new _RulesContainer2['default']((0, _extends3['default'])({}, options, { parent: this }));

	    for (var name in styles) {
	      this.rules.add(name, styles[name]);
	    }

	    this.rules.process();
	  }

	  /**
	   * Get a rule.
	   */


	  (0, _createClass3['default'])(ConditionalRule, [{
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Create and register rule, run plugins.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var rule = this.rules.add(name, style, options);
	      this.options.jss.plugins.onProcessRule(rule);
	      return rule;
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var inner = this.rules.toString({ indent: 1 });
	      return inner ? this.selector + ' {\n' + inner + '\n}' : '';
	    }
	  }]);
	  return ConditionalRule;
	}();

	exports['default'] = ConditionalRule;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _toCss = __webpack_require__(359);

	var _toCss2 = _interopRequireDefault(_toCss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var FontFaceRule = function () {
	  function FontFaceRule(selector, style, options) {
	    (0, _classCallCheck3['default'])(this, FontFaceRule);
	    this.type = 'font-face';

	    this.selector = selector;
	    this.style = style;
	    this.options = options;
	  }

	  /**
	   * Generates a CSS string.
	   */


	  (0, _createClass3['default'])(FontFaceRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _toCss2['default'])(this.selector, this.style[index]);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }

	      return (0, _toCss2['default'])(this.selector, this.style);
	    }
	  }]);
	  return FontFaceRule;
	}();

	exports['default'] = FontFaceRule;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = generateClassName;

	var _murmurhash3_gc = __webpack_require__(369);

	var _murmurhash3_gc2 = _interopRequireDefault(_murmurhash3_gc);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Generates a class name using murmurhash.
	 */
	function generateClassName(str, rule, sheet) {
	  if (sheet && sheet.options.meta) str += sheet.options.meta;

	  var hash = (0, _murmurhash3_gc2['default'])(str);

	  // There is no name if `jss.createRule(style)` was used.
	  return rule.name ? rule.name + '-' + hash : hash;
	}

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
	 * 
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/murmurhash-js
	 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
	 * @see http://sites.google.com/site/murmurhash/
	 * 
	 * @param {string} key ASCII only
	 * @param {number} seed Positive integer only
	 * @return {number} 32-bit positive integer hash 
	 */

	function murmurhash3_32_gc(key, seed) {
		var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
		
		remainder = key.length & 3; // key.length % 4
		bytes = key.length - remainder;
		h1 = seed;
		c1 = 0xcc9e2d51;
		c2 = 0x1b873593;
		i = 0;
		
		while (i < bytes) {
		  	k1 = 
		  	  ((key.charCodeAt(i) & 0xff)) |
		  	  ((key.charCodeAt(++i) & 0xff) << 8) |
		  	  ((key.charCodeAt(++i) & 0xff) << 16) |
		  	  ((key.charCodeAt(++i) & 0xff) << 24);
			++i;
			
			k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

			h1 ^= k1;
	        h1 = (h1 << 13) | (h1 >>> 19);
			h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
			h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
		}
		
		k1 = 0;
		
		switch (remainder) {
			case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
			case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
			case 1: k1 ^= (key.charCodeAt(i) & 0xff);
			
			k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
			k1 = (k1 << 15) | (k1 >>> 17);
			k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
			h1 ^= k1;
		}
		
		h1 ^= key.length;

		h1 ^= h1 >>> 16;
		h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= h1 >>> 13;
		h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
		h1 ^= h1 >>> 16;

		return h1 >>> 0;
	}

	if(true) {
	  module.exports = murmurhash3_32_gc
	}

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jssExtend = __webpack_require__(371);

	var _jssExtend2 = _interopRequireDefault(_jssExtend);

	var _jssNested = __webpack_require__(372);

	var _jssNested2 = _interopRequireDefault(_jssNested);

	var _jssCamelCase = __webpack_require__(373);

	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

	var _jssDefaultUnit = __webpack_require__(374);

	var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

	var _jssVendorPrefixer = __webpack_require__(376);

	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

	var _jssPropsSort = __webpack_require__(382);

	var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);

	var _jssCompose = __webpack_require__(383);

	var _jssCompose2 = _interopRequireDefault(_jssCompose);

	var _jssExpand = __webpack_require__(384);

	var _jssExpand2 = _interopRequireDefault(_jssExpand);

	var _jssGlobal = __webpack_require__(386);

	var _jssGlobal2 = _interopRequireDefault(_jssGlobal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return {
	    plugins: [(0, _jssGlobal2.default)(options.global), (0, _jssExtend2.default)(options.extend), (0, _jssNested2.default)(options.nested), (0, _jssCompose2.default)(options.compose), (0, _jssCamelCase2.default)(options.camelCase), (0, _jssDefaultUnit2.default)(options.defaultUnit), (0, _jssExpand2.default)(options.expand), (0, _jssVendorPrefixer2.default)(options.vendorPrefixer), (0, _jssPropsSort2.default)(options.propsSort)]
	  };
	};

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function isObject(obj) {
	  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
	}

	/**
	 * Recursively extend styles.
	 */
	function extend(rule, newStyle, style) {
	  if (typeof style.extend == 'string') {
	    if (rule.options && rule.options.sheet) {
	      var refRule = rule.options.sheet.getRule(style.extend);
	      if (refRule) {
	        if (refRule === rule) (0, _warning2['default'])(false, '[JSS] A rule tries to extend itself \r\n%s', rule);else extend(rule, newStyle, refRule.originalStyle);
	      }
	    }
	  } else if (Array.isArray(style.extend)) {
	    for (var index = 0; index < style.extend.length; index++) {
	      extend(rule, newStyle, style.extend[index]);
	    }
	  } else {
	    for (var prop in style.extend) {
	      if (prop === 'extend') {
	        extend(rule, newStyle, style.extend.extend);
	      } else if (isObject(style.extend[prop])) {
	        if (!newStyle[prop]) newStyle[prop] = {};
	        extend(rule, newStyle[prop], style.extend[prop]);
	      } else {
	        newStyle[prop] = style.extend[prop];
	      }
	    }
	  }
	  // Copy base style.
	  for (var _prop in style) {
	    if (_prop === 'extend') continue;
	    if (isObject(newStyle[_prop]) && isObject(style[_prop])) {
	      extend(rule, newStyle[_prop], style[_prop]);
	    } else {
	      newStyle[_prop] = style[_prop];
	    }
	  }

	  return newStyle;
	}

	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */

	exports['default'] = function () {
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	};

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = jssNested;

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var separatorRegExp = /\s*,\s*/g;
	var parentRegExp = /&/g;
	var refRegExp = /\$([\w-]+)/g;

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  // Get a function to be used for $ref replacement.
	  function getReplaceRef(container) {
	    return function (match, name) {
	      var rule = container.getRule(name);
	      if (rule) return rule.selector;
	      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s. \r\n%s', name, rule);
	      return name;
	    };
	  }

	  var hasAnd = function hasAnd(str) {
	    return str.indexOf('&') !== -1;
	  };

	  function replaceParentRefs(nestedProp, parentProp) {
	    var parentSelectors = parentProp.split(separatorRegExp);
	    var nestedSelectors = nestedProp.split(separatorRegExp);

	    var result = '';

	    for (var i = 0; i < parentSelectors.length; i++) {
	      var parent = parentSelectors[i];

	      for (var j = 0; j < nestedSelectors.length; j++) {
	        var nested = nestedSelectors[j];
	        if (result) result += ', ';
	        // Replace all & by the parent or prefix & with the parent.
	        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
	      }
	    }

	    return result;
	  }

	  function getOptions(rule, container, options) {
	    // Options has been already created, now we only increase index.
	    if (options) return _extends({}, options, { index: options.index + 1 });

	    var nestingLevel = rule.options.nestingLevel;

	    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

	    return _extends({}, rule.options, {
	      nestingLevel: nestingLevel,
	      index: container.indexOf(rule) + 1
	    });
	  }

	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var container = rule.options.parent;
	    var options = void 0;
	    var replaceRef = void 0;

	    for (var prop in rule.style) {
	      var isNested = hasAnd(prop);
	      var isNestedConditional = prop[0] === '@';

	      if (!isNested && !isNestedConditional) continue;

	      options = getOptions(rule, container, options);

	      if (isNested) {
	        var selector = replaceParentRefs(prop, rule.selector);
	        // Lazily create the ref replacer function just once for
	        // all nested rules within the sheet.
	        if (!replaceRef) replaceRef = getReplaceRef(container);
	        // Replace all $refs.
	        selector = selector.replace(refRegExp, replaceRef);

	        container.addRule(selector, rule.style[prop], _extends({}, options, { selector: selector }));
	      } else if (isNestedConditional) {
	        // Place conditional right after the parent rule to ensure right ordering.
	        container.addRule(prop, _defineProperty({}, rule.name, rule.style[prop]), options);
	      }

	      delete rule.style[prop];
	    }
	  };
	}

/***/ },
/* 373 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regExp = /([A-Z])/g;

	/**
	 * Replace a string passed from String#replace.
	 * @param {String} str
	 * @return {String}
	 */
	function replace(str) {
	  return "-" + str.toLowerCase();
	}

	/**
	 * Convert camel cased property names to dash separated.
	 *
	 * @param {Object} style
	 * @return {Object}
	 */
	function convertCase(style) {
	  var converted = {};

	  for (var prop in style) {
	    var value = style[prop];
	    prop = prop.replace(regExp, replace);
	    converted[prop] = value;
	  }

	  if (style.fallbacks) {
	    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
	  }

	  return converted;
	}

	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 */

	exports["default"] = function () {
	  return function (rule) {
	    var style = rule.style;

	    if (!style) return;

	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }
	      return;
	    }

	    rule.style = convertCase(style);
	  };
	};

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = defaultUnit;

	var _defaultUnits = __webpack_require__(375);

	var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Clones the object and adds a camel cased property version.
	 */
	function addCamelCasedVersion(obj) {
	  var regExp = /(-[a-z])/g;
	  var replace = function replace(str) {
	    return str[1].toUpperCase();
	  };
	  var newObj = {};
	  for (var key in obj) {
	    newObj[key] = obj[key];
	    newObj[key.replace(regExp, replace)] = obj[key];
	  }
	  return newObj;
	}

	var units = addCamelCasedVersion(_defaultUnits2['default']);

	/**
	 * Recursive deep style passing function
	 *
	 * @param {String} current property
	 * @param {(Object|Array|Number|String)} property value
	 * @param {Object} options
	 * @return {(Object|Array|Number|String)} resulting value
	 */
	function iterate(prop, value, options) {
	  if (!value) return value;

	  var convertedValue = value;
	  switch (value.constructor) {
	    case Object:
	      if (prop === 'fallbacks') {
	        for (var innerProp in value) {
	          value[innerProp] = iterate(innerProp, value[innerProp], options);
	        }
	        break;
	      }
	      for (var _innerProp in value) {
	        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
	      }
	      break;
	    case Array:
	      for (var i = 0; i < value.length; i++) {
	        value[i] = iterate(prop, value[i], options);
	      }
	      break;
	    case Number:
	      convertedValue = addUnit(prop, value, options);
	      break;
	    default:
	      break;
	  }

	  return convertedValue;
	}

	/**
	 * Check if default unit must be added
	 *
	 * @param {String} current property
	 * @param {(Object|Array|Number|String)} property value
	 * @param {Object} options
	 * @return {String} string with units
	 */
	function addUnit(prop, value, options) {
	  if (typeof value === 'number' && value !== 0) {
	    value += options[prop] || units[prop] || '';
	  }
	  return value;
	}

	/**
	 * Add unit to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function defaultUnit() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return function (rule) {
	    var style = rule.style,
	        type = rule.type;

	    if (!style || type !== 'regular') return;
	    for (var prop in style) {
	      style[prop] = iterate(prop, style[prop], addCamelCasedVersion(options));
	    }
	  };
	}

/***/ },
/* 375 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Generated jss-default-unit CSS property units
	 * @object
	 */
	exports['default'] = {
	  'animation-delay': 'ms',
	  'animation-duration': 'ms',
	  'background-position': 'px',
	  'background-position-x': 'px',
	  'background-position-y': 'px',
	  'background-size': 'px',
	  border: 'px',
	  'border-bottom': 'px',
	  'border-bottom-left-radius': 'px',
	  'border-bottom-right-radius': 'px',
	  'border-bottom-width': 'px',
	  'border-left': 'px',
	  'border-left-width': 'px',
	  'border-radius': 'px',
	  'border-right': 'px',
	  'border-right-width': 'px',
	  'border-spacing': 'px',
	  'border-top': 'px',
	  'border-top-left-radius': 'px',
	  'border-top-right-radius': 'px',
	  'border-top-width': 'px',
	  'border-width': 'px',
	  'border-after-width': 'px',
	  'border-before-width': 'px',
	  'border-end-width': 'px',
	  'border-horizontal-spacing': 'px',
	  'border-start-width': 'px',
	  'border-vertical-spacing': 'px',
	  bottom: 'px',
	  'box-shadow': 'px',
	  'box-shadow-x': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-y': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-blur': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'box-shadow-spread': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'column-gap': 'px',
	  'column-rule': 'px',
	  'column-rule-width': 'px',
	  'column-width': 'px',
	  'flex-basis': 'px',
	  'font-line-height': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'font-size': 'px',
	  'font-size-delta': 'px',
	  height: 'px',
	  left: 'px',
	  'letter-spacing': 'px',
	  'logical-height': 'px',
	  'logical-width': 'px',
	  margin: 'px',
	  'margin-after': 'px',
	  'margin-before': 'px',
	  'margin-bottom': 'px',
	  'margin-left': 'px',
	  'margin-right': 'px',
	  'margin-top': 'px',
	  'max-height': 'px',
	  'max-width': 'px',
	  'margin-end': 'px',
	  'margin-start': 'px',
	  'mask-position-x': 'px',
	  'mask-position-y': 'px',
	  'mask-size': 'px',
	  'max-logical-height': 'px',
	  'max-logical-width': 'px',
	  'min-height': 'px',
	  'min-width': 'px',
	  'min-logical-height': 'px',
	  'min-logical-width': 'px',
	  motion: 'px',
	  'motion-offset': 'px',
	  outline: 'px',
	  'outline-offset': 'px',
	  'outline-width': 'px',
	  padding: 'px',
	  'padding-bottom': 'px',
	  'padding-left': 'px',
	  'padding-right': 'px',
	  'padding-top': 'px',
	  'padding-after': 'px',
	  'padding-before': 'px',
	  'padding-end': 'px',
	  'padding-start': 'px',
	  'perspective-origin-x': '%',
	  'perspective-origin-y': '%',
	  perspective: 'px',
	  right: 'px',
	  'shape-margin': 'px',
	  size: 'px',
	  'text-indent': 'px',
	  'text-shadow-x': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-shadow-y': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-shadow-blur': 'px', // Not existing property. Used to avoid issues with jss-expand intergration
	  'text-stroke': 'px',
	  'text-stroke-width': 'px',
	  top: 'px',
	  'transform-origin': '%',
	  'transform-origin-x': '%',
	  'transform-origin-y': '%',
	  'transform-origin-z': '%',
	  'transition-delay': 'ms',
	  'transition-duration': 'ms',
	  'vertical-align': 'px',
	  width: 'px',
	  'word-spacing': 'px'
	};

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = jssVendorPrefixer;

	var _cssVendor = __webpack_require__(377);

	var vendor = _interopRequireWildcard(_cssVendor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + rule.selector.substr(1);
	      return;
	    }

	    if (rule.type !== 'regular') return;

	    for (var prop in rule.style) {
	      var value = rule.style[prop];

	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;

	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;

	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

	var _prefix = __webpack_require__(378);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _supportedProperty = __webpack_require__(379);

	var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

	var _supportedValue = __webpack_require__(381);

	var _supportedValue2 = _interopRequireDefault(_supportedValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = {
	  prefix: _prefix2['default'],
	  supportedProperty: _supportedProperty2['default'],
	  supportedValue: _supportedValue2['default']
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */

	exports.prefix = _prefix2['default'];
	exports.supportedProperty = _supportedProperty2['default'];
	exports.supportedValue = _supportedValue2['default'];

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isInBrowser = __webpack_require__(351);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var js = ''; /**
	              * Export javascript style and css style vendor prefixes.
	              * Based on "transform" support test.
	              */

	var css = '';

	// We should not do anything if required serverside.
	if (_isInBrowser2['default']) {
	  // Order matters. We need to check Webkit the last one because
	  // other vendors use to add Webkit prefixes to some properties
	  var jsCssMap = {
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-',
	    Webkit: '-webkit-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';

	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}

	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedProperty;

	var _isInBrowser = __webpack_require__(351);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _prefix = __webpack_require__(378);

	var _prefix2 = _interopRequireDefault(_prefix);

	var _camelize = __webpack_require__(380);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var el = void 0;
	var cache = {};

	if (_isInBrowser2['default']) {
	  el = document.createElement('p');

	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    if (!isNaN(key)) cache[computed[key]] = computed[key];
	  }
	}

	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedProperty(prop) {
	  // For server-side rendering.
	  if (!el) return prop;

	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];

	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2['default'])(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }

	  return cache[prop];
	}

/***/ },
/* 380 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;

	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}

	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedValue;

	var _isInBrowser = __webpack_require__(351);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _prefix = __webpack_require__(378);

	var _prefix2 = _interopRequireDefault(_prefix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var cache = {};
	var el = void 0;

	if (_isInBrowser2['default']) el = document.createElement('p');

	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedValue(property, value) {
	  // For server-side rendering.
	  if (!el) return value;

	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

	  var cacheKey = property + value;

	  if (cache[cacheKey] != null) return cache[cacheKey];

	  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
	  try {
	    // Test value as it is.
	    el.style[property] = value;
	  } catch (err) {
	    cache[cacheKey] = false;
	    return false;
	  }

	  // Value is supported as it is.
	  if (el.style[property] !== '') {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;

	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';

	    el.style[property] = value;

	    // Value is supported with vendor prefix.
	    if (el.style[property] !== '') cache[cacheKey] = value;
	  }

	  if (!cache[cacheKey]) cache[cacheKey] = false;

	  // Reset style value.
	  el.style[property] = '';

	  return cache[cacheKey];
	}

/***/ },
/* 382 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = jssPropsSort;
	/**
	 * Sort props by length.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssPropsSort() {
	  function sort(prop0, prop1) {
	    return prop0.length - prop1.length;
	  }

	  return function (rule) {
	    var style = rule.style,
	        type = rule.type;

	    if (!style || type !== 'regular') return;
	    var newStyle = {};
	    var props = Object.keys(style).sort(sort);
	    for (var prop in props) {
	      newStyle[props[prop]] = style[props[prop]];
	    }
	    rule.style = newStyle;
	  };
	}

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssCompose;

	var _warning = __webpack_require__(158);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Set class name.
	 *
	 * @param {Object} original rule
	 * @param {String} compostion class string
	 * @return {Boolean} flag, indicating function was successfull or not
	 */
	function setClass(rule, composition) {
	  if (composition[0] === '$') {
	    var refRule = rule.options.sheet.getRule(composition.substr(1));

	    if (!refRule) {
	      (0, _warning2.default)(false, '[JSS] Referenced rule is not defined. \r\n%s', rule);
	      return false;
	    }
	    if (refRule === rule) {
	      (0, _warning2.default)(false, '[JSS] Cyclic composition detected. \r\n%s', rule);
	      return false;
	    }
	    setClass(rule, refRule.className);
	    return true;
	  }

	  var container = rule.options.parent;
	  rule.className += ' ' + composition;
	  container.classes[rule.name] = rule.className;
	  return true;
	}

	/**
	 * Convert compose property to additional class, remove property from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssCompose() {
	  return function (rule) {
	    var style = rule.style;


	    if (!style || !style.composes) return;

	    if (Array.isArray(style.composes)) {
	      for (var index = 0; index < style.composes.length; index++) {
	        setClass(rule, style.composes[index]);
	      }
	    } else setClass(rule, style.composes);

	    // Remove composes property to prevent infinite loop.
	    delete style.composes;
	  };
	}

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssExpand;

	var _props = __webpack_require__(385);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Map values by given prop.
	 *
	 * @param {Array} array of values
	 * @param {String} original property
	 * @param {String} original rule
	 * @return {String} mapped values
	 */
	function mapValuesByProp(value, prop, rule) {
	  return value.map(function (item) {
	    return objectToString(item, prop, rule);
	  });
	}

	/**
	 * Convert array to string.
	 *
	 * @param {Array} array of values
	 * @param {String} original property
	 * @param {Object} sheme, for converting arrays in strings
	 * @param {Object} original rule
	 * @return {String} converted string
	 */
	function arrayToString(value, prop, scheme, rule) {
	  if (value.length === 0) return '';
	  if (value[0].constructor === Object) return mapValuesByProp(value, prop, rule);
	  if (scheme[prop] == null) return value.join(',');
	  if (Array.isArray(value[0])) return arrayToString(value[0], prop, scheme);
	  return value.join(' ');
	}

	/**
	 * Convert object to string.
	 *
	 * @param {Object} object of values
	 * @param {String} original property
	 * @param {Object} original rule
	 * @param {Boolean} is fallback prop
	 * @return {String} converted string
	 */
	function objectToString(value, prop, rule, isFallback) {
	  if (!(_props.propObj[prop] || _props.customPropObj[prop])) return '';

	  var result = [];

	  // Check if exists any non-standart property
	  if (_props.customPropObj[prop]) {
	    value = customPropsToStyle(value, rule, _props.customPropObj[prop], isFallback);
	  }

	  // Pass throught all standart props
	  if (Object.keys(value).length) {
	    for (var baseProp in _props.propObj[prop]) {
	      if (value[baseProp]) {
	        if (Array.isArray(value[baseProp])) {
	          result.push(arrayToString(value[baseProp], baseProp, _props.propArrayInObj));
	        } else result.push(value[baseProp]);
	        continue;
	      }

	      // Add default value from props config.
	      if (_props.propObj[prop][baseProp] != null) {
	        result.push(_props.propObj[prop][baseProp]);
	      }
	    }
	  }

	  return result.join(' ');
	}

	/**
	 * Convert custom properties values to styles adding them to rule directly
	 *
	 * @param {Object} object of values
	 * @param {Object} original rule
	 * @param {String} property, that contain partial custom properties
	 * @param {Boolean} is fallback prop
	 * @return {Object} value without custom properties, that was already added to rule
	 */
	function customPropsToStyle(value, rule, customProps, isFallback) {
	  for (var prop in customProps) {
	    var propName = customProps[prop];

	    // If current property doesn't exist already in rule - add new one
	    if (value[prop] && (isFallback || !rule.prop(propName))) {
	      var appendedValue = styleDetector(_defineProperty({}, propName, value[prop]), rule)[propName];

	      // Add style directly in rule
	      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
	    }
	    // Delete converted property to avoid double converting
	    delete value[prop];
	  }

	  return value;
	}

	/**
	 * Detect if a style needs to be converted.
	 *
	 * @param {Object} style
	 * @param {Object} rule
	 * @param {Boolean} is fallback prop
	 * @return {Object} convertedStyle
	 */
	function styleDetector(style, rule, isFallback) {
	  for (var prop in style) {
	    var value = style[prop];

	    if (value.constructor === Object) {
	      if (prop === 'fallbacks') {
	        style[prop] = styleDetector(style[prop], rule, true);
	        continue;
	      }

	      style[prop] = objectToString(value, prop, rule, isFallback);
	      // Avoid creating properties with empty values
	      if (!style[prop]) delete style[prop];
	    }

	    // Check double arrays to avoid recursion.
	    else if (Array.isArray(value) && !Array.isArray(value[0])) {
	        if (prop === 'fallbacks') {
	          for (var index = 0; index < style[prop].length; index++) {
	            style[prop][index] = styleDetector(style[prop][index], rule, true);
	          }
	          continue;
	        }

	        style[prop] = arrayToString(value, prop, _props.propArray);
	        // Avoid creating properties with empty values
	        if (!style[prop]) delete style[prop];
	      }

	      // Maybe a computed value resulting in an empty string
	      else if (style[prop] === '') delete style[prop];
	  }
	  return style;
	}

	/**
	 * Adds possibility to write expanded styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssExpand() {
	  return function (rule) {
	    var style = rule.style;
	    var type = rule.type;

	    if (!style || type !== 'regular') return;

	    if (Array.isArray(style)) {
	      // Pass rules one by one and reformat them
	      for (var index = 0; index < style.length; index++) {
	        style[index] = styleDetector(style[index], rule);
	      }
	      return;
	    }

	    rule.style = styleDetector(style, rule);
	  };
	}

/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * A scheme for converting properties from array to regular style.
	 * All properties listed below will be transformed to a string separated by space.
	 */
	var propArray = exports.propArray = {
	  'background-size': true,
	  'background-position': true,
	  border: true,
	  'border-bottom': true,
	  'border-left': true,
	  'border-top': true,
	  'border-right': true,
	  'border-radius': true,
	  'box-shadow': true,
	  flex: true,
	  margin: true,
	  padding: true,
	  outline: true,
	  'transform-origin': true,
	  transform: true,
	  transition: true
	};

	/**
	 * A scheme for converting arrays to regular styles inside of objects.
	 * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
	 */
	var propArrayInObj = exports.propArrayInObj = {
	  position: true, // background-position
	  size: true // background-size
	};

	/**
	 * A scheme for parsing and building correct styles from passed objects.
	 */
	var propObj = exports.propObj = {
	  padding: {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  },
	  margin: {
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0
	  },
	  background: {
	    attachment: null,
	    color: null,
	    image: null,
	    position: null,
	    repeat: null
	  },
	  border: {
	    width: null,
	    style: null,
	    color: null
	  },
	  'border-top': {
	    width: null,
	    style: null,
	    color: null
	  },
	  'border-right': {
	    width: null,
	    style: null,
	    color: null
	  },
	  'border-bottom': {
	    width: null,
	    style: null,
	    color: null
	  },
	  'border-left': {
	    width: null,
	    style: null,
	    color: null
	  },
	  outline: {
	    width: null,
	    style: null,
	    color: null
	  },
	  'list-style': {
	    type: null,
	    position: null,
	    image: null
	  },
	  transition: {
	    property: null,
	    duration: null,
	    'timing-function': null,
	    timingFunction: null, // Needed for avoiding comilation issues with jss-camel-case
	    delay: null
	  },
	  animation: {
	    name: null,
	    duration: null,
	    'timing-function': null,
	    timingFunction: null, // Needed to avoid compilation issues with jss-camel-case
	    delay: null,
	    'iteration-count': null,
	    iterationCount: null, // Needed to avoid compilation issues with jss-camel-case
	    direction: null,
	    'fill-mode': null,
	    fillMode: null, // Needed to avoid compilation issues with jss-camel-case
	    'play-state': null,
	    playState: null // Needed to avoid compilation issues with jss-camel-case
	  },
	  'box-shadow': {
	    x: 0,
	    y: 0,
	    blur: null,
	    spread: null,
	    color: null,
	    inset: null
	  },
	  'text-shadow': {
	    x: 0,
	    y: 0,
	    blur: null,
	    color: null
	  },
	  flex: {
	    grow: null,
	    shrink: null,
	    basis: null
	  }
	};

	/**
	 * A scheme for converting non-standart properties inside object.
	 * For e.g.: include 'border-radius' property inside 'border' object.
	 */
	var customPropObj = exports.customPropObj = {
	  border: {
	    radius: 'border-radius'
	  },
	  background: {
	    size: 'background-size',
	    image: 'background-image'
	  },
	  font: {
	    style: 'font-style',
	    variant: 'font-variant',
	    weight: 'font-weight',
	    stretch: 'font-stretch',
	    size: 'font-size',
	    family: 'font-family',
	    lineHeight: 'line-height', // Needed to avoid compilation issues with jss-camel-case
	    'line-height': 'line-height'
	  }
	};

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports['default'] = jssGlobal;

	var _jss = __webpack_require__(347);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var key = '@global';
	var prefixKey = '@global ';

	var GlobalContainerRule = function () {
	  function GlobalContainerRule(name, styles, options) {
	    _classCallCheck(this, GlobalContainerRule);

	    this.type = 'global';

	    this.name = name;
	    this.options = options;
	    this.rules = new _jss.RulesContainer(_extends({}, options, {
	      parent: this
	    }));

	    for (var selector in styles) {
	      this.rules.add(selector, styles[selector], {
	        generateClassName: null,
	        selector: selector
	      });
	    }

	    this.rules.process();
	  }

	  /**
	   * Get a rule.
	   */


	  _createClass(GlobalContainerRule, [{
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules.get(name);
	    }

	    /**
	     * Create and register rule, run plugins.
	     */

	  }, {
	    key: 'addRule',
	    value: function addRule(name, style, options) {
	      var rule = this.rules.add(name, style, _extends({}, options, {
	        generateClassName: null
	      }));
	      this.options.jss.plugins.onProcessRule(rule);
	      return rule;
	    }

	    /**
	     * Get index of a rule.
	     */

	  }, {
	    key: 'indexOf',
	    value: function indexOf(rule) {
	      return this.rules.indexOf(rule);
	    }

	    /**
	     * Generates a CSS string.
	     */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.rules.toString();
	    }
	  }]);

	  return GlobalContainerRule;
	}();

	var GlobalPrefixedRule = function () {
	  function GlobalPrefixedRule(name, style, options) {
	    _classCallCheck(this, GlobalPrefixedRule);

	    this.name = name;
	    this.options = options;
	    var selector = name.substr(prefixKey.length);
	    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
	      parent: this,
	      selector: selector,
	      generateClassName: null
	    }));
	  }

	  _createClass(GlobalPrefixedRule, [{
	    key: 'toString',
	    value: function toString(options) {
	      return this.rule.toString(options);
	    }
	  }]);

	  return GlobalPrefixedRule;
	}();

	function handleNestedGlobalContainerRule(rule) {
	  var options = rule.options,
	      style = rule.style;

	  var rules = style[key];

	  if (!rules) return;

	  for (var name in rules) {
	    var selector = rule.selector + ' ' + name;
	    options.sheet.addRule(name, rules[name], _extends({}, options, {
	      selector: selector,
	      generateClassName: null
	    }));
	  }

	  delete style[key];
	}

	function handlePrefixedGlobalRule(rule) {
	  var options = rule.options,
	      style = rule.style;

	  for (var prop in style) {
	    if (prop.substr(0, key.length) !== key) continue;

	    var selector = prop.substr(key.length).trim();
	    var scopedSelector = rule.selector + ' ' + selector;
	    options.sheet.addRule(scopedSelector, style[prop], _extends({}, options, {
	      selector: scopedSelector,
	      generateClassName: null
	    }));
	    delete style[prop];
	  }
	}

	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssGlobal() {
	  function onCreateRule(name, styles, options) {
	    if (name === key) {
	      return new GlobalContainerRule(name, styles, options);
	    }

	    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
	      return new GlobalPrefixedRule(name, styles, options);
	    }

	    var parent = options.parent;


	    if (parent) {
	      if (parent.type === 'global' || parent.options.parent.type === 'global') {
	        options.global = true;
	      }
	    }

	    if (options.global) {
	      options.selector = name;
	      options.generateClassName = null;
	    }

	    return null;
	  }

	  function onProcessRule(rule) {
	    if (rule.type !== 'regular' || !rule.style) return;

	    handleNestedGlobalContainerRule(rule);
	    handlePrefixedGlobalRule(rule);
	  }

	  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
	}

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _jss = __webpack_require__(347);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetsRegistryProvider = function (_Component) {
	  _inherits(SheetsRegistryProvider, _Component);

	  function SheetsRegistryProvider() {
	    _classCallCheck(this, SheetsRegistryProvider);

	    return _possibleConstructorReturn(this, (SheetsRegistryProvider.__proto__ || Object.getPrototypeOf(SheetsRegistryProvider)).apply(this, arguments));
	  }

	  _createClass(SheetsRegistryProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        jssSheetsRegistry: this.props.registry
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return _react.Children.count(children) > 1 ? _react2['default'].createElement(
	        'div',
	        null,
	        children
	      ) : children;
	    }
	  }]);

	  return SheetsRegistryProvider;
	}(_react.Component);

	SheetsRegistryProvider.propTypes = {
	  registry: _react.PropTypes.instanceOf(_jss.SheetsRegistry).isRequired,
	  children: _react.PropTypes.node.isRequired
	};
	SheetsRegistryProvider.childContextTypes = {
	  jssSheetsRegistry: _react.PropTypes.instanceOf(_jss.SheetsRegistry).isRequired
	};
	exports['default'] = SheetsRegistryProvider;

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  h1: {
	    position: 'absolute',
	    top: '-155px',
	    width: '100%',
	    fontSize: '100px',
	    fontWeight: '100',
	    textAlign: 'center',
	    textRendering: 'optimizeLegibility',
	    color: 'rgba(175, 47, 47, 0.15)'
	  }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _TODO_FILTERS, _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TodoItem = __webpack_require__(390);

	var _TodoItem2 = _interopRequireDefault(_TodoItem);

	var _Footer = __webpack_require__(393);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _filters = __webpack_require__(394);

	var _style = __webpack_require__(396);

	var _style2 = _interopRequireDefault(_style);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _classnames = __webpack_require__(339);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TODO_FILTERS = (_TODO_FILTERS = {}, (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ALL, function () {
	  return true;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ACTIVE, function (todo) {
	  return !todo.completed;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_COMPLETED, function (todo) {
	  return todo.completed;
	}), _TODO_FILTERS);

	var MainSection = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(MainSection, _Component);

	  function MainSection(props, context) {
	    (0, _classCallCheck3.default)(this, MainSection);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (MainSection.__proto__ || (0, _getPrototypeOf2.default)(MainSection)).call(this, props, context));

	    _this.state = { filter: _filters.SHOW_ALL };
	    return _this;
	  }

	  (0, _createClass3.default)(MainSection, [{
	    key: 'handleClearCompleted',
	    value: function handleClearCompleted() {
	      var atLeastOneCompleted = this.props.todos.some(function (todo) {
	        return todo.completed;
	      });
	      if (atLeastOneCompleted) {
	        this.props.actions.clearCompleted();
	      }
	    }
	  }, {
	    key: 'handleShow',
	    value: function handleShow(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'renderToggleAll',
	    value: function renderToggleAll(completedCount) {
	      var _props = this.props,
	          todos = _props.todos,
	          actions = _props.actions,
	          classes = _props.sheet.classes;

	      if (todos.length > 0) {
	        return _react2.default.createElement('input', {
	          className: (0, _classnames2.default)(classes.toggleAll, classes.toggleDevice),
	          type: 'checkbox',
	          checked: completedCount === todos.length,
	          onChange: actions.completeAll });
	      }
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter(completedCount) {
	      var todos = this.props.todos;
	      var filter = this.state.filter;

	      var activeCount = todos.length - completedCount;

	      if (todos.length) {
	        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
	          activeCount: activeCount,
	          filter: filter,
	          onClearCompleted: this.handleClearCompleted.bind(this),
	          onShow: this.handleShow.bind(this) });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          todos = _props2.todos,
	          actions = _props2.actions,
	          classes = _props2.sheet.classes;
	      var filter = this.state.filter;


	      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
	      var completedCount = todos.reduce(function (count, todo) {
	        return todo.completed ? count + 1 : count;
	      }, 0);

	      return _react2.default.createElement(
	        'section',
	        { className: classes.main },
	        this.renderToggleAll(completedCount),
	        _react2.default.createElement(
	          'ul',
	          { className: classes.normal },
	          filteredTodos.map(function (todo) {
	            return _react2.default.createElement(_TodoItem2.default, (0, _extends3.default)({ key: todo.id, todo: todo }, actions));
	          })
	        ),
	        this.renderFooter(completedCount)
	      );
	    }
	  }]);
	  return MainSection;
	}(_react.Component)) || _class);
	exports.default = MainSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(337);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	var _classnames4 = __webpack_require__(339);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _style = __webpack_require__(391);

	var _style2 = _interopRequireDefault(_style);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItem = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(TodoItem, _Component);

	  function TodoItem(props, context) {
	    (0, _classCallCheck3.default)(this, TodoItem);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (TodoItem.__proto__ || (0, _getPrototypeOf2.default)(TodoItem)).call(this, props, context));

	    _this.state = {
	      editing: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoItem, [{
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick() {
	      this.setState({ editing: true });
	    }
	  }, {
	    key: 'handleSave',
	    value: function handleSave(id, text) {
	      if (text.length === 0) {
	        this.props.deleteTodo(id);
	      } else {
	        this.props.editTodo({ id: id, text: text });
	      }
	      this.setState({ editing: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this,
	          _classnames3;

	      var _props = this.props,
	          todo = _props.todo,
	          completeTodo = _props.completeTodo,
	          deleteTodo = _props.deleteTodo,
	          classes = _props.sheet.classes;


	      var element = void 0;
	      if (this.state.editing) {
	        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
	          editing: this.state.editing,
	          onSave: function onSave(text) {
	            return _this2.handleSave(todo.id, text);
	          } });
	      } else {
	        element = _react2.default.createElement(
	          'div',
	          { className: (0, _classnames5.default)((0, _defineProperty3.default)({}, classes.hideView, this.state.editing)) },
	          _react2.default.createElement('input', { className: (0, _classnames5.default)(classes.toggle, classes.toggleDevice),
	            type: 'checkbox',
	            checked: todo.completed,
	            onChange: function onChange() {
	              return completeTodo(todo.id);
	            } }),
	          _react2.default.createElement(
	            'label',
	            { className: (0, _classnames5.default)(classes.label, (0, _defineProperty3.default)({}, classes.completedLabel, todo.completed)), onDoubleClick: this.handleDoubleClick.bind(this) },
	            todo.text
	          ),
	          _react2.default.createElement('button', { className: (0, _classnames5.default)(classes.destroy, 'destroy'), onClick: function onClick() {
	              return deleteTodo(todo.id);
	            } })
	        );
	      }

	      // TODO: compose
	      var liClasses = (0, _classnames5.default)(classes.normal, (_classnames3 = {}, (0, _defineProperty3.default)(_classnames3, classes.completed, todo.completed), (0, _defineProperty3.default)(_classnames3, classes.editing, this.state.editing), _classnames3));

	      return _react2.default.createElement(
	        'li',
	        { className: liClasses },
	        element
	      );
	    }
	  }]);
	  return TodoItem;
	}(_react.Component)) || _class);
	exports.default = TodoItem;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style = __webpack_require__(392);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  normal: {
	    position: 'relative',
	    fontSize: '24px',
	    borderBottom: '1px solid #ededed',

	    '&:last-child': {
	      borderBottom: 'none'
	    },

	    '&:hover .destroy': {
	      display: 'block'
	    }
	  },

	  hideView: {
	    display: 'none'
	  },

	  toggle: (0, _extends3.default)({}, _style2.default.formEl, {

	    textAlign: 'center',
	    width: '40px',
	    /* auto, since non-WebKit browsers doesn't support input styling */
	    height: 'auto',
	    position: 'absolute',
	    top: 0,
	    bottom: 0,
	    margin: 'auto 0',
	    border: 'none', /* Mobile Safari */
	    appearance: 'none',
	    '-webkit-appearance': 'none',

	    '&:after': {
	      content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')'
	    },

	    '&:checked:after': {
	      content: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')'
	    }
	  }),

	  label: {
	    whiteSpace: 'pre-line',
	    wordBreak: 'break-all',
	    padding: '15px 60px 15px 15px',
	    marginLeft: '45px',
	    display: 'block',
	    lineHeight: '1.2',
	    transition: 'color 0.4s'
	  },

	  destroy: (0, _extends3.default)({}, _style2.default.button, _style2.default.formEl, {

	    display: 'none',
	    position: 'absolute',
	    top: 0,
	    right: '10px',
	    bottom: 0,
	    width: '40px',
	    height: '40px',
	    margin: 'auto 0',
	    fontSize: '30px',
	    color: '#cc9a9a',
	    marginBottom: '11px',
	    transition: 'color 0.2s ease-out',

	    '&:hover': {
	      color: '#af5b5e'
	    },

	    '&:after': {
	      content: '"×"'
	    }
	  }),

	  editing: {
	    borderBottom: 'none',
	    padding: 0,
	    composes: 'normal',

	    '&:last-child': {
	      marginBottom: '-1px'
	    }
	  },

	  completedLabel: {
	    color: '#d9d9d9',
	    textDecoration: 'line-through'
	  },

	  '@media screen and (-webkit-min-device-pixel-ratio:0)': {
	    toggleDevice: {
	      background: 'none',
	      height: '40px'
	    }
	  }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  button: {
	    margin: 0,
	    padding: 0,
	    border: 0,
	    background: 'none',
	    fontSize: '100%',
	    verticalAlign: 'baseline',
	    fontFamily: 'inherit',
	    fontWeight: 'inherit',
	    color: 'inherit',
	    appearance: 'none',
	    fontSmoothing: 'antialiased'
	  },

	  formEl: {
	    outline: 'none'
	  }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(250);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(276);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(277);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(281);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(328);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _FILTER_TITLES, _dec, _class;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _filters = __webpack_require__(394);

	var _classnames2 = __webpack_require__(339);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactJss = __webpack_require__(346);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _style = __webpack_require__(395);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ALL, 'All'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

	var Footer = (_dec = (0, _reactJss2.default)(_style2.default), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(Footer, _Component);

	  function Footer() {
	    (0, _classCallCheck3.default)(this, Footer);
	    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Footer, [{
	    key: 'renderTodoCount',
	    value: function renderTodoCount() {
	      var _props = this.props,
	          activeCount = _props.activeCount,
	          classes = _props.sheet.classes;

	      var itemWord = activeCount === 1 ? 'item' : 'items';

	      return _react2.default.createElement(
	        'span',
	        { className: classes.count },
	        _react2.default.createElement(
	          'strong',
	          { className: classes.strong },
	          activeCount || 'No'
	        ),
	        ' ',
	        itemWord,
	        ' left'
	      );
	    }
	  }, {
	    key: 'renderFilterLink',
	    value: function renderFilterLink(filter) {
	      var title = FILTER_TITLES[filter];
	      var _props2 = this.props,
	          selectedFilter = _props2.filter,
	          onShow = _props2.onShow,
	          classes = _props2.sheet.classes;


	      return _react2.default.createElement(
	        'a',
	        { className: (0, _classnames3.default)(classes.filterLink, (0, _defineProperty3.default)({}, classes.filterLinkHighlight, filter === selectedFilter)),
	          style: { cursor: 'pointer' },
	          onClick: function onClick() {
	            return onShow(filter);
	          } },
	        title
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      var _props3 = this.props,
	          completedCount = _props3.completedCount,
	          onClearCompleted = _props3.onClearCompleted,
	          classes = _props3.sheet.classes;

	      if (completedCount > 0) {
	        return _react2.default.createElement(
	          'button',
	          { className: classes.clearCompleted, onClick: onClearCompleted },
	          'Clear completed'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var classes = this.props.sheet.classes;

	      return _react2.default.createElement(
	        'footer',
	        { className: (0, _classnames3.default)(classes.normal, classes.smallNormal) },
	        this.renderTodoCount(),
	        _react2.default.createElement(
	          'ul',
	          { className: (0, _classnames3.default)(classes.filters, classes.smallFilters) },
	          [_filters.SHOW_ALL, _filters.SHOW_ACTIVE, _filters.SHOW_COMPLETED].map(function (filter) {
	            return _react2.default.createElement(
	              'li',
	              { className: classes.filtersItem, key: filter },
	              _this2.renderFilterLink(filter)
	            );
	          })
	        ),
	        this.renderClearButton()
	      );
	    }
	  }]);
	  return Footer;
	}(_react.Component)) || _class);
	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SHOW_ALL = exports.SHOW_ALL = 'show_all';
	var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
	var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "filters.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(338);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends3 = __webpack_require__(341);

	var _extends4 = _interopRequireDefault(_extends3);

	var _extends2, _normal$MediaMaxW;

	var _style = __webpack_require__(392);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var filterLinkHighlight = {
	  borderColor: 'rgba(175, 47, 47, 0.1)'
	};

	exports.default = (_normal$MediaMaxW = {
	  normal: {
	    color: '#777',
	    padding: '10px 15px',
	    height: '20px',
	    textAlign: 'center',
	    borderTop: '1px solid #e6e6e6',

	    '&:before': {
	      content: '""',
	      position: 'absolute',
	      right: 0,
	      bottom: 0,
	      left: 0,
	      height: '50px',
	      overflow: 'hidden',
	      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)'
	    }
	  },

	  '@media (max-width: 430px)': {
	    smallNormal: {
	      height: '50px'
	    }
	  },

	  filters: {
	    margin: 0,
	    padding: 0,
	    listStyle: 'none',
	    position: 'absolute',
	    right: 0,
	    left: 0
	  }

	}, (0, _defineProperty3.default)(_normal$MediaMaxW, '@media (max-width: 430px)', {
	  smallFilters: {
	    bottom: '10px'
	  }
	}), (0, _defineProperty3.default)(_normal$MediaMaxW, 'filtersItem', {
	  display: 'inline'
	}), (0, _defineProperty3.default)(_normal$MediaMaxW, 'filterLink', {
	  color: 'inherit',
	  margin: '3px',
	  padding: '3px 7px',
	  textDecoration: 'none',
	  border: '1px solid transparent',
	  borderRadius: '3px',

	  '&:hover': filterLinkHighlight
	}), (0, _defineProperty3.default)(_normal$MediaMaxW, 'filterLinkHighlight', filterLinkHighlight), (0, _defineProperty3.default)(_normal$MediaMaxW, 'count', {
	  float: 'left',
	  textAlign: 'left'
	}), (0, _defineProperty3.default)(_normal$MediaMaxW, 'strong', {
	  fontWeight: 300
	}), (0, _defineProperty3.default)(_normal$MediaMaxW, 'clearCompleted', (0, _extends4.default)({}, _style2.default.button, _style2.default.formEl, (_extends2 = {

	  float: 'right',
	  position: 'relative',
	  lineHeight: '20px',
	  textDecoration: 'none',
	  cursor: 'pointer',
	  visibility: 'hidden'
	}, (0, _defineProperty3.default)(_extends2, 'position', 'relative'), (0, _defineProperty3.default)(_extends2, '&:active', (0, _defineProperty3.default)({
	  float: 'right',
	  position: 'relative',
	  lineHeight: '20px',
	  textDecoration: 'none',
	  cursor: 'pointer',
	  visibility: 'hidden'
	}, 'position', 'relative')), (0, _defineProperty3.default)(_extends2, '&:after', {
	  visibility: 'visible',
	  content: '"Clear completed"',
	  position: 'absolute',
	  right: 0,
	  whiteSpace: 'nowrap'
	}), (0, _defineProperty3.default)(_extends2, '&:hover', {
	  '&:after': {
	    textDecoration: 'underline'
	  }
	}), _extends2))), _normal$MediaMaxW);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style = __webpack_require__(392);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  main: {
	    position: 'relative',
	    zIndex: 2,
	    borderTop: '1px solid #e6e6e6'
	  },

	  normal: {
	    margin: 0,
	    padding: 0,
	    listStyle: 'none'
	  },

	  toggleAll: (0, _extends3.default)({}, _style2.default.formEl, {

	    position: 'absolute',
	    top: '-55px',
	    left: '-12px',
	    width: '60px',
	    height: '34px',
	    textAlign: 'center',
	    border: 'none', /* Mobile Safari */

	    '&:before': {
	      content: '"❯"',
	      fontSize: '22px',
	      color: '#e6e6e6',
	      padding: '10px 27px 10px 27px'
	    },

	    '&:checked:before': {
	      color: '#737373'
	    }
	  }),

	  /*
	    Hack to remove background from Mobile Safari.
	    Can't use it globally since it destroys checkboxes in Firefox
	  */
	  '@media screen and (-webkit-min-device-pixel-ratio:0)': {
	    toggleDevice: {
	      transform: 'rotate(90deg)',
	      appearance: 'none',
	      '-webkit-appearance': 'none'
	    }
	  }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

	var _reduxActions = __webpack_require__(398);

	var addTodo = exports.addTodo = (0, _reduxActions.createAction)('add todo');
	var deleteTodo = exports.deleteTodo = (0, _reduxActions.createAction)('delete todo');
	var editTodo = exports.editTodo = (0, _reduxActions.createAction)('edit todo');
	var completeTodo = exports.completeTodo = (0, _reduxActions.createAction)('complete todo');
	var completeAll = exports.completeAll = (0, _reduxActions.createAction)('complete all');
	var clearCompleted = exports.clearCompleted = (0, _reduxActions.createAction)('clear complete');

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createAction = __webpack_require__(399);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(400);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(407);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };

	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }

	    return action;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleAction;

	var _fluxStandardAction = __webpack_require__(401);

	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;

	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsplainobject = __webpack_require__(402);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var validKeys = ['type', 'payload', 'error', 'meta'];

	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}

	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}

	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(403),
	    isArguments = __webpack_require__(404),
	    keysIn = __webpack_require__(405);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 403 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 404 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(404),
	    isArray = __webpack_require__(406);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 406 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleActions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handleAction = __webpack_require__(400);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(408);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(409);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });

	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}

	module.exports = exports['default'];

/***/ },
/* 408 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = ownKeys;

	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	module.exports = exports['default'];

/***/ },
/* 409 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  normal: {
	    background: '#fff',
	    margin: '200px 0 40px 0',
	    position: 'relative',
	    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)'
	  }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "style.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(227);

	var _middleware = __webpack_require__(412);

	var _reducers = __webpack_require__(414);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof window === 'undefined') var window = {};

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_middleware.logger)(create);

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = undefined;

	var _logger = __webpack_require__(413);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.logger = _logger2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      console.log(action);
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(215);

	var _redux = __webpack_require__(227);

	var _todos = __webpack_require__(415);

	var _todos2 = _interopRequireDefault(_todos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  todos: _todos2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(341);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(416);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _reduxActions = __webpack_require__(398);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = [{
	  text: 'Use Redux',
	  completed: false,
	  id: 0
	}];

	exports.default = (0, _reduxActions.handleActions)({
	  'add todo': function addTodo(state, action) {
	    return [{
	      id: state.reduce(function (maxId, todo) {
	        return Math.max(todo.id, maxId);
	      }, -1) + 1,
	      completed: false,
	      text: action.payload
	    }].concat((0, _toConsumableArray3.default)(state));
	  },
	  'delete todo': function deleteTodo(state, action) {
	    return state.filter(function (todo) {
	      return todo.id !== action.payload;
	    });
	  },
	  'edit todo': function editTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload.id ? (0, _extends3.default)({}, todo, { text: action.payload.text }) : todo;
	    });
	  },
	  'complete todo': function completeTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload ? (0, _extends3.default)({}, todo, { completed: !todo.completed }) : todo;
	    });
	  },
	  'complete all': function completeAll(state, action) {
	    var areAllMarked = state.every(function (todo) {
	      return todo.completed;
	    });
	    return state.map(function (todo) {
	      return (0, _extends3.default)({}, todo, {
	        completed: !areAllMarked
	      });
	    });
	  },
	  'clear complete': function clearComplete(state, action) {
	    return state.filter(function (todo) {
	      return todo.completed === false;
	    });
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/kof/work/projects/kof/cssinjs/react-todomvc-jss/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(417);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(418), __esModule: true };

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	__webpack_require__(419);
	module.exports = __webpack_require__(263).Array.from;

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(264)
	  , $export        = __webpack_require__(262)
	  , toObject       = __webpack_require__(253)
	  , call           = __webpack_require__(420)
	  , isArrayIter    = __webpack_require__(421)
	  , toLength       = __webpack_require__(301)
	  , createProperty = __webpack_require__(422)
	  , getIterFn      = __webpack_require__(423);

	$export($export.S + $export.F * !__webpack_require__(425)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(268);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(291)
	  , ITERATOR   = __webpack_require__(306)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(267)
	  , createDesc      = __webpack_require__(275);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(424)
	  , ITERATOR  = __webpack_require__(306)('iterator')
	  , Iterators = __webpack_require__(291);
	module.exports = __webpack_require__(263).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(299)
	  , TAG = __webpack_require__(306)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(306)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }
]);