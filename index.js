// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=o,i=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,t){return null!=n&&f.call(n,t)},a="function"==typeof Symbol?Symbol.toStringTag:"",c=u,y=a,l=o,p=i,A=function(n){var t,r,o;if(null==n)return l.call(n);r=n[y],t=c(n,y);try{n[y]=void 0}catch(t){return l.call(n)}return o=l.call(n),t?n[y]=r:delete n[y],o},b=r&&"symbol"==typeof Symbol.toStringTag?A:p,U=b,d="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return d&&n instanceof Uint32Array||"[object Uint32Array]"===U(n)},s=m,v=function(){var n,t;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=w(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},h="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},F=v()?h:N,I=b,S="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,g=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===I(n)},j=T,E=function(){var n,t;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=g(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},O="function"==typeof Float64Array?Float64Array:void 0,x=function(){throw new Error("not implemented")},P=E()?O:x,V=b,Y="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,q=function(n){return Y&&n instanceof Uint8Array||"[object Uint8Array]"===V(n)},G=_,M=function(){var n,t;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=q(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},k="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=M()?k:z,C=b,D="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,J=function(n){return D&&n instanceof Uint16Array||"[object Uint16Array]"===C(n)},K=H,L=function(){var n,t;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,65536,65537]),n=J(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint16Array?Uint16Array:void 0,R=function(){throw new Error("not implemented")},W={uint16:L()?Q:R,uint8:B};(n=new W.uint16(1))[0]=4660;var X=52===new W.uint8(n.buffer)[0],Z=F,$=!0===X?1:0,nn=new P(1),tn=new Z(nn.buffer),rn=function(n){return nn[0]=n,tn[$]},on=F,en=!0===X?1:0,fn=new P(1),un=new on(fn.buffer),an=function(n,t){return fn[0]=n,un[en]=t>>>0,fn[0]},cn=an,yn=Number.POSITIVE_INFINITY,ln=Number.NEGATIVE_INFINITY,pn=t,An=rn,bn=cn,Un=yn,dn=ln,mn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},wn=.6931471803691238,sn=1.9082149292705877e-10,vn=function(n){var t,r,o,e,i,f,u,a,c,y;if(n<-1||pn(n))return NaN;if(-1===n)return dn;if(n===Un)return n;if(0===n)return n;if(y=1,(o=n<0?-n:n)<.41421356237309503){if(o<1.862645149230957e-9)return o<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,e=n,r=1)}return 0!==y&&(o<9007199254740992?(i=(y=((r=An(c=1+n))>>20)-1023)>0?1-(c-n):n-(c-1),i/=c):(y=((r=An(c=n))>>20)-1023,i=0),(r&=1048575)<434334?c=bn(c,1072693248|r):(y+=1,c=bn(c,1071644672|r),r=1048576-r>>2),e=c-1),t=.5*e*e,0===r?0===e?y*wn+(i+=y*sn):y*wn-((a=t*(1-.6666666666666666*e))-(y*sn+i)-e):(a=(u=(f=e/(2+e))*f)*mn(u),0===y?e-(t-f*(t+a)):y*wn-(t-(f*(t+a)+(y*sn+i))-e))},hn=Math.sqrt,Nn=rn,Fn=cn,In=t,Sn=ln,Tn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},gn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},jn=.6931471803691238,En=1.9082149292705877e-10,On=1048575,xn=function(n){var t,r,o,e,i,f,u,a,c,y,l;return 0===n?Sn:In(n)||n<0?NaN:(e=0,(r=Nn(n))<1048576&&(e-=54,r=Nn(n*=0x40000000000000)),r>=2146435072?n+n:(e+=(r>>20)-1023|0,e+=(u=614244+(r&=On)&1048576|0)>>20|0,f=(n=Fn(n,r|1072693248^u))-1,(On&2+r)<3?0===f?0===e?0:e*jn+e*En:(i=f*f*(.5-.3333333333333333*f),0===e?f-i:e*jn-(i-e*En-f)):(u=r-398458|0,a=440401-r|0,o=(y=(l=(c=f/(2+f))*c)*l)*Tn(y),i=l*gn(y)+o,(u|=a)>0?(t=.5*f*f,0===e?f-(t-c*(t+i)):e*jn-(t-(c*(t+i)+e*En)-f)):0===e?f-c*(f-i):e*jn-(c*(f-i)-e*En-f))))};return function(n){var r;return t(n)||n<1?NaN:1===n?0:n>=268435456?xn(n)+.6931471805599453:n>2?xn(2*n-1/(n+hn(n*n-1))):vn((r=n-1)+hn(2*r+r*r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).acosh=t();
//# sourceMappingURL=index.js.map
