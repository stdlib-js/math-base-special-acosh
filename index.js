// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,f,u,a;if(null==n)return o.call(n);r=n[i],a=i,t=null!=(u=n)&&e.call(u,a);try{n[i]=void 0}catch(t){return o.call(n)}return f=o.call(n),t?n[i]=r:delete n[i],f}:function(n){return o.call(n)},u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(u&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var y,l=t,p="function"==typeof Float64Array,A="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;y=function(){var n,t,r;if("function"!=typeof A)return!1;try{t=new A([1,3.14,-3.14,NaN]),r=t,n=(p&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?v:function(){throw new Error("not implemented")};var b,U=y,d="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,w="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,t,r;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,256,257]),r=t,n=(d&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")};var s,h=b,N="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;s=function(){var n,t,r;if("function"!=typeof F)return!1;try{t=new F(t=[1,3.14,-3.14,65536,65537]),r=t,n=(N&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?I:function(){throw new Error("not implemented")};var S,T={uint16:s,uint8:h};(S=new T.uint16(1))[0]=4660;var g=52===new T.uint8(S.buffer)[0],j=!0===g?1:0,E=new U(1),O=new l(E.buffer);function x(n){return E[0]=n,O[j]}var P=!0===g?1:0,V=new U(1),Y=new l(V.buffer);function _(n,t){return V[0]=n,Y[P]=t>>>0,V[0]}var q=Number.POSITIVE_INFINITY,G=Number.NEGATIVE_INFINITY,M=1023,k=.6931471803691238,z=1.9082149292705877e-10,B=Math.sqrt,C=.6931471803691238,D=1.9082149292705877e-10,H=1048575;function J(t){var r,o,e,i,f,u,a,c,y,l,p,A;return 0===t?G:n(t)||t<0?NaN:(f=0,(o=x(t))<1048576&&(f-=54,o=x(t*=0x40000000000000)),o>=2146435072?t+t:(f+=(o>>20)-M|0,f+=(c=614244+(o&=H)&1048576|0)>>20|0,a=(t=_(t,o|1072693248^c))-1,(H&2+o)<3?0===a?0===f?0:f*C+f*D:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*C-(u-f*D-a)):(c=o-398458|0,y=440401-o|0,i=(p=(A=(l=a/(2+a))*l)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),e=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=e+i,(c|=y)>0?(r=.5*a*a,0===f?a-(r-l*(r+u)):f*C-(r-(l*(r+u)+f*D)-a)):0===f?a-l*(a-u):f*C-(l*(a-u)-f*D-a))))}return function(t){var r;return n(t)||t<1?NaN:1===t?0:t>=268435456?J(t)+.6931471805599453:t>2?J(2*t-1/(t+B(t*t-1))):function(t){var r,o,e,i,f,u,a,c,y,l;if(t<-1||n(t))return NaN;if(-1===t)return G;if(t===q)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,i=t,o=1)}return 0!==l&&(e<9007199254740992?(f=(l=((o=x(y=1+t))>>20)-M)>0?1-(y-t):t-(y-1),f/=y):(l=((o=x(y=t))>>20)-M,f=0),(o&=1048575)<434334?y=_(y,1072693248|o):(l+=1,y=_(y,1071644672|o),o=1048576-o>>2),i=y-1),r=.5*i*i,0===o?0===i?l*k+(f+=l*z):l*k-((c=r*(1-.6666666666666666*i))-(l*z+f)-i):(c=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+c)):l*k-(r-(u*(r+c)+(l*z+f))-i))}((r=t-1)+B(2*r+r*r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).acosh=t();
//# sourceMappingURL=index.js.map
