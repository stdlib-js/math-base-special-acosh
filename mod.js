// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"";var a=n&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,a,f,u;if(null==r)return t.call(r);e=r[i],u=i,n=null!=(f=r)&&o.call(f,u);try{r[i]=void 0}catch(n){return t.call(r)}return a=t.call(r),n?r[i]=e:delete r[i],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var y,c="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=y,v="function"==typeof Float64Array;var p="function"==typeof Float64Array?Float64Array:null;var A,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof p)return!1;try{n=new p([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var w=A,b="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null;var N,d="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=N,s="function"==typeof Uint16Array;var F="function"==typeof Uint16Array?Uint16Array:null;var I,S="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,65536,65537]),t=n,r=(s&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,j={uint16:I,uint8:h};(E=new j.uint16(1))[0]=4660;var T=52===new j.uint8(E.buffer)[0],g=!0===T?1:0,O=new w(1),x=new l(O.buffer);function P(r){return O[0]=r,x[g]}var V=!0===T?1:0,Y=new w(1),_=new l(Y.buffer);function q(r,n){return Y[0]=r,_[V]=n>>>0,Y[0]}var G=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;var k=.6931471803691238,z=1.9082149292705877e-10;var B=Math.sqrt;var C=.6931471803691238,D=1.9082149292705877e-10;function H(n){var t,o,e,i,a,f,u,y,c,l,v,p;return 0===n?M:r(n)||n<0?NaN:(a=0,(o=P(n))<1048576&&(a-=54,o=P(n*=0x40000000000000)),o>=2146435072?n+n:(a+=(o>>20)-1023|0,a+=(y=(o&=1048575)+614244&1048576|0)>>20|0,u=(n=q(n,o|1072693248^y))-1,(1048575&2+o)<3?0===u?0===a?0:a*C+a*D:(f=u*u*(.5-.3333333333333333*u),0===a?u-f:a*C-(f-a*D-u)):(y=o-398458|0,c=440401-o|0,i=(v=(p=(l=u/(2+u))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+i,(y|=c)>0?(t=.5*u*u,0===a?u-(t-l*(t+f)):a*C-(t-(l*(t+f)+a*D)-u)):0===a?u-l*(u-f):a*C-(l*(u-f)-a*D-u))))}function J(n){var t;return r(n)||n<1?NaN:1===n?0:n>=268435456?H(n)+.6931471805599453:n>2?H(2*n-1/(n+B(n*n-1))):function(n){var t,o,e,i,a,f,u,y,c,l;if(n<-1||r(n))return NaN;if(-1===n)return M;if(n===G)return n;if(0===n)return n;if(l=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,i=n,o=1)}return 0!==l&&(e<9007199254740992?(a=(l=((o=P(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),a/=c):(l=((o=P(c=n))>>20)-1023,a=0),(o&=1048575)<434334?c=q(c,1072693248|o):(l+=1,c=q(c,1071644672|o),o=1048576-o>>2),i=c-1),t=.5*i*i,0===o?0===i?l*k+(a+=l*z):l*k-((y=t*(1-.6666666666666666*i))-(l*z+a)-i):(y=(u=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(t-f*(t+y)):l*k-(t-(f*(t+y)+(l*z+a))-i))}((t=n-1)+B(2*t+t*t))}export{J as default};
//# sourceMappingURL=mod.js.map
