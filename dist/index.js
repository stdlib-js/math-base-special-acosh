"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=n(function(N,u){
var s=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-log1p/dist'),i=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/constants-float64-ln-two/dist'),t=require('@stdlib/math-base-special-ln/dist'),f=1<<28;function o(r){var e;return s(r)||r<1?NaN:r===1?0:r>=f?t(r)+q:r>2?t(2*r-1/(r+i(r*r-1))):(e=r-1,v(e+i(2*e+e*e)))}u.exports=o
});var c=a();module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
