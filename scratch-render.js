(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ScratchRender"] = factory();
	else
		root["ScratchRender"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var microee = __webpack_require__(18);

// Implements a subset of Node's stream.Transform - in a cross-platform manner.
function Transform() {}

microee.mixin(Transform);

// The write() signature is different from Node's
// --> makes it much easier to work with objects in logs.
// One of the lessons from v1 was that it's better to target
// a good browser rather than the lowest common denominator
// internally.
// If you want to use external streams, pipe() to ./stringify.js first.
Transform.prototype.write = function(name, level, args) {
  this.emit('item', name, level, args);
};

Transform.prototype.end = function() {
  this.emit('end');
  this.removeAllListeners();
};

Transform.prototype.pipe = function(dest) {
  var s = this;
  // prevent double piping
  s.emit('unpipe', dest);
  // tell the dest that it's being piped to
  dest.emit('pipe', s);

  function onItem() {
    dest.write.apply(dest, Array.prototype.slice.call(arguments));
  }
  function onEnd() { !dest._isStdio && dest.end(); }

  s.on('item', onItem);
  s.on('end', onEnd);

  s.when('unpipe', function(from) {
    var match = (from === dest) || typeof from == 'undefined';
    if(match) {
      s.removeListener('item', onItem);
      s.removeListener('end', onEnd);
      dest.emit('unpipe');
    }
    return match;
  });

  return dest;
};

Transform.prototype.unpipe = function(from) {
  this.emit('unpipe', from);
  return this;
};

Transform.prototype.format = function(dest) {
  throw new Error([
    'Warning: .format() is deprecated in Minilog v2! Use .pipe() instead. For example:',
    'var Minilog = require(\'minilog\');',
    'Minilog',
    '  .pipe(Minilog.backends.console.formatClean)',
    '  .pipe(Minilog.backends.console);'].join('\n'));
};

Transform.mixin = function(dest) {
  var o = Transform.prototype, k;
  for (k in o) {
    o.hasOwnProperty(k) && (dest.prototype[k] = o[k]);
  }
};

module.exports = Transform;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @license twgl.js 4.4.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.copyExistingProperties = copyExistingProperties;
exports.copyNamedProperties = copyNamedProperties;
exports.isBuffer = isBuffer;
exports.isRenderbuffer = isRenderbuffer;
exports.isShader = isShader;
exports.isTexture = isTexture;
exports.isSampler = isSampler;
exports.warn = exports.error = void 0;

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 */
function copyNamedProperties(names, src, dst) {
  names.forEach(function (name) {
    var value = src[name];

    if (value !== undefined) {
      dst[name] = value;
    }
  });
}
/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 */


function copyExistingProperties(src, dst) {
  Object.keys(dst).forEach(function (key) {
    if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      dst[key] = src[key];
    }
  });
}

var error = _globalObject.default.console && _globalObject.default.console.error && typeof _globalObject.default.console.error === "function" ? _globalObject.default.console.error.bind(_globalObject.default.console) : function () {};
exports.error = error;
var warn = _globalObject.default.console && _globalObject.default.console.warn && typeof _globalObject.default.console.warn === "function" ? _globalObject.default.console.warn.bind(_globalObject.default.console) : function () {};
exports.warn = warn;
var repBuffer;

function isBuffer(gl, t) {
  if (!repBuffer) {
    repBuffer = gl.createBuffer();
  }

  return t instanceof repBuffer.constructor;
}

var repRenderbuffer;

function isRenderbuffer(gl, t) {
  if (!repRenderbuffer) {
    repRenderbuffer = gl.createRenderbuffer();
  }

  return t instanceof repRenderbuffer.constructor;
}

var repShader;

function isShader(gl, t) {
  if (!repShader) {
    repShader = gl.createShader(gl.VERTEX_SHADER);
  }

  return t instanceof repShader.constructor;
}

var repTexture;

function isTexture(gl, t) {
  if (!repTexture) {
    repTexture = gl.createTexture();
  }

  return t instanceof repTexture.constructor;
}

var repSampler;

function isSampler(gl, t) {
  if (!repSampler) {
    if (gl.createSampler) {
      repSampler = gl.createSampler();
    } else {
      return false; // it can't be a sampler if this is not WebGL2
    }
  }

  return t instanceof repSampler.constructor;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getGLTypeForTypedArray = getGLTypeForTypedArray;
exports.getGLTypeForTypedArrayType = getGLTypeForTypedArrayType;
exports.getTypedArrayTypeForGLType = getTypedArrayTypeForGLType;
exports.isArrayBuffer = void 0;

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level shader typed array related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.typedArray` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/typedArray
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var glTypeToTypedArray = {};
{
  var tt = glTypeToTypedArray;
  tt[BYTE] = Int8Array;
  tt[UNSIGNED_BYTE] = Uint8Array;
  tt[SHORT] = Int16Array;
  tt[UNSIGNED_SHORT] = Uint16Array;
  tt[INT] = Int32Array;
  tt[UNSIGNED_INT] = Uint32Array;
  tt[FLOAT] = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
  tt[HALF_FLOAT] = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
  tt[UNSIGNED_INT_24_8] = Uint32Array;
}
/**
 * Get the GL type for a typedArray
 * @param {ArrayBuffer|ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */

function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArray instanceof Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArray instanceof Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw "unsupported typed array type";
}
/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferViewType} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */


function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArrayType === Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArrayType === Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArrayType === Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArrayType === Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw "unsupported typed array type";
}
/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */


function getTypedArrayTypeForGLType(type) {
  var CTOR = glTypeToTypedArray[type];

  if (!CTOR) {
    throw "unknown gl type";
  }

  return CTOR;
}

var isArrayBuffer = _globalObject.default.SharedArrayBuffer ? function isArrayBufferOrSharedArrayBuffer(a) {
  return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof _globalObject.default.SharedArrayBuffer);
} : function isArrayBuffer(a) {
  return a && a.buffer && a.buffer instanceof ArrayBuffer;
};
exports.isArrayBuffer = isArrayBuffer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var global = typeof global !== 'undefined' // eslint-disable-line
? global // eslint-disable-line
: typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
exports.default = global;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.add = add;
exports.copy = copy;
exports.create = create;
exports.cross = cross;
exports.distance = distance;
exports.distanceSq = distanceSq;
exports.divide = divide;
exports.divScalar = divScalar;
exports.dot = dot;
exports.lerp = lerp;
exports.length = length;
exports.lengthSq = lengthSq;
exports.mulScalar = mulScalar;
exports.multiply = multiply;
exports.negate = negate;
exports.normalize = normalize;
exports.setDefaultType = setDefaultType;
exports.subtract = subtract;

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v3 = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */
var VecType = Float32Array;
/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */

/**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 */

function setDefaultType(ctor) {
  var oldType = VecType;
  VecType = ctor;
  return oldType;
}
/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @return {Vec3} the created vector
 * @memberOf module:twgl/v3
 */


function create(x, y, z) {
  var dst = new VecType(3);

  if (x) {
    dst[0] = x;
  }

  if (y) {
    dst[1] = y;
  }

  if (z) {
    dst[2] = z;
  }

  return dst;
}
/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function add(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];
  return dst;
}
/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function subtract(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];
  return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * (1 - t) * a + t * b.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @memberOf module:twgl/v3
 */


function lerp(a, b, t, dst) {
  dst = dst || new VecType(3);
  dst[0] = (1 - t) * a[0] + t * b[0];
  dst[1] = (1 - t) * a[1] + t * b[1];
  dst[2] = (1 - t) * a[2] + t * b[2];
  return dst;
}
/**
 * Mutiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */


function mulScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] * k;
  dst[1] = v[1] * k;
  dst[2] = v[2] * k;
  return dst;
}
/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} dst.
 * @memberOf module:twgl/v3
 */


function divScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] / k;
  dst[1] = v[1] / k;
  dst[2] = v[2] / k;
  return dst;
}
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector a cross b.
 * @memberOf module:twgl/v3
 */


function cross(a, b, dst) {
  dst = dst || new VecType(3);
  var t1 = a[2] * b[0] - a[0] * b[2];
  var t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;
  return dst;
}
/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */


function length(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}
/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */


function lengthSq(v) {
  return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */


function distance(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */


function distanceSq(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */


function normalize(a, dst) {
  dst = dst || new VecType(3);
  var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  var len = Math.sqrt(lenSq);

  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}
/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */


function negate(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = -v[0];
  dst[1] = -v[1];
  dst[2] = -v[2];
  return dst;
}
/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */


function copy(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0];
  dst[1] = v[1];
  dst[2] = v[2];
  return dst;
}
/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function multiply(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];
  return dst;
}
/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created..
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function divide(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];
  dst[2] = a[2] / b[2];
  return dst;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isWebGL1 = isWebGL1;
exports.isWebGL2 = isWebGL2;
exports.glEnumToString = void 0;

/*
 * Copyright 2017, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */
function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}
/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */


function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}
/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc`);
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext|Extension} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @memberOf module:twgl
 */


var glEnumToString = function () {
  var haveEnumsForType = {};
  var enums = {};

  function addEnums(gl) {
    var type = gl.constructor.name;

    if (!haveEnumsForType[type]) {
      for (var key in gl) {
        if (typeof gl[key] === 'number') {
          var existing = enums[gl[key]];
          enums[gl[key]] = existing ? "".concat(existing, " | ").concat(key) : key;
        }
      }

      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || "0x" + value.toString(16);
  };
}();

exports.glEnumToString = glEnumToString;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createAttributeSetters = createAttributeSetters;
exports.createProgram = createProgram;
exports.createProgramFromScripts = createProgramFromScripts;
exports.createProgramFromSources = createProgramFromSources;
exports.createProgramInfo = createProgramInfo;
exports.createProgramInfoFromProgram = createProgramInfoFromProgram;
exports.createUniformSetters = createUniformSetters;
exports.createUniformBlockSpecFromProgram = createUniformBlockSpecFromProgram;
exports.createUniformBlockInfoFromProgram = createUniformBlockInfoFromProgram;
exports.createUniformBlockInfo = createUniformBlockInfo;
exports.createTransformFeedback = createTransformFeedback;
exports.createTransformFeedbackInfo = createTransformFeedbackInfo;
exports.bindTransformFeedbackInfo = bindTransformFeedbackInfo;
exports.setAttributes = setAttributes;
exports.setBuffersAndAttributes = setBuffersAndAttributes;
exports.setUniforms = setUniforms;
exports.setUniformBlock = setUniformBlock;
exports.setBlockUniforms = setBlockUniforms;
exports.bindUniformBlock = bindUniformBlock;

var utils = _interopRequireWildcard(__webpack_require__(4));

var helper = _interopRequireWildcard(__webpack_require__(0));

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */
var error = helper.error;
var warn = helper.warn;
var getElementById = _globalObject.default && _globalObject.default.document && _globalObject.default.document.getElementById ? _globalObject.default.document.getElementById.bind(_globalObject.default.document) : function () {
  return null;
};
var FLOAT = 0x1406;
var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT = 0x1404;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var UNSIGNED_INT = 0x1405;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
var TEXTURE_2D = 0x0DE1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806F;
var TEXTURE_2D_ARRAY = 0x8C1A;
var typeMap = {};
/**
 * Returns the corresponding bind point for a given sampler type
 */

function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
} // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)


function floatSetter(gl, location) {
  return function (v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function (v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function (v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function (v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function (v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function (v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  return utils.isWebGL2(gl) ? function (textureOrPair) {
    var texture;
    var sampler;

    if (helper.isTexture(gl, textureOrPair)) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }

    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function (texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  var units = new Int32Array(size);

  for (var ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return utils.isWebGL2(gl) ? function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (textureOrPair, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      var texture;
      var sampler;

      if (helper.isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }

      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (texture, index) {
      gl.activeTexture(gl.TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT] = {
  Type: Float32Array,
  size: 4,
  setter: floatSetter,
  arraySetter: floatArraySetter
};
typeMap[FLOAT_VEC2] = {
  Type: Float32Array,
  size: 8,
  setter: floatVec2Setter
};
typeMap[FLOAT_VEC3] = {
  Type: Float32Array,
  size: 12,
  setter: floatVec3Setter
};
typeMap[FLOAT_VEC4] = {
  Type: Float32Array,
  size: 16,
  setter: floatVec4Setter
};
typeMap[INT] = {
  Type: Int32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[INT_VEC2] = {
  Type: Int32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[INT_VEC3] = {
  Type: Int32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[INT_VEC4] = {
  Type: Int32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[UNSIGNED_INT] = {
  Type: Uint32Array,
  size: 4,
  setter: uintSetter,
  arraySetter: uintArraySetter
};
typeMap[UNSIGNED_INT_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: uintVec2Setter
};
typeMap[UNSIGNED_INT_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: uintVec3Setter
};
typeMap[UNSIGNED_INT_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: uintVec4Setter
};
typeMap[BOOL] = {
  Type: Uint32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[BOOL_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[BOOL_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[BOOL_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[FLOAT_MAT2] = {
  Type: Float32Array,
  size: 16,
  setter: floatMat2Setter
};
typeMap[FLOAT_MAT3] = {
  Type: Float32Array,
  size: 36,
  setter: floatMat3Setter
};
typeMap[FLOAT_MAT4] = {
  Type: Float32Array,
  size: 64,
  setter: floatMat4Setter
};
typeMap[FLOAT_MAT2x3] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat23Setter
};
typeMap[FLOAT_MAT2x4] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat24Setter
};
typeMap[FLOAT_MAT3x2] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat32Setter
};
typeMap[FLOAT_MAT3x4] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat34Setter
};
typeMap[FLOAT_MAT4x2] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat42Setter
};
typeMap[FLOAT_MAT4x3] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat43Setter
};
typeMap[SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[SAMPLER_2D_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_CUBE_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[UNSIGNED_INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[UNSIGNED_INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};

function floatAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || gl.FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);

    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function intAttribSetter(gl, index) {
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    gl.enableVertexAttribArray(index);
    gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || gl.INT, b.stride || 0, b.offset || 0);

    if (b.divisor !== undefined) {
      gl.vertexAttribDivisor(index, b.divisor);
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  var defaultSize = typeInfo.size;
  var count = typeInfo.count;
  return function (b) {
    gl.bindBuffer(gl.ARRAY_BUFFER, b.buffer);
    var numComponents = b.size || b.numComponents || defaultSize;
    var size = numComponents / count;
    var type = b.type || gl.FLOAT;
    var typeInfo = typeMap[type];
    var stride = typeInfo.size * numComponents;
    var normalize = b.normalize || false;
    var offset = b.offset || 0;
    var rowOffset = stride / count;

    for (var i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index + i, b.divisor);
      }
    }
  };
}

var attrTypeMap = {};
attrTypeMap[FLOAT] = {
  size: 4,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC2] = {
  size: 8,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC3] = {
  size: 12,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC4] = {
  size: 16,
  setter: floatAttribSetter
};
attrTypeMap[INT] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[BOOL] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[FLOAT_MAT2] = {
  size: 4,
  setter: matAttribSetter,
  count: 2
};
attrTypeMap[FLOAT_MAT3] = {
  size: 9,
  setter: matAttribSetter,
  count: 3
};
attrTypeMap[FLOAT_MAT4] = {
  size: 16,
  setter: matAttribSetter,
  count: 4
}; // make sure we don't see a global gl

var gl = undefined; // eslint-disable-line

/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */

function addLineNumbers(src, lineOffset) {
  lineOffset = lineOffset || 0;
  ++lineOffset;
  return src.split("\n").map(function (line, ndx) {
    return ndx + lineOffset + ": " + line;
  }).join("\n");
}

var spaceRE = /^[ \t]*\n/;
/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
 * @return {WebGLShader} The created shader.
 */

function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
  var errFn = opt_errorCallback || error; // Create the shader object

  var shader = gl.createShader(shaderType); // Remove the first end of line because WebGL 2.0 requires
  // #version 300 es
  // as the first line. No whitespace allowed before that line
  // so
  //
  // <script>
  // #version 300 es
  // </script>
  //
  // Has one line before it which is invalid according to GLSL ES 3.00
  //

  var lineOffset = 0;

  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  } // Load the shader source


  gl.shaderSource(shader, shaderSource); // Compile the shader

  gl.compileShader(shader); // Check the compile status

  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    errFn(addLineNumbers(shaderSource, lineOffset) + "\n*** Error compiling shader: " + lastError);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments pased on
 */


function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  var transformFeedbackVaryings;

  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }

  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    // If we have an errorCallback we can just return this object
    // Otherwise we need to construct one with default errorCallback
    if (opt_attribs.errorCallback) {
      return opt_attribs;
    }

    var opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
  }

  var options = {
    errorCallback: opt_errorCallback || error,
    transformFeedbackVaryings: transformFeedbackVaryings
  };

  if (opt_attribs) {
    var attribLocations = {};

    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function (attrib, ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs;
    }

    options.attribLocations = attribLocations;
  }

  return options;
}

var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

function getShaderTypeFromScriptType(scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return gl.FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return gl.VERTEX_SHADER;
  }

  return undefined;
}

function deleteShaders(gl, shaders) {
  shaders.forEach(function (shader) {
    gl.deleteShader(shader);
  });
}
/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program and calls useProgram.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var realShaders = [];
  var newShaders = [];

  for (var ndx = 0; ndx < shaders.length; ++ndx) {
    var shader = shaders[ndx];

    if (typeof shader === 'string') {
      var elem = getElementById(shader);
      var src = elem ? elem.text : shader;
      var type = gl[defaultShaderType[ndx]];

      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(elem.type) || type;
      }

      shader = loadShader(gl, src, type, progOptions.errorCallback);
      newShaders.push(shader);
    }

    if (helper.isShader(gl, shader)) {
      realShaders.push(shader);
    }
  }

  if (realShaders.length !== shaders.length) {
    progOptions.errorCallback("not enough shaders for program");
    deleteShaders(gl, newShaders);
    return null;
  }

  var program = gl.createProgram();
  realShaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });

  if (progOptions.attribLocations) {
    Object.keys(progOptions.attribLocations).forEach(function (attrib) {
      gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
  }

  var varyings = progOptions.transformFeedbackVaryings;

  if (varyings) {
    if (varyings.attribs) {
      varyings = varyings.attribs;
    }

    if (!Array.isArray(varyings)) {
      varyings = Object.keys(varyings);
    }

    gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || gl.SEPARATE_ATTRIBS);
  }

  gl.linkProgram(program); // Check the link status

  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program);
    progOptions.errorCallback("Error in program linking:" + lastError);
    gl.deleteProgram(program);
    deleteShaders(gl, newShaders);
    return null;
  }

  return program;
}
/**
 * Loads a shader from a script tag.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} scriptId The id of the script tag.
 * @param {number} [opt_shaderType] The type of shader. If not passed in it will
 *     be derived from the type of the script tag.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
 * @return {WebGLShader?} The created shader or null if error.
 */


function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
  var shaderSource = "";
  var shaderScript = getElementById(scriptId);

  if (!shaderScript) {
    throw "*** Error: unknown script element" + scriptId;
  }

  shaderSource = shaderScript.text;
  var shaderType = opt_shaderType || getShaderTypeFromScriptType(shaderScript.type);

  if (!shaderType) {
    throw "*** Error: unknown shader type";
  }

  return loadShader(gl, shaderSource, shaderType, opt_errorCallback);
}
/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */


function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
    var shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {string[]} [opt_attribs] An array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram} The created program.
 * @memberOf module:twgl/programs
 */


function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderSources.length; ++ii) {
    var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 */


function isBuiltIn(info) {
  var name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}
/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */


function createUniformSetters(gl, program) {
  var textureUnit = 0;
  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */

  function createUniformSetter(program, uniformInfo) {
    var location = gl.getUniformLocation(program, uniformInfo.name);
    var isArray = uniformInfo.size > 1 && uniformInfo.name.substr(-3) === "[0]";
    var type = uniformInfo.type;
    var typeInfo = typeMap[type];

    if (!typeInfo) {
      throw "unknown type: 0x" + type.toString(16); // we should never get here.
    }

    var setter;

    if (typeInfo.bindPoint) {
      // it's a sampler
      var unit = textureUnit;
      textureUnit += uniformInfo.size;

      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }

    setter.location = location;
    return setter;
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (var ii = 0; ii < numUniforms; ++ii) {
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      continue;
    }

    var name = uniformInfo.name; // remove the array suffix.

    if (name.substr(-3) === "[0]") {
      name = name.substr(0, name.length - 3);
    }

    var setter = createUniformSetter(program, uniformInfo);
    uniformSetters[name] = setter;
  }

  return uniformSetters;
}
/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bind/unbindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */


function createTransformFeedbackInfo(gl, program) {
  var info = {};
  var numVaryings = gl.getProgramParameter(program, gl.TRANSFORM_FEEDBACK_VARYINGS);

  for (var ii = 0; ii < numVaryings; ++ii) {
    var varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size
    };
  }

  return info;
}
/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */


function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }

  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }

  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];

    if (varying) {
      var buf = bufferInfo[name];

      if (buf.offset) {
        gl.bindBufferRange(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
      } else {
        gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
      }
    }
  }
}
/**
 * Unbinds buffers afetr transform feedback.
 *
 * Buffers can not be bound to 2 bind points so if you try to bind a buffer used
 * in a transform feedback as an ARRAY_BUFFER for an attribute it will fail.
 *
 * This function unbinds all buffers that were bound with {@link module:twgl.bindTransformFeedbackInfo}.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 */


function unbindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }

  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }

  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];

    if (varying) {
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, varying.index, null);
    }
  }
}
/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */


function createTransformFeedback(gl, programInfo, bufferInfo) {
  var tf = gl.createTransformFeedback();
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
  gl.useProgram(programInfo.program);
  bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null); // This is only needed because of a bug in Chrome 56. Will remove
  // when chrome fixes it.

  unbindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  return tf;
}
/**
 * @typedef {Object} UniformData
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanitory
 * @property {bool} usedByFragmentShader Self explanitory
 * @property {bool} used Self explanitory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */


function createUniformBlockSpecFromProgram(gl, program) {
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  var uniformData = [];
  var uniformIndices = [];

  for (var ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      break;
    } // REMOVE [0]?


    uniformData[ii].name = uniformInfo.name;
  }

  [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
  ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
    var pname = pair[0];
    var key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
      uniformData[ndx][key] = value;
    });
  });
  var blockSpecs = {};
  var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

  for (var _ii = 0; _ii < numUniformBlocks; ++_ii) {
    var name = gl.getActiveUniformBlockName(program, _ii);
    var blockSpec = {
      index: _ii,
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, _ii, gl.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
    };
    blockSpec.used = blockSpec.usedByVertexSahder || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData
  };
}

var arraySuffixRE = /\[\d+\]\.$/; // better way to check?

/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object.<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @memberOf module:twgl
 */

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uinformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */

function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
  var blockSpecs = uniformBlockSpec.blockSpecs;
  var uniformData = uniformBlockSpec.uniformData;
  var blockSpec = blockSpecs[blockName];

  if (!blockSpec) {
    warn("no uniform block object named:", blockName);
    return {
      name: blockName,
      uniforms: {}
    };
  }

  var array = new ArrayBuffer(blockSpec.size);
  var buffer = gl.createBuffer();
  var uniformBufferIndex = blockSpec.index;
  gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
  gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
  var prefix = blockName + ".";

  if (arraySuffixRE.test(prefix)) {
    prefix = prefix.replace(arraySuffixRE, ".");
  }

  var uniforms = {};
  blockSpec.uniformIndices.forEach(function (uniformNdx) {
    var data = uniformData[uniformNdx];
    var typeInfo = typeMap[data.type];
    var Type = typeInfo.Type;
    var length = data.size * typeInfo.size;
    var name = data.name;

    if (name.substr(0, prefix.length) === prefix) {
      name = name.substr(prefix.length);
    }

    uniforms[name] = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
  });
  return {
    name: blockName,
    array: array,
    asFloat: new Float32Array(array),
    // for debugging
    buffer: buffer,
    uniforms: uniforms
  };
}
/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */


function createUniformBlockInfo(gl, programInfo, blockName) {
  return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}
/**
 * Binds a unform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the valus into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */


function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
  var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
  var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];

  if (blockSpec) {
    var bufferBindIndex = blockSpec.index;
    gl.bindBufferRange(gl.UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
    return true;
  }

  return false;
}
/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */


function setUniformBlock(gl, programInfo, uniformBlockInfo) {
  if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
    gl.bufferData(gl.UNIFORM_BUFFER, uniformBlockInfo.array, gl.DYNAMIC_DRAW);
  }
}
/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */


function setBlockUniforms(uniformBlockInfo, values) {
  var uniforms = uniformBlockInfo.uniforms;

  for (var name in values) {
    var array = uniforms[name];

    if (array) {
      var value = values[name];

      if (value.length) {
        array.set(value);
      } else {
        array[0] = value;
      }
    }
  }
}
/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 * @memberOf module:twgl/programs
 */


function setUniforms(setters, values) {
  // eslint-disable-line
  var actualSetters = setters.uniformSetters || setters;
  var numArgs = arguments.length;

  for (var andx = 1; andx < numArgs; ++andx) {
    var vals = arguments[andx];

    if (Array.isArray(vals)) {
      var numValues = vals.length;

      for (var ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, vals[ii]);
      }
    } else {
      for (var name in vals) {
        var setter = actualSetters[name];

        if (setter) {
          setter(vals[name]);
        }
      }
    }
  }
}
/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */


function createAttributeSetters(gl, program) {
  var attribSetters = {};
  var numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

  for (var ii = 0; ii < numAttribs; ++ii) {
    var attribInfo = gl.getActiveAttrib(program, ii);

    if (isBuiltIn(attribInfo)) {
      continue;
    }

    var index = gl.getAttribLocation(program, attribInfo.name);
    var typeInfo = attrTypeMap[attribInfo.type];
    var setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}
/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 */


function setAttributes(setters, buffers) {
  for (var name in buffers) {
    var setter = setters[name];

    if (setter) {
      setter(buffers[name]);
    }
  }
}
/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivilent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgrmaInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.vertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */


function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);

    if (buffers.indices) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
  }
}
/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @propetty {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */


function createProgramInfoFromProgram(gl, program) {
  var uniformSetters = createUniformSetters(gl, program);
  var attribSetters = createAttributeSetters(gl, program);
  var programInfo = {
    program: program,
    uniformSetters: uniformSetters,
    attribSetters: attribSetters
  };

  if (utils.isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}
/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the attributes. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */


function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var good = true;
  shaderSources = shaderSources.map(function (source) {
    // Lets assume if there is no \n it's an id
    if (source.indexOf("\n") < 0) {
      var script = getElementById(source);

      if (!script) {
        progOptions.errorCallback("no element with id: " + source);
        good = false;
      } else {
        source = script.text;
      }
    }

    return source;
  });

  if (!good) {
    return null;
  }

  var program = createProgramFromSources(gl, shaderSources, progOptions);

  if (!program) {
    return null;
  }

  return createProgramInfoFromProgram(gl, program);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.axisRotate = axisRotate;
exports.axisRotation = axisRotation;
exports.copy = copy;
exports.frustum = frustum;
exports.getAxis = getAxis;
exports.getTranslation = getTranslation;
exports.identity = identity;
exports.inverse = inverse;
exports.lookAt = lookAt;
exports.multiply = multiply;
exports.negate = negate;
exports.ortho = ortho;
exports.perspective = perspective;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotationX = rotationX;
exports.rotationY = rotationY;
exports.rotationZ = rotationZ;
exports.scale = scale;
exports.scaling = scaling;
exports.setAxis = setAxis;
exports.setDefaultType = setDefaultType;
exports.setTranslation = setTranslation;
exports.transformDirection = transformDirection;
exports.transformNormal = transformNormal;
exports.transformPoint = transformPoint;
exports.translate = translate;
exports.translation = translation;
exports.transpose = transpose;

var v3 = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */
var MatType = Float32Array;
var tempV3a = v3.create();
var tempV3b = v3.create();
var tempV3c = v3.create();
/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 */

function setDefaultType(ctor) {
  var oldType = MatType;
  MatType = ctor;
  return oldType;
}
/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */


function negate(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = -m[0];
  dst[1] = -m[1];
  dst[2] = -m[2];
  dst[3] = -m[3];
  dst[4] = -m[4];
  dst[5] = -m[5];
  dst[6] = -m[6];
  dst[7] = -m[7];
  dst[8] = -m[8];
  dst[9] = -m[9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];
  return dst;
}
/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */


function copy(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = m[0];
  dst[1] = m[1];
  dst[2] = m[2];
  dst[3] = m[3];
  dst[4] = m[4];
  dst[5] = m[5];
  dst[6] = m[6];
  dst[7] = m[7];
  dst[8] = m[8];
  dst[9] = m[9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];
  return dst;
}
/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */


function identity(dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */


function transpose(m, dst) {
  dst = dst || new MatType(16);

  if (dst === m) {
    var t;
    t = m[1];
    m[1] = m[4];
    m[4] = t;
    t = m[2];
    m[2] = m[8];
    m[8] = t;
    t = m[3];
    m[3] = m[12];
    m[12] = t;
    t = m[6];
    m[6] = m[9];
    m[9] = t;
    t = m[7];
    m[7] = m[13];
    m[13] = t;
    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  dst[0] = m00;
  dst[1] = m10;
  dst[2] = m20;
  dst[3] = m30;
  dst[4] = m01;
  dst[5] = m11;
  dst[6] = m21;
  dst[7] = m31;
  dst[8] = m02;
  dst[9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;
  return dst;
}
/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */


function inverse(m, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  var tmp_0 = m22 * m33;
  var tmp_1 = m32 * m23;
  var tmp_2 = m12 * m33;
  var tmp_3 = m32 * m13;
  var tmp_4 = m12 * m23;
  var tmp_5 = m22 * m13;
  var tmp_6 = m02 * m33;
  var tmp_7 = m32 * m03;
  var tmp_8 = m02 * m23;
  var tmp_9 = m22 * m03;
  var tmp_10 = m02 * m13;
  var tmp_11 = m12 * m03;
  var tmp_12 = m20 * m31;
  var tmp_13 = m30 * m21;
  var tmp_14 = m10 * m31;
  var tmp_15 = m30 * m11;
  var tmp_16 = m10 * m21;
  var tmp_17 = m20 * m11;
  var tmp_18 = m00 * m31;
  var tmp_19 = m30 * m01;
  var tmp_20 = m00 * m21;
  var tmp_21 = m20 * m01;
  var tmp_22 = m00 * m11;
  var tmp_23 = m10 * m01;
  var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
  var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  dst[0] = d * t0;
  dst[1] = d * t1;
  dst[2] = d * t2;
  dst[3] = d * t3;
  dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
  return dst;
}
/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */


function multiply(a, b, dst) {
  dst = dst || new MatType(16);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4 + 0];
  var a11 = a[4 + 1];
  var a12 = a[4 + 2];
  var a13 = a[4 + 3];
  var a20 = a[8 + 0];
  var a21 = a[8 + 1];
  var a22 = a[8 + 2];
  var a23 = a[8 + 3];
  var a30 = a[12 + 0];
  var a31 = a[12 + 1];
  var a32 = a[12 + 2];
  var a33 = a[12 + 3];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b03 = b[3];
  var b10 = b[4 + 0];
  var b11 = b[4 + 1];
  var b12 = b[4 + 2];
  var b13 = b[4 + 3];
  var b20 = b[8 + 0];
  var b21 = b[8 + 1];
  var b22 = b[8 + 2];
  var b23 = b[8 + 3];
  var b30 = b[12 + 0];
  var b31 = b[12 + 1];
  var b32 = b[12 + 2];
  var b33 = b[12 + 3];
  dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
  return dst;
}
/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} a once modified.
 * @memberOf module:twgl/m4
 */


function setTranslation(a, v, dst) {
  dst = dst || identity();

  if (a !== dst) {
    dst[0] = a[0];
    dst[1] = a[1];
    dst[2] = a[2];
    dst[3] = a[3];
    dst[4] = a[4];
    dst[5] = a[5];
    dst[6] = a[6];
    dst[7] = a[7];
    dst[8] = a[8];
    dst[9] = a[9];
    dst[10] = a[10];
    dst[11] = a[11];
  }

  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} [dst] vector..
 * @return {Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */


function getTranslation(m, dst) {
  dst = dst || v3.create();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}
/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {Vec3} [dst] vector.
 * @return {Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */


function getAxis(m, axis, dst) {
  dst = dst || v3.create();
  var off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}
/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If none a new one is created
 * @return {module:twgl/m4.Mat4} dst
 * @memberOf module:twgl/m4
 */


function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy(a, dst);
  }

  var off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);
  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);
  dst[0] = f / aspect;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = f;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 othogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  dst[0] = 2 / (right - left);
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 / (top - bottom);
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;
  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */


function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  var dx = right - left;
  var dy = top - bottom;
  var dz = near - far;
  dst[0] = 2 * near / dx;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 * near / dy;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = (left + right) / dx;
  dst[9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {Vec3} eye The position of the eye.
 * @param {Vec3} target The position meant to be viewed.
 * @param {Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */


function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);
  var xAxis = tempV3a;
  var yAxis = tempV3b;
  var zAxis = tempV3c;
  v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
  v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
  v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);
  dst[0] = xAxis[0];
  dst[1] = xAxis[1];
  dst[2] = xAxis[2];
  dst[3] = 0;
  dst[4] = yAxis[0];
  dst[5] = yAxis[1];
  dst[6] = yAxis[2];
  dst[7] = 0;
  dst[8] = zAxis[0];
  dst[9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */


function translation(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by translation by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function translate(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[0] = m00;
    dst[1] = m01;
    dst[2] = m02;
    dst[3] = m03;
    dst[4] = m10;
    dst[5] = m11;
    dst[6] = m12;
    dst[7] = m13;
    dst[8] = m20;
    dst[9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = c;
  dst[6] = s;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[4] = c * m10 + s * m20;
  dst[5] = c * m11 + s * m21;
  dst[6] = c * m12 + s * m22;
  dst[7] = c * m13 + s * m23;
  dst[8] = c * m20 - s * m10;
  dst[9] = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = 0;
  dst[2] = -s;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = s;
  dst[9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 - s * m20;
  dst[1] = c * m01 - s * m21;
  dst[2] = c * m02 - s * m22;
  dst[3] = c * m03 - s * m23;
  dst[8] = c * m20 + s * m00;
  dst[9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = s;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = -s;
  dst[5] = c;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by a rotation around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 + s * m10;
  dst[1] = c * m01 + s * m11;
  dst[2] = c * m02 + s * m12;
  dst[3] = c * m03 + s * m13;
  dst[4] = c * m10 - s * m00;
  dst[5] = c * m11 - s * m01;
  dst[6] = c * m12 - s * m02;
  dst[7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */


function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  dst[0] = xx + (1 - xx) * c;
  dst[1] = x * y * oneMinusCosine + z * s;
  dst[2] = x * z * oneMinusCosine - y * s;
  dst[3] = 0;
  dst[4] = x * y * oneMinusCosine - z * s;
  dst[5] = yy + (1 - yy) * c;
  dst[6] = y * z * oneMinusCosine + x * s;
  dst[7] = 0;
  dst[8] = x * z * oneMinusCosine + y * s;
  dst[9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix by rotation around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  var r00 = xx + (1 - xx) * c;
  var r01 = x * y * oneMinusCosine + z * s;
  var r02 = x * z * oneMinusCosine - y * s;
  var r10 = x * y * oneMinusCosine - z * s;
  var r11 = yy + (1 - yy) * c;
  var r12 = y * z * oneMinusCosine + x * s;
  var r20 = x * z * oneMinusCosine + y * s;
  var r21 = y * z * oneMinusCosine - x * s;
  var r22 = zz + (1 - zz) * c;
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */


function scaling(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = v[0];
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = v[1];
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Modifies the given 4-by-4 matrix, scaling in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If none new one is created..
 * @return {module:twgl/m4.Mat4} m once modified.
 * @memberOf module:twgl/m4
 */


function scale(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2];
  dst[3] = v0 * m[0 * 4 + 3];
  dst[4] = v1 * m[1 * 4 + 0];
  dst[5] = v1 * m[1 * 4 + 1];
  dst[6] = v1 * m[1 * 4 + 2];
  dst[7] = v1 * m[1 * 4 + 3];
  dst[8] = v2 * m[2 * 4 + 0];
  dst[9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The point.
 * @param {Vec3} dst optional vec3 to store result
 * @return {Vec3} dst or new vec3 if not provided
 * @memberOf module:twgl/m4
 */


function transformPoint(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The direction.
 * @param {Vec3} dst optional Vec3 to store result
 * @return {Vec3} dst or new Vec3 if not provided
 * @memberOf module:twgl/m4
 */


function transformDirection(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
  return dst;
}
/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {Vec3} v The normal.
 * @param {Vec3} [dst] The direction.
 * @return {Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */


function transformNormal(m, v, dst) {
  dst = dst || v3.create();
  var mi = inverse(m);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createAttribsFromArrays = createAttribsFromArrays;
exports.createBuffersFromArrays = createBuffersFromArrays;
exports.createBufferFromArray = createBufferFromArray;
exports.createBufferFromTypedArray = createBufferFromTypedArray;
exports.createBufferInfoFromArrays = createBufferInfoFromArrays;
exports.setAttribInfoBufferFromArray = setAttribInfoBufferFromArray;
exports.setAttributePrefix = setAttributePrefix;
exports.setAttributeDefaults_ = setDefaults;
exports.getNumComponents_ = getNumComponents;
exports.getArray_ = getArray;

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var helper = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level attribute and buffer related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/attributes
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  attribPrefix: ""
};
/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 * In otherwords I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */

function setAttributePrefix(prefix) {
  defaults.attribPrefix = prefix;
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
}

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || gl.STATIC_DRAW);
}
/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */


function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (helper.isBuffer(gl, typedArray)) {
    return typedArray;
  }

  type = type || gl.ARRAY_BUFFER;
  var buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
}

function getArray(array) {
  return array.length ? array : array.data;
}

var texcoordRE = /coord|texture/i;
var colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  var numComponents;

  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3; // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw "Can not guess numComponents for attribute '" + name + "'. Tried " + numComponents + " but " + length + " values is not evenly divisible by " + numComponents + ". You should specify it.";
  }

  return numComponents;
}

function getNumComponents(array, arrayName) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}

function makeTypedArray(array, name) {
  if (typedArrays.isArrayBuffer(array)) {
    return array;
  }

  if (typedArrays.isArrayBuffer(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array
    };
  }

  var Type = array.type;

  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }

  return new Type(array.data);
}
/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of compoments of an array
 * @typedef {Object} FullArraySpec
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} type The type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */

/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */


function createAttribsFromArrays(gl, arrays) {
  var attribs = {};
  Object.keys(arrays).forEach(function (arrayName) {
    if (!isIndices(arrayName)) {
      var array = arrays[arrayName];
      var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
      var buffer;
      var type;
      var normalization;
      var numComponents;
      var numValues;

      if (typeof array === "number" || typeof array.data === "number") {
        numValues = array.data || array;
        var arrayType = array.type || Float32Array;
        var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
        type = typedArrays.getGLTypeForTypedArrayType(arrayType);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
        numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
        buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, numBytes, array.drawType || gl.STATIC_DRAW);
      } else {
        var typedArray = makeTypedArray(array, arrayName);
        buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
        type = typedArrays.getGLTypeForTypedArray(typedArray);
        normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
        numComponents = getNumComponents(array, arrayName);
        numValues = typedArray.length;
      }

      attribs[attribName] = {
        buffer: buffer,
        numComponents: numComponents,
        type: type,
        normalize: normalization,
        stride: array.stride || 0,
        offset: array.offset || 0,
        divisor: array.divisor === undefined ? undefined : array.divisor,
        drawType: array.drawType
      };
    }
  });
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return attribs;
}
/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically upate the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably ineffient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */


function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);

  if (offset !== undefined) {
    gl.bindBuffer(gl.ARRAY_BUFFER, attribInfo.buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, offset, array);
  } else {
    setBufferFromTypedArray(gl, gl.ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === gl.BYTE) return 1; // eslint-disable-line

  if (type === gl.UNSIGNED_BYTE) return 1; // eslint-disable-line

  if (type === gl.SHORT) return 2; // eslint-disable-line

  if (type === gl.UNSIGNED_SHORT) return 2; // eslint-disable-line

  if (type === gl.INT) return 4; // eslint-disable-line

  if (type === gl.UNSIGNED_INT) return 4; // eslint-disable-line

  if (type === gl.FLOAT) return 4; // eslint-disable-line

  return 0;
}
/**
 * tries to get the number of elements from a set of arrays.
 */


var positionKeys = ['position', 'positions', 'a_position'];

function getNumElementsFromNonIndexedArrays(arrays) {
  var key;

  for (var _ii = 0; _ii < positionKeys.length; ++_ii) {
    key = positionKeys[_ii];

    if (key in arrays) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }

  var array = arrays[key];
  var length = getArray(array).length;
  var numComponents = getNumComponents(array, key);
  var numElements = length / numComponents;

  if (length % numComponents > 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }

  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in attribs) {
      break;
    }

    key = defaults.attribPrefix + key;

    if (key in attribs) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }

  var attrib = attribs[key];
  gl.bindBuffer(gl.ARRAY_BUFFER, attrib.buffer);
  var numBytes = gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  var totalElements = numBytes / bytesPerValue;
  var numComponents = attrib.numComponents || attrib.size; // TODO: check stride

  var numElements = totalElements / numComponents;

  if (numElements % 1 !== 0) {
    throw "numComponents " + numComponents + " not correct for length " + length;
  }

  return numElements;
}
/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs approriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         a_position: { buffer: WebGLBuffer, numComponents: 3, },
 *         a_normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         a_texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also by TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or augmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         a_position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         a_texcoods: { numComponents: 2, buffer: gl.createBuffer(), },
 *         a_normals: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.a_normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */


function createBufferInfoFromArrays(gl, arrays) {
  var bufferInfo = {
    attribs: createAttribsFromArrays(gl, arrays)
  };
  var indices = arrays.indices;

  if (indices) {
    var newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, gl.ELEMENT_ARRAY_BUFFER);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(newIndices);
  } else {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}
/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that constains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be dervied other wise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */


function createBufferFromArray(gl, array, arrayName) {
  var type = arrayName === "indices" ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
  var typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}
/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */


function createBuffersFromArrays(gl, arrays) {
  var buffers = {};
  Object.keys(arrays).forEach(function (key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  }); // Ugh!

  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setTextureDefaults_ = setDefaults;
exports.createSampler = createSampler;
exports.createSamplers = createSamplers;
exports.setSamplerParameters = setSamplerParameters;
exports.createTexture = createTexture;
exports.setEmptyTexture = setEmptyTexture;
exports.setTextureFromArray = setTextureFromArray;
exports.loadTextureFromUrl = loadTextureFromUrl;
exports.setTextureFromElement = setTextureFromElement;
exports.setTextureFilteringForSize = setTextureFilteringForSize;
exports.setTextureParameters = setTextureParameters;
exports.setDefaultTextureColor = setDefaultTextureColor;
exports.createTextures = createTextures;
exports.resizeTexture = resizeTexture;
exports.getNumComponentsForFormat = getNumComponentsForFormat;
exports.getBytesPerElementForInternalFormat = getBytesPerElementForInternalFormat;

var utils = _interopRequireWildcard(__webpack_require__(4));

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var helper = _interopRequireWildcard(__webpack_require__(0));

var _globalObject = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Low level texture related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.textures` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/textures
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined
};
var isArrayBuffer = typedArrays.isArrayBuffer; // Should we make this on demand?

var ctx = _globalObject.default.document && _globalObject.default.document.createElement ? _globalObject.default.document.createElement("canvas").getContext("2d") : null; // NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d
// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an imagebitmap to be cut. Unfortunately cutting an imagebitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02

/* PixelFormat */

var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;
var DEPTH_COMPONENT = 0x1902;
var DEPTH_STENCIL = 0x84F9;
/* TextureWrapMode */

var REPEAT = 0x2901; // eslint-disable-line

var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */

var NEAREST = 0x2600; // eslint-disable-line

/* TextureMinFilter */

var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line

var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line

var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line

var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

var R8 = 0x8229;
var R8_SNORM = 0x8F94;
var R16F = 0x822D;
var R32F = 0x822E;
var R8UI = 0x8232;
var R8I = 0x8231;
var RG16UI = 0x823A;
var RG16I = 0x8239;
var RG32UI = 0x823C;
var RG32I = 0x823B;
var RG8 = 0x822B;
var RG8_SNORM = 0x8F95;
var RG16F = 0x822F;
var RG32F = 0x8230;
var RG8UI = 0x8238;
var RG8I = 0x8237;
var R16UI = 0x8234;
var R16I = 0x8233;
var R32UI = 0x8236;
var R32I = 0x8235;
var RGB8 = 0x8051;
var SRGB8 = 0x8C41;
var RGB565 = 0x8D62;
var RGB8_SNORM = 0x8F96;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGB16F = 0x881B;
var RGB32F = 0x8815;
var RGB8UI = 0x8D7D;
var RGB8I = 0x8D8F;
var RGB16UI = 0x8D77;
var RGB16I = 0x8D89;
var RGB32UI = 0x8D71;
var RGB32I = 0x8D83;
var RGBA8 = 0x8058;
var SRGB8_ALPHA8 = 0x8C43;
var RGBA8_SNORM = 0x8F97;
var RGB5_A1 = 0x8057;
var RGBA4 = 0x8056;
var RGB10_A2 = 0x8059;
var RGBA16F = 0x881A;
var RGBA32F = 0x8814;
var RGBA8UI = 0x8D7C;
var RGBA8I = 0x8D8E;
var RGB10_A2UI = 0x906F;
var RGBA16UI = 0x8D76;
var RGBA16I = 0x8D88;
var RGBA32I = 0x8D82;
var RGBA32UI = 0x8D70;
var DEPTH_COMPONENT16 = 0x81A5;
var DEPTH_COMPONENT24 = 0x81A6;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var DEPTH24_STENCIL8 = 0x88F0;
/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(

var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var RG = 0x8227;
var RG_INTEGER = 0x8228;
var RED = 0x1903;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;
var formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  var f = formatInfo;
  f[ALPHA] = {
    numColorComponents: 1
  };
  f[LUMINANCE] = {
    numColorComponents: 1
  };
  f[LUMINANCE_ALPHA] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RED] = {
    numColorComponents: 1
  };
  f[RED_INTEGER] = {
    numColorComponents: 1
  };
  f[RG] = {
    numColorComponents: 2
  };
  f[RG_INTEGER] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGB_INTEGER] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RGBA_INTEGER] = {
    numColorComponents: 4
  };
  f[DEPTH_COMPONENT] = {
    numColorComponents: 1
  };
  f[DEPTH_STENCIL] = {
    numColorComponents: 2
  };
}
var textureInternalFormatInfo = {};
{
  // NOTE: these properties need unique names so we can let Uglify mangle the name.
  var t = textureInternalFormatInfo; // unsized formats

  t[ALPHA] = {
    textureFormat: ALPHA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [1, 2, 2, 4],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[LUMINANCE] = {
    textureFormat: LUMINANCE,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [1, 2, 2, 4],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[LUMINANCE_ALPHA] = {
    textureFormat: LUMINANCE_ALPHA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [2, 4, 4, 8],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
  };
  t[RGB] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [3, 6, 6, 12, 2],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_5_6_5]
  };
  t[RGBA] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 8, 8, 16, 2, 2],
    type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1]
  }; // sized formats

  t[R8] = {
    textureFormat: RED,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 1,
    type: UNSIGNED_BYTE
  };
  t[R8_SNORM] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 1,
    type: BYTE
  };
  t[R16F] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [4, 2],
    type: [FLOAT, HALF_FLOAT]
  };
  t[R32F] = {
    textureFormat: RED,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT
  };
  t[R8UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 1,
    type: UNSIGNED_BYTE
  };
  t[R8I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 1,
    type: BYTE
  };
  t[R16UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: UNSIGNED_SHORT
  };
  t[R16I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: SHORT
  };
  t[R32UI] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT
  };
  t[R32I] = {
    textureFormat: RED_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: INT
  };
  t[RG8] = {
    textureFormat: RG,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 2,
    type: UNSIGNED_BYTE
  };
  t[RG8_SNORM] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 2,
    type: BYTE
  };
  t[RG16F] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [8, 4],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RG32F] = {
    textureFormat: RG,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 8,
    type: FLOAT
  };
  t[RG8UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: UNSIGNED_BYTE
  };
  t[RG8I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 2,
    type: BYTE
  };
  t[RG16UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_SHORT
  };
  t[RG16I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: SHORT
  };
  t[RG32UI] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: UNSIGNED_INT
  };
  t[RG32I] = {
    textureFormat: RG_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: INT
  };
  t[RGB8] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[SRGB8] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[RGB565] = {
    textureFormat: RGB,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [3, 2],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5]
  };
  t[RGB8_SNORM] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 3,
    type: BYTE
  };
  t[R11F_G11F_B10F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6, 4],
    type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV]
  };
  t[RGB9_E5] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6, 4],
    type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV]
  };
  t[RGB16F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [12, 6],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RGB32F] = {
    textureFormat: RGB,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: FLOAT
  };
  t[RGB8UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 3,
    type: UNSIGNED_BYTE
  };
  t[RGB8I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 3,
    type: BYTE
  };
  t[RGB16UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 6,
    type: UNSIGNED_SHORT
  };
  t[RGB16I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 6,
    type: SHORT
  };
  t[RGB32UI] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: UNSIGNED_INT
  };
  t[RGB32I] = {
    textureFormat: RGB_INTEGER,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 12,
    type: INT
  };
  t[RGBA8] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[SRGB8_ALPHA8] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[RGBA8_SNORM] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: 4,
    type: BYTE
  };
  t[RGB5_A1] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 2, 4],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV]
  };
  t[RGBA4] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: [4, 2],
    type: [UNSIGNED_BYTE, UNSIGNED_SHORT_4_4_4_4]
  };
  t[RGB10_A2] = {
    textureFormat: RGBA,
    colorRenderable: true,
    textureFilterable: true,
    bytesPerElement: 4,
    type: UNSIGNED_INT_2_10_10_10_REV
  };
  t[RGBA16F] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: true,
    bytesPerElement: [16, 8],
    type: [FLOAT, HALF_FLOAT]
  };
  t[RGBA32F] = {
    textureFormat: RGBA,
    colorRenderable: false,
    textureFilterable: false,
    bytesPerElement: 16,
    type: FLOAT
  };
  t[RGBA8UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_BYTE
  };
  t[RGBA8I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: BYTE
  };
  t[RGB10_A2UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT_2_10_10_10_REV
  };
  t[RGBA16UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: UNSIGNED_SHORT
  };
  t[RGBA16I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 8,
    type: SHORT
  };
  t[RGBA32I] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 16,
    type: INT
  };
  t[RGBA32UI] = {
    textureFormat: RGBA_INTEGER,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 16,
    type: UNSIGNED_INT
  }; // Sized Internal

  t[DEPTH_COMPONENT16] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: [2, 4],
    type: [UNSIGNED_SHORT, UNSIGNED_INT]
  };
  t[DEPTH_COMPONENT24] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT
  };
  t[DEPTH_COMPONENT32F] = {
    textureFormat: DEPTH_COMPONENT,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT
  };
  t[DEPTH24_STENCIL8] = {
    textureFormat: DEPTH_STENCIL,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: UNSIGNED_INT_24_8
  };
  t[DEPTH32F_STENCIL8] = {
    textureFormat: DEPTH_STENCIL,
    colorRenderable: true,
    textureFilterable: false,
    bytesPerElement: 4,
    type: FLOAT_32_UNSIGNED_INT_24_8_REV
  };
  Object.keys(t).forEach(function (internalFormat) {
    var info = t[internalFormat];
    info.bytesPerElementMap = {};

    if (Array.isArray(info.bytesPerElement)) {
      info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
        var type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    } else {
      var type = info.type;
      info.bytesPerElementMap[type] = info.bytesPerElement;
    }
  });
}
/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */

function getBytesPerElementForInternalFormat(internalFormat, type) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  var bytesPerElement = info.bytesPerElementMap[type];

  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }

  return bytesPerElement;
}
/**
 * Gets the format for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {{format:number, type:number}} the corresponding format and type
 */


function getFormatAndTypeForInternalFormat(internalFormat) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return {
    format: info.textureFormat,
    type: Array.isArray(info.type) ? info.type[0] : info.type
  };
}
/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 */


function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */


function canGenerateMipmap(gl, width, height, internalFormat
/*, type */
) {
  if (!utils.isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }

  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return info.colorRenderable && info.textureFilterable;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {boolean} true if we can generate mips
 */


function canFilter(internalFormat
/*, type */
) {
  var info = textureInternalFormatInfo[internalFormat];

  if (!info) {
    throw "unknown internal format";
  }

  return info.textureFilterable;
}
/**
 * Gets the number of compontents for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */


function getNumComponentsForFormat(format) {
  var info = formatInfo[format];

  if (!info) {
    throw "unknown format: " + format;
  }

  return info.numColorComponents;
}
/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 */


function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer(src)) {
    return typedArrays.getGLTypeForTypedArray(src);
  }

  return defaultType || gl.UNSIGNED_BYTE;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }

  if (!width && !height) {
    var size = Math.sqrt(numElements / (target === gl.TEXTURE_CUBE_MAP ? 6 : 1));

    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;

    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;

    if (width % 1) {
      throw "can't guess dimensions";
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */


function setDefaultTextureColor(color) {
  defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);

  if (newDefaults.textureColor) {
    setDefaultTextureColor(newDefaults.textureColor);
  }
}
/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documentented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {(number[]|ArrayBufferView)} color color used as temporary 1x1 pixel color for textures loaded async when src is a string.
 *    If it's a JavaScript array assumes color is 0 to 1 like most GL colors as in `[1, 0, 0, 1] = red=1, green=0, blue=0, alpha=0`.
 *    Defaults to `[0.5, 0.75, 1, 1]`. See {@link module:twgl.setDefaultTextureColor}. If `false` texture is set. Can be used to re-load a texture
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediatley. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then eact entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */
// NOTE: While querying GL is considered slow it's not remotely as slow
// as uploading a texture. On top of that you're unlikely to call this in
// a perf critical loop. Even if upload a texture every frame that's unlikely
// to be more than 1 or 2 textures a frame. In other words, the benefits of
// making the API easy to use outweigh any supposed perf benefits
//
// Also note I get that having one global of these is bad practice.
// As long as it's used correctly it means no garbage which probably
// doesn't matter when dealing with textures but old habits die hard.


var lastPackState = {};
/**
 * Saves any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */

function savePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    lastPackState.colorspaceConversion = gl.getParameter(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    lastPackState.premultiplyAlpha = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    lastPackState.flipY = gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}
/**
 * Restores any packing state that was set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function restorePackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, lastPackState.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, lastPackState.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, lastPackState.flipY);
  }
}
/**
 * Saves state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function saveSkipState(gl) {
  lastPackState.unpackAlignment = gl.getParameter(gl.UNPACK_ALIGNMENT);

  if (utils.isWebGL2(gl)) {
    lastPackState.unpackRowLength = gl.getParameter(gl.UNPACK_ROW_LENGTH);
    lastPackState.unpackImageHeight = gl.getParameter(gl.UNPACK_IMAGE_HEIGHT);
    lastPackState.unpackSkipPixels = gl.getParameter(gl.UNPACK_SKIP_PIXELS);
    lastPackState.unpackSkipRows = gl.getParameter(gl.UNPACK_SKIP_ROWS);
    lastPackState.unpackSkipImages = gl.getParameter(gl.UNPACK_SKIP_IMAGES);
  }
}
/**
 * Restores state related to data size
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 */


function restoreSkipState(gl) {
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, lastPackState.unpackAlignment);

  if (utils.isWebGL2(gl)) {
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, lastPackState.unpackRowLength);
    gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, lastPackState.unpackImageHeight);
    gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, lastPackState.unpackSkipPixels);
    gl.pixelStorei(gl.UNPACK_SKIP_ROWS, lastPackState.unpackSkipRows);
    gl.pixelStorei(gl.UNPACK_SKIP_IMAGES, lastPackState.unpackSkipImages);
  }
}
/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParamteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 */


function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.minMag);
  }

  if (options.min) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_FILTER, options.min);
  }

  if (options.mag) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAG_FILTER, options.mag);
  }

  if (options.wrap) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrap);

    if (target === gl.TEXTURE_3D || helper.isSampler(gl, target)) {
      parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrap);
    }
  }

  if (options.wrapR) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_R, options.wrapR);
  }

  if (options.wrapS) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_S, options.wrapS);
  }

  if (options.wrapT) {
    parameteriFn.call(gl, target, gl.TEXTURE_WRAP_T, options.wrapT);
  }

  if (options.minLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MIN_LOD, options.minLod);
  }

  if (options.maxLod) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LOD, options.maxLod);
  }

  if (options.baseLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
  }

  if (options.maxLevel) {
    parameteriFn.call(gl, target, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
  }
}
/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureParameters(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}
/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setSamplerParameters(gl, sampler, options) {
  setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}
/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 */


function createSampler(gl, options) {
  var sampler = gl.createSampler();
  setSamplerParameters(gl, sampler, options);
  return sampler;
}
/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 */


function createSamplers(gl, samplerOptions) {
  var samplers = {};
  Object.keys(samplerOptions).forEach(function (name) {
    samplers[name] = createSampler(gl, samplerOptions[name]);
  });
  return samplers;
}
/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 */


function make1Pixel(color) {
  color = color || defaults.textureColor;

  if (isArrayBuffer(color)) {
    return color;
  }

  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}
/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @param {number} [type] The type parameter for texImage2D etc..
 * @memberOf module:twgl/textures
 */


function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type) {
  options = options || defaults.textureOptions;
  internalFormat = internalFormat || gl.RGBA;
  type = type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);

  if (canGenerateMipmap(gl, width, height, internalFormat, type)) {
    gl.generateMipmap(target);
  } else {
    var filtering = canFilter(internalFormat, type) ? gl.LINEAR : gl.NEAREST;
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || options.auto === undefined && options.level === undefined;
}
/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 */


function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
}
/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundent but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 */


function getCubeFacesWithNdx(gl, options) {
  var faces = getCubeFaceOrder(gl, options); // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(

  var facesWithNdx = faces.map(function (face, ndx) {
    return {
      face: face,
      ndx: ndx
    };
  });
  facesWithNdx.sort(function (a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}
/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */


function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  var level = options.level || 0;
  var width = element.width;
  var height = element.height;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);
  gl.bindTexture(target, tex);

  if (target === gl.TEXTURE_CUBE_MAP) {
    // guess the parts
    var imgWidth = element.width;
    var imgHeight = element.height;
    var size;
    var slices;

    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }

    if (ctx) {
      ctx.canvas.width = size;
      ctx.canvas.height = size;
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size;
        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
        gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
      }); // Free up the canvas memory

      ctx.canvas.width = 1;
      ctx.canvas.height = 1;
    } else if (_globalObject.default.createImageBitmap) {
      // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
      // note lossy? (alpha is not premultiplied? although I'm not sure what
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size; // We can't easily use a default texture color here as it would have to match
        // the type across all faces where as with a 2D one there's only one face
        // so we're replacing everything all at once. It also has to be the correct size.
        // On the other hand we need all faces to be the same size so as one face loads
        // the rest match else the texture will be unrenderable.

        gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);

        _globalObject.default.createImageBitmap(element, xOffset, yOffset, size, size, {
          premultiplyAlpha: 'none',
          colorSpaceConversion: 'none'
        }).then(function (imageBitmap) {
          savePackState(gl, options);
          gl.bindTexture(target, tex);
          gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
          }
        });
      });
    }
  } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
    var smallest = Math.min(element.width, element.height);
    var largest = Math.max(element.width, element.height);
    var depth = largest / smallest;

    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }

    var xMult = element.width === largest ? 1 : 0;
    var yMult = element.height === largest ? 1 : 0;
    saveSkipState(gl);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(gl.UNPACK_ROW_LENGTH, element.width);
    gl.pixelStorei(gl.UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(gl.UNPACK_SKIP_IMAGES, 0);
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);

    for (var d = 0; d < depth; ++d) {
      var srcX = d * smallest * xMult;
      var srcY = d * smallest * yMult;
      gl.pixelStorei(gl.UNPACK_SKIP_PIXELS, srcX);
      gl.pixelStorei(gl.UNPACK_SKIP_ROWS, srcY);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
    }

    restoreSkipState(gl);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }

  restorePackState(gl, options);

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }

  setTextureParameters(gl, tex, options);
}

function noop() {}
/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 */


function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  var img;

  if (_globalObject.default.Image) {
    img = new _globalObject.default.Image();
    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;

    if (crossOrigin !== undefined) {
      img.crossOrigin = crossOrigin;
    }

    var clearEventHandlers = function clearEventHandlers() {
      img.removeEventListener('error', onError); // eslint-disable-line

      img.removeEventListener('load', onLoad); // eslint-disable-line

      img = null;
    };

    var onError = function onError() {
      var msg = "couldn't load image: " + url;
      helper.error(msg);
      callback(msg, img);
      clearEventHandlers();
    };

    var onLoad = function onLoad() {
      callback(null, img);
      clearEventHandlers();
    };

    img.addEventListener('error', onError);
    img.addEventListener('load', onLoad);
    img.src = url;
    return img;
  } else if (_globalObject.default.ImageBitmap) {
    var err;
    var bm;

    var cb = function cb() {
      callback(err, bm);
    };

    var options = {};

    if (crossOrigin) {
      options.mode = 'cors'; // TODO: not sure how to translate image.crossOrigin
    }

    fetch(url, options).then(function (response) {
      if (!response.ok) {
        throw response;
      }

      return response.blob();
    }).then(function (blob) {
      return _globalObject.default.createImageBitmap(blob, {
        premultiplyAlpha: 'none',
        colorSpaceConversion: 'none'
      });
    }).then(function (bitmap) {
      // not sure if this works. We don't want
      // to catch the user's error. So, call
      // the callback in a timeout so we're
      // not in this scope inside the promise.
      bm = bitmap;
      setTimeout(cb);
    }).catch(function (e) {
      err = e;
      setTimeout(cb);
    });
    img = null;
  }

  return img;
}
/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 */


function isTexImageSource(obj) {
  return _globalObject.default.ImageBitmap && obj instanceof _globalObject.default.ImageBitmap || _globalObject.default.ImageData && obj instanceof _globalObject.default.ImageData || _globalObject.default.HTMLElement && obj instanceof _globalObject.default.HTMLElement;
}
/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 */


function loadAndUseImage(obj, crossOrigin, callback) {
  if (isTexImageSource(obj)) {
    setTimeout(function () {
      callback(null, obj);
    });
    return obj;
  }

  return loadImage(obj, crossOrigin, callback);
}
/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);

  if (options.color === false) {
    return;
  } // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.


  var color = make1Pixel(options.color);

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
    }
  } else if (target === gl.TEXTURE_3D || target === gl.TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  } else {
    gl.texImage2D(target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, color);
  }
}
/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} souce image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as approriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */


function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var img = loadAndUseImage(options.src, options.crossOrigin, function (err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}
/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;

  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }

  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D;

  if (target !== gl.TEXTURE_CUBE_MAP) {
    throw "target must be TEXTURE_CUBE_MAP";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = 6;
  var errors = [];
  var faces = getCubeFaceOrder(gl, options);
  var imgs; // eslint-disable-line

  function uploadImg(faceTarget) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          savePackState(gl, options);
          gl.bindTexture(target, tex); // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces

          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder(gl).forEach(function (otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          restorePackState(gl, options);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}
/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || gl.UNSIGNED_BYTE;
  var target = options.target || gl.TEXTURE_2D_ARRAY;

  if (target !== gl.TEXTURE_3D && target !== gl.TEXTURE_2D_ARRAY) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = urls.length;
  var errors = [];
  var imgs; // eslint-disable-line

  var level = options.level || 0;
  var width = options.width;
  var height = options.height;
  var depth = urls.length;
  var firstImage = true;

  function uploadImg(slice) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        savePackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null); // put it in every slice otherwise some slices will be 0,0,0,0

          for (var s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          var src = img;

          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src); // free the canvas memory

          if (src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        restorePackState(gl, options);

        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
  });
}
/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults.textureOptions;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var width = options.width;
  var height = options.height;
  var depth = options.depth;
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);

  if (!isArrayBuffer(src)) {
    var Type = typedArrays.getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else if (src instanceof Uint8ClampedArray) {
    src = new Uint8Array(src.buffer);
  }

  var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?

  if (numElements % 1) {
    throw "length wrong size for format: " + utils.glEnumToString(gl, format);
  }

  var dimensions;

  if (target === gl.TEXTURE_3D) {
    if (!width && !height && !depth) {
      var size = Math.cbrt(numElements);

      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }

      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }

  saveSkipState(gl);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  savePackState(gl, options);

  if (target === gl.TEXTURE_CUBE_MAP) {
    var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    var faceSize = numElements / 6 * elementsPerElement;
    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var offset = faceSize * f.ndx;
      var data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }

  restorePackState(gl, options);
  restoreSkipState(gl);
  return {
    width: width,
    height: height,
    depth: depth,
    type: type
  };
}
/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setEmptyTexture(gl, tex, options) {
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  savePackState(gl, options);

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === gl.TEXTURE_3D) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }

  restorePackState(gl, options);
}
/**
 * Creates a texture based on the options passed in.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */


function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  var tex = gl.createTexture();
  var target = options.target || gl.TEXTURE_2D;
  var width = options.width || 1;
  var height = options.height || 1;
  var internalFormat = options.internalFormat || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var type = options.type || formatType.type;
  gl.bindTexture(target, tex);

  if (target === gl.TEXTURE_CUBE_MAP) {
    // this should have been the default for CUBEMAPS :(
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  var src = options.src;

  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }

    if (typeof src === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
      var dimensions = setTextureFromArray(gl, tex, src, options);
      width = dimensions.width;
      height = dimensions.height;
      type = dimensions.type;
    } else if (Array.isArray(src) && (typeof src[0] === 'string' || isTexImageSource(src[0]))) {
      if (target === gl.TEXTURE_CUBE_MAP) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else if (isTexImageSource(src)) {
      setTextureFromElement(gl, tex, src, options);
      width = src.width;
      height = src.height;
    } else {
      throw "unsupported src type";
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat, type);
  }

  setTextureParameters(gl, tex, options);
  return tex;
}
/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @memberOf module:twgl/textures
 */


function resizeTexture(gl, tex, options, width, height) {
  width = width || options.width;
  height = height || options.height;
  var target = options.target || gl.TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || gl.RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type;
  var src = options.src;

  if (!src) {
    type = options.type || formatType.type;
  } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
    type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  } else {
    type = options.type || formatType.type;
  }

  if (target === gl.TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    }
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  }
}
/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 */


function isAsyncSrc(src) {
  return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
}
/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */


function createTextures(gl, textureOptions, callback) {
  callback = callback || noop;
  var numDownloading = 0;
  var errors = [];
  var textures = {};
  var images = {};

  function callCallbackIfReady() {
    if (numDownloading === 0) {
      setTimeout(function () {
        callback(errors.length ? errors : undefined, textures, images);
      }, 0);
    }
  }

  Object.keys(textureOptions).forEach(function (name) {
    var options = textureOptions[name];
    var onLoadFn;

    if (isAsyncSrc(options.src)) {
      onLoadFn = function onLoadFn(err, tex, img) {
        images[name] = img;
        --numDownloading;

        if (err) {
          errors.push(err);
        }

        callCallbackIfReady();
      };

      ++numDownloading;
    }

    textures[name] = createTexture(gl, options, onLoadFn);
  }); // queue the callback if there are no images to download.
  // We do this because if your code is structured to wait for
  // images to download but then you comment out all the async
  // images your code would break.

  callCallbackIfReady();
  return textures;
} // Using quotes prevents Uglify from changing the names.
// No speed diff AFAICT.

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  m4: true,
  v3: true,
  primitives: true
};
exports.primitives = exports.v3 = exports.m4 = void 0;

var m4 = _interopRequireWildcard(__webpack_require__(6));

exports.m4 = m4;

var v3 = _interopRequireWildcard(__webpack_require__(3));

exports.v3 = v3;

var primitives = _interopRequireWildcard(__webpack_require__(10));

exports.primitives = primitives;

var _twgl = __webpack_require__(11);

Object.keys(_twgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _twgl[key];
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.create3DFVertices = create3DFVertices;
exports.createAugmentedTypedArray = createAugmentedTypedArray;
exports.createCubeVertices = createCubeVertices;
exports.createPlaneVertices = createPlaneVertices;
exports.createSphereVertices = createSphereVertices;
exports.createTruncatedConeVertices = createTruncatedConeVertices;
exports.createXYQuadVertices = createXYQuadVertices;
exports.createCresentVertices = createCresentVertices;
exports.createCylinderVertices = createCylinderVertices;
exports.createTorusVertices = createTorusVertices;
exports.createDiscVertices = createDiscVertices;
exports.deindexVertices = deindexVertices;
exports.flattenNormals = flattenNormals;
exports.makeRandomVertexColors = makeRandomVertexColors;
exports.reorientDirections = reorientDirections;
exports.reorientNormals = reorientNormals;
exports.reorientPositions = reorientPositions;
exports.reorientVertices = reorientVertices;
exports.concatVertices = concatVertices;
exports.duplicateVertices = duplicateVertices;
exports.createDiscBuffers = exports.createDiscBufferInfo = exports.createTorusBuffers = exports.createTorusBufferInfo = exports.createCylinderBuffers = exports.createCylinderBufferInfo = exports.createCresentBuffers = exports.createCresentBufferInfo = exports.createXYQuadBuffers = exports.createXYQuadBufferInfo = exports.createTruncatedConeBuffers = exports.createTruncatedConeBufferInfo = exports.createSphereBuffers = exports.createSphereBufferInfo = exports.createPlaneBuffers = exports.createPlaneBufferInfo = exports.createCubeBuffers = exports.createCubeBufferInfo = exports.create3DFBuffers = exports.create3DFBufferInfo = void 0;

var attributes = _interopRequireWildcard(__webpack_require__(7));

var helper = _interopRequireWildcard(__webpack_require__(0));

var typedArrays = _interopRequireWildcard(__webpack_require__(1));

var m4 = _interopRequireWildcard(__webpack_require__(6));

var v3 = _interopRequireWildcard(__webpack_require__(3));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Various functions to make simple primitives
 *
 * note: Most primitive functions come in 3 styles
 *
 * *  `createSomeShapeBufferInfo`
 *
 *    These functions are almost always the functions you want to call. They
 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
 *    returing a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
 *    and {@link module:twgl.drawBufferInfo} etc...
 *
 * *  `createSomeShapeBuffers`
 *
 *    These create WebGLBuffers and put your data in them but nothing else.
 *    It's a shortcut to doing it yourself if you don't want to use
 *    the higher level functions.
 *
 * *  `createSomeShapeVertices`
 *
 *    These just create vertices, no buffers. This allows you to manipulate the vertices
 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
 *
 *    example:
 *
 *        const arrays = twgl.primitives.createPlaneArrays(1);
 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
 *        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 * @module twgl/primitives
 */
var getArray = attributes.getArray_; // eslint-disable-line

var getNumComponents = attributes.getNumComponents_; // eslint-disable-line

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 */

function augmentTypedArray(typedArray, numComponents) {
  var cursor = 0;

  typedArray.push = function () {
    for (var ii = 0; ii < arguments.length; ++ii) {
      var value = arguments[ii];

      if (value instanceof Array || typedArrays.isArrayBuffer(value)) {
        for (var jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };

  typedArray.reset = function (opt_index) {
    cursor = opt_index || 0;
  };

  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function get() {
      return this.length / this.numComponents | 0;
    }
  });
  return typedArray;
}
/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */


function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  var Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}
/**
 * Given indexed vertices creates a new set of vertices unindexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */


function deindexVertices(vertices) {
  var indices = vertices.indices;
  var newVertices = {};
  var numElements = indices.length;

  function expandToUnindexed(channel) {
    var srcBuffer = vertices[channel];
    var numComponents = srcBuffer.numComponents;
    var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);

    for (var ii = 0; ii < numElements; ++ii) {
      var ndx = indices[ii];
      var offset = ndx * numComponents;

      for (var jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }

    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
  return newVertices;
}
/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */


function flattenNormals(vertices) {
  if (vertices.indices) {
    throw "can't flatten normals of indexed vertices. deindex them first";
  }

  var normals = vertices.normal;
  var numNormals = normals.length;

  for (var ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    var nax = normals[ii + 0];
    var nay = normals[ii + 1];
    var naz = normals[ii + 2];
    var nbx = normals[ii + 3];
    var nby = normals[ii + 4];
    var nbz = normals[ii + 5];
    var ncx = normals[ii + 6];
    var ncy = normals[ii + 7];
    var ncz = normals[ii + 8]; // add them

    var nx = nax + nbx + ncx;
    var ny = nay + nby + ncy;
    var nz = naz + nbz + ncz; // normalize them

    var length = Math.sqrt(nx * nx + ny * ny + nz * nz);
    nx /= length;
    ny /= length;
    nz /= length; // copy them back in

    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;
    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;
    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  var len = array.length;
  var tmp = new Float32Array(3);

  for (var ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal(mi, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}
/**
 * Reorients directions by the given matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformDirection);
  return array;
}
/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
  return array;
}
/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {number[]|TypedArray} array The array. Assumes value floats per element.
 * @param {Matrix} matrix A matrix to multiply by.
 * @return {number[]|TypedArray} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformPoint);
  return array;
}
/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, (number[]|TypedArray)>} arrays The vertices to reorient
 * @param {Matrix} matrix matrix to reorient by.
 * @return {Object.<string, (number[]|TypedArray)>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */


function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function (name) {
    var array = arrays[name];

    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}
/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray> the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */


function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
    },
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
    indices: [0, 1, 2, 2, 1, 3]
  };
}
/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {@module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {Matrix4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */


function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || m4.identity();
  var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  for (var z = 0; z <= subdivisionsDepth; z++) {
    for (var x = 0; x <= subdivisionsWidth; x++) {
      var u = x / subdivisionsWidth;
      var v = z / subdivisionsDepth;
      positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  var numVertsAcross = subdivisionsWidth + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (var _z = 0; _z < subdivisionsDepth; _z++) {
    // eslint-disable-line
    for (var _x = 0; _x < subdivisionsWidth; _x++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1); // Make triangle 2 of quad.

      indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
    }
  }

  var arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  }, matrix);
  return arrays;
}
/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */


function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
  var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians; // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.

  var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices); // Generate the individual vertices in our vertex buffer.

  for (var y = 0; y <= subdivisionsHeight; y++) {
    for (var x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      var u = x / subdivisionsAxis;
      var v = y / subdivisionsHeight;
      var theta = longRange * u;
      var phi = latRange * v;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  var numVertsAround = subdivisionsAxis + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);

  for (var _x2 = 0; _x2 < subdivisionsAxis; _x2++) {
    // eslint-disable-line
    for (var _y = 0; _y < subdivisionsHeight; _y++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2); // Make triangle 2 of quad.

      indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 */


var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
[6, 2, 0, 4], // left
[6, 7, 3, 2], // ??
[0, 1, 5, 4], // ??
[7, 6, 4, 5], // front
[2, 3, 1, 0]];
/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */

function createCubeVertices(size) {
  size = size || 1;
  var k = size / 2;
  var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];
  var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];
  var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];
  var numVertices = 6 * 4;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (var f = 0; f < 6; ++f) {
    var faceIndices = CUBE_FACE_INDICES[f];

    for (var v = 0; v < 4; ++v) {
      var position = cornerVertices[faceIndices[v]];
      var normal = faceNormals[f];
      var uv = uvCoords[v]; // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.

      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);
    } // Two triangles make a square face.


    var offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */


function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw Error('verticalSubdivisions must be 1 or greater');
  }

  var topCap = opt_topCap === undefined ? true : opt_topCap;
  var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
  var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra) * 2, Uint16Array);
  var vertsAroundEdge = radialSubdivisions + 1; // The slant of the cone is constant across its surface

  var slant = Math.atan2(bottomRadius - topRadius, height);
  var cosSlant = Math.cos(slant);
  var sinSlant = Math.sin(slant);
  var start = topCap ? -2 : 0;
  var end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (var yy = start; yy <= end; ++yy) {
    var v = yy / verticalSubdivisions;
    var y = height * v;
    var ringRadius = void 0;

    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }

    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }

    y -= height / 2;

    for (var ii = 0; ii < vertsAroundEdge; ++ii) {
      var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);
      normals.push(yy < 0 || yy > verticalSubdivisions ? 0 : sin * cosSlant, yy < 0 ? -1 : yy > verticalSubdivisions ? 1 : sinSlant, yy < 0 || yy > verticalSubdivisions ? 0 : cos * cosSlant);
      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy) {
    // eslint-disable-line
    for (var _ii = 0; _ii < radialSubdivisions; ++_ii) {
      // eslint-disable-line
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 */


function expandRLEData(rleData, padding) {
  padding = padding || [];
  var data = [];

  for (var ii = 0; ii < rleData.length; ii += 4) {
    var runLength = rleData[ii];
    var element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);

    for (var jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }

  return data;
}
/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function create3DFVertices() {
  var positions = [// left column front
  0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, // top rung front
  30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, // middle rung front
  30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, // left column back
  0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, // top rung back
  30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, // middle rung back
  30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, // top
  0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, // top rung front
  100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, // under top rung
  30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, // between top rung and middle
  30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, // top of middle rung
  30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, // front of middle rung
  67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, // bottom of middle rung.
  30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, // front of bottom
  30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, // bottom
  0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, // left side
  0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];
  var texcoords = [// left column front
  0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19, // top rung front
  0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19, // middle rung front
  0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43, // left column back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // middle rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // top rung front
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // under top rung
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // between top rung and middle
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // top of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // front of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom of middle rung.
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // front of bottom
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // left side
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];
  var normals = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 0, 0, 1, // left column back
  // top rung back
  // middle rung back
  18, 0, 0, -1, // top
  6, 0, 1, 0, // top rung front
  6, 1, 0, 0, // under top rung
  6, 0, -1, 0, // between top rung and middle
  6, 1, 0, 0, // top of middle rung
  6, 0, 1, 0, // front of middle rung
  6, 1, 0, 0, // bottom of middle rung.
  6, 0, -1, 0, // front of bottom
  6, 1, 0, 0, // bottom
  6, 0, -1, 0, // left side
  6, -1, 0, 0]);
  var colors = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 200, 70, 120, // left column back
  // top rung back
  // middle rung back
  18, 80, 70, 200, // top
  6, 70, 200, 210, // top rung front
  6, 200, 200, 70, // under top rung
  6, 210, 100, 70, // between top rung and middle
  6, 210, 160, 70, // top of middle rung
  6, 70, 180, 210, // front of middle rung
  6, 100, 70, 210, // bottom of middle rung.
  6, 76, 210, 100, // front of bottom
  6, 140, 210, 80, // bottom
  6, 90, 130, 110, // left side
  6, 160, 160, 220], [255]);
  var numVerts = positions.length / 3;
  var arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2, numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
  };
  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (var ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}
/**
 * Creates cresent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates cresent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates cresent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the cresent.
 * @param {number} outerRadius The outer radius of the cresent.
 * @param {number} innerRadius The inner radius of the cresent.
 * @param {number} thickness The thickness of the cresent.
 * @param {number} subdivisionsDown number of steps around the cresent.
 * @param {number} subdivisionsThick number of vertically on the cresent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCresentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
  if (subdivisionsDown <= 0) {
    throw Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset = endOffset || 1;
  var subdivisionsThick = 2;
  var offsetRange = endOffset - startOffset;
  var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (var z = 0; z <= subdivisionsDown; z++) {
      var uBack = x / (subdivisionsThick - 1);
      var v = z / subdivisionsDown;
      var xBack = (uBack - 0.5) * 2;
      var angle = (startOffset + v * offsetRange) * Math.PI;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      var radius = lerp(verticalRadius, arcRadius, s);
      var px = xBack * thickness;
      var py = c * verticalRadius;
      var pz = s * radius;
      positions.push(px, py, pz);
      var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  } // Generate the individual vertices in our vertex buffer.


  for (var x = 0; x < subdivisionsThick; x++) {
    var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  } // Do outer surface.


  var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (var z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0); // Make triangle 2 of quad.

      indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
    }
  }

  var numVerticesDown = subdivisionsDown + 1; // front

  createSurface(numVerticesDown * 0, numVerticesDown * 4); // right

  createSurface(numVerticesDown * 5, numVerticesDown * 7); // back

  createSurface(numVerticesDown * 6, numVerticesDown * 2); // left

  createSurface(numVerticesDown * 3, numVerticesDown * 1);
  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

/**
 * Creates cylinder buffers. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCylinderBuffers
 */

/**
 * Creates cylinder vertices. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
  return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}
/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
  if (radialSubdivisions < 3) {
    throw Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  var range = endAngle - startAngle;
  var radialParts = radialSubdivisions + 1;
  var bodyParts = bodySubdivisions + 1;
  var numVertices = radialParts * bodyParts;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

  for (var slice = 0; slice < bodyParts; ++slice) {
    var v = slice / bodySubdivisions;
    var sliceAngle = v * Math.PI * 2;
    var sliceSin = Math.sin(sliceAngle);
    var ringRadius = radius + sliceSin * thickness;
    var ny = Math.cos(sliceAngle);
    var y = ny * thickness;

    for (var ring = 0; ring < radialParts; ++ring) {
      var u = ring / radialSubdivisions;
      var ringAngle = startAngle + u * range;
      var xSin = Math.sin(ringAngle);
      var zCos = Math.cos(ringAngle);
      var x = xSin * ringRadius;
      var z = zCos * ringRadius;
      var nx = xSin * sliceSin;
      var nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (var _slice = 0; _slice < bodySubdivisions; ++_slice) {
    // eslint-disable-line
    for (var _ring = 0; _ring < radialSubdivisions; ++_ring) {
      // eslint-disable-line
      var nextRingIndex = 1 + _ring;
      var nextSliceIndex = 1 + _slice;
      indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose ouside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
  if (divisions < 3) {
    throw Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0; // Note: We don't share the center vertex because that would
  // mess up texture coordinates.

  var numVertices = (divisions + 1) * (stacks + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
  var firstIndex = 0;
  var radiusSpan = radius - innerRadius;
  var pointsPerStack = divisions + 1; // Build the disk one stack at a time.

  for (var stack = 0; stack <= stacks; ++stack) {
    var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (var i = 0; i <= divisions; ++i) {
      var theta = 2.0 * Math.PI * i / divisions;
      var x = stackRadius * Math.cos(theta);
      var z = stackRadius * Math.sin(theta);
      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - i / divisions, stack / stacks);

      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        var a = firstIndex + (i + 1);
        var b = firstIndex + i;
        var c = firstIndex + i - pointsPerStack;
        var d = firstIndex + (i + 1) - pointsPerStack; // Make a quad of the vertices a, b, c, d.

        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 */


function randInt(range) {
  return Math.random() * range | 0;
}
/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, augmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, augmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */


function makeRandomVertexColors(vertices, options) {
  options = options || {};
  var numElements = vertices.position.numElements;
  var vcolors = createAugmentedTypedArray(4, numElements, Uint8Array);

  var rand = options.rand || function (ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };

  vertices.color = vcolors;

  if (vertices.indices) {
    // just make random colors if index
    for (var ii = 0; ii < numElements; ++ii) {
      vcolors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    var numVertsPerColor = options.vertsPerColor || 3;
    var numSets = numElements / numVertsPerColor;

    for (var _ii2 = 0; _ii2 < numSets; ++_ii2) {
      // eslint-disable-line
      var color = [rand(_ii2, 0), rand(_ii2, 1), rand(_ii2, 2), rand(_ii2, 3)];

      for (var jj = 0; jj < numVertsPerColor; ++jj) {
        vcolors.push(color);
      }
    }
  }

  return vertices;
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 */


function createBufferFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return attributes.createBuffersFromArrays(gl, arrays);
  };
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 */


function createBufferInfoFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return attributes.createBufferInfoFromArrays(gl, arrays);
  };
}

var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 */

function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  var length = src.length;

  for (var ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}
/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 */


function createArrayOfSameType(srcArray, length) {
  var arraySrc = getArray(srcArray);
  var newArray = new arraySrc.constructor(length);
  var newArraySpec = newArray; // If it appears to have been augmented make new one augemented

  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  } // If it was a fullspec make new one a fullspec


  if (srcArray.data) {
    newArraySpec = {
      data: newArray
    };
    helper.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }

  return newArraySpec;
}
/**
 * Concatinates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primtiives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatinated vertices.
 * @memberOf module:twgl/primitives
 */


function concatVertices(arrayOfArrays) {
  var names = {};
  var baseName; // get names of all arrays.
  // and numElements for each set of vertices

  var _loop = function _loop(ii) {
    var arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function (name) {
      // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }

      if (!baseName && name !== 'indices') {
        baseName = name;
      }

      var arrayInfo = arrays[name];
      var numComponents = getNumComponents(arrayInfo, name);
      var array = getArray(arrayInfo);
      var numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  };

  for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
    _loop(ii);
  } // compute length of combined array
  // and return one for reference


  function getLengthOfCombinedArrays(name) {
    var length = 0;
    var arraySpec;

    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var arrays = arrayOfArrays[ii];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);
      length += array.length;

      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }

    return {
      length: length,
      spec: arraySpec
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    var baseIndex = 0;
    var offset = 0;

    for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
      var arrays = arrayOfArrays[ii];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);

      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[ii];
      } else {
        copyElements(array, newArray, offset);
      }

      offset += array.length;
    }
  }

  var base = names[baseName];
  var newArrays = {};
  Object.keys(names).forEach(function (name) {
    var info = getLengthOfCombinedArrays(name);
    var newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}
/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The dupilicated vertices.
 * @memberOf module:twgl/primitives
 */


function duplicateVertices(arrays) {
  var newArrays = {};
  Object.keys(arrays).forEach(function (name) {
    var arraySpec = arrays[name];
    var srcArray = getArray(arraySpec);
    var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
exports.create3DFBufferInfo = create3DFBufferInfo;
var create3DFBuffers = createBufferFunc(create3DFVertices);
exports.create3DFBuffers = create3DFBuffers;
var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
exports.createCubeBufferInfo = createCubeBufferInfo;
var createCubeBuffers = createBufferFunc(createCubeVertices);
exports.createCubeBuffers = createCubeBuffers;
var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
exports.createPlaneBufferInfo = createPlaneBufferInfo;
var createPlaneBuffers = createBufferFunc(createPlaneVertices);
exports.createPlaneBuffers = createPlaneBuffers;
var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
exports.createSphereBufferInfo = createSphereBufferInfo;
var createSphereBuffers = createBufferFunc(createSphereVertices);
exports.createSphereBuffers = createSphereBuffers;
var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
exports.createTruncatedConeBufferInfo = createTruncatedConeBufferInfo;
var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
exports.createTruncatedConeBuffers = createTruncatedConeBuffers;
var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
exports.createXYQuadBufferInfo = createXYQuadBufferInfo;
var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
exports.createXYQuadBuffers = createXYQuadBuffers;
var createCresentBufferInfo = createBufferInfoFunc(createCresentVertices);
exports.createCresentBufferInfo = createCresentBufferInfo;
var createCresentBuffers = createBufferFunc(createCresentVertices);
exports.createCresentBuffers = createCresentBuffers;
var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
exports.createCylinderBufferInfo = createCylinderBufferInfo;
var createCylinderBuffers = createBufferFunc(createCylinderVertices);
exports.createCylinderBuffers = createCylinderBuffers;
var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
exports.createTorusBufferInfo = createTorusBufferInfo;
var createTorusBuffers = createBufferFunc(createTorusVertices);
exports.createTorusBuffers = createTorusBuffers;
var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
exports.createDiscBufferInfo = createDiscBufferInfo;
var createDiscBuffers = createBufferFunc(createDiscVertices);
exports.createDiscBuffers = createDiscBuffers;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var _exportNames = {
  addExtensionsToContext: true,
  getContext: true,
  getWebGLContext: true,
  resizeCanvasToDisplaySize: true,
  setDefaults: true
};
exports.addExtensionsToContext = addExtensionsToContext;
exports.getContext = getContext;
exports.getWebGLContext = getWebGLContext;
exports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
exports.setDefaults = setDefaults;

var attributes = _interopRequireWildcard(__webpack_require__(7));

Object.keys(attributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = attributes[key];
});

var textures = _interopRequireWildcard(__webpack_require__(8));

Object.keys(textures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = textures[key];
});

var helper = _interopRequireWildcard(__webpack_require__(0));

var utils = _interopRequireWildcard(__webpack_require__(4));

Object.keys(utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = utils[key];
});

var _draw = __webpack_require__(12);

Object.keys(_draw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _draw[key];
});

var _framebuffers = __webpack_require__(13);

Object.keys(_framebuffers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _framebuffers[key];
});

var _programs = __webpack_require__(5);

Object.keys(_programs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _programs[key];
});

var _typedarrays = __webpack_require__(1);

Object.keys(_typedarrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _typedarrays[key];
});

var _vertexArrays = __webpack_require__(14);

Object.keys(_vertexArrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _vertexArrays[key];
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * The main TWGL module.
 *
 * For most use cases you shouldn't need anything outside this module.
 * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
 *
 * @module twgl
 * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
 * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
 * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
 * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
 * @borrows module:twgl/draw.drawObjectList as drawObjectList
 * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
 * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
 * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
 * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
 * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
 * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
 * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
 * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
 * @borrows module:twgl/programs.setUniforms as setUniforms
 * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
 * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
 * @borrows module:twgl/textures.createTexture as createTexture
 * @borrows module:twgl/textures.resizeTexture as resizeTexture
 * @borrows module:twgl/textures.createTextures as createTextures
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var defaults = {
  addExtensionsToContext: true
};
/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} attribPrefix The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using unprefixed names.
 *
 *   In otherwords I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} textureColor Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} crossOrigin
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} addExtensionsToContext
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */

/**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
  attributes.setAttributeDefaults_(newDefaults); // eslint-disable-line

  textures.setTextureDefaults_(newDefaults); // eslint-disable-line
}

var prefixRE = /^(.*?)_/;

function addExtensionToContext(gl, extensionName) {
  utils.glEnumToString(gl, 0);
  var ext = gl.getExtension(extensionName);

  if (ext) {
    var enums = {};
    var fnSuffix = prefixRE.exec(extensionName)[1];
    var enumSuffix = '_' + fnSuffix;

    for (var key in ext) {
      var value = ext[key];
      var isFunc = typeof value === 'function';
      var suffix = isFunc ? fnSuffix : enumSuffix;
      var name = key; // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc

      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }

      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          helper.warn(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function (origFn) {
            return function () {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    } // pass the modified enums to glEnumToString


    enums.constructor = {
      name: ext.constructor.name
    };
    utils.glEnumToString(enums, 0);
  }

  return ext;
}
/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */


var supportedExtensions = ['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2', 'EXT_frag_depth', 'EXT_sRGB', 'EXT_shader_texture_lod', 'EXT_texture_filter_anisotropic', 'OES_element_index_uint', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_atc', 'WEBGL_compressed_texture_etc1', 'WEBGL_compressed_texture_pvrtc', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_depth_texture', 'WEBGL_draw_buffers'];
/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existance of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */

function addExtensionsToContext(gl) {
  for (var ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}
/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */


function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @memberOf module:twgl
 */


function getWebGLContext(canvas, opt_attribs) {
  var gl = create3DContext(canvas, opt_attribs);
  return gl;
}
/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */


function createContext(canvas, opt_attribs) {
  var names = ["webgl2", "webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextCreationAttirbutes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */


function getContext(canvas, opt_attribs) {
  var gl = createContext(canvas, opt_attribs);
  return gl;
}
/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */


function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  var width = canvas.clientWidth * multiplier | 0;
  var height = canvas.clientHeight * multiplier | 0;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.drawBufferInfo = drawBufferInfo;
exports.drawObjectList = drawObjectList;

var programs = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Drawing related functions
 *
 * For backward compatibily they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */

/**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {enum} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */
function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
  type = type === undefined ? gl.TRIANGLES : type;
  var indices = bufferInfo.indices;
  var elementType = bufferInfo.elementType;
  var numElements = count === undefined ? bufferInfo.numElements : count;
  offset = offset === undefined ? 0 : offset;

  if (elementType || indices) {
    if (instanceCount !== undefined) {
      gl.drawElementsInstanced(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
    } else {
      gl.drawElements(type, numElements, elementType === undefined ? gl.UNSIGNED_SHORT : bufferInfo.elementType, offset);
    }
  } else {
    if (instanceCount !== undefined) {
      gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
}
/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In otherwords `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElemnts`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */

/**
 * Draws a list of objects
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */


function drawObjectList(gl, objectsToDraw) {
  var lastUsedProgramInfo = null;
  var lastUsedBufferInfo = null;
  objectsToDraw.forEach(function (object) {
    if (object.active === false) {
      return;
    }

    var programInfo = object.programInfo;
    var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
    var bindBuffers = false;
    var type = object.type === undefined ? gl.TRIANGLES : object.type;

    if (programInfo !== lastUsedProgramInfo) {
      lastUsedProgramInfo = programInfo;
      gl.useProgram(programInfo.program); // We have to rebind buffers when changing programs because we
      // only bind buffers the program uses. So if 2 programs use the same
      // bufferInfo but the 1st one uses only positions the when the
      // we switch to the 2nd one some of the attributes will not be on.

      bindBuffers = true;
    } // Setup all the needed attributes.


    if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
      if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
        gl.bindVertexArray(null);
      }

      lastUsedBufferInfo = bufferInfo;
      programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    } // Set the uniforms.


    programs.setUniforms(programInfo, object.uniforms); // Draw

    drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
  });

  if (lastUsedBufferInfo.vertexArrayObject) {
    gl.bindVertexArray(null);
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bindFramebufferInfo = bindFramebufferInfo;
exports.createFramebufferInfo = createFramebufferInfo;
exports.resizeFramebufferInfo = resizeFramebufferInfo;

var textures = _interopRequireWildcard(__webpack_require__(8));

var helper = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Framebuffer related functions
 *
 * For backward compatibily they are available at both `twgl.framebuffer` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/framebuffers
 */
// make sure we don't see a global gl
var gl = undefined; // eslint-disable-line

var UNSIGNED_BYTE = 0x1401;
/* PixelFormat */

var DEPTH_COMPONENT = 0x1902;
var RGBA = 0x1908;
/* Framebuffer Object. */

var RGBA4 = 0x8056;
var RGB5_A1 = 0x8057;
var RGB565 = 0x8D62;
var DEPTH_COMPONENT16 = 0x81A5;
var STENCIL_INDEX = 0x1901;
var STENCIL_INDEX8 = 0x8D48;
var DEPTH_STENCIL = 0x84F9;
var COLOR_ATTACHMENT0 = 0x8CE0;
var DEPTH_ATTACHMENT = 0x8D00;
var STENCIL_ATTACHMENT = 0x8D20;
var DEPTH_STENCIL_ATTACHMENT = 0x821A;
/* TextureWrapMode */

var REPEAT = 0x2901; // eslint-disable-line

var CLAMP_TO_EDGE = 0x812F;
var MIRRORED_REPEAT = 0x8370; // eslint-disable-line

/* TextureMagFilter */

var NEAREST = 0x2600; // eslint-disable-line

var LINEAR = 0x2601;
/* TextureMinFilter */

var NEAREST_MIPMAP_NEAREST = 0x2700; // eslint-disable-line

var LINEAR_MIPMAP_NEAREST = 0x2701; // eslint-disable-line

var NEAREST_MIPMAP_LINEAR = 0x2702; // eslint-disable-line

var LINEAR_MIPMAP_LINEAR = 0x2703; // eslint-disable-line

/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attach] The attachment point. Defaults
 *   to `gl.COLOR_ATTACTMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachemnts across framebuffers.
 * @memberOf module:twgl
 */

var defaultAttachments = [{
  format: RGBA,
  type: UNSIGNED_BYTE,
  min: LINEAR,
  wrap: CLAMP_TO_EDGE
}, {
  format: DEPTH_STENCIL
}];
var attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;

function getAttachmentPointForFormat(format) {
  return attachmentsByFormat[format];
}

var renderbufferFormats = {};
renderbufferFormats[RGBA4] = true;
renderbufferFormats[RGB5_A1] = true;
renderbufferFormats[RGB565] = true;
renderbufferFormats[DEPTH_STENCIL] = true;
renderbufferFormats[DEPTH_COMPONENT16] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;

function isRenderbufferFormat(format) {
  return renderbufferFormats[format];
}
/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @memberOf module:twgl
 */

/**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */


function createFramebufferInfo(gl, attachments, width, height) {
  var target = gl.FRAMEBUFFER;
  var fb = gl.createFramebuffer();
  gl.bindFramebuffer(target, fb);
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  attachments = attachments || defaultAttachments;
  var colorAttachmentCount = 0;
  var framebufferInfo = {
    framebuffer: fb,
    attachments: [],
    width: width,
    height: height
  };
  attachments.forEach(function (attachmentOptions) {
    var attachment = attachmentOptions.attachment;
    var format = attachmentOptions.format;
    var attachmentPoint = getAttachmentPointForFormat(format);

    if (!attachmentPoint) {
      attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
    }

    if (!attachment) {
      if (isRenderbufferFormat(format)) {
        attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
        gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
      } else {
        var textureOptions = Object.assign({}, attachmentOptions);
        textureOptions.width = width;
        textureOptions.height = height;

        if (textureOptions.auto === undefined) {
          textureOptions.auto = false;
          textureOptions.min = textureOptions.min || textureOptions.minMag || gl.LINEAR;
          textureOptions.mag = textureOptions.mag || textureOptions.minMag || gl.LINEAR;
          textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || gl.CLAMP_TO_EDGE;
          textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || gl.CLAMP_TO_EDGE;
        }

        attachment = textures.createTexture(gl, textureOptions);
      }
    }

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.framebufferRenderbuffer(target, attachmentPoint, gl.RENDERBUFFER, attachment);
    } else if (helper.isTexture(gl, attachment)) {
      gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.texTarget || gl.TEXTURE_2D, attachment, attachmentOptions.level || 0);
    } else {
      throw "unknown attachment type";
    }

    framebufferInfo.attachments.push(attachment);
  });
  return framebufferInfo;
}
/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Defautt = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */


function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  framebufferInfo.width = width;
  framebufferInfo.height = height;
  attachments = attachments || defaultAttachments;
  attachments.forEach(function (attachmentOptions, ndx) {
    var attachment = framebufferInfo.attachments[ndx];
    var format = attachmentOptions.format;

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.bindRenderbuffer(gl.RENDERBUFFER, attachment);
      gl.renderbufferStorage(gl.RENDERBUFFER, format, width, height);
    } else if (helper.isTexture(gl, attachment)) {
      textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
    } else {
      throw "unknown attachment type";
    }
  });
}
/**
 * Binds a framebuffer
 *
 * This function pretty much soley exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If not passed will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */


function bindFramebufferInfo(gl, framebufferInfo, target) {
  target = target || gl.FRAMEBUFFER;

  if (framebufferInfo) {
    gl.bindFramebuffer(target, framebufferInfo.framebuffer);
    gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
  } else {
    gl.bindFramebuffer(target, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createVertexArrayInfo = createVertexArrayInfo;
exports.createVAOAndSetAttributes = createVAOAndSetAttributes;
exports.createVAOFromBufferInfo = createVAOFromBufferInfo;

var programs = _interopRequireWildcard(__webpack_require__(5));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
 * Copyright 2015, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibily they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */

/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */

/**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */
function createVertexArrayInfo(gl, programInfos, bufferInfo) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  if (!programInfos.length) {
    programInfos = [programInfos];
  }

  programInfos.forEach(function (programInfo) {
    programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  });
  gl.bindVertexArray(null);
  return {
    numElements: bufferInfo.numElements,
    elementType: bufferInfo.elementType,
    vertexArrayObject: vao
  };
}
/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOAndSetAttributes(gl, setters, attribs, indices) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  programs.setAttributes(setters, attribs);

  if (indices) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
  } // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
  // like when creating buffers for other stuff will mess up this VAO's binding


  gl.bindVertexArray(null);
  return vao;
}
/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
  return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}

/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @module RenderConstants */

/**
 * Various constants meant for use throughout the renderer.
 * @enum
 */
module.exports = {
  /**
   * The ID value to use for "no item" or when an object has been disposed.
   * @const {int}
   */
  ID_NONE: -1,

  /**
   * Optimize for fewer than this number of Drawables sharing the same Skin.
   * Going above this may cause middleware warnings or a performance penalty but should otherwise behave correctly.
   * @const {int}
   */
  SKIN_SHARE_SOFT_LIMIT: 301,

  /**
   * @enum {string}
   */
  Events: {
    /**
     * NativeSizeChanged event
     *
     * @event RenderWebGL#event:NativeSizeChanged
     * @type {object}
     * @property {Array<int>} newSize - the new size of the renderer
     */
    NativeSizeChanged: 'NativeSizeChanged'
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(10);

var twgl = __webpack_require__(1);

var RenderConstants = __webpack_require__(2);
var Silhouette = __webpack_require__(43);

/**
 * Truncate a number into what could be stored in a 32 bit floating point value.
 * @param {number} num Number to truncate.
 * @return {number} Truncated value.
 */
var toFloat32 = function () {
  var memory = new Float32Array(1);
  return function (num) {
    memory[0] = num;
    return memory[0];
  };
}();

var Skin = function (_EventEmitter) {
  _inherits(Skin, _EventEmitter);

  /**
   * Create a Skin, which stores and/or generates textures for use in rendering.
   * @param {int} id - The unique ID for this Skin.
   * @constructor
   */
  function Skin(id) {
    _classCallCheck(this, Skin);

    /** @type {int} */
    var _this = _possibleConstructorReturn(this, (Skin.__proto__ || Object.getPrototypeOf(Skin)).call(this));

    _this._id = id;

    /** @type {Vec3} */
    _this._rotationCenter = twgl.v3.create(0, 0);

    /**
     * The uniforms to be used by the vertex and pixel shaders.
     * Some of these are used by other parts of the renderer as well.
     * @type {Object.<string,*>}
     * @private
     */
    _this._uniforms = {
      /**
       * The nominal (not necessarily current) size of the current skin.
       * @type {Array<number>}
       */
      u_skinSize: [0, 0],

      /**
       * The actual WebGL texture object for the skin.
       * @type {WebGLTexture}
       */
      u_skin: null
    };

    /**
     * A silhouette to store touching data, skins are responsible for keeping it up to date.
     * @private
     */
    _this._silhouette = new Silhouette();

    _this.setMaxListeners(RenderConstants.SKIN_SHARE_SOFT_LIMIT);
    return _this;
  }

  /**
   * Dispose of this object. Do not use it after calling this method.
   */


  _createClass(Skin, [{
    key: 'dispose',
    value: function dispose() {
      this._id = RenderConstants.ID_NONE;
    }

    /**
     * @returns {boolean} true for a raster-style skin (like a BitmapSkin), false for vector-style (like SVGSkin).
     */

  }, {
    key: 'setRotationCenter',


    /**
     * Set the origin, in object space, about which this Skin should rotate.
     * @param {number} x - The x coordinate of the new rotation center.
     * @param {number} y - The y coordinate of the new rotation center.
     * @fires Skin.event:WasAltered
     */
    value: function setRotationCenter(x, y) {
      var emptySkin = this.size[0] === 0 && this.size[1] === 0;
      // Compare a 32 bit x and y value against the stored 32 bit center
      // values.
      var changed = toFloat32(x) !== this._rotationCenter[0] || toFloat32(y) !== this._rotationCenter[1];
      if (!emptySkin && changed) {
        this._rotationCenter[0] = x;
        this._rotationCenter[1] = y;
        this.emit(Skin.Events.WasAltered);
      }
    }

    /**
     * Get the center of the current bounding box
     * @return {Array<number>} the center of the current bounding box
     */

  }, {
    key: 'calculateRotationCenter',
    value: function calculateRotationCenter() {
      return [this.size[0] / 2, this.size[1] / 2];
    }

    /**
     * @abstract
     * @param {Array<number>} scale - The scaling factors to be used.
     * @return {WebGLTexture} The GL texture representation of this skin when drawing at the given size.
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: 'getTexture',
    value: function getTexture(scale) {
      return null;
    }

    /**
     * Update and returns the uniforms for this skin.
     * @param {Array<number>} scale - The scaling factors to be used.
     * @returns {object.<string, *>} the shader uniforms to be used when rendering with this Skin.
     */

  }, {
    key: 'getUniforms',
    value: function getUniforms(scale) {
      this._uniforms.u_skin = this.getTexture(scale);
      this._uniforms.u_skinSize = this.size;
      return this._uniforms;
    }

    /**
     * If the skin defers silhouette operations until the last possible minute,
     * this will be called before isTouching uses the silhouette.
     * @abstract
     */

  }, {
    key: 'updateSilhouette',
    value: function updateSilhouette() {}

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Nearest Neighbor version
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingNearest',
    value: function isTouchingNearest(vec) {
      this.updateSilhouette();
      return this._silhouette.isTouchingNearest(vec);
    }

    /**
     * Does this point touch an opaque or translucent point on this skin?
     * Linear Interpolation version
     * @param {twgl.v3} vec A texture coordinate.
     * @return {boolean} Did it touch?
     */

  }, {
    key: 'isTouchingLinear',
    value: function isTouchingLinear(vec) {
      this.updateSilhouette();
      return this._silhouette.isTouchingLinear(vec);
    }
  }, {
    key: 'isRaster',
    get: function get() {
      return false;
    }

    /**
     * @return {int} the unique ID for this Skin.
     */

  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /**
     * @returns {Vec3} the origin, in object space, about which this Skin should rotate.
     */

  }, {
    key: 'rotationCenter',
    get: function get() {
      return this._rotationCenter;
    }

    /**
     * @abstract
     * @return {Array<number>} the "native" size, in texels, of this skin.
     */

  }, {
    key: 'size',
    get: function get() {
      return [0, 0];
    }
  }]);

  return Skin;
}(EventEmitter);

/**
 * These are the events which can be emitted by instances of this class.
 * @enum {string}
 */


Skin.Events = {
  /**
   * Emitted when anything about the Skin has been altered, such as the appearance or rotation center.
   * @event Skin.event:WasAltered
   */
  WasAltered: 'WasAltered'
};

module.exports = Skin;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var twgl = __webpack_require__(1);

var ShaderManager = function () {
    /**
     * @param {WebGLRenderingContext} gl WebGL rendering context to create shaders for
     * @constructor
     */
    function ShaderManager(gl) {
        _classCallCheck(this, ShaderManager);

        this._gl = gl;

        /**
         * The cache of all shaders compiled so far, filled on demand.
         * @type {Object<ShaderManager.DRAW_MODE, Array<ProgramInfo>>}
         * @private
         */
        this._shaderCache = {};
        for (var modeName in ShaderManager.DRAW_MODE) {
            if (ShaderManager.DRAW_MODE.hasOwnProperty(modeName)) {
                this._shaderCache[modeName] = [];
            }
        }
    }

    /**
     * Fetch the shader for a particular set of active effects.
     * Build the shader if necessary.
     * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
     * @param {int} effectBits Bitmask representing the enabled effects.
     * @returns {ProgramInfo} The shader's program info.
     */


    _createClass(ShaderManager, [{
        key: 'getShader',
        value: function getShader(drawMode, effectBits) {
            var cache = this._shaderCache[drawMode];
            if (drawMode === ShaderManager.DRAW_MODE.silhouette) {
                // Silhouette mode isn't affected by these effects.
                effectBits &= ~(ShaderManager.EFFECT_INFO.color.mask | ShaderManager.EFFECT_INFO.brightness.mask);
            }
            var shader = cache[effectBits];
            if (!shader) {
                shader = cache[effectBits] = this._buildShader(drawMode, effectBits);
            }
            return shader;
        }

        /**
         * Build the shader for a particular set of active effects.
         * @param {ShaderManager.DRAW_MODE} drawMode Draw normally, silhouette, etc.
         * @param {int} effectBits Bitmask representing the enabled effects.
         * @returns {ProgramInfo} The new shader's program info.
         * @private
         */

    }, {
        key: '_buildShader',
        value: function _buildShader(drawMode, effectBits) {
            var numEffects = ShaderManager.EFFECTS.length;

            var defines = ['#define DRAW_MODE_' + drawMode];
            for (var index = 0; index < numEffects; ++index) {
                if ((effectBits & 1 << index) !== 0) {
                    defines.push('#define ENABLE_' + ShaderManager.EFFECTS[index]);
                }
            }

            var definesText = defines.join('\n') + '\n';

            /* eslint-disable global-require */
            var vsFullText = definesText + __webpack_require__(41);
            var fsFullText = definesText + __webpack_require__(40);
            /* eslint-enable global-require */

            return twgl.createProgramInfo(this._gl, [vsFullText, fsFullText]);
        }
    }]);

    return ShaderManager;
}();

/**
 * @typedef {object} ShaderManager.Effect
 * @prop {int} mask - The bit in 'effectBits' representing the effect.
 * @prop {function} converter - A conversion function which takes a Scratch value (generally in the range
 *   0..100 or -100..100) and maps it to a value useful to the shader. This
 *   mapping may not be reversible.
 * @prop {boolean} shapeChanges - Whether the effect could change the drawn shape.
 */

/**
 * Mapping of each effect name to info about that effect.
 * @enum {ShaderManager.Effect}
 */


ShaderManager.EFFECT_INFO = {
    /** Color effect */
    color: {
        mask: 1 << 0,
        converter: function converter(x) {
            return x / 200 % 1;
        },
        shapeChanges: false
    },
    /** Fisheye effect */
    fisheye: {
        mask: 1 << 1,
        converter: function converter(x) {
            return Math.max(0, (x + 100) / 100);
        },
        shapeChanges: true
    },
    /** Whirl effect */
    whirl: {
        mask: 1 << 2,
        converter: function converter(x) {
            return -x * Math.PI / 180;
        },
        shapeChanges: true
    },
    /** Pixelate effect */
    pixelate: {
        mask: 1 << 3,
        converter: function converter(x) {
            return Math.abs(x) / 10;
        },
        shapeChanges: true
    },
    /** Mosaic effect */
    mosaic: {
        mask: 1 << 4,
        converter: function converter(x) {
            x = Math.round((Math.abs(x) + 10) / 10);
            /** @todo cap by Math.min(srcWidth, srcHeight) */
            return Math.max(1, Math.min(x, 512));
        },
        shapeChanges: true
    },
    /** Brightness effect */
    brightness: {
        mask: 1 << 5,
        converter: function converter(x) {
            return Math.max(-100, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    },
    /** Ghost effect */
    ghost: {
        mask: 1 << 6,
        converter: function converter(x) {
            return 1 - Math.max(0, Math.min(x, 100)) / 100;
        },
        shapeChanges: false
    }
};

/**
 * The name of each supported effect.
 * @type {Array}
 */
ShaderManager.EFFECTS = Object.keys(ShaderManager.EFFECT_INFO);

/**
 * The available draw modes.
 * @readonly
 * @enum {string}
 */
ShaderManager.DRAW_MODE = {
    /**
     * Draw normally.
     */
    default: 'default',

    /**
     * Draw a silhouette using a solid color.
     */
    silhouette: 'silhouette',

    /**
     * Draw only the parts of the drawable which match a particular color.
     */
    colorMask: 'colorMask'
};

module.exports = ShaderManager;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hex = {
  black: '#000',
  red: '#c23621',
  green: '#25bc26',
  yellow: '#bbbb00',
  blue:  '#492ee1',
  magenta: '#d338d3',
  cyan: '#33bbc8',
  gray: '#808080',
  purple: '#708'
};
function color(fg, isInverse) {
  if(isInverse) {
    return 'color: #fff; background: '+hex[fg]+';';
  } else {
    return 'color: '+hex[fg]+';';
  }
}

module.exports = color;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.7.1
var UnicodeTrie, inflate;

inflate = __webpack_require__(33);

UnicodeTrie = (function() {
  var DATA_BLOCK_LENGTH, DATA_GRANULARITY, DATA_MASK, INDEX_1_OFFSET, INDEX_2_BLOCK_LENGTH, INDEX_2_BMP_LENGTH, INDEX_2_MASK, INDEX_SHIFT, LSCP_INDEX_2_LENGTH, LSCP_INDEX_2_OFFSET, OMITTED_BMP_INDEX_1_LENGTH, SHIFT_1, SHIFT_1_2, SHIFT_2, UTF8_2B_INDEX_2_LENGTH, UTF8_2B_INDEX_2_OFFSET;

  SHIFT_1 = 6 + 5;

  SHIFT_2 = 5;

  SHIFT_1_2 = SHIFT_1 - SHIFT_2;

  OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;

  INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;

  INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;

  INDEX_SHIFT = 2;

  DATA_BLOCK_LENGTH = 1 << SHIFT_2;

  DATA_MASK = DATA_BLOCK_LENGTH - 1;

  LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;

  LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;

  INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;

  UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;

  UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;

  INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;

  DATA_GRANULARITY = 1 << INDEX_SHIFT;

  function UnicodeTrie(data) {
    var isBuffer, uncompressedLength, view;
    isBuffer = typeof data.readUInt32BE === 'function' && typeof data.slice === 'function';
    if (isBuffer || data instanceof Uint8Array) {
      if (isBuffer) {
        this.highStart = data.readUInt32BE(0);
        this.errorValue = data.readUInt32BE(4);
        uncompressedLength = data.readUInt32BE(8);
        data = data.slice(12);
      } else {
        view = new DataView(data.buffer);
        this.highStart = view.getUint32(0);
        this.errorValue = view.getUint32(4);
        uncompressedLength = view.getUint32(8);
        data = data.subarray(12);
      }
      data = inflate(data, new Uint8Array(uncompressedLength));
      data = inflate(data, new Uint8Array(uncompressedLength));
      this.data = new Uint32Array(data.buffer);
    } else {
      this.data = data.data, this.highStart = data.highStart, this.errorValue = data.errorValue;
    }
  }

  UnicodeTrie.prototype.get = function(codePoint) {
    var index;
    if (codePoint < 0 || codePoint > 0x10ffff) {
      return this.errorValue;
    }
    if (codePoint < 0xd800 || (codePoint > 0xdbff && codePoint <= 0xffff)) {
      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint <= 0xffff) {
      index = (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    if (codePoint < this.highStart) {
      index = this.data[(INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH) + (codePoint >> SHIFT_1)];
      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];
      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }
    return this.data[this.data.length - DATA_GRANULARITY];
  };

  return UnicodeTrie;

})();

module.exports = UnicodeTrie;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var g=Q(30),E=Q(29),C=Q(28);function w(){return Y.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function I(A,B){if(w()<B)throw new RangeError("Invalid typed array length");return Y.TYPED_ARRAY_SUPPORT?(A=new Uint8Array(B)).__proto__=Y.prototype:(null===A&&(A=new Y(B)),A.length=B),A}function Y(A,B,Q){if(!(Y.TYPED_ARRAY_SUPPORT||this instanceof Y))return new Y(A,B,Q);if("number"==typeof A){if("string"==typeof B)throw new Error("If encoding is specified then the first argument must be a string");return c(this,A)}return F(this,A,B,Q)}function F(A,B,Q,g){if("number"==typeof B)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&B instanceof ArrayBuffer?function(A,B,Q,g){if(B.byteLength,Q<0||B.byteLength<Q)throw new RangeError("'offset' is out of bounds");if(B.byteLength<Q+(g||0))throw new RangeError("'length' is out of bounds");B=void 0===Q&&void 0===g?new Uint8Array(B):void 0===g?new Uint8Array(B,Q):new Uint8Array(B,Q,g);Y.TYPED_ARRAY_SUPPORT?(A=B).__proto__=Y.prototype:A=D(A,B);return A}(A,B,Q,g):"string"==typeof B?function(A,B,Q){"string"==typeof Q&&""!==Q||(Q="utf8");if(!Y.isEncoding(Q))throw new TypeError('"encoding" must be a valid string encoding');var g=0|U(B,Q),E=(A=I(A,g)).write(B,Q);E!==g&&(A=A.slice(0,E));return A}(A,B,Q):function(A,B){if(Y.isBuffer(B)){var Q=0|i(B.length);return 0===(A=I(A,Q)).length?A:(B.copy(A,0,0,Q),A)}if(B){if("undefined"!=typeof ArrayBuffer&&B.buffer instanceof ArrayBuffer||"length"in B)return"number"!=typeof B.length||(g=B.length)!=g?I(A,0):D(A,B);if("Buffer"===B.type&&C(B.data))return D(A,B.data)}var g;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(A,B)}function M(A){if("number"!=typeof A)throw new TypeError('"size" argument must be a number');if(A<0)throw new RangeError('"size" argument must not be negative')}function c(A,B){if(M(B),A=I(A,B<0?0:0|i(B)),!Y.TYPED_ARRAY_SUPPORT)for(var Q=0;Q<B;++Q)A[Q]=0;return A}function D(A,B){var Q=B.length<0?0:0|i(B.length);A=I(A,Q);for(var g=0;g<Q;g+=1)A[g]=255&B[g];return A}function i(A){if(A>=w())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w().toString(16)+" bytes");return 0|A}function U(A,B){if(Y.isBuffer(A))return A.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(A)||A instanceof ArrayBuffer))return A.byteLength;"string"!=typeof A&&(A=""+A);var Q=A.length;if(0===Q)return 0;for(var g=!1;;)switch(B){case"ascii":case"latin1":case"binary":return Q;case"utf8":case"utf-8":case void 0:return u(A).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*Q;case"hex":return Q>>>1;case"base64":return S(A).length;default:if(g)return u(A).length;B=(""+B).toLowerCase(),g=!0}}function G(A,B,Q){var g=A[B];A[B]=A[Q],A[Q]=g}function s(A,B,Q,g,E){if(0===A.length)return-1;if("string"==typeof Q?(g=Q,Q=0):Q>2147483647?Q=2147483647:Q<-2147483648&&(Q=-2147483648),Q=+Q,isNaN(Q)&&(Q=E?0:A.length-1),Q<0&&(Q=A.length+Q),Q>=A.length){if(E)return-1;Q=A.length-1}else if(Q<0){if(!E)return-1;Q=0}if("string"==typeof B&&(B=Y.from(B,g)),Y.isBuffer(B))return 0===B.length?-1:h(A,B,Q,g,E);if("number"==typeof B)return B&=255,Y.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?E?Uint8Array.prototype.indexOf.call(A,B,Q):Uint8Array.prototype.lastIndexOf.call(A,B,Q):h(A,[B],Q,g,E);throw new TypeError("val must be string, number or Buffer")}function h(A,B,Q,g,E){var C,w=1,I=A.length,Y=B.length;if(void 0!==g&&("ucs2"===(g=String(g).toLowerCase())||"ucs-2"===g||"utf16le"===g||"utf-16le"===g)){if(A.length<2||B.length<2)return-1;w=2,I/=2,Y/=2,Q/=2}function F(A,B){return 1===w?A[B]:A.readUInt16BE(B*w)}if(E){var M=-1;for(C=Q;C<I;C++)if(F(A,C)===F(B,-1===M?0:C-M)){if(-1===M&&(M=C),C-M+1===Y)return M*w}else-1!==M&&(C-=C-M),M=-1}else for(Q+Y>I&&(Q=I-Y),C=Q;C>=0;C--){for(var c=!0,D=0;D<Y;D++)if(F(A,C+D)!==F(B,D)){c=!1;break}if(c)return C}return-1}function N(A,B,Q,g){Q=Number(Q)||0;var E=A.length-Q;g?(g=Number(g))>E&&(g=E):g=E;var C=B.length;if(C%2!=0)throw new TypeError("Invalid hex string");g>C/2&&(g=C/2);for(var w=0;w<g;++w){var I=parseInt(B.substr(2*w,2),16);if(isNaN(I))return w;A[Q+w]=I}return w}function t(A,B,Q,g){return P(u(B,A.length-Q),A,Q,g)}function H(A,B,Q,g){return P(function(A){for(var B=[],Q=0;Q<A.length;++Q)B.push(255&A.charCodeAt(Q));return B}(B),A,Q,g)}function o(A,B,Q,g){return H(A,B,Q,g)}function J(A,B,Q,g){return P(S(B),A,Q,g)}function e(A,B,Q,g){return P(function(A,B){for(var Q,g,E,C=[],w=0;w<A.length&&!((B-=2)<0);++w)Q=A.charCodeAt(w),g=Q>>8,E=Q%256,C.push(E),C.push(g);return C}(B,A.length-Q),A,Q,g)}function n(A,B,Q){return 0===B&&Q===A.length?g.fromByteArray(A):g.fromByteArray(A.slice(B,Q))}function R(A,B,Q){Q=Math.min(A.length,Q);for(var g=[],E=B;E<Q;){var C,w,I,Y,F=A[E],M=null,c=F>239?4:F>223?3:F>191?2:1;if(E+c<=Q)switch(c){case 1:F<128&&(M=F);break;case 2:128==(192&(C=A[E+1]))&&(Y=(31&F)<<6|63&C)>127&&(M=Y);break;case 3:C=A[E+1],w=A[E+2],128==(192&C)&&128==(192&w)&&(Y=(15&F)<<12|(63&C)<<6|63&w)>2047&&(Y<55296||Y>57343)&&(M=Y);break;case 4:C=A[E+1],w=A[E+2],I=A[E+3],128==(192&C)&&128==(192&w)&&128==(192&I)&&(Y=(15&F)<<18|(63&C)<<12|(63&w)<<6|63&I)>65535&&Y<1114112&&(M=Y)}null===M?(M=65533,c=1):M>65535&&(M-=65536,g.push(M>>>10&1023|55296),M=56320|1023&M),g.push(M),E+=c}return function(A){var B=A.length;if(B<=a)return String.fromCharCode.apply(String,A);var Q="",g=0;for(;g<B;)Q+=String.fromCharCode.apply(String,A.slice(g,g+=a));return Q}(g)}B.Buffer=Y,B.SlowBuffer=function(A){+A!=A&&(A=0);return Y.alloc(+A)},B.INSPECT_MAX_BYTES=50,Y.TYPED_ARRAY_SUPPORT=void 0!==A.TYPED_ARRAY_SUPPORT?A.TYPED_ARRAY_SUPPORT:function(){try{var A=new Uint8Array(1);return A.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===A.foo()&&"function"==typeof A.subarray&&0===A.subarray(1,1).byteLength}catch(A){return!1}}(),B.kMaxLength=w(),Y.poolSize=8192,Y._augment=function(A){return A.__proto__=Y.prototype,A},Y.from=function(A,B,Q){return F(null,A,B,Q)},Y.TYPED_ARRAY_SUPPORT&&(Y.prototype.__proto__=Uint8Array.prototype,Y.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Y[Symbol.species]===Y&&Object.defineProperty(Y,Symbol.species,{value:null,configurable:!0})),Y.alloc=function(A,B,Q){return function(A,B,Q,g){return M(B),B<=0?I(A,B):void 0!==Q?"string"==typeof g?I(A,B).fill(Q,g):I(A,B).fill(Q):I(A,B)}(null,A,B,Q)},Y.allocUnsafe=function(A){return c(null,A)},Y.allocUnsafeSlow=function(A){return c(null,A)},Y.isBuffer=function(A){return!(null==A||!A._isBuffer)},Y.compare=function(A,B){if(!Y.isBuffer(A)||!Y.isBuffer(B))throw new TypeError("Arguments must be Buffers");if(A===B)return 0;for(var Q=A.length,g=B.length,E=0,C=Math.min(Q,g);E<C;++E)if(A[E]!==B[E]){Q=A[E],g=B[E];break}return Q<g?-1:g<Q?1:0},Y.isEncoding=function(A){switch(String(A).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Y.concat=function(A,B){if(!C(A))throw new TypeError('"list" argument must be an Array of Buffers');if(0===A.length)return Y.alloc(0);var Q;if(void 0===B)for(B=0,Q=0;Q<A.length;++Q)B+=A[Q].length;var g=Y.allocUnsafe(B),E=0;for(Q=0;Q<A.length;++Q){var w=A[Q];if(!Y.isBuffer(w))throw new TypeError('"list" argument must be an Array of Buffers');w.copy(g,E),E+=w.length}return g},Y.byteLength=U,Y.prototype._isBuffer=!0,Y.prototype.swap16=function(){var A=this.length;if(A%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var B=0;B<A;B+=2)G(this,B,B+1);return this},Y.prototype.swap32=function(){var A=this.length;if(A%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var B=0;B<A;B+=4)G(this,B,B+3),G(this,B+1,B+2);return this},Y.prototype.swap64=function(){var A=this.length;if(A%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var B=0;B<A;B+=8)G(this,B,B+7),G(this,B+1,B+6),G(this,B+2,B+5),G(this,B+3,B+4);return this},Y.prototype.toString=function(){var A=0|this.length;return 0===A?"":0===arguments.length?R(this,0,A):function(A,B,Q){var g=!1;if((void 0===B||B<0)&&(B=0),B>this.length)return"";if((void 0===Q||Q>this.length)&&(Q=this.length),Q<=0)return"";if((Q>>>=0)<=(B>>>=0))return"";for(A||(A="utf8");;)switch(A){case"hex":return k(this,B,Q);case"utf8":case"utf-8":return R(this,B,Q);case"ascii":return r(this,B,Q);case"latin1":case"binary":return j(this,B,Q);case"base64":return n(this,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y(this,B,Q);default:if(g)throw new TypeError("Unknown encoding: "+A);A=(A+"").toLowerCase(),g=!0}}.apply(this,arguments)},Y.prototype.equals=function(A){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");return this===A||0===Y.compare(this,A)},Y.prototype.inspect=function(){var A="",Q=B.INSPECT_MAX_BYTES;return this.length>0&&(A=this.toString("hex",0,Q).match(/.{2}/g).join(" "),this.length>Q&&(A+=" ... ")),"<Buffer "+A+">"},Y.prototype.compare=function(A,B,Q,g,E){if(!Y.isBuffer(A))throw new TypeError("Argument must be a Buffer");if(void 0===B&&(B=0),void 0===Q&&(Q=A?A.length:0),void 0===g&&(g=0),void 0===E&&(E=this.length),B<0||Q>A.length||g<0||E>this.length)throw new RangeError("out of range index");if(g>=E&&B>=Q)return 0;if(g>=E)return-1;if(B>=Q)return 1;if(B>>>=0,Q>>>=0,g>>>=0,E>>>=0,this===A)return 0;for(var C=E-g,w=Q-B,I=Math.min(C,w),F=this.slice(g,E),M=A.slice(B,Q),c=0;c<I;++c)if(F[c]!==M[c]){C=F[c],w=M[c];break}return C<w?-1:w<C?1:0},Y.prototype.includes=function(A,B,Q){return-1!==this.indexOf(A,B,Q)},Y.prototype.indexOf=function(A,B,Q){return s(this,A,B,Q,!0)},Y.prototype.lastIndexOf=function(A,B,Q){return s(this,A,B,Q,!1)},Y.prototype.write=function(A,B,Q,g){if(void 0===B)g="utf8",Q=this.length,B=0;else if(void 0===Q&&"string"==typeof B)g=B,Q=this.length,B=0;else{if(!isFinite(B))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");B|=0,isFinite(Q)?(Q|=0,void 0===g&&(g="utf8")):(g=Q,Q=void 0)}var E=this.length-B;if((void 0===Q||Q>E)&&(Q=E),A.length>0&&(Q<0||B<0)||B>this.length)throw new RangeError("Attempt to write outside buffer bounds");g||(g="utf8");for(var C=!1;;)switch(g){case"hex":return N(this,A,B,Q);case"utf8":case"utf-8":return t(this,A,B,Q);case"ascii":return H(this,A,B,Q);case"latin1":case"binary":return o(this,A,B,Q);case"base64":return J(this,A,B,Q);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e(this,A,B,Q);default:if(C)throw new TypeError("Unknown encoding: "+g);g=(""+g).toLowerCase(),C=!0}},Y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var a=4096;function r(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(127&A[E]);return g}function j(A,B,Q){var g="";Q=Math.min(A.length,Q);for(var E=B;E<Q;++E)g+=String.fromCharCode(A[E]);return g}function k(A,B,Q){var g=A.length;(!B||B<0)&&(B=0),(!Q||Q<0||Q>g)&&(Q=g);for(var E="",C=B;C<Q;++C)E+=W(A[C]);return E}function y(A,B,Q){for(var g=A.slice(B,Q),E="",C=0;C<g.length;C+=2)E+=String.fromCharCode(g[C]+256*g[C+1]);return E}function x(A,B,Q){if(A%1!=0||A<0)throw new RangeError("offset is not uint");if(A+B>Q)throw new RangeError("Trying to access beyond buffer length")}function m(A,B,Q,g,E,C){if(!Y.isBuffer(A))throw new TypeError('"buffer" argument must be a Buffer instance');if(B>E||B<C)throw new RangeError('"value" argument is out of bounds');if(Q+g>A.length)throw new RangeError("Index out of range")}function z(A,B,Q,g){B<0&&(B=65535+B+1);for(var E=0,C=Math.min(A.length-Q,2);E<C;++E)A[Q+E]=(B&255<<8*(g?E:1-E))>>>8*(g?E:1-E)}function d(A,B,Q,g){B<0&&(B=4294967295+B+1);for(var E=0,C=Math.min(A.length-Q,4);E<C;++E)A[Q+E]=B>>>8*(g?E:3-E)&255}function L(A,B,Q,g,E,C){if(Q+g>A.length)throw new RangeError("Index out of range");if(Q<0)throw new RangeError("Index out of range")}function T(A,B,Q,g,C){return C||L(A,0,Q,4),E.write(A,B,Q,g,23,4),Q+4}function l(A,B,Q,g,C){return C||L(A,0,Q,8),E.write(A,B,Q,g,52,8),Q+8}Y.prototype.slice=function(A,B){var Q,g=this.length;if(A=~~A,B=void 0===B?g:~~B,A<0?(A+=g)<0&&(A=0):A>g&&(A=g),B<0?(B+=g)<0&&(B=0):B>g&&(B=g),B<A&&(B=A),Y.TYPED_ARRAY_SUPPORT)(Q=this.subarray(A,B)).__proto__=Y.prototype;else{var E=B-A;Q=new Y(E,void 0);for(var C=0;C<E;++C)Q[C]=this[C+A]}return Q},Y.prototype.readUIntLE=function(A,B,Q){A|=0,B|=0,Q||x(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g},Y.prototype.readUIntBE=function(A,B,Q){A|=0,B|=0,Q||x(A,B,this.length);for(var g=this[A+--B],E=1;B>0&&(E*=256);)g+=this[A+--B]*E;return g},Y.prototype.readUInt8=function(A,B){return B||x(A,1,this.length),this[A]},Y.prototype.readUInt16LE=function(A,B){return B||x(A,2,this.length),this[A]|this[A+1]<<8},Y.prototype.readUInt16BE=function(A,B){return B||x(A,2,this.length),this[A]<<8|this[A+1]},Y.prototype.readUInt32LE=function(A,B){return B||x(A,4,this.length),(this[A]|this[A+1]<<8|this[A+2]<<16)+16777216*this[A+3]},Y.prototype.readUInt32BE=function(A,B){return B||x(A,4,this.length),16777216*this[A]+(this[A+1]<<16|this[A+2]<<8|this[A+3])},Y.prototype.readIntLE=function(A,B,Q){A|=0,B|=0,Q||x(A,B,this.length);for(var g=this[A],E=1,C=0;++C<B&&(E*=256);)g+=this[A+C]*E;return g>=(E*=128)&&(g-=Math.pow(2,8*B)),g},Y.prototype.readIntBE=function(A,B,Q){A|=0,B|=0,Q||x(A,B,this.length);for(var g=B,E=1,C=this[A+--g];g>0&&(E*=256);)C+=this[A+--g]*E;return C>=(E*=128)&&(C-=Math.pow(2,8*B)),C},Y.prototype.readInt8=function(A,B){return B||x(A,1,this.length),128&this[A]?-1*(255-this[A]+1):this[A]},Y.prototype.readInt16LE=function(A,B){B||x(A,2,this.length);var Q=this[A]|this[A+1]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt16BE=function(A,B){B||x(A,2,this.length);var Q=this[A+1]|this[A]<<8;return 32768&Q?4294901760|Q:Q},Y.prototype.readInt32LE=function(A,B){return B||x(A,4,this.length),this[A]|this[A+1]<<8|this[A+2]<<16|this[A+3]<<24},Y.prototype.readInt32BE=function(A,B){return B||x(A,4,this.length),this[A]<<24|this[A+1]<<16|this[A+2]<<8|this[A+3]},Y.prototype.readFloatLE=function(A,B){return B||x(A,4,this.length),E.read(this,A,!0,23,4)},Y.prototype.readFloatBE=function(A,B){return B||x(A,4,this.length),E.read(this,A,!1,23,4)},Y.prototype.readDoubleLE=function(A,B){return B||x(A,8,this.length),E.read(this,A,!0,52,8)},Y.prototype.readDoubleBE=function(A,B){return B||x(A,8,this.length),E.read(this,A,!1,52,8)},Y.prototype.writeUIntLE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||m(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=1,C=0;for(this[B]=255&A;++C<Q&&(E*=256);)this[B+C]=A/E&255;return B+Q},Y.prototype.writeUIntBE=function(A,B,Q,g){(A=+A,B|=0,Q|=0,g)||m(this,A,B,Q,Math.pow(2,8*Q)-1,0);var E=Q-1,C=1;for(this[B+E]=255&A;--E>=0&&(C*=256);)this[B+E]=A/C&255;return B+Q},Y.prototype.writeUInt8=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,1,255,0),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),this[B]=255&A,B+1},Y.prototype.writeUInt16LE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):z(this,A,B,!0),B+2},Y.prototype.writeUInt16BE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,2,65535,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):z(this,A,B,!1),B+2},Y.prototype.writeUInt32LE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B+3]=A>>>24,this[B+2]=A>>>16,this[B+1]=A>>>8,this[B]=255&A):d(this,A,B,!0),B+4},Y.prototype.writeUInt32BE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,4,4294967295,0),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):d(this,A,B,!1),B+4},Y.prototype.writeIntLE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);m(this,A,B,Q,E-1,-E)}var C=0,w=1,I=0;for(this[B]=255&A;++C<Q&&(w*=256);)A<0&&0===I&&0!==this[B+C-1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeIntBE=function(A,B,Q,g){if(A=+A,B|=0,!g){var E=Math.pow(2,8*Q-1);m(this,A,B,Q,E-1,-E)}var C=Q-1,w=1,I=0;for(this[B+C]=255&A;--C>=0&&(w*=256);)A<0&&0===I&&0!==this[B+C+1]&&(I=1),this[B+C]=(A/w>>0)-I&255;return B+Q},Y.prototype.writeInt8=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,1,127,-128),Y.TYPED_ARRAY_SUPPORT||(A=Math.floor(A)),A<0&&(A=255+A+1),this[B]=255&A,B+1},Y.prototype.writeInt16LE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8):z(this,A,B,!0),B+2},Y.prototype.writeInt16BE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,2,32767,-32768),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>8,this[B+1]=255&A):z(this,A,B,!1),B+2},Y.prototype.writeInt32LE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,4,2147483647,-2147483648),Y.TYPED_ARRAY_SUPPORT?(this[B]=255&A,this[B+1]=A>>>8,this[B+2]=A>>>16,this[B+3]=A>>>24):d(this,A,B,!0),B+4},Y.prototype.writeInt32BE=function(A,B,Q){return A=+A,B|=0,Q||m(this,A,B,4,2147483647,-2147483648),A<0&&(A=4294967295+A+1),Y.TYPED_ARRAY_SUPPORT?(this[B]=A>>>24,this[B+1]=A>>>16,this[B+2]=A>>>8,this[B+3]=255&A):d(this,A,B,!1),B+4},Y.prototype.writeFloatLE=function(A,B,Q){return T(this,A,B,!0,Q)},Y.prototype.writeFloatBE=function(A,B,Q){return T(this,A,B,!1,Q)},Y.prototype.writeDoubleLE=function(A,B,Q){return l(this,A,B,!0,Q)},Y.prototype.writeDoubleBE=function(A,B,Q){return l(this,A,B,!1,Q)},Y.prototype.copy=function(A,B,Q,g){if(Q||(Q=0),g||0===g||(g=this.length),B>=A.length&&(B=A.length),B||(B=0),g>0&&g<Q&&(g=Q),g===Q)return 0;if(0===A.length||0===this.length)return 0;if(B<0)throw new RangeError("targetStart out of bounds");if(Q<0||Q>=this.length)throw new RangeError("sourceStart out of bounds");if(g<0)throw new RangeError("sourceEnd out of bounds");g>this.length&&(g=this.length),A.length-B<g-Q&&(g=A.length-B+Q);var E,C=g-Q;if(this===A&&Q<B&&B<g)for(E=C-1;E>=0;--E)A[E+B]=this[E+Q];else if(C<1e3||!Y.TYPED_ARRAY_SUPPORT)for(E=0;E<C;++E)A[E+B]=this[E+Q];else Uint8Array.prototype.set.call(A,this.subarray(Q,Q+C),B);return C},Y.prototype.fill=function(A,B,Q,g){if("string"==typeof A){if("string"==typeof B?(g=B,B=0,Q=this.length):"string"==typeof Q&&(g=Q,Q=this.length),1===A.length){var E=A.charCodeAt(0);E<256&&(A=E)}if(void 0!==g&&"string"!=typeof g)throw new TypeError("encoding must be a string");if("string"==typeof g&&!Y.isEncoding(g))throw new TypeError("Unknown encoding: "+g)}else"number"==typeof A&&(A&=255);if(B<0||this.length<B||this.length<Q)throw new RangeError("Out of range index");if(Q<=B)return this;var C;if(B>>>=0,Q=void 0===Q?this.length:Q>>>0,A||(A=0),"number"==typeof A)for(C=B;C<Q;++C)this[C]=A;else{var w=Y.isBuffer(A)?A:u(new Y(A,g).toString()),I=w.length;for(C=0;C<Q-B;++C)this[C+B]=w[C%I]}return this};var f=/[^+\/0-9A-Za-z-_]/g;function W(A){return A<16?"0"+A.toString(16):A.toString(16)}function u(A,B){var Q;B=B||1/0;for(var g=A.length,E=null,C=[],w=0;w<g;++w){if((Q=A.charCodeAt(w))>55295&&Q<57344){if(!E){if(Q>56319){(B-=3)>-1&&C.push(239,191,189);continue}if(w+1===g){(B-=3)>-1&&C.push(239,191,189);continue}E=Q;continue}if(Q<56320){(B-=3)>-1&&C.push(239,191,189),E=Q;continue}Q=65536+(E-55296<<10|Q-56320)}else E&&(B-=3)>-1&&C.push(239,191,189);if(E=null,Q<128){if((B-=1)<0)break;C.push(Q)}else if(Q<2048){if((B-=2)<0)break;C.push(Q>>6|192,63&Q|128)}else if(Q<65536){if((B-=3)<0)break;C.push(Q>>12|224,Q>>6&63|128,63&Q|128)}else{if(!(Q<1114112))throw new Error("Invalid code point");if((B-=4)<0)break;C.push(Q>>18|240,Q>>12&63|128,Q>>6&63|128,63&Q|128)}}return C}function S(A){return g.toByteArray(function(A){if((A=function(A){return A.trim?A.trim():A.replace(/^\s+|\s+$/g,"")}(A).replace(f,"")).length<2)return"";for(;A.length%4!=0;)A+="=";return A}(A))}function P(A,B,Q,g){for(var E=0;E<g&&!(E+Q>=B.length||E>=A.length);++E)B[E+Q]=A[E];return E}}).call(this,Q(1))},function(A,B){var Q,g,E=A.exports={};function C(){throw new Error("setTimeout has not been defined")}function w(){throw new Error("clearTimeout has not been defined")}function I(A){if(Q===setTimeout)return setTimeout(A,0);if((Q===C||!Q)&&setTimeout)return Q=setTimeout,setTimeout(A,0);try{return Q(A,0)}catch(B){try{return Q.call(null,A,0)}catch(B){return Q.call(this,A,0)}}}!function(){try{Q="function"==typeof setTimeout?setTimeout:C}catch(A){Q=C}try{g="function"==typeof clearTimeout?clearTimeout:w}catch(A){g=w}}();var Y,F=[],M=!1,c=-1;function D(){M&&Y&&(M=!1,Y.length?F=Y.concat(F):c=-1,F.length&&i())}function i(){if(!M){var A=I(D);M=!0;for(var B=F.length;B;){for(Y=F,F=[];++c<B;)Y&&Y[c].run();c=-1,B=F.length}Y=null,M=!1,function(A){if(g===clearTimeout)return clearTimeout(A);if((g===w||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(A);try{g(A)}catch(B){try{return g.call(null,A)}catch(B){return g.call(this,A)}}}(A)}}function U(A,B){this.fun=A,this.array=B}function G(){}E.nextTick=function(A){var B=new Array(arguments.length-1);if(arguments.length>1)for(var Q=1;Q<arguments.length;Q++)B[Q-1]=arguments[Q];F.push(new U(A,B)),1!==F.length||M||I(i)},U.prototype.run=function(){this.fun.apply(null,this.array)},E.title="browser",E.browser=!0,E.env={},E.argv=[],E.version="",E.versions={},E.on=G,E.addListener=G,E.once=G,E.off=G,E.removeListener=G,E.removeAllListeners=G,E.emit=G,E.prependListener=G,E.prependOnceListener=G,E.listeners=function(A){return[]},E.binding=function(A){throw new Error("process.binding is not supported")},E.cwd=function(){return"/"},E.chdir=function(A){throw new Error("process.chdir is not supported")},E.umask=function(){return 0}},function(A,B,Q){(function(A,B){!function(A,Q){"use strict";if(!A.setImmediate){var g,E,C,w,I,Y=1,F={},M=!1,c=A.document,D=Object.getPrototypeOf&&Object.getPrototypeOf(A);D=D&&D.setTimeout?D:A,"[object process]"==={}.toString.call(A.process)?g=function(A){B.nextTick(function(){U(A)})}:!function(){if(A.postMessage&&!A.importScripts){var B=!0,Q=A.onmessage;return A.onmessage=function(){B=!1},A.postMessage("","*"),A.onmessage=Q,B}}()?A.MessageChannel?((C=new MessageChannel).port1.onmessage=function(A){U(A.data)},g=function(A){C.port2.postMessage(A)}):c&&"onreadystatechange"in c.createElement("script")?(E=c.documentElement,g=function(A){var B=c.createElement("script");B.onreadystatechange=function(){U(A),B.onreadystatechange=null,E.removeChild(B),B=null},E.appendChild(B)}):g=function(A){setTimeout(U,0,A)}:(w="setImmediate$"+Math.random()+"$",I=function(B){B.source===A&&"string"==typeof B.data&&0===B.data.indexOf(w)&&U(+B.data.slice(w.length))},A.addEventListener?A.addEventListener("message",I,!1):A.attachEvent("onmessage",I),g=function(B){A.postMessage(w+B,"*")}),D.setImmediate=function(A){"function"!=typeof A&&(A=new Function(""+A));for(var B=new Array(arguments.length-1),Q=0;Q<B.length;Q++)B[Q]=arguments[Q+1];var E={callback:A,args:B};return F[Y]=E,g(Y),Y++},D.clearImmediate=i}function i(A){delete F[A]}function U(A){if(M)setTimeout(U,0,A);else{var B=F[A];if(B){M=!0;try{!function(A){var B=A.callback,g=A.args;switch(g.length){case 0:B();break;case 1:B(g[0]);break;case 2:B(g[0],g[1]);break;case 3:B(g[0],g[1],g[2]);break;default:B.apply(Q,g)}}(B)}finally{i(A),M=!1}}}}}("undefined"==typeof self?void 0===A?this:A:self)}).call(this,Q(1),Q(32))},function(A,B,Q){(function(A){var g=void 0!==A&&A||"undefined"!=typeof self&&self||window,E=Function.prototype.apply;function C(A,B){this._id=A,this._clearFn=B}B.setTimeout=function(){return new C(E.call(setTimeout,g,arguments),clearTimeout)},B.setInterval=function(){return new C(E.call(setInterval,g,arguments),clearInterval)},B.clearTimeout=B.clearInterval=function(A){A&&A.close()},C.prototype.unref=C.prototype.ref=function(){},C.prototype.close=function(){this._clearFn.call(g,this._id)},B.enroll=function(A,B){clearTimeout(A._idleTimeoutId),A._idleTimeout=B},B.unenroll=function(A){clearTimeout(A._idleTimeoutId),A._idleTimeout=-1},B._unrefActive=B.active=function(A){clearTimeout(A._idleTimeoutId);var B=A._idleTimeout;B>=0&&(A._idleTimeoutId=setTimeout(function(){A._onTimeout&&A._onTimeout()},B))},Q(33),B.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==A&&A.setImmediate||this&&this.setImmediate,B.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==A&&A.clearImmediate||this&&this.clearImmediate}).call(this,Q(1))},function(A,B,Q){(function(A,B,g){var E,C,w=w||self,I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol?"symbol":typeof A};if(function A(B,Q,g){function C(I,Y){if(!Q[I]){if(!B[I]){if(!Y&&("function"==typeof E&&E))return E(I,!0);if(w)return w(I,!0);var F=new Error("Cannot find module '"+I+"'");throw F.code="MODULE_NOT_FOUND",F}var M=Q[I]={exports:{}};B[I][0].call(M.exports,function(A){var Q=B[I][1][A];return C(Q||A)},M,M.exports,A,B,Q,g)}return Q[I].exports}for(var w="function"==typeof E&&E,I=0;I<g.length;I++)C(g[I]);return C}({1:[function(B,Q,g){(function(A,Q,g,E,C,Y,F,M){function D(B){i(),A.stdout.write(B),K=B.length}function i(){for(;K-- >0;)A.stdout.write("\b")}function U(){}function G(A){if(void 0===A)return!1;if("function"!=typeof A)throw new Error("Callback must be a function");return!0}function s(A,B){if("string"==typeof A&&(A=new Error(A)),"function"==typeof B)return B.call(this,A);throw A}function h(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var A=arguments[0],B=arguments[1],Q=arguments[2];if("number"==typeof arguments[2]){this._background=arguments[2];Q=arguments[3]}if(void 0===Q&&(Q=U),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);this.bitmap={data:new g(A*B*4),width:A,height:B};for(var E=0;E<this.bitmap.data.length;E+=4)this.bitmap.data.writeUInt32BE(this._background,E);Q.call(this,null,this)}else if("object"==I(arguments[0])&&arguments[0].constructor==h){var C=arguments[0];if(void 0===(Q=arguments[1])&&(Q=U),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);var w=new g(C.bitmap.data.length);C.scan(0,0,C.bitmap.width,C.bitmap.height,function(A,B,Q){var g=C.bitmap.data.readUInt32BE(Q,!0);w.writeUInt32BE(g,Q,!0)}),this.bitmap={data:w,width:C.bitmap.width,height:C.bitmap.height},this._quality=C._quality,this._deflateLevel=C._deflateLevel,this._deflateStrategy=C._deflateStrategy,this._filterType=C._filterType,this._rgba=C._rgba,this._background=C._background,Q.call(this,null,this)}else if(W({exact:!0}).test(arguments[0])){var Y=arguments[0];if(void 0===(Q=arguments[1])&&(Q=U),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);var F=this;n(Y,function(A,B,E){if(A)return s.call(F,A,Q);if("object"!=(void 0===E?"undefined":I(E))||!g.isBuffer(E))return s.call(F,"Could not load Buffer from URL <"+Y+"> (HTTP: "+B.statusCode+")",Q);var C=N(E);return"string"!=typeof C?s.call(F,"Could not find MIME for Buffer <"+Y+"> (HTTP: "+B.statusCode+")",Q):void t.call(F,E,C,Q)})}else if("string"==typeof arguments[0]){var M=arguments[0];if(void 0===(Q=arguments[1])&&(Q=U),"function"!=typeof Q)return s.call(this,"cb must be a function",Q);F=this;!function(A,B){z(A,0,262,function(A,Q){if(!A){var g=d(Q);return B&&B(null,g&&g.mime||"")}B(null,"")})}(M,function(A,B){e.readFile(M,function(A,g){return A?s.call(F,A,Q):void t.call(F,g,B,Q)})})}else{if("object"!=I(arguments[0]))return s.call(this,"No matching constructor overloading was found. Please see the docs for how to call the Jimp constructor.",Q);var c=arguments[0],D=N(c);Q=arguments[1];if(!g.isBuffer(c))return s.call(this,"data must be a Buffer",Q);if("string"!=typeof D)return s.call(this,"mime must be a string",Q);if("function"!=typeof Q)return s.call(this,"cb must be a function",Q);t.call(this,c,D,Q)}}function N(A,B){var Q=d(A);return Q?Q.mime:B?j.lookup(B):null}function t(A,B,Q){var E=this;switch(this._originalMime=B,B.toLowerCase()){case h.MIME_PNG:(new R).parse(A,function(A,B){return A?s.call(E,A,Q):(E.bitmap={data:new g(B.data),width:B.width,height:B.height},Q.call(E,null,E))});break;case h.MIME_JPEG:try{return this.bitmap=a.decode(A),function(A,B){var Q;try{Q=T.create(B).parse()}catch(A){return}if(Q&&Q.tags&&Q.tags.Orientation)switch(Q.tags.Orientation){case 1:break;case 2:A.mirror(!0,!1);break;case 3:A.rotate(180);break;case 4:A.mirror(!1,!0);break;case 5:A.mirror(!0,!1).rotate(270);break;case 6:A.rotate(90);break;case 7:A.mirror(!0,!1).rotate(90);break;case 8:A.rotate(270)}}(this,A),Q.call(this,null,this)}catch(A){return Q.call(this,A,this)}case h.MIME_BMP:return this.bitmap=r.decode(A),Q.call(this,null,this);default:return s.call(this,"Unsupported MIME type: "+B,Q)}}function H(A){return new h(A.bitmap.width,A.bitmap.height,A._background).composite(A,0,0).bitmap}function o(A,B,Q,g,E){if(E.width>0&&E.height>0){var C=B.pages[E.page].clone().crop(E.x,E.y,E.width,E.height);return A.composite(C,Q+E.xoffset,g+E.yoffset)}return A}function J(A,B){for(var Q=0,g=0;g<B.length;g++)A.chars[B[g]]&&(Q+=A.chars[B[g]].xoffset+(A.kernings[B[g]]&&A.kernings[B[g]][B[g+1]]?A.kernings[B[g]][B[g+1]]:0)+(A.chars[B[g]].xadvance||0));return Q}var e,n,R=B("pngjs").PNG,a=B("jpeg-js"),r=B("bmp-js"),j=B("mime"),k=B("tinycolor2"),y=B("./resize.js"),x=B("./resize2.js"),m=B("stream-to-buffer"),z=B("read-chunk"),d=B("file-type"),L=B("pixelmatch"),T=B("exif-parser"),l=B("./phash.js"),f=B("bignumber.js"),W=B("url-regex"),u=B("load-bmfont"),S=B("path"),P=Q.Promise||B("es6-promise").Promise,K=0;A.on("exit",i),h.read=function(A,B){return new P(function(Q,E){if(B=B||function(A,B){A?E(A):Q(B)},"string"!=typeof A&&("object"!=(void 0===A?"undefined":I(A))||!g.isBuffer(A)))return s.call(this,"src must be a string or a Buffer",B);new h(A,B)})},h.AUTO=-1,h.MIME_PNG="image/png",h.MIME_JPEG="image/jpeg",h.MIME_BMP="image/bmp",h.PNG_FILTER_AUTO=-1,h.PNG_FILTER_NONE=0,h.PNG_FILTER_SUB=1,h.PNG_FILTER_UP=2,h.PNG_FILTER_AVERAGE=3,h.PNG_FILTER_PAETH=4,h.RESIZE_NEAREST_NEIGHBOR="nearestNeighbor",h.RESIZE_BILINEAR="bilinearInterpolation",h.RESIZE_BICUBIC="bicubicInterpolation",h.RESIZE_HERMITE="hermiteInterpolation",h.RESIZE_BEZIER="bezierInterpolation",h.HORIZONTAL_ALIGN_LEFT=1,h.HORIZONTAL_ALIGN_CENTER=2,h.HORIZONTAL_ALIGN_RIGHT=4,h.VERTICAL_ALIGN_TOP=8,h.VERTICAL_ALIGN_MIDDLE=16,h.VERTICAL_ALIGN_BOTTOM=32,h.FONT_SANS_8_BLACK=S.join(M,"fonts/open-sans/open-sans-8-black/open-sans-8-black.fnt"),h.FONT_SANS_16_BLACK=S.join(M,"fonts/open-sans/open-sans-16-black/open-sans-16-black.fnt"),h.FONT_SANS_32_BLACK=S.join(M,"fonts/open-sans/open-sans-32-black/open-sans-32-black.fnt"),h.FONT_SANS_64_BLACK=S.join(M,"fonts/open-sans/open-sans-64-black/open-sans-64-black.fnt"),h.FONT_SANS_128_BLACK=S.join(M,"fonts/open-sans/open-sans-128-black/open-sans-128-black.fnt"),h.FONT_SANS_8_WHITE=S.join(M,"fonts/open-sans/open-sans-8-white/open-sans-8-white.fnt"),h.FONT_SANS_16_WHITE=S.join(M,"fonts/open-sans/open-sans-16-white/open-sans-16-white.fnt"),h.FONT_SANS_32_WHITE=S.join(M,"fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt"),h.FONT_SANS_64_WHITE=S.join(M,"fonts/open-sans/open-sans-64-white/open-sans-64-white.fnt"),h.FONT_SANS_128_WHITE=S.join(M,"fonts/open-sans/open-sans-128-white/open-sans-128-white.fnt"),h.rgbaToInt=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B||"number"!=typeof Q||"number"!=typeof g)return s.call(this,"r, g, b and a must be numbers",E);if(A<0||A>255)return s.call(this,"r must be between 0 and 255",E);if((B<0||B>255)&&s.call(this,"g must be between 0 and 255",E),Q<0||Q>255)return s.call(this,"b must be between 0 and 255",E);if(g<0||g>255)return s.call(this,"a must be between 0 and 255",E);var C=A*Math.pow(256,3)+B*Math.pow(256,2)+Q*Math.pow(256,1)+g*Math.pow(256,0);return G(E)?E.call(this,null,C):C},h.intToRGBA=function(A,B){if("number"!=typeof A)return s.call(this,"i must be a number",B);var Q={};return Q.r=Math.floor(A/Math.pow(256,3)),Q.g=Math.floor((A-Q.r*Math.pow(256,3))/Math.pow(256,2)),Q.b=Math.floor((A-Q.r*Math.pow(256,3)-Q.g*Math.pow(256,2))/Math.pow(256,1)),Q.a=Math.floor((A-Q.r*Math.pow(256,3)-Q.g*Math.pow(256,2)-Q.b*Math.pow(256,1))/Math.pow(256,0)),G(B)?B.call(this,null,Q):Q},h.limit255=function(A){return A=Math.max(A,0),Math.min(A,255)},h.diff=function(A,B,Q){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=h||"object"!=(void 0===B?"undefined":I(B))||B.constructor!=h)return s.call(this,"img1 and img2 must be an Jimp images");if(A.bitmap.width!=B.bitmap.width||A.bitmap.height!=B.bitmap.height)switch(A.bitmap.width*A.bitmap.height>B.bitmap.width*B.bitmap.height){case!0:A=A.clone().resize(B.bitmap.width,B.bitmap.height);break;default:B=B.clone().resize(A.bitmap.width,A.bitmap.height)}if("number"!=typeof(Q=Q||.1)||Q<0||Q>1)return s.call(this,"threshold must be a number between 0 and 1");var g=new h(A.bitmap.width,A.bitmap.height,4294967295);return{percent:L(A.bitmap.data,B.bitmap.data,g.bitmap.data,g.bitmap.width,g.bitmap.height,{threshold:Q})/(g.bitmap.width*g.bitmap.height),image:g}},h.distance=function(A,B){var Q=new l,g=Q.getHash(A),E=Q.getHash(B);return Q.distance(g,E)},h.prototype.bitmap={data:null,width:null,height:null},h.prototype._quality=100,h.prototype._deflateLevel=9,h.prototype._deflateStrategy=3,h.prototype._filterType=h.PNG_FILTER_AUTO,h.prototype._rgba=!0,h.prototype._background=0,h.prototype.clone=function(A){var B=new h(this);return G(A)?A.call(B,null,B):B},h.prototype.quality=function(A,B){return"number"!=typeof A?s.call(this,"n must be a number",B):A<0||A>100?s.call(this,"n must be a number 0 - 100",B):(this._quality=Math.round(A),G(B)?B.call(this,null,this):this)},h.prototype.deflateLevel=function(A,B){return"number"!=typeof A?s.call(this,"l must be a number",B):A<0||A>9?s.call(this,"l must be a number 0 - 9",B):(this._deflateLevel=Math.round(A),G(B)?B.call(this,null,this):this)},h.prototype.deflateStrategy=function(A,B){return"number"!=typeof A?s.call(this,"s must be a number",B):A<0||A>3?s.call(this,"s must be a number 0 - 3",B):(this._deflateStrategy=Math.round(A),G(B)?B.call(this,null,this):this)},h.prototype.filterType=function(A,B){return"number"!=typeof A?s.call(this,"n must be a number",B):A<-1||A>4?s.call(this,"n must be -1 (auto) or a number 0 - 4",B):(this._filterType=Math.round(A),G(B)?B.call(this,null,this):this)},h.prototype.rgba=function(A,B){return"boolean"!=typeof A?s.call(this,"bool must be a boolean, true for RGBA or false for RGB",B):(this._rgba=A,G(B)?B.call(this,null,this):this)},h.prototype.background=function(A,B){return"number"!=typeof A?s.call(this,"hex must be a hexadecimal rgba value",B):(this._background=A,G(B)?B.call(this,null,this):this)},h.prototype.scan=function(A,B,Q,g,E,C){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",C);if("number"!=typeof Q||"number"!=typeof g)return s.call(this,"w and h must be numbers",C);if("function"!=typeof E)return s.call(this,"f must be a function",C);A=Math.round(A),B=Math.round(B),Q=Math.round(Q),g=Math.round(g);for(var w=B;w<B+g;w++)for(var I=A;I<A+Q;I++){var Y=this.bitmap.width*w+I<<2;E.call(this,I,w,Y)}return G(C)?C.call(this,null,this):this},h.prototype.getPixelIndex=function(A,B,Q){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",Q);A=Math.round(A),B=Math.round(B);var g=this.bitmap.width*B+A<<2;return(A<0||A>this.bitmap.width)&&(g=-1),(B<0||B>this.bitmap.height)&&(g=-1),G(Q)?Q.call(this,null,g):g},h.prototype.getPixelColor=h.prototype.getPixelColour=function(A,B,Q){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",Q);A=Math.round(A),B=Math.round(B);var g=this.getPixelIndex(A,B),E=this.bitmap.data.readUInt32BE(g);return G(Q)?Q.call(this,null,E):E},h.prototype.setPixelColor=h.prototype.setPixelColour=function(A,B,Q,g){if("number"!=typeof A||"number"!=typeof B||"number"!=typeof Q)return s.call(this,"hex, x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this.getPixelIndex(B,Q);return this.bitmap.data.writeUInt32BE(A,E,!0),G(g)?g.call(this,null,this):this};for(var V=[],p=0;p<65;p++){var b=p>1?new f(Array(65).join("1"),2).toString(p):NaN;V.push(b.length)}h.prototype.hash=function(A,B){if("function"==typeof(A=A||64)&&(B=A,A=64),"number"!=typeof A)return s.call(this,"base must be a number",B);if(A<2||A>64)return s.call(this,"base must be a number between 2 and 64",B);var Q=(new l).getHash(this);for(Q=new f(Q,2).toString(A);Q.length<V[A];)Q="0"+Q;return G(B)?B.call(this,null,Q):Q},h.prototype.crop=function(A,B,Q,E,C){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"x and y must be numbers",C);if("number"!=typeof Q||"number"!=typeof E)return s.call(this,"w and h must be numbers",C);A=Math.round(A),B=Math.round(B),Q=Math.round(Q),E=Math.round(E);var w=new g(this.bitmap.data.length),I=0;return this.scan(A,B,Q,E,function(A,B,Q){var g=this.bitmap.data.readUInt32BE(Q,!0);w.writeUInt32BE(g,I,!0),I+=4}),this.bitmap.data=new g(w),this.bitmap.width=Q,this.bitmap.height=E,G(C)?C.call(this,null,this):this},h.prototype.autocrop=function(){for(var A,B=this.bitmap.width,Q=this.bitmap.height,g=2e-4,E=!0,C=0,w=arguments.length;C<w;C++)"number"==typeof arguments[C]&&(g=arguments[C]),"boolean"==typeof arguments[C]&&(E=arguments[C]),"function"==typeof arguments[C]&&(A=arguments[C]);var I=this.getPixelColor(0,0),Y=0,F=0,M=0,c=0,D=h.intToRGBA(I);A:for(var i=0;i<Q-1;i++){for(var U=0;U<B;U++){var s=this.getPixelColor(U,i),N=h.intToRGBA(s);if(Math.abs(Math.max(D.r-N.r^2,D.r-N.r-D.a+N.a^2)+Math.max(D.g-N.g^2,D.g-N.g-D.a+N.a^2)+Math.max(D.b-N.b^2,D.b-N.b-D.a+N.a^2))/196608>g)break A}Y++}A:for(U=0;U<B-1;U++){for(i=0+Y;i<Q;i++){s=this.getPixelColor(U,i),N=h.intToRGBA(s);if(Math.abs(Math.max(D.r-N.r^2,D.r-N.r-D.a+N.a^2)+Math.max(D.g-N.g^2,D.g-N.g-D.a+N.a^2)+Math.max(D.b-N.b^2,D.b-N.b-D.a+N.a^2))/196608>g)break A}F++}I=this.getPixelColor(B-1,Q-1);A:for(i=Q-1;i>=0+Y+1;i--){for(U=B-F-1;U>=0;U--){s=this.getPixelColor(U,i),N=h.intToRGBA(s);if(Math.abs(Math.max(D.r-N.r^2,D.r-N.r-D.a+N.a^2)+Math.max(D.g-N.g^2,D.g-N.g-D.a+N.a^2)+Math.max(D.b-N.b^2,D.b-N.b-D.a+N.a^2))/196608>g)break A}M++}A:for(U=B-1;U>=0+F+1;U--){for(i=Q-1;i>=0+Y;i--){s=this.getPixelColor(U,i),N=h.intToRGBA(s);if(Math.abs(Math.max(D.r-N.r^2,D.r-N.r-D.a+N.a^2)+Math.max(D.g-N.g^2,D.g-N.g-D.a+N.a^2)+Math.max(D.b-N.b^2,D.b-N.b-D.a+N.a^2))/196608>g)break A}c++}var t=B-(c+F),H=Q-(M+Y);return(E?0!==F&&0!==Y&&0!==c&&0!==M:0!==F||0!==Y||0!==c||0!==M)&&this.crop(F,Y,t,H),G(A)?A.call(this,null,this):this},h.prototype.blit=function(A,B,Q,g,E,C,w,Y){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=h)return s.call(this,"The source must be a Jimp image",Y);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",Y);if("function"==typeof g)Y=g,g=0,E=0,C=A.bitmap.width,w=A.bitmap.height;else{if((void 0===g?"undefined":I(g))!=(void 0===E?"undefined":I(E))||(void 0===E?"undefined":I(E))!=(void 0===C?"undefined":I(C))||(void 0===C?"undefined":I(C))!=(void 0===w?"undefined":I(w)))return s.call(this,"srcx, srcy, srcw, srch must be numbers",Y);g=g||0,E=E||0,C=C||A.bitmap.width,w=w||A.bitmap.height}B=Math.round(B),Q=Math.round(Q),g=Math.round(g),E=Math.round(E),C=Math.round(C),w=Math.round(w);var F=this;return A.scan(g,E,C,w,function(A,C,w){var I=F.getPixelIndex(B+A-g,Q+C-E);F.bitmap.data[I]=this.bitmap.data[w],F.bitmap.data[I+1]=this.bitmap.data[w+1],F.bitmap.data[I+2]=this.bitmap.data[w+2],F.bitmap.data[I+3]=this.bitmap.data[w+3]}),G(Y)?Y.call(this,null,this):this},h.prototype.mask=function(A,B,Q,g){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=h)return s.call(this,"The source must be a Jimp image",g);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this;return A.scan(0,0,A.bitmap.width,A.bitmap.height,function(A,g,C){var w=E.getPixelIndex(B+A,Q+g),I=(this.bitmap.data[C+0]+this.bitmap.data[C+1]+this.bitmap.data[C+2])/3;E.bitmap.data[w+3]*=I/255}),G(g)?g.call(this,null,this):this},h.prototype.composite=function(A,B,Q,g){if("object"!=(void 0===A?"undefined":I(A))||A.constructor!=h)return s.call(this,"The source must be a Jimp image",g);if("number"!=typeof B||"number"!=typeof Q)return s.call(this,"x and y must be numbers",g);B=Math.round(B),Q=Math.round(Q);var E=this;return A.scan(0,0,A.bitmap.width,A.bitmap.height,function(A,g,C){var w=E.getPixelIndex(B+A,Q+g),I=this.bitmap.data[C+0]/255,Y=this.bitmap.data[C+1]/255,F=this.bitmap.data[C+2]/255,M=this.bitmap.data[C+3]/255,c=E.bitmap.data[w+0]/255,D=E.bitmap.data[w+1]/255,i=E.bitmap.data[w+2]/255,U=E.bitmap.data[w+3]/255,G=U+M-U*M,s=(I*M+c*U*(1-M))/G,N=(Y*M+D*U*(1-M))/G,t=(F*M+i*U*(1-M))/G;E.bitmap.data[w+0]=h.limit255(255*s),E.bitmap.data[w+1]=h.limit255(255*N),E.bitmap.data[w+2]=h.limit255(255*t),E.bitmap.data[w+3]=h.limit255(255*G)}),G(g)?g.call(this,null,this):this},h.prototype.brightness=function(A,B){return"number"!=typeof A?s.call(this,"val must be numbers",B):A<-1||A>1?s.call(this,"val must be a number between -1 and +1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){A<0?(this.bitmap.data[g]=this.bitmap.data[g]*(1+A),this.bitmap.data[g+1]=this.bitmap.data[g+1]*(1+A),this.bitmap.data[g+2]=this.bitmap.data[g+2]*(1+A)):(this.bitmap.data[g]=this.bitmap.data[g]+(255-this.bitmap.data[g])*A,this.bitmap.data[g+1]=this.bitmap.data[g+1]+(255-this.bitmap.data[g+1])*A,this.bitmap.data[g+2]=this.bitmap.data[g+2]+(255-this.bitmap.data[g+2])*A)}),G(B)?B.call(this,null,this):this)},h.prototype.contrast=function(A,B){function Q(B){var Q;return A<0?((Q=B>127?1-B/255:B/255)<0&&(Q=0),Q=.5*Math.pow(2*Q,1+A),B>127?255*(1-Q):255*Q):((Q=B>127?1-B/255:B/255)<0&&(Q=0),Q=.5*Math.pow(2*Q,1==A?127:1/(1-A)),B>127?255*(1-Q):255*Q)}return"number"!=typeof A?s.call(this,"val must be numbers",B):A<-1||A>1?s.call(this,"val must be a number between -1 and +1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,g){this.bitmap.data[g]=Q(this.bitmap.data[g]),this.bitmap.data[g+1]=Q(this.bitmap.data[g+1]),this.bitmap.data[g+2]=Q(this.bitmap.data[g+2])}),G(B)?B.call(this,null,this):this)},h.prototype.posterize=function(A,B){return"number"!=typeof A?s.call(this,"n must be numbers",B):(A<2&&(A=2),this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){this.bitmap.data[g]=Math.floor(this.bitmap.data[g]/255*(A-1))/(A-1)*255,this.bitmap.data[g+1]=Math.floor(this.bitmap.data[g+1]/255*(A-1))/(A-1)*255,this.bitmap.data[g+2]=Math.floor(this.bitmap.data[g+2]/255*(A-1))/(A-1)*255}),G(B)?B.call(this,null,this):this)},h.prototype.normalize=function(A){var B=function(){var A={r:new Array(256).fill(0),g:new Array(256).fill(0),b:new Array(256).fill(0)};return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){A.r[this.bitmap.data[g+0]]++,A.g[this.bitmap.data[g+1]]++,A.b[this.bitmap.data[g+2]]++}),A}.call(this),Q=function(A,B,Q){return 255*(A-B)/(Q-B)},g=function(A){return[A.findIndex(function(A){return A>0}),255-A.slice().reverse().findIndex(function(A){return A>0})]},E={r:g(B.r),g:g(B.g),b:g(B.b)};return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,g){var C=this.bitmap.data[g+0],w=this.bitmap.data[g+1],I=this.bitmap.data[g+2];this.bitmap.data[g+0]=Q(C,E.r[0],E.r[1]),this.bitmap.data[g+1]=Q(w,E.g[0],E.g[1]),this.bitmap.data[g+2]=Q(I,E.b[0],E.b[1])}),G(A)?A.call(this,null,this):this},h.prototype.invert=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data[Q]=255-this.bitmap.data[Q],this.bitmap.data[Q+1]=255-this.bitmap.data[Q+1],this.bitmap.data[Q+2]=255-this.bitmap.data[Q+2]}),G(A)?A.call(this,null,this):this},h.prototype.mirror=h.prototype.flip=function(A,B,Q){if("boolean"!=typeof A||"boolean"!=typeof B)return s.call(this,"horizontal and vertical must be Booleans",Q);var E=new g(this.bitmap.data.length);return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(Q,g,C){var w=A?this.bitmap.width-1-Q:Q,I=B?this.bitmap.height-1-g:g,Y=this.bitmap.width*I+w<<2,F=this.bitmap.data.readUInt32BE(C,!0);E.writeUInt32BE(F,Y,!0)}),this.bitmap.data=new g(E),G(Q)?Q.call(this,null,this):this},h.prototype.gaussian=function(A,B){if("number"!=typeof A)return s.call(this,"r must be a number",B);if(A<1)return s.call(this,"r must be greater than 0",B);for(var Q=Math.ceil(2.57*A),g=0;g<this.bitmap.height;g++){D("Gaussian: "+Math.round(g/this.bitmap.height*100)+"%");for(var E=0;E<this.bitmap.width;E++)for(var C=0,w=0,I=0,Y=0,F=0,M=g-Q;M<g+Q+1;M++){for(var c=E-Q;c<E+Q+1;c++){var U=Math.min(this.bitmap.width-1,Math.max(0,c)),h=Math.min(this.bitmap.height-1,Math.max(0,M)),N=(c-E)*(c-E)+(M-g)*(M-g),t=Math.exp(-N/(2*A*A))/(2*Math.PI*A*A),H=h*this.bitmap.width+U<<2;C+=this.bitmap.data[H]*t,w+=this.bitmap.data[H+1]*t,I+=this.bitmap.data[H+2]*t,Y+=this.bitmap.data[H+3]*t,F+=t}H=g*this.bitmap.width+E<<2;this.bitmap.data[H]=Math.round(C/F),this.bitmap.data[H+1]=Math.round(w/F),this.bitmap.data[H+2]=Math.round(I/F),this.bitmap.data[H+3]=Math.round(Y/F)}}return i(),G(B)?B.call(this,null,this):this};var X,v=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],O=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];h.prototype.blur=function(A,B){if("number"!=typeof A)return s.call(this,"r must be a number",B);if(A<1)return s.call(this,"r must be greater than 0",B);for(var Q,g,E,C,w,I,Y,F,M,c,D,i,U,h,N=this.bitmap.width-1,t=this.bitmap.height-1,H=(this.bitmap.width,this.bitmap.height,A+1),o=v[A],J=O[A],e=[],n=[],R=[],a=[],r=[],j=[],k=2;k-- >0;){for(U=i=0,I=0;I<this.bitmap.height;I++){for(Q=this.bitmap.data[U]*H,g=this.bitmap.data[U+1]*H,E=this.bitmap.data[U+2]*H,C=this.bitmap.data[U+3]*H,Y=1;Y<=A;Y++)F=U+((Y>N?N:Y)<<2),Q+=this.bitmap.data[F++],g+=this.bitmap.data[F++],E+=this.bitmap.data[F++],C+=this.bitmap.data[F];for(w=0;w<this.bitmap.width;w++)e[i]=Q,n[i]=g,R[i]=E,a[i]=C,0==I&&(r[w]=((F=w+H)<N?F:N)<<2,j[w]=(F=w-A)>0?F<<2:0),M=U+r[w],c=U+j[w],Q+=this.bitmap.data[M++]-this.bitmap.data[c++],g+=this.bitmap.data[M++]-this.bitmap.data[c++],E+=this.bitmap.data[M++]-this.bitmap.data[c++],C+=this.bitmap.data[M]-this.bitmap.data[c],i++;U+=this.bitmap.width<<2}for(w=0;w<this.bitmap.width;w++){for(Q=e[D=w]*H,g=n[D]*H,E=R[D]*H,C=a[D]*H,Y=1;Y<=A;Y++)Q+=e[D+=Y>t?0:this.bitmap.width],g+=n[D],E+=R[D],C+=a[D];for(i=w<<2,I=0;I<this.bitmap.height;I++)this.bitmap.data[i+3]=h=C*o>>>J,h>255&&(this.bitmap.data[i+3]=255),h>0?(h=255/h,this.bitmap.data[i]=(Q*o>>>J)*h,this.bitmap.data[i+1]=(g*o>>>J)*h,this.bitmap.data[i+2]=(E*o>>>J)*h):this.bitmap.data[i]=this.bitmap.data[i+1]=this.bitmap.data[i+2]=0,0==w&&(r[I]=((F=I+H)<t?F:t)*this.bitmap.width,j[I]=(F=I-A)>0?F*this.bitmap.width:0),M=w+r[I],c=w+j[I],Q+=e[M]-e[c],g+=n[M]-n[c],E+=R[M]-R[c],C+=a[M]-a[c],i+=this.bitmap.width<<2}}return G(B)?B.call(this,null,this):this},h.prototype.greyscale=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){var g=parseInt(.2126*this.bitmap.data[Q]+.7152*this.bitmap.data[Q+1]+.0722*this.bitmap.data[Q+2],10);this.bitmap.data[Q]=g,this.bitmap.data[Q+1]=g,this.bitmap.data[Q+2]=g}),G(A)?A.call(this,null,this):this},h.prototype.grayscale=h.prototype.greyscale,h.prototype.sepia=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){var g=this.bitmap.data[Q],E=this.bitmap.data[Q+1],C=this.bitmap.data[Q+2];C=.272*(g=.393*g+.769*E+.189*C)+.534*(E=.349*g+.686*E+.168*C)+.131*C,this.bitmap.data[Q]=g<255?g:255,this.bitmap.data[Q+1]=E<255?E:255,this.bitmap.data[Q+2]=C<255?C:255}),G(A)?A.call(this,null,this):this},h.prototype.opacity=function(A,B){return"number"!=typeof A?s.call(this,"f must be a number",B):A<0||A>1?s.call(this,"f must be a number from 0 to 1",B):(this.scan(0,0,this.bitmap.width,this.bitmap.height,function(B,Q,g){var E=this.bitmap.data[g+3]*A;this.bitmap.data[g+3]=E}),G(B)?B.call(this,null,this):this)},h.prototype.fade=function(A,B){return"number"!=typeof A?s.call(this,"f must be a number",B):A<0||A>1?s.call(this,"f must be a number from 0 to 1",B):(this.opacity(1-A),G(B)?B.call(this,null,this):this)},h.prototype.opaque=function(A){return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data[Q+3]=255}),G(A)?A.call(this,null,this):this},h.prototype.resize=function(A,B,Q,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);if("function"==typeof Q&&void 0===E&&(E=Q,Q=null),A==h.AUTO&&B==h.AUTO)return s.call(this,"w and h cannot both the set to auto",E);if(A==h.AUTO&&(A=this.bitmap.width*(B/this.bitmap.height)),B==h.AUTO&&(B=this.bitmap.height*(A/this.bitmap.width)),A=Math.round(A),B=Math.round(B),"function"==typeof x[Q]){var C={data:new g(A*B*4),width:A,height:B};x[Q](this.bitmap,C),this.bitmap=C}else{var w=this;new y(this.bitmap.width,this.bitmap.height,A,B,!0,!0,function(Q){w.bitmap.data=new g(Q),w.bitmap.width=A,w.bitmap.height=B}).resize(this.bitmap.data)}return G(E)?E.call(this,null,this):this},h.prototype.cover=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);Q&&"function"==typeof Q&&void 0===E?(E=Q,Q=null,g=null):"function"==typeof g&&void 0===E&&(E=g,g=null);var C=7&(Q=Q||h.HORIZONTAL_ALIGN_CENTER|h.VERTICAL_ALIGN_MIDDLE),w=Q>>3;if((0==C||C&C-1)&&(0==w||w&w-1))return s.call(this,"only use one flag per alignment direction",E);var I=C>>1,Y=w>>1,F=A/B>this.bitmap.width/this.bitmap.height?A/this.bitmap.width:B/this.bitmap.height;return this.scale(F,g),this.crop((this.bitmap.width-A)/2*I,(this.bitmap.height-B)/2*Y,A,B),G(E)?E.call(this,null,this):this},h.prototype.contain=function(A,B,Q,g,E){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",E);switch(void 0===Q?"undefined":I(Q)){case"string":"function"==typeof g&&void 0===E&&(E=g),g=Q,Q=null;case"function":void 0===E&&(E=Q),g=null,Q=null;default:"function"==typeof g&&void 0===E&&(E=g,g=null)}var C=7&(Q=Q||h.HORIZONTAL_ALIGN_CENTER|h.VERTICAL_ALIGN_MIDDLE),w=Q>>3;if((0==C||C&C-1)&&(0==w||w&w-1))return s.call(this,"only use one flag per alignment direction",E);var Y=C>>1,F=w>>1,M=A/B>this.bitmap.width/this.bitmap.height?B/this.bitmap.height:A/this.bitmap.width,c=this.clone().scale(M,g);return this.resize(A,B,g),this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data.writeUInt32BE(this._background,Q)}),this.blit(c,(this.bitmap.width-c.bitmap.width)/2*Y,(this.bitmap.height-c.bitmap.height)/2*F),G(E)?E.call(this,null,this):this},h.prototype.scale=function(A,B,Q){if("number"!=typeof A)return s.call(this,"f must be a number",Q);if(A<0)return s.call(this,"f must be a positive number",Q);"function"==typeof B&&void 0===Q&&(Q=B,B=null);var g=this.bitmap.width*A,E=this.bitmap.height*A;return this.resize(g,E,B),G(Q)?Q.call(this,null,this):this},h.prototype.scaleToFit=function(A,B,Q,g){if("number"!=typeof A||"number"!=typeof B)return s.call(this,"w and h must be numbers",g);"function"==typeof Q&&void 0===g&&(g=Q,Q=null);var E=A/B>this.bitmap.width/this.bitmap.height?B/this.bitmap.height:A/this.bitmap.width;return this.scale(E,Q),G(g)?g.call(this,null,this):this},h.prototype.rotate=function(A,B,Q){return void 0!==B&&null!==B||(B=!0),"function"==typeof B&&void 0===Q&&(Q=B,B=!0),"number"!=typeof A?s.call(this,"deg must be a number",Q):"boolean"!=typeof B&&"string"!=typeof B?s.call(this,"mode must be a boolean or a string",Q):(A%90==0&&!1!==B?function(A){for(var B=Math.round(A/90)%4;B<0;)B+=4;for(;B>0;){for(var Q=new g(this.bitmap.data.length),E=0,C=0;C<this.bitmap.width;C++)for(var w=this.bitmap.height-1;w>=0;w--){var I=this.bitmap.width*w+C<<2,Y=this.bitmap.data.readUInt32BE(I,!0);Q.writeUInt32BE(Y,E,!0),E+=4}this.bitmap.data=new g(Q);var F=this.bitmap.width;this.bitmap.width=this.bitmap.height,this.bitmap.height=F,B--}}.call(this,A,Q):function(A,B){function Q(A,B){return function(Q,g){return{x:Q+A,y:g+B}}}var E,C,w=A%360*Math.PI/180,I=Math.cos(w),Y=Math.sin(w);if(1==B||"string"==typeof B){E=Math.round(Math.abs(this.bitmap.width*I)+Math.abs(this.bitmap.height*Y)),C=Math.round(Math.abs(this.bitmap.width*Y)+Math.abs(this.bitmap.height*I));var F=this.clone();this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,B,Q){this.bitmap.data.writeUInt32BE(this._background,Q)});var M=Math.max(E,C,this.bitmap.width,this.bitmap.height);this.resize(M,M,B),this.blit(F,this.bitmap.width/2-F.bitmap.width/2,this.bitmap.height/2-F.bitmap.height/2)}for(var c=new g(this.bitmap.data.length),D=Q(-this.bitmap.width/2,-this.bitmap.height/2),i=Q(this.bitmap.width/2,this.bitmap.height/2),U=0;U<this.bitmap.height;U++)for(var G=0;G<this.bitmap.width;G++){var s=D(G,this.bitmap.height-U),h=i(I*s.x-Y*s.y,I*s.y+Y*s.x);if(h.x>=0&&h.x<this.bitmap.width&&h.y>=0&&h.y<this.bitmap.height){var N=(this.bitmap.width*(this.bitmap.height-h.y|0)+h.x|0)<<2,t=this.bitmap.data.readUInt32BE(N,!0),H=this.bitmap.width*U+G<<2;c.writeUInt32BE(t,H)}else H=this.bitmap.width*U+G<<2,c.writeUInt32BE(this._background,H)}this.bitmap.data=c,(1==B||"string"==typeof B)&&(G=this.bitmap.width/2-E/2,U=this.bitmap.height/2-C/2,this.crop(G,U,E,C))}.call(this,A,B,Q),G(Q)?Q.call(this,null,this):this)},h.prototype.getBuffer=function(A,B){if(A==h.AUTO&&(A=this._originalMime||h.MIME_PNG),"string"!=typeof A)return s.call(this,"mime must be a string",B);if("function"!=typeof B)return s.call(this,"cb must be a function",B);switch(A.toLowerCase()){case h.MIME_PNG:var Q=this,E=new R({width:this.bitmap.width,height:this.bitmap.height,bitDepth:8,deflateLevel:this._deflateLevel,deflateStrategy:this._deflateStrategy,filterType:this._filterType,colorType:this._rgba?6:2,inputHasAlpha:!0});this._rgba?E.data=new g(this.bitmap.data):E.data=H(this).data,m(E.pack(),function(A,g){return B.call(Q,null,g)});break;case h.MIME_JPEG:var C=a.encode(H(this),this._quality);return B.call(this,null,C.data);case h.MIME_BMP:var w=r.encode(H(this));return B.call(this,null,w.data);default:return B.call(this,"Unsupported MIME type: "+A)}return this},h.prototype.getBase64=function(A,B){return A==h.AUTO&&(A=this._originalMime||h.MIME_PNG),"string"!=typeof A?s.call(this,"mime must be a string",B):"function"!=typeof B?s.call(this,"cb must be a function",B):(this.getBuffer(A,function(Q,g){var E="data:"+A+";base64,"+g.toString("base64");return B.call(this,null,E)}),this)},h.prototype.dither565=function(A){var B=[1,9,3,11,13,5,15,7,4,12,2,10,16,8,14,6];return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(A,Q,g){var E=B[((3&Q)<<2)+A%4];this.bitmap.data[g]=Math.min(this.bitmap.data[g]+E,255),this.bitmap.data[g+1]=Math.min(this.bitmap.data[g+1]+E,255),this.bitmap.data[g+2]=Math.min(this.bitmap.data[g+2]+E,255)}),G(A)?A.call(this,null,this):this},h.prototype.dither16=h.prototype.dither565,h.prototype.color=h.prototype.colour=function(A,B){if(!A||!Array.isArray(A))return s.call(this,"actions must be an array",B);var Q=this;return this.scan(0,0,this.bitmap.width,this.bitmap.height,function(g,E,C){var w=k({r:this.bitmap.data[C],g:this.bitmap.data[C+1],b:this.bitmap.data[C+2]}),I=function(A,B){return c=w.toRgb(),c[A]=Math.max(0,Math.min(c[A]+B,255)),k(c)};A.forEach(function(A){if("mix"===A.apply)w=k.mix(w,A.params[0],A.params[1]);else if("tint"===A.apply)w=k.mix(w,"white",A.params[0]);else if("shade"===A.apply)w=k.mix(w,"black",A.params[0]);else if("xor"===A.apply){var g=k(A.params[0]).toRgb();w=w.toRgb(),w=k({r:w.r^g.r,g:w.g^g.g,b:w.b^g.b})}else if("red"===A.apply)w=I("r",A.params[0]);else if("green"===A.apply)w=I("g",A.params[0]);else if("blue"===A.apply)w=I("b",A.params[0]);else{"hue"===A.apply&&(A.apply="spin");var E=w[A.apply];if(!E)return s.call(Q,"action "+A.apply+" not supported",B);w=E.apply(w,A.params)}}),w=w.toRgb(),this.bitmap.data[C]=w.r,this.bitmap.data[C+1]=w.g,this.bitmap.data[C+2]=w.b}),G(B)?B.call(this,null,this):this},h.loadFont=function(A,B){if("string"!=typeof A)return s.call(this,"file must be a string",B);var Q=this;return new P(function(g,E){B=B||function(A,B){A?E(A):g(B)},u(A,function(g,E){var C={},w={};if(g)return s.call(Q,g,B);for(var I=0;I<E.chars.length;I++)C[String.fromCharCode(E.chars[I].id)]=E.chars[I];for(I=0;I<E.kernings.length;I++){var Y=String.fromCharCode(E.kernings[I].first);w[Y]=w[Y]||{},w[Y][String.fromCharCode(E.kernings[I].second)]=E.kernings[I].amount}(function(A,B){var Q=B.map(function(B){return h.read(A+"/"+B)});return P.all(Q)})(S.dirname(A),E.pages).then(function(A){B(null,{chars:C,kernings:w,pages:A,common:E.common,info:E.info})})})})},h.prototype.print=function(A,B,Q,g,E,C){if("function"==typeof E&&void 0===C&&(C=E,E=1/0),void 0===E&&(E=1/0),"object"!=(void 0===A?"undefined":I(A)))return s.call(this,"font must be a Jimp loadFont",C);if("number"!=typeof B||"number"!=typeof Q||"number"!=typeof E)return s.call(this,"x, y and maxWidth must be numbers",C);if("string"!=typeof g)return s.call(this,"text must be a string",C);if("number"!=typeof E)return s.call(this,"maxWidth must be a number",C);for(var w=this,Y=g.split(" "),F="",M=0;M<Y.length;M++){var c=F+Y[M]+" ";J(A,c)>E&&M>0?(w=w.print(A,B,Q,F),F=Y[M]+" ",Q+=A.common.lineHeight):F=c}return function(A,B,Q,g){for(var E=0;E<g.length;E++)A.chars[g[E]]&&(o(this,A,B,Q,A.chars[g[E]]),B+=(A.kernings[g[E]]&&A.kernings[g[E]][g[E+1]]?A.kernings[g[E]][g[E+1]]:0)+(A.chars[g[E]].xadvance||0))}.call(this,A,B,Q,F),G(C)?C.call(this,null,w):w},h.prototype.write=function(A,B){if("string"!=typeof A)return s.call(this,"path must be a string",B);if(void 0===B&&(B=function(){}),"function"!=typeof B)return s.call(this,"cb must be a function",B);var Q=this,g=j.lookup(A);return this.getBuffer(g,function(g,E){if(g)return s.call(Q,g,B);var C=e.createWriteStream(A);C.on("open",function(A){C.write(E),C.end()}).on("error",function(A){return s.call(Q,A,B)}),C.on("finish",function(A){return B.call(Q,null,Q)})}),this},"object"==(void 0===w?"undefined":I(w))&&(X=w),"object"==("undefined"==typeof self?"undefined":I(self))&&(X=self),X.Jimp=h,X.Buffer=g}).call(this,B("_process"),void 0!==A?A:"undefined"!=typeof self?self:void 0!==w?w:{},B("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..")},{"./phash.js":107,"./resize.js":108,"./resize2.js":109,_process:12,"bignumber.js":4,"bmp-js":5,buffer:14,"es6-promise":16,"exif-parser":18,"file-type":27,"jpeg-js":36,"load-bmfont":39,mime:41,path:59,pixelmatch:60,pngjs:80,"read-chunk":83,"stream-to-buffer":95,tinycolor2:98,"url-regex":100}],2:[function(A,B,Q){var g=A("util/"),E=Array.prototype.slice,C=Object.prototype.hasOwnProperty,w=B.exports=M;function I(A,B){return g.isUndefined(B)?""+B:g.isNumber(B)&&!isFinite(B)?B.toString():g.isFunction(B)||g.isRegExp(B)?B.toString():B}function Y(A,B){return g.isString(A)?A.length<B?A:A.slice(0,B):A}function F(A,B,Q,g,E){throw new w.AssertionError({message:Q,actual:A,expected:B,operator:g,stackStartFunction:E})}function M(A,B){A||F(A,!0,B,"==",w.ok)}function c(A,B){if(A===B)return!0;if(g.isBuffer(A)&&g.isBuffer(B)){if(A.length!=B.length)return!1;for(var Q=0;Q<A.length;Q++)if(A[Q]!==B[Q])return!1;return!0}return g.isDate(A)&&g.isDate(B)?A.getTime()===B.getTime():g.isRegExp(A)&&g.isRegExp(B)?A.source===B.source&&A.global===B.global&&A.multiline===B.multiline&&A.lastIndex===B.lastIndex&&A.ignoreCase===B.ignoreCase:g.isObject(A)||g.isObject(B)?function(A,B){if(g.isNullOrUndefined(A)||g.isNullOrUndefined(B))return!1;if(A.prototype!==B.prototype)return!1;if(g.isPrimitive(A)||g.isPrimitive(B))return A===B;var Q=D(A),C=D(B);if(Q&&!C||!Q&&C)return!1;if(Q)return A=E.call(A),B=E.call(B),c(A,B);var w,I,Y=G(A),F=G(B);if(Y.length!=F.length)return!1;for(Y.sort(),F.sort(),I=Y.length-1;I>=0;I--)if(Y[I]!=F[I])return!1;for(I=Y.length-1;I>=0;I--)if(w=Y[I],!c(A[w],B[w]))return!1;return!0}(A,B):A==B}function D(A){return"[object Arguments]"==Object.prototype.toString.call(A)}function i(A,B){return!(!A||!B)&&("[object RegExp]"==Object.prototype.toString.call(B)?B.test(A):A instanceof B||!0===B.call({},A))}function U(A,B,Q,E){var C;g.isString(Q)&&(E=Q,Q=null);try{B()}catch(A){C=A}if(E=(Q&&Q.name?" ("+Q.name+").":".")+(E?" "+E:"."),A&&!C&&F(C,Q,"Missing expected exception"+E),!A&&i(C,Q)&&F(C,Q,"Got unwanted exception"+E),A&&C&&Q&&!i(C,Q)||!A&&C)throw C}w.AssertionError=function(A){var B;this.name="AssertionError",this.actual=A.actual,this.expected=A.expected,this.operator=A.operator,A.message?(this.message=A.message,this.generatedMessage=!1):(this.message=(B=this,Y(JSON.stringify(B.actual,I),128)+" "+B.operator+" "+Y(JSON.stringify(B.expected,I),128)),this.generatedMessage=!0);var Q=A.stackStartFunction||F;if(Error.captureStackTrace)Error.captureStackTrace(this,Q);else{var g=new Error;if(g.stack){var E=g.stack,C=Q.name,w=E.indexOf("\n"+C);if(w>=0){var M=E.indexOf("\n",w+1);E=E.substring(M+1)}this.stack=E}}},g.inherits(w.AssertionError,Error),w.fail=F,w.ok=M,w.equal=function(A,B,Q){A!=B&&F(A,B,Q,"==",w.equal)},w.notEqual=function(A,B,Q){A==B&&F(A,B,Q,"!=",w.notEqual)},w.deepEqual=function(A,B,Q){c(A,B)||F(A,B,Q,"deepEqual",w.deepEqual)},w.notDeepEqual=function(A,B,Q){c(A,B)&&F(A,B,Q,"notDeepEqual",w.notDeepEqual)},w.strictEqual=function(A,B,Q){A!==B&&F(A,B,Q,"===",w.strictEqual)},w.notStrictEqual=function(A,B,Q){A===B&&F(A,B,Q,"!==",w.notStrictEqual)},w.throws=function(A,B,Q){U.apply(this,[!0].concat(E.call(arguments)))},w.doesNotThrow=function(A,B){U.apply(this,[!1].concat(E.call(arguments)))},w.ifError=function(A){if(A)throw A};var G=Object.keys||function(A){var B=[];for(var Q in A)C.call(A,Q)&&B.push(Q);return B}},{"util/":103}],3:[function(A,B,Q){"use strict";Q.toByteArray=function(A){var B,Q,g,w,I,Y,F=A.length;if(F%4>0)throw new Error("Invalid string. Length must be a multiple of 4");I="="===A[F-2]?2:"="===A[F-1]?1:0,Y=new C(3*F/4-I),g=I>0?F-4:F;var M=0;for(B=0,Q=0;B<g;B+=4,Q+=3)w=E[A.charCodeAt(B)]<<18|E[A.charCodeAt(B+1)]<<12|E[A.charCodeAt(B+2)]<<6|E[A.charCodeAt(B+3)],Y[M++]=w>>16&255,Y[M++]=w>>8&255,Y[M++]=255&w;2===I?(w=E[A.charCodeAt(B)]<<2|E[A.charCodeAt(B+1)]>>4,Y[M++]=255&w):1===I&&(w=E[A.charCodeAt(B)]<<10|E[A.charCodeAt(B+1)]<<4|E[A.charCodeAt(B+2)]>>2,Y[M++]=w>>8&255,Y[M++]=255&w);return Y},Q.fromByteArray=function(A){for(var B,Q=A.length,E=Q%3,C="",I=[],Y=0,F=Q-E;Y<F;Y+=16383)I.push(w(A,Y,Y+16383>F?F:Y+16383));1===E?(B=A[Q-1],C+=g[B>>2],C+=g[B<<4&63],C+="=="):2===E&&(B=(A[Q-2]<<8)+A[Q-1],C+=g[B>>10],C+=g[B>>4&63],C+=g[B<<2&63],C+="=");return I.push(C),I.join("")};var g=[],E=[],C="undefined"!=typeof Uint8Array?Uint8Array:Array;function w(A,B,Q){for(var E,C,w=[],I=B;I<Q;I+=3)E=(A[I]<<16)+(A[I+1]<<8)+A[I+2],w.push(g[(C=E)>>18&63]+g[C>>12&63]+g[C>>6&63]+g[63&C]);return w.join("")}!function(){for(var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=0,Q=A.length;B<Q;++B)g[B]=A[B],E[A.charCodeAt(B)]=B;E["-".charCodeAt(0)]=62,E["_".charCodeAt(0)]=63}()},{}],4:[function(A,B,g){!function(A){"use strict";var E,w,Y,F=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,M=Math.ceil,c=Math.floor,D=" not a boolean or binary digit",i="rounding mode",U="number type has more than 15 significant digits",G="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",s=1e14,h=14,N=9007199254740991,t=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],H=1e7,o=1e9;function J(A){var B=0|A;return A>0||A===B?B:B-1}function e(A){for(var B,Q,g=1,E=A.length,C=A[0]+"";g<E;){for(B=A[g++]+"",Q=h-B.length;Q--;B="0"+B);C+=B}for(E=C.length;48===C.charCodeAt(--E););return C.slice(0,E+1||1)}function n(A,B){var Q,g,E=A.c,C=B.c,w=A.s,I=B.s,Y=A.e,F=B.e;if(!w||!I)return null;if(Q=E&&!E[0],g=C&&!C[0],Q||g)return Q?g?0:-I:w;if(w!=I)return w;if(Q=w<0,g=Y==F,!E||!C)return g?0:!E^Q?1:-1;if(!g)return Y>F^Q?1:-1;for(I=(Y=E.length)<(F=C.length)?Y:F,w=0;w<I;w++)if(E[w]!=C[w])return E[w]>C[w]^Q?1:-1;return Y==F?0:Y>F^Q?1:-1}function R(A,B,Q){return(A=y(A))>=B&&A<=Q}function a(A){return"[object Array]"==Object.prototype.toString.call(A)}function r(A,B,Q){for(var g,E,C=[0],w=0,I=A.length;w<I;){for(E=C.length;E--;C[E]*=B);for(C[g=0]+=G.indexOf(A.charAt(w++));g<C.length;g++)C[g]>Q-1&&(null==C[g+1]&&(C[g+1]=0),C[g+1]+=C[g]/Q|0,C[g]%=Q)}return C.reverse()}function j(A,B){return(A.length>1?A.charAt(0)+"."+A.slice(1):A)+(B<0?"e":"e+")+B}function k(A,B){var Q,g;if(B<0){for(g="0.";++B;g+="0");A=g+A}else if(++B>(Q=A.length)){for(g="0",B-=Q;--B;g+="0");A+=g}else B<Q&&(A=A.slice(0,B)+"."+A.slice(B));return A}function y(A){return(A=parseFloat(A))<0?M(A):c(A)}"undefined"!=typeof crypto&&(w=crypto),(E=function A(B){var Q,g,E,C,x,m,z,d=0,L=O.prototype,T=new O(1),l=20,f=4,W=-7,u=21,S=-1e7,P=1e7,K=!0,V=$,p=!1,b=1,X=100,v={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0};function O(A,B){var Q,g,E,C,w,I,M=this;if(!(M instanceof O))return K&&BA(26,"constructor call without new",A),new O(A,B);if(null!=B&&V(B,2,64,d,"base")){if(I=A+"",10==(B|=0))return QA(M=new O(A instanceof O?A:I),l+M.e+1,f);if((C="number"==typeof A)&&0*A!=0||!new RegExp("^-?"+(Q="["+G.slice(0,B)+"]+")+"(?:\\."+Q+")?$",B<37?"i":"").test(I))return Y(M,I,C,B);C?(M.s=1/A<0?(I=I.slice(1),-1):1,K&&I.replace(/^0\.0*|\./,"").length>15&&BA(d,U,A),C=!1):M.s=45===I.charCodeAt(0)?(I=I.slice(1),-1):1,I=Z(I,10,B,M.s)}else{if(A instanceof O)return M.s=A.s,M.e=A.e,M.c=(A=A.c)?A.slice():A,void(d=0);if((C="number"==typeof A)&&0*A==0){if(M.s=1/A<0?(A=-A,-1):1,A===~~A){for(g=0,E=A;E>=10;E/=10,g++);return M.e=g,M.c=[A],void(d=0)}I=A+""}else{if(!F.test(I=A+""))return Y(M,I,C);M.s=45===I.charCodeAt(0)?(I=I.slice(1),-1):1}}for((g=I.indexOf("."))>-1&&(I=I.replace(".","")),(E=I.search(/e/i))>0?(g<0&&(g=E),g+=+I.slice(E+1),I=I.substring(0,E)):g<0&&(g=I.length),E=0;48===I.charCodeAt(E);E++);for(w=I.length;48===I.charCodeAt(--w););if(I=I.slice(E,w+1))if(w=I.length,C&&K&&w>15&&(A>N||A!==c(A))&&BA(d,U,M.s*A),(g=g-E-1)>P)M.c=M.e=null;else if(g<S)M.c=[M.e=0];else{if(M.e=g,M.c=[],E=(g+1)%h,g<0&&(E+=h),E<w){for(E&&M.c.push(+I.slice(0,E)),w-=h;E<w;)M.c.push(+I.slice(E,E+=h));I=I.slice(E),E=h-I.length}else E-=w;for(;E--;I+="0");M.c.push(+I)}else M.c=[M.e=0];d=0}function Z(A,B,g,E){var C,w,I,Y,F,M,c,D=A.indexOf("."),i=l,U=f;for(g<37&&(A=A.toLowerCase()),D>=0&&(I=X,X=0,A=A.replace(".",""),F=(c=new O(g)).pow(A.length-D),X=I,c.c=r(k(e(F.c),F.e),10,B),c.e=c.c.length),w=I=(M=r(A,g,B)).length;0==M[--I];M.pop());if(!M[0])return"0";if(D<0?--w:(F.c=M,F.e=w,F.s=E,M=(F=Q(F,c,i,U,B)).c,Y=F.r,w=F.e),D=M[C=w+i+1],I=B/2,Y=Y||C<0||null!=M[C+1],Y=U<4?(null!=D||Y)&&(0==U||U==(F.s<0?3:2)):D>I||D==I&&(4==U||Y||6==U&&1&M[C-1]||U==(F.s<0?8:7)),C<1||!M[0])A=Y?k("1",-i):"0";else{if(M.length=C,Y)for(--B;++M[--C]>B;)M[C]=0,C||(++w,M.unshift(1));for(I=M.length;!M[--I];);for(D=0,A="";D<=I;A+=G.charAt(M[D++]));A=k(A,w)}return A}function q(A,B,Q,g){var E,C,w,I,Y;if(Q=null!=Q&&V(Q,0,8,g,i)?0|Q:f,!A.c)return A.toString();if(E=A.c[0],w=A.e,null==B)Y=e(A.c),Y=19==g||24==g&&w<=W?j(Y,w):k(Y,w);else if(C=(A=QA(new O(A),B,Q)).e,I=(Y=e(A.c)).length,19==g||24==g&&(B<=C||C<=W)){for(;I<B;Y+="0",I++);Y=j(Y,C)}else if(B-=w,Y=k(Y,C),C+1>I){if(--B>0)for(Y+=".";B--;Y+="0");}else if((B+=C-I)>0)for(C+1==I&&(Y+=".");B--;Y+="0");return A.s<0&&E?"-"+Y:Y}function _(A,B){var Q,g,E=0;for(a(A[0])&&(A=A[0]),Q=new O(A[0]);++E<A.length;){if(!(g=new O(A[E])).s){Q=g;break}B.call(Q,g)&&(Q=g)}return Q}function $(A,B,Q,g,E){return(A<B||A>Q||A!=y(A))&&BA(g,(E||"decimal places")+(A<B||A>Q?" out of range":" not an integer"),A),!0}function AA(A,B,Q){for(var g=1,E=B.length;!B[--E];B.pop());for(E=B[0];E>=10;E/=10,g++);return(Q=g+Q*h-1)>P?A.c=A.e=null:Q<S?A.c=[A.e=0]:(A.e=Q,A.c=B),A}function BA(A,B,Q){var g=new Error(["new BigNumber","cmp","config","div","divToInt","eq","gt","gte","lt","lte","minus","mod","plus","precision","random","round","shift","times","toDigits","toExponential","toFixed","toFormat","toFraction","pow","toPrecision","toString","BigNumber"][A]+"() "+B+": "+Q);throw g.name="BigNumber Error",d=0,g}function QA(A,B,Q,g){var E,C,w,I,Y,F,D,i=A.c,U=t;if(i){A:{for(E=1,I=i[0];I>=10;I/=10,E++);if((C=B-E)<0)C+=h,w=B,D=(Y=i[F=0])/U[E-w-1]%10|0;else if((F=M((C+1)/h))>=i.length){if(!g)break A;for(;i.length<=F;i.push(0));Y=D=0,E=1,w=(C%=h)-h+1}else{for(Y=I=i[F],E=1;I>=10;I/=10,E++);D=(w=(C%=h)-h+E)<0?0:Y/U[E-w-1]%10|0}if(g=g||B<0||null!=i[F+1]||(w<0?Y:Y%U[E-w-1]),g=Q<4?(D||g)&&(0==Q||Q==(A.s<0?3:2)):D>5||5==D&&(4==Q||g||6==Q&&(C>0?w>0?Y/U[E-w]:0:i[F-1])%10&1||Q==(A.s<0?8:7)),B<1||!i[0])return i.length=0,g?(B-=A.e+1,i[0]=U[(h-B%h)%h],A.e=-B||0):i[0]=A.e=0,A;if(0==C?(i.length=F,I=1,F--):(i.length=F+1,I=U[h-C],i[F]=w>0?c(Y/U[E-w]%U[w])*I:0),g)for(;;){if(0==F){for(C=1,w=i[0];w>=10;w/=10,C++);for(w=i[0]+=I,I=1;w>=10;w/=10,I++);C!=I&&(A.e++,i[0]==s&&(i[0]=1));break}if(i[F]+=I,i[F]!=s)break;i[F--]=0,I=1}for(C=i.length;0===i[--C];i.pop());}A.e>P?A.c=A.e=null:A.e<S&&(A.c=[A.e=0])}return A}return O.another=A,O.ROUND_UP=0,O.ROUND_DOWN=1,O.ROUND_CEIL=2,O.ROUND_FLOOR=3,O.ROUND_HALF_UP=4,O.ROUND_HALF_DOWN=5,O.ROUND_HALF_EVEN=6,O.ROUND_HALF_CEIL=7,O.ROUND_HALF_FLOOR=8,O.EUCLID=9,O.config=function(){var A,B,Q=0,g={},E=arguments,C=E[0],Y=C&&"object"==(void 0===C?"undefined":I(C))?function(){if(C.hasOwnProperty(B))return null!=(A=C[B])}:function(){if(E.length>Q)return null!=(A=E[Q++])};return Y(B="DECIMAL_PLACES")&&V(A,0,o,2,B)&&(l=0|A),g[B]=l,Y(B="ROUNDING_MODE")&&V(A,0,8,2,B)&&(f=0|A),g[B]=f,Y(B="EXPONENTIAL_AT")&&(a(A)?V(A[0],-o,0,2,B)&&V(A[1],0,o,2,B)&&(W=0|A[0],u=0|A[1]):V(A,-o,o,2,B)&&(W=-(u=0|(A<0?-A:A)))),g[B]=[W,u],Y(B="RANGE")&&(a(A)?V(A[0],-o,-1,2,B)&&V(A[1],1,o,2,B)&&(S=0|A[0],P=0|A[1]):V(A,-o,o,2,B)&&(0|A?S=-(P=0|(A<0?-A:A)):K&&BA(2,B+" cannot be zero",A))),g[B]=[S,P],Y(B="ERRORS")&&(A===!!A||1===A||0===A?(d=0,V=(K=!!A)?$:R):K&&BA(2,B+D,A)),g[B]=K,Y(B="CRYPTO")&&(A===!!A||1===A||0===A?(p=!(!A||!w),A&&!p&&K&&BA(2,"crypto unavailable",w)):K&&BA(2,B+D,A)),g[B]=p,Y(B="MODULO_MODE")&&V(A,0,9,2,B)&&(b=0|A),g[B]=b,Y(B="POW_PRECISION")&&V(A,0,o,2,B)&&(X=0|A),g[B]=X,Y(B="FORMAT")&&("object"==(void 0===A?"undefined":I(A))?v=A:K&&BA(2,B+" not an object",A)),g[B]=v,g},O.max=function(){return _(arguments,L.lt)},O.min=function(){return _(arguments,L.gt)},O.random=(g=9007199254740992*Math.random()&2097151?function(){return c(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(A){var B,Q,E,C,I,Y=0,F=[],D=new O(T);if(A=null!=A&&V(A,0,o,14)?0|A:l,C=M(A/h),p)if(w&&w.getRandomValues){for(B=w.getRandomValues(new Uint32Array(C*=2));Y<C;)(I=131072*B[Y]+(B[Y+1]>>>11))>=9e15?(Q=w.getRandomValues(new Uint32Array(2)),B[Y]=Q[0],B[Y+1]=Q[1]):(F.push(I%1e14),Y+=2);Y=C/2}else if(w&&w.randomBytes){for(B=w.randomBytes(C*=7);Y<C;)(I=281474976710656*(31&B[Y])+1099511627776*B[Y+1]+4294967296*B[Y+2]+16777216*B[Y+3]+(B[Y+4]<<16)+(B[Y+5]<<8)+B[Y+6])>=9e15?w.randomBytes(7).copy(B,Y):(F.push(I%1e14),Y+=7);Y=C/7}else K&&BA(14,"crypto unavailable",w);if(!Y)for(;Y<C;)(I=g())<9e15&&(F[Y++]=I%1e14);for(C=F[--Y],A%=h,C&&A&&(I=t[h-A],F[Y]=c(C/I)*I);0===F[Y];F.pop(),Y--);if(Y<0)F=[E=0];else{for(E=-1;0===F[0];F.shift(),E-=h);for(Y=1,I=F[0];I>=10;I/=10,Y++);Y<h&&(E-=h-Y)}return D.e=E,D.c=F,D}),Q=function(){function A(A,B,Q){var g,E,C,w,I=0,Y=A.length,F=B%H,M=B/H|0;for(A=A.slice();Y--;)I=((E=F*(C=A[Y]%H)+(g=M*C+(w=A[Y]/H|0)*F)%H*H+I)/Q|0)+(g/H|0)+M*w,A[Y]=E%Q;return I&&A.unshift(I),A}function B(A,B,Q,g){var E,C;if(Q!=g)C=Q>g?1:-1;else for(E=C=0;E<Q;E++)if(A[E]!=B[E]){C=A[E]>B[E]?1:-1;break}return C}function Q(A,B,Q,g){for(var E=0;Q--;)A[Q]-=E,E=A[Q]<B[Q]?1:0,A[Q]=E*g+A[Q]-B[Q];for(;!A[0]&&A.length>1;A.shift());}return function(g,E,C,w,I){var Y,F,M,D,i,U,G,N,t,H,o,e,n,R,a,r,j,k=g.s==E.s?1:-1,y=g.c,x=E.c;if(!(y&&y[0]&&x&&x[0]))return new O(g.s&&E.s&&(y?!x||y[0]!=x[0]:x)?y&&0==y[0]||!x?0*k:k/0:NaN);for(t=(N=new O(k)).c=[],k=C+(F=g.e-E.e)+1,I||(I=s,F=J(g.e/h)-J(E.e/h),k=k/h|0),M=0;x[M]==(y[M]||0);M++);if(x[M]>(y[M]||0)&&F--,k<0)t.push(1),D=!0;else{for(R=y.length,r=x.length,M=0,k+=2,(i=c(I/(x[0]+1)))>1&&(x=A(x,i,I),y=A(y,i,I),r=x.length,R=y.length),n=r,o=(H=y.slice(0,r)).length;o<r;H[o++]=0);(j=x.slice()).unshift(0),a=x[0],x[1]>=I/2&&a++;do{if(i=0,(Y=B(x,H,r,o))<0){if(e=H[0],r!=o&&(e=e*I+(H[1]||0)),(i=c(e/a))>1)for(i>=I&&(i=I-1),G=(U=A(x,i,I)).length,o=H.length;1==B(U,H,G,o);)i--,Q(U,r<G?j:x,G,I),G=U.length,Y=1;else 0==i&&(Y=i=1),G=(U=x.slice()).length;if(G<o&&U.unshift(0),Q(H,U,o,I),o=H.length,-1==Y)for(;B(x,H,r,o)<1;)i++,Q(H,r<o?j:x,o,I),o=H.length}else 0===Y&&(i++,H=[0]);t[M++]=i,H[0]?H[o++]=y[n]||0:(H=[y[n]],o=1)}while((n++<R||null!=H[0])&&k--);D=null!=H[0],t[0]||t.shift()}if(I==s){for(M=1,k=t[0];k>=10;k/=10,M++);QA(N,C+(N.e=M+F*h-1)+1,w,D)}else N.e=F,N.r=+D;return N}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,C=/^([^.]+)\.$/,x=/^\.([^.]+)$/,m=/^-?(Infinity|NaN)$/,z=/^\s*\+(?=[\w.])|^\s+|\s+$/g,Y=function(A,B,Q,g){var w,I=Q?B:B.replace(z,"");if(m.test(I))A.s=isNaN(I)?null:I<0?-1:1;else{if(!Q&&(I=I.replace(E,function(A,B,Q){return w="x"==(Q=Q.toLowerCase())?16:"b"==Q?2:8,g&&g!=w?A:B}),g&&(w=g,I=I.replace(C,"$1").replace(x,"0.$1")),B!=I))return new O(I,w);K&&BA(d,"not a"+(g?" base "+g:"")+" number",B),A.s=null}A.c=A.e=null,d=0},L.absoluteValue=L.abs=function(){var A=new O(this);return A.s<0&&(A.s=1),A},L.ceil=function(){return QA(new O(this),this.e+1,2)},L.comparedTo=L.cmp=function(A,B){return d=1,n(this,new O(A,B))},L.decimalPlaces=L.dp=function(){var A,B,Q=this.c;if(!Q)return null;if(A=((B=Q.length-1)-J(this.e/h))*h,B=Q[B])for(;B%10==0;B/=10,A--);return A<0&&(A=0),A},L.dividedBy=L.div=function(A,B){return d=3,Q(this,new O(A,B),l,f)},L.dividedToIntegerBy=L.divToInt=function(A,B){return d=4,Q(this,new O(A,B),0,1)},L.equals=L.eq=function(A,B){return d=5,0===n(this,new O(A,B))},L.floor=function(){return QA(new O(this),this.e+1,3)},L.greaterThan=L.gt=function(A,B){return d=6,n(this,new O(A,B))>0},L.greaterThanOrEqualTo=L.gte=function(A,B){return d=7,1===(B=n(this,new O(A,B)))||0===B},L.isFinite=function(){return!!this.c},L.isInteger=L.isInt=function(){return!!this.c&&J(this.e/h)>this.c.length-2},L.isNaN=function(){return!this.s},L.isNegative=L.isNeg=function(){return this.s<0},L.isZero=function(){return!!this.c&&0==this.c[0]},L.lessThan=L.lt=function(A,B){return d=8,n(this,new O(A,B))<0},L.lessThanOrEqualTo=L.lte=function(A,B){return d=9,-1===(B=n(this,new O(A,B)))||0===B},L.minus=L.sub=function(A,B){var Q,g,E,C,w=this,I=w.s;if(d=10,B=(A=new O(A,B)).s,!I||!B)return new O(NaN);if(I!=B)return A.s=-B,w.plus(A);var Y=w.e/h,F=A.e/h,M=w.c,c=A.c;if(!Y||!F){if(!M||!c)return M?(A.s=-B,A):new O(c?w:NaN);if(!M[0]||!c[0])return c[0]?(A.s=-B,A):new O(M[0]?w:3==f?-0:0)}if(Y=J(Y),F=J(F),M=M.slice(),I=Y-F){for((C=I<0)?(I=-I,E=M):(F=Y,E=c),E.reverse(),B=I;B--;E.push(0));E.reverse()}else for(g=(C=(I=M.length)<(B=c.length))?I:B,I=B=0;B<g;B++)if(M[B]!=c[B]){C=M[B]<c[B];break}if(C&&(E=M,M=c,c=E,A.s=-A.s),(B=(g=c.length)-(Q=M.length))>0)for(;B--;M[Q++]=0);for(B=s-1;g>I;){if(M[--g]<c[g]){for(Q=g;Q&&!M[--Q];M[Q]=B);--M[Q],M[g]+=s}M[g]-=c[g]}for(;0==M[0];M.shift(),--F);return M[0]?AA(A,M,F):(A.s=3==f?-1:1,A.c=[A.e=0],A)},L.modulo=L.mod=function(A,B){var g,E,C=this;return d=11,A=new O(A,B),!C.c||!A.s||A.c&&!A.c[0]?new O(NaN):!A.c||C.c&&!C.c[0]?new O(C):(9==b?(E=A.s,A.s=1,g=Q(C,A,0,3),A.s=E,g.s*=E):g=Q(C,A,0,b),C.minus(g.times(A)))},L.negated=L.neg=function(){var A=new O(this);return A.s=-A.s||null,A},L.plus=L.add=function(A,B){var Q,g=this,E=g.s;if(d=12,B=(A=new O(A,B)).s,!E||!B)return new O(NaN);if(E!=B)return A.s=-B,g.minus(A);var C=g.e/h,w=A.e/h,I=g.c,Y=A.c;if(!C||!w){if(!I||!Y)return new O(E/0);if(!I[0]||!Y[0])return Y[0]?A:new O(I[0]?g:0*E)}if(C=J(C),w=J(w),I=I.slice(),E=C-w){for(E>0?(w=C,Q=Y):(E=-E,Q=I),Q.reverse();E--;Q.push(0));Q.reverse()}for((E=I.length)-(B=Y.length)<0&&(Q=Y,Y=I,I=Q,B=E),E=0;B;)E=(I[--B]=I[B]+Y[B]+E)/s|0,I[B]%=s;return E&&(I.unshift(E),++w),AA(A,I,w)},L.precision=L.sd=function(A){var B,Q,g=this,E=g.c;if(null!=A&&A!==!!A&&1!==A&&0!==A&&(K&&BA(13,"argument"+D,A),A!=!!A&&(A=null)),!E)return null;if(B=(Q=E.length-1)*h+1,Q=E[Q]){for(;Q%10==0;Q/=10,B--);for(Q=E[0];Q>=10;Q/=10,B++);}return A&&g.e+1>B&&(B=g.e+1),B},L.round=function(A,B){var Q=new O(this);return(null==A||V(A,0,o,15))&&QA(Q,~~A+this.e+1,null!=B&&V(B,0,8,15,i)?0|B:f),Q},L.shift=function(A){var B=this;return V(A,-N,N,16,"argument")?B.times("1e"+y(A)):new O(B.c&&B.c[0]&&(A<-N||A>N)?B.s*(A<0?0:1/0):B)},L.squareRoot=L.sqrt=function(){var A,B,g,E,C,w=this,I=w.c,Y=w.s,F=w.e,M=l+4,c=new O("0.5");if(1!==Y||!I||!I[0])return new O(!Y||Y<0&&(!I||I[0])?NaN:I?w:1/0);if(0==(Y=Math.sqrt(+w))||Y==1/0?(((B=e(I)).length+F)%2==0&&(B+="0"),Y=Math.sqrt(B),F=J((F+1)/2)-(F<0||F%2),g=new O(B=Y==1/0?"1e"+F:(B=Y.toExponential()).slice(0,B.indexOf("e")+1)+F)):g=new O(Y+""),g.c[0])for((Y=(F=g.e)+M)<3&&(Y=0);;)if(C=g,g=c.times(C.plus(Q(w,C,M,1))),e(C.c).slice(0,Y)===(B=e(g.c)).slice(0,Y)){if(g.e<F&&--Y,"9999"!=(B=B.slice(Y-3,Y+1))&&(E||"4999"!=B)){+B&&(+B.slice(1)||"5"!=B.charAt(0))||(QA(g,g.e+l+2,1),A=!g.times(g).eq(w));break}if(!E&&(QA(C,C.e+l+2,0),C.times(C).eq(w))){g=C;break}M+=4,Y+=4,E=1}return QA(g,g.e+l+1,f,A)},L.times=L.mul=function(A,B){var Q,g,E,C,w,I,Y,F,M,c,D,i,U,G,N,t=this,o=t.c,e=(d=17,A=new O(A,B)).c;if(!(o&&e&&o[0]&&e[0]))return!t.s||!A.s||o&&!o[0]&&!e||e&&!e[0]&&!o?A.c=A.e=A.s=null:(A.s*=t.s,o&&e?(A.c=[0],A.e=0):A.c=A.e=null),A;for(g=J(t.e/h)+J(A.e/h),A.s*=t.s,(Y=o.length)<(c=e.length)&&(U=o,o=e,e=U,E=Y,Y=c,c=E),E=Y+c,U=[];E--;U.push(0));for(G=s,N=H,E=c;--E>=0;){for(Q=0,D=e[E]%N,i=e[E]/N|0,C=E+(w=Y);C>E;)Q=((F=D*(F=o[--w]%N)+(I=i*F+(M=o[w]/N|0)*D)%N*N+U[C]+Q)/G|0)+(I/N|0)+i*M,U[C--]=F%G;U[C]=Q}return Q?++g:U.shift(),AA(A,U,g)},L.toDigits=function(A,B){var Q=new O(this);return A=null!=A&&V(A,1,o,18,"precision")?0|A:null,B=null!=B&&V(B,0,8,18,i)?0|B:f,A?QA(Q,A,B):Q},L.toExponential=function(A,B){return q(this,null!=A&&V(A,0,o,19)?1+~~A:null,B,19)},L.toFixed=function(A,B){return q(this,null!=A&&V(A,0,o,20)?~~A+this.e+1:null,B,20)},L.toFormat=function(A,B){var Q=q(this,null!=A&&V(A,0,o,21)?~~A+this.e+1:null,B,21);if(this.c){var g,E=Q.split("."),C=+v.groupSize,w=+v.secondaryGroupSize,I=v.groupSeparator,Y=E[0],F=E[1],M=this.s<0,c=M?Y.slice(1):Y,D=c.length;if(w&&(g=C,C=w,w=g,D-=g),C>0&&D>0){for(g=D%C||C,Y=c.substr(0,g);g<D;g+=C)Y+=I+c.substr(g,C);w>0&&(Y+=I+c.slice(g)),M&&(Y="-"+Y)}Q=F?Y+v.decimalSeparator+((w=+v.fractionGroupSize)?F.replace(new RegExp("\\d{"+w+"}\\B","g"),"$&"+v.fractionGroupSeparator):F):Y}return Q},L.toFraction=function(A){var B,g,E,C,w,I,Y,F,M,c=K,D=this,i=D.c,U=new O(T),G=g=new O(T),s=Y=new O(T);if(null!=A&&(K=!1,I=new O(A),K=c,(c=I.isInt())&&!I.lt(T)||(K&&BA(22,"max denominator "+(c?"out of range":"not an integer"),A),A=!c&&I.c&&QA(I,I.e+1,1).gte(T)?I:null)),!i)return D.toString();for(M=e(i),C=U.e=M.length-D.e-1,U.c[0]=t[(w=C%h)<0?h+w:w],A=!A||I.cmp(U)>0?C>0?U:G:I,w=P,P=1/0,I=new O(M),Y.c[0]=0;F=Q(I,U,0,1),1!=(E=g.plus(F.times(s))).cmp(A);)g=s,s=E,G=Y.plus(F.times(E=G)),Y=E,U=I.minus(F.times(E=U)),I=E;return E=Q(A.minus(g),s,0,1),Y=Y.plus(E.times(G)),g=g.plus(E.times(s)),Y.s=G.s=D.s,B=Q(G,s,C*=2,f).minus(D).abs().cmp(Q(Y,g,C,f).minus(D).abs())<1?[G.toString(),s.toString()]:[Y.toString(),g.toString()],P=w,B},L.toNumber=function(){return+this},L.toPower=L.pow=function(A,B){var Q,g,E,C=c(A<0?-A:+A),w=this;if(null!=B&&(d=23,B=new O(B)),!V(A,-N,N,23,"exponent")&&(!isFinite(A)||C>N&&(A/=0)||parseFloat(A)!=A&&!(A=NaN))||0==A)return Q=Math.pow(+w,A),new O(B?Q%B:Q);for(B?A>1&&w.gt(T)&&w.isInt()&&B.gt(T)&&B.isInt()?w=w.mod(B):(E=B,B=null):X&&(Q=M(X/h+2)),g=new O(T);;){if(C%2){if(!(g=g.times(w)).c)break;Q?g.c.length>Q&&(g.c.length=Q):B&&(g=g.mod(B))}if(!(C=c(C/2)))break;w=w.times(w),Q?w.c&&w.c.length>Q&&(w.c.length=Q):B&&(w=w.mod(B))}return B?g:(A<0&&(g=T.div(g)),E?g.mod(E):Q?QA(g,X,f):g)},L.toPrecision=function(A,B){return q(this,null!=A&&V(A,1,o,24,"precision")?0|A:null,B,24)},L.toString=function(A){var B,Q=this,g=Q.s,E=Q.e;return null===E?g?(B="Infinity",g<0&&(B="-"+B)):B="NaN":(B=e(Q.c),B=null!=A&&V(A,2,64,25,"base")?Z(k(B,E),0|A,10,g):E<=W||E>=u?j(B,E):k(B,E),g<0&&Q.c[0]&&(B="-"+B)),B},L.truncated=L.trunc=function(){return QA(new O(this),this.e+1,1)},L.valueOf=L.toJSON=function(){var A,B=this,Q=B.e;return null===Q?B.toString():(A=e(B.c),A=Q<=W||Q>=u?j(A,Q):k(A,Q),B.s<0?"-"+A:A)},null!=B&&O.config(B),O}()).default=E.BigNumber=E,void 0===(C=function(){return E}.call(g,Q,g,B))||(B.exports=C)}()},{}],5:[function(A,B,Q){var g=A("./lib/encoder"),E=A("./lib/decoder");B.exports={encode:g,decode:E}},{"./lib/decoder":6,"./lib/encoder":7}],6:[function(A,B,Q){(function(A){function Q(A){if(this.pos=0,this.buffer=A,this.flag=this.buffer.toString("utf-8",0,this.pos+=2),"BM"!=this.flag)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}Q.prototype.parseHeader=function(){if(this.fileSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.reserved=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.offset=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.headerSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.width=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.height=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.planes=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.bitPP=this.buffer.readUInt16LE(this.pos),this.pos+=2,this.compress=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.rawSize=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.hr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.vr=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.colors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.importantColors=this.buffer.readUInt32LE(this.pos),this.pos+=4,this.bitPP<24){var A=1<<this.bitPP;this.palette=new Array(A);for(var B=0;B<A;B++){var Q=this.buffer.readUInt8(this.pos++),g=this.buffer.readUInt8(this.pos++),E=this.buffer.readUInt8(this.pos++),C=this.buffer.readUInt8(this.pos++);this.palette[B]={red:E,green:g,blue:Q,quad:C}}}},Q.prototype.parseBGR=function(){this.pos=this.offset;try{var B="bit"+this.bitPP,Q=this.width*this.height*4;this.data=new A(Q),this[B]()}catch(A){console.log("bit decode error:"+A)}},Q.prototype.bit1=function(){for(var A=Math.ceil(this.width/8),B=A%4,Q=this.height-1;Q>=0;Q--){for(var g=0;g<A;g++)for(var E=this.buffer.readUInt8(this.pos++),C=Q*this.width*4+8*g*4,w=0;w<8&&8*g+w<this.width;w++){var I=this.palette[E>>7-w&1];this.data[C+4*w]=I.blue,this.data[C+4*w+1]=I.green,this.data[C+4*w+2]=I.red,this.data[C+4*w+3]=255}0!=B&&(this.pos+=4-B)}},Q.prototype.bit4=function(){for(var A=Math.ceil(this.width/2),B=A%4,Q=this.height-1;Q>=0;Q--){for(var g=0;g<A;g++){var E=this.buffer.readUInt8(this.pos++),C=Q*this.width*4+2*g*4,w=E>>4,I=15&E,Y=this.palette[w];if(this.data[C]=Y.blue,this.data[C+1]=Y.green,this.data[C+2]=Y.red,this.data[C+3]=255,2*g+1>=this.width)break;Y=this.palette[I],this.data[C+4]=Y.blue,this.data[C+4+1]=Y.green,this.data[C+4+2]=Y.red,this.data[C+4+3]=255}0!=B&&(this.pos+=4-B)}},Q.prototype.bit8=function(){for(var A=this.width%4,B=this.height-1;B>=0;B--){for(var Q=0;Q<this.width;Q++){var g=this.buffer.readUInt8(this.pos++),E=B*this.width*4+4*Q,C=this.palette[g];this.data[E]=C.blue,this.data[E+1]=C.green,this.data[E+2]=C.red,this.data[E+3]=255}0!=A&&(this.pos+=4-A)}},Q.prototype.bit24=function(){for(var A=this.height-1;A>=0;A--){for(var B=0;B<this.width;B++){var Q=this.buffer.readUInt8(this.pos++),g=this.buffer.readUInt8(this.pos++),E=this.buffer.readUInt8(this.pos++),C=A*this.width*4+4*B;this.data[C]=E,this.data[C+1]=g,this.data[C+2]=Q,this.data[C+3]=255}this.pos+=this.width%4}},Q.prototype.getData=function(){return this.data},B.exports=decode=function(A){var B=new Q(A);return{data:B.getData(),width:B.width,height:B.height}}}).call(this,A("buffer").Buffer)},{buffer:14}],7:[function(A,B,Q){(function(A){function Q(A){this.buffer=A.data,this.width=A.width,this.height=A.height,this.extraBytes=this.width%4,this.rgbSize=this.height*(3*this.width+this.extraBytes),this.headerInfoSize=40,this.data=[],this.flag="BM",this.reserved=0,this.offset=54,this.fileSize=this.rgbSize+this.offset,this.planes=1,this.bitPP=24,this.compress=0,this.hr=0,this.vr=0,this.colors=0,this.importantColors=0}Q.prototype.encode=function(){var B=new A(this.offset+this.rgbSize);this.pos=0,B.write(this.flag,this.pos,2),this.pos+=2,B.writeUInt32LE(this.fileSize,this.pos),this.pos+=4,B.writeUInt32LE(this.reserved,this.pos),this.pos+=4,B.writeUInt32LE(this.offset,this.pos),this.pos+=4,B.writeUInt32LE(this.headerInfoSize,this.pos),this.pos+=4,B.writeUInt32LE(this.width,this.pos),this.pos+=4,B.writeUInt32LE(this.height,this.pos),this.pos+=4,B.writeUInt16LE(this.planes,this.pos),this.pos+=2,B.writeUInt16LE(this.bitPP,this.pos),this.pos+=2,B.writeUInt32LE(this.compress,this.pos),this.pos+=4,B.writeUInt32LE(this.rgbSize,this.pos),this.pos+=4,B.writeUInt32LE(this.hr,this.pos),this.pos+=4,B.writeUInt32LE(this.vr,this.pos),this.pos+=4,B.writeUInt32LE(this.colors,this.pos),this.pos+=4,B.writeUInt32LE(this.importantColors,this.pos),this.pos+=4;for(var Q=0,g=3*this.width+this.extraBytes,E=this.height-1;E>=0;E--){for(var C=0;C<this.width;C++){var w=this.pos+E*g+3*C;B[w+2]=this.buffer[Q++],B[w+1]=this.buffer[Q++],B[w]=this.buffer[Q++],Q++}if(this.extraBytes>0){var I=this.pos+E*g+3*this.width;B.fill(0,I,I+this.extraBytes)}}return B},B.exports=encode=function(A,B){return void 0===B&&(B=100),{data:new Q(A).encode(),width:A.width,height:A.height}}}).call(this,A("buffer").Buffer)},{buffer:14}],8:[function(A,B,Q){},{}],9:[function(A,B,Q){(function(B,g){var E=A("pako/lib/zlib/messages"),C=A("pako/lib/zlib/zstream"),w=A("pako/lib/zlib/deflate.js"),I=A("pako/lib/zlib/inflate.js"),Y=A("pako/lib/zlib/constants");for(var F in Y)Q[F]=Y[F];function M(A){if(A<Q.DEFLATE||A>Q.UNZIP)throw new TypeError("Bad argument");this.mode=A,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function c(A,B){for(var Q=0;Q<A.length;Q++)this[B+Q]=A[Q]}Q.NONE=0,Q.DEFLATE=1,Q.INFLATE=2,Q.GZIP=3,Q.GUNZIP=4,Q.DEFLATERAW=5,Q.INFLATERAW=6,Q.UNZIP=7,M.prototype.init=function(A,B,g,E,Y){switch(this.windowBits=A,this.level=B,this.memLevel=g,this.strategy=E,this.mode!==Q.GZIP&&this.mode!==Q.GUNZIP||(this.windowBits+=16),this.mode===Q.UNZIP&&(this.windowBits+=32),this.mode!==Q.DEFLATERAW&&this.mode!==Q.INFLATERAW||(this.windowBits=-this.windowBits),this.strm=new C,this.mode){case Q.DEFLATE:case Q.GZIP:case Q.DEFLATERAW:var F=w.deflateInit2(this.strm,this.level,Q.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case Q.INFLATE:case Q.GUNZIP:case Q.INFLATERAW:case Q.UNZIP:F=I.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}F===Q.Z_OK?(this.write_in_progress=!1,this.init_done=!0):this._error(F)},M.prototype.params=function(){throw new Error("deflateParams Not supported")},M.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(this.mode===Q.NONE)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},M.prototype.write=function(A,Q,g,E,C,w,I){this._writeCheck(),this.write_in_progress=!0;var Y=this;return B.nextTick(function(){Y.write_in_progress=!1;var B=Y._write(A,Q,g,E,C,w,I);Y.callback(B[0],B[1]),Y.pending_close&&Y.close()}),this},M.prototype.writeSync=function(A,B,Q,g,E,C,w){return this._writeCheck(),this._write(A,B,Q,g,E,C,w)},M.prototype._write=function(A,B,E,C,Y,F,M){if(this.write_in_progress=!0,A!==Q.Z_NO_FLUSH&&A!==Q.Z_PARTIAL_FLUSH&&A!==Q.Z_SYNC_FLUSH&&A!==Q.Z_FULL_FLUSH&&A!==Q.Z_FINISH&&A!==Q.Z_BLOCK)throw new Error("Invalid flush value");null==B&&(B=new g(0),C=0,E=0),Y._set?Y.set=Y._set:Y.set=c;var D=this.strm;switch(D.avail_in=C,D.input=B,D.next_in=E,D.avail_out=M,D.output=Y,D.next_out=F,this.mode){case Q.DEFLATE:case Q.GZIP:case Q.DEFLATERAW:var i=w.deflate(D,A);break;case Q.UNZIP:case Q.INFLATE:case Q.GUNZIP:case Q.INFLATERAW:i=I.inflate(D,A);break;default:throw new Error("Unknown mode "+this.mode)}return i!==Q.Z_STREAM_END&&i!==Q.Z_OK&&this._error(i),this.write_in_progress=!1,[D.avail_in,D.avail_out]},M.prototype.close=function(){this.write_in_progress?this.pending_close=!0:(this.pending_close=!1,this.mode===Q.DEFLATE||this.mode===Q.GZIP||this.mode===Q.DEFLATERAW?w.deflateEnd(this.strm):I.inflateEnd(this.strm),this.mode=Q.NONE)},M.prototype.reset=function(){switch(this.mode){case Q.DEFLATE:case Q.DEFLATERAW:var A=w.deflateReset(this.strm);break;case Q.INFLATE:case Q.INFLATERAW:A=I.inflateReset(this.strm)}A!==Q.Z_OK&&this._error(A)},M.prototype._error=function(A){this.onerror(E[A]+": "+this.strm.msg,A),this.write_in_progress=!1,this.pending_close&&this.close()},Q.Zlib=M}).call(this,A("_process"),A("buffer").Buffer)},{_process:12,buffer:14,"pako/lib/zlib/constants":45,"pako/lib/zlib/deflate.js":47,"pako/lib/zlib/inflate.js":49,"pako/lib/zlib/messages":51,"pako/lib/zlib/zstream":53}],10:[function(A,B,Q){(function(B,g){var E=A("_stream_transform"),C=A("./binding"),w=A("util"),I=A("assert").ok;function Y(A,B,Q){var E=[],C=0;function w(){for(var B;null!==(B=A.read());)E.push(B),C+=B.length;A.once("readable",w)}function I(){var B=g.concat(E,C);E=[],Q(null,B),A.close()}A.on("error",function(B){A.removeListener("end",I),A.removeListener("readable",w),Q(B)}),A.on("end",I),A.end(B),w()}function F(A,B){if("string"==typeof B&&(B=new g(B)),!g.isBuffer(B))throw new TypeError("Not a string or buffer");var Q=C.Z_FINISH;return A._processChunk(B,Q)}function M(A){if(!(this instanceof M))return new M(A);h.call(this,A,C.DEFLATE)}function c(A){if(!(this instanceof c))return new c(A);h.call(this,A,C.INFLATE)}function D(A){if(!(this instanceof D))return new D(A);h.call(this,A,C.GZIP)}function i(A){if(!(this instanceof i))return new i(A);h.call(this,A,C.GUNZIP)}function U(A){if(!(this instanceof U))return new U(A);h.call(this,A,C.DEFLATERAW)}function G(A){if(!(this instanceof G))return new G(A);h.call(this,A,C.INFLATERAW)}function s(A){if(!(this instanceof s))return new s(A);h.call(this,A,C.UNZIP)}function h(A,B){if(this._opts=A=A||{},this._chunkSize=A.chunkSize||Q.Z_DEFAULT_CHUNK,E.call(this,A),A.flush&&A.flush!==C.Z_NO_FLUSH&&A.flush!==C.Z_PARTIAL_FLUSH&&A.flush!==C.Z_SYNC_FLUSH&&A.flush!==C.Z_FULL_FLUSH&&A.flush!==C.Z_FINISH&&A.flush!==C.Z_BLOCK)throw new Error("Invalid flush flag: "+A.flush);if(this._flushFlag=A.flush||C.Z_NO_FLUSH,A.chunkSize&&(A.chunkSize<Q.Z_MIN_CHUNK||A.chunkSize>Q.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+A.chunkSize);if(A.windowBits&&(A.windowBits<Q.Z_MIN_WINDOWBITS||A.windowBits>Q.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+A.windowBits);if(A.level&&(A.level<Q.Z_MIN_LEVEL||A.level>Q.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+A.level);if(A.memLevel&&(A.memLevel<Q.Z_MIN_MEMLEVEL||A.memLevel>Q.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+A.memLevel);if(A.strategy&&A.strategy!=Q.Z_FILTERED&&A.strategy!=Q.Z_HUFFMAN_ONLY&&A.strategy!=Q.Z_RLE&&A.strategy!=Q.Z_FIXED&&A.strategy!=Q.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+A.strategy);if(A.dictionary&&!g.isBuffer(A.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new C.Zlib(B);var w=this;this._hadError=!1,this._binding.onerror=function(A,B){w._binding=null,w._hadError=!0;var g=new Error(A);g.errno=B,g.code=Q.codes[B],w.emit("error",g)};var I=Q.Z_DEFAULT_COMPRESSION;"number"==typeof A.level&&(I=A.level);var Y=Q.Z_DEFAULT_STRATEGY;"number"==typeof A.strategy&&(Y=A.strategy),this._binding.init(A.windowBits||Q.Z_DEFAULT_WINDOWBITS,I,A.memLevel||Q.Z_DEFAULT_MEMLEVEL,Y,A.dictionary),this._buffer=new g(this._chunkSize),this._offset=0,this._closed=!1,this._level=I,this._strategy=Y,this.once("end",this.close)}C.Z_MIN_WINDOWBITS=8,C.Z_MAX_WINDOWBITS=15,C.Z_DEFAULT_WINDOWBITS=15,C.Z_MIN_CHUNK=64,C.Z_MAX_CHUNK=1/0,C.Z_DEFAULT_CHUNK=16384,C.Z_MIN_MEMLEVEL=1,C.Z_MAX_MEMLEVEL=9,C.Z_DEFAULT_MEMLEVEL=8,C.Z_MIN_LEVEL=-1,C.Z_MAX_LEVEL=9,C.Z_DEFAULT_LEVEL=C.Z_DEFAULT_COMPRESSION,Object.keys(C).forEach(function(A){A.match(/^Z/)&&(Q[A]=C[A])}),Q.codes={Z_OK:C.Z_OK,Z_STREAM_END:C.Z_STREAM_END,Z_NEED_DICT:C.Z_NEED_DICT,Z_ERRNO:C.Z_ERRNO,Z_STREAM_ERROR:C.Z_STREAM_ERROR,Z_DATA_ERROR:C.Z_DATA_ERROR,Z_MEM_ERROR:C.Z_MEM_ERROR,Z_BUF_ERROR:C.Z_BUF_ERROR,Z_VERSION_ERROR:C.Z_VERSION_ERROR},Object.keys(Q.codes).forEach(function(A){Q.codes[Q.codes[A]]=A}),Q.Deflate=M,Q.Inflate=c,Q.Gzip=D,Q.Gunzip=i,Q.DeflateRaw=U,Q.InflateRaw=G,Q.Unzip=s,Q.createDeflate=function(A){return new M(A)},Q.createInflate=function(A){return new c(A)},Q.createDeflateRaw=function(A){return new U(A)},Q.createInflateRaw=function(A){return new G(A)},Q.createGzip=function(A){return new D(A)},Q.createGunzip=function(A){return new i(A)},Q.createUnzip=function(A){return new s(A)},Q.deflate=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new M(B),A,Q)},Q.deflateSync=function(A,B){return F(new M(B),A)},Q.gzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new D(B),A,Q)},Q.gzipSync=function(A,B){return F(new D(B),A)},Q.deflateRaw=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new U(B),A,Q)},Q.deflateRawSync=function(A,B){return F(new U(B),A)},Q.unzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new s(B),A,Q)},Q.unzipSync=function(A,B){return F(new s(B),A)},Q.inflate=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new c(B),A,Q)},Q.inflateSync=function(A,B){return F(new c(B),A)},Q.gunzip=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new i(B),A,Q)},Q.gunzipSync=function(A,B){return F(new i(B),A)},Q.inflateRaw=function(A,B,Q){return"function"==typeof B&&(Q=B,B={}),Y(new G(B),A,Q)},Q.inflateRawSync=function(A,B){return F(new G(B),A)},w.inherits(h,E),h.prototype.params=function(A,g,E){if(A<Q.Z_MIN_LEVEL||A>Q.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+A);if(g!=Q.Z_FILTERED&&g!=Q.Z_HUFFMAN_ONLY&&g!=Q.Z_RLE&&g!=Q.Z_FIXED&&g!=Q.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+g);if(this._level!==A||this._strategy!==g){var w=this;this.flush(C.Z_SYNC_FLUSH,function(){w._binding.params(A,g),w._hadError||(w._level=A,w._strategy=g,E&&E())})}else B.nextTick(E)},h.prototype.reset=function(){return this._binding.reset()},h.prototype._flush=function(A){this._transform(new g(0),"",A)},h.prototype.flush=function(A,Q){var E=this._writableState;if(("function"==typeof A||void 0===A&&!Q)&&(Q=A,A=C.Z_FULL_FLUSH),E.ended)Q&&B.nextTick(Q);else if(E.ending)Q&&this.once("end",Q);else if(E.needDrain){var w=this;this.once("drain",function(){w.flush(Q)})}else this._flushFlag=A,this.write(new g(0),"",Q)},h.prototype.close=function(A){if(A&&B.nextTick(A),!this._closed){this._closed=!0,this._binding.close();var Q=this;B.nextTick(function(){Q.emit("close")})}},h.prototype._transform=function(A,B,Q){var E,w=this._writableState,I=(w.ending||w.ended)&&(!A||w.length===A.length);if(null===!A&&!g.isBuffer(A))return Q(new Error("invalid input"));I?E=C.Z_FINISH:(E=this._flushFlag,A.length>=w.length&&(this._flushFlag=this._opts.flush||C.Z_NO_FLUSH));this._processChunk(A,E,Q)},h.prototype._processChunk=function(A,B,Q){var E=A&&A.length,C=this._chunkSize-this._offset,w=0,Y=this,F="function"==typeof Q;if(!F){var M,c=[],D=0;this.on("error",function(A){M=A});do{var i=this._binding.writeSync(B,A,w,E,this._buffer,this._offset,C)}while(!this._hadError&&s(i[0],i[1]));if(this._hadError)throw M;var U=g.concat(c,D);return this.close(),U}var G=this._binding.write(B,A,w,E,this._buffer,this._offset,C);function s(M,i){if(!Y._hadError){var U=C-i;if(I(U>=0,"have should not go down"),U>0){var G=Y._buffer.slice(Y._offset,Y._offset+U);Y._offset+=U,F?Y.push(G):(c.push(G),D+=G.length)}if((0===i||Y._offset>=Y._chunkSize)&&(C=Y._chunkSize,Y._offset=0,Y._buffer=new g(Y._chunkSize)),0===i){if(w+=E-M,E=M,!F)return!0;var h=Y._binding.write(B,A,w,E,Y._buffer,Y._offset,Y._chunkSize);return h.callback=s,void(h.buffer=A)}if(!F)return!1;Q()}}G.buffer=A,G.callback=s},w.inherits(M,h),w.inherits(c,h),w.inherits(D,h),w.inherits(i,h),w.inherits(U,h),w.inherits(G,h),w.inherits(s,h)}).call(this,A("_process"),A("buffer").Buffer)},{"./binding":9,_process:12,_stream_transform:92,assert:2,buffer:14,util:103}],11:[function(A,B,Q){arguments[4][8][0].apply(Q,arguments)},{dup:8}],12:[function(A,B,Q){var g,E,C=B.exports={};function w(A){if(g===setTimeout)return setTimeout(A,0);try{return g(A,0)}catch(B){try{return g.call(null,A,0)}catch(B){return g.call(this,A,0)}}}!function(){try{g=setTimeout}catch(A){g=function(){throw new Error("setTimeout is not defined")}}try{E=clearTimeout}catch(A){E=function(){throw new Error("clearTimeout is not defined")}}}();var I,Y=[],F=!1,M=-1;function c(){F&&I&&(F=!1,I.length?Y=I.concat(Y):M=-1,Y.length&&D())}function D(){if(!F){var A=w(c);F=!0;for(var B=Y.length;B;){for(I=Y,Y=[];++M<B;)I&&I[M].run();M=-1,B=Y.length}I=null,F=!1,function(A){if(E===clearTimeout)return clearTimeout(A);try{E(A)}catch(B){try{return E.call(null,A)}catch(B){return E.call(this,A)}}}(A)}}function i(A,B){this.fun=A,this.array=B}function U(){}C.nextTick=function(A){var B=new Array(arguments.length-1);if(arguments.length>1)for(var Q=1;Q<arguments.length;Q++)B[Q-1]=arguments[Q];Y.push(new i(A,B)),1!==Y.length||F||w(D)},i.prototype.run=function(){this.fun.apply(null,this.array)},C.title="browser",C.browser=!0,C.env={},C.argv=[],C.version="",C.versions={},C.on=U,C.addListener=U,C.once=U,C.off=U,C.removeListener=U,C.removeAllListeners=U,C.emit=U,C.binding=function(A){throw new Error("process.binding is not supported")},C.cwd=function(){return"/"},C.chdir=function(A){throw new Error("process.chdir is not supported")},C.umask=function(){return 0}},{}],13:[function(A,B,Q){var g=A("buffer").Buffer;B.exports=function(A,B){if(g.isBuffer(A)&&g.isBuffer(B)){if("function"==typeof A.equals)return A.equals(B);if(A.length!==B.length)return!1;for(var Q=0;Q<A.length;Q++)if(A[Q]!==B[Q])return!1;return!0}}},{buffer:14}],14:[function(B,Q,g){(function(A){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
//# sourceMappingURL=scratch-svg-renderer.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileoverview
 * A utility to transform a texture coordinate to another texture coordinate
 * representing how the shaders apply effects.
 */

var twgl = __webpack_require__(1);

var ShaderManager = __webpack_require__(4);

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_X = 0.5;

/**
 * A texture coordinate is between 0 and 1. 0.5 is the center position.
 * @const {number}
 */
var CENTER_Y = 0.5;

var EffectTransform = function () {
    function EffectTransform() {
        _classCallCheck(this, EffectTransform);
    }

    _createClass(EffectTransform, null, [{
        key: 'transformPoint',

        /**
         * Transform a texture coordinate to one that would be select after applying shader effects.
         * @param {Drawable} drawable The drawable whose effects to emulate.
         * @param {twgl.v3} vec The texture coordinate to transform.
         * @param {?twgl.v3} dst A place to store the output coordinate.
         * @return {twgl.v3} dst - The coordinate after being transform by effects.
         */
        value: function transformPoint(drawable, vec) {
            var dst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : twgl.v3.create();

            twgl.v3.copy(vec, dst);

            var uniforms = drawable.getUniforms();
            var effects = drawable.getEnabledEffects();

            if ((effects & ShaderManager.EFFECT_INFO.mosaic.mask) !== 0) {
                // texcoord0 = fract(u_mosaic * texcoord0);
                dst[0] = uniforms.u_mosaic * dst[0] % 1;
                dst[1] = uniforms.u_mosaic * dst[1] % 1;
            }
            if ((effects & ShaderManager.EFFECT_INFO.pixelate.mask) !== 0) {
            }


