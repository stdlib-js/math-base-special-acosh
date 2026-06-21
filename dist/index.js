"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var a=s(function(l,u){
var v=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-log1p/dist'),i=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/constants-float64-ln-two/dist'),t=require('@stdlib/math-base-special-ln/dist'),o=1<<28;function c(r){var e;return v(r)||r<1?NaN:r===1?0:r>=o?t(r)+f:r>2?t(2*r-1/(r+i(r*r-1))):(e=r-1,q(e+i(2*e+e*e)))}u.exports=c
});var p=a();module.exports=p;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
