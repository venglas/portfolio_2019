webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r=(n("hvFc"),{name:"Background",data:function(){return{}},methods:{},mounted:function(){var t=Math.PI,e=Math.cos,n=Math.sin,a=Math.abs,r=(Math.sqrt,Math.pow,Math.round,Math.random),s=Math.atan2,o=.5*t,i=function(t){return t*r()},u=function(t,e){var n=.5*e;return a((t+n)%e-n)/n},l=function(t,e,n,a){return s(a-e,n-t)},h=function(t,e,n){return(1-n)*t+n*e},c=9,d=450*c,m=100,v=500,p=.1,b=.5,f=2,w=15,g=20,_=100,C="hsla(60,50%,3%,1)",B=(document.querySelector("#menu"),void 0),M=void 0,x=void 0,F=void 0,S=void 0;function k(t){var a,r,s,o,u,h,c,d,C;r=i(M.a.width),s=i(M.a.height),a=l(r,s,F[0],F[1]),o=6*e(a),u=6*n(a),h=m+i(v),c=p+i(b),d=f+i(w),C=g+i(_),S.set([r,s,o,u,0,h,c,d,C],t)}function y(t){var a,r,s,i,c,d,m,v,p,b=1+t,f=2+t,w=3+t,g=4+t,_=5+t,C=6+t,B=7+t,M=void 0;a=S[t],r=S[b],s=l(a,r,F[0],F[1])+.75*o,i=h(S[f],2*e(s),.05),c=h(S[w],2*n(s),.05),M=S[g],d=S[_],v=a+i*(m=S[C]),p=r+c*m,function(t,e,n,a,r,s,o){var i=t-.5*s,l=e-.5*s;x.a.save(),x.a.lineCap="round",x.a.lineWidth=1,x.a.strokeStyle="hsla("+o+",100%,60%,"+u(a,r)+")",x.a.beginPath(),x.a.translate(i,l),x.a.rotate(n),x.a.translate(-i,-l),x.a.strokeRect(i,l,s,s),x.a.closePath(),x.a.restore()}(a,r,s,M,d,S[B],S[9]),M++,S[t]=v,S[b]=p,S[f]=i,S[w]=c,S[g]=M,M>d&&k(t)}function E(){var t=window,e=t.innerWidth,n=t.innerHeight;M.a.width=e,M.a.height=n,x.a.drawImage(M.b,0,0),M.b.width=e,M.b.height=n,x.b.drawImage(M.a,0,0),F[0]=.5*M.a.width,F[1]=.5*M.a.height}function R(){0,x.a.clearRect(0,0,M.a.width,M.a.height),x.b.fillStyle=C,x.b.fillRect(0,0,M.a.width,M.a.height),function(){var t=void 0;for(t=0;t<d;t+=c)y(t)}(),x.b.save(),x.b.filter="blur(8px) brightness(200%)",x.b.globalCompositeOperation="lighter",x.b.drawImage(M.a,0,0),x.b.restore(),x.b.save(),x.b.filter="blur(4px) brightness(200%)",x.b.globalCompositeOperation="lighter",x.b.drawImage(M.a,0,0),x.b.restore(),x.b.save(),x.b.globalCompositeOperation="lighter",x.b.drawImage(M.a,0,0),x.b.restore(),window.requestAnimationFrame(R)}B=document.querySelector("#app"),(M={a:document.createElement("canvas"),b:document.createElement("canvas")}).b.style="\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                z-index: -100\n            ",B.appendChild(M.b),x={a:M.a.getContext("2d"),b:M.b.getContext("2d")},F=[],E(),function(){0,S=new Float32Array(d);var t=void 0;for(t=0;t<d;t+=c)k(t)}(),R(),window.addEventListener("resize",E)}}),s={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},o={name:"Menu",data:function(){return{menu:{items:["start","projects","about","cv"],show:!1},startButton:{show:!0,hideStartButtonClass:!1}}},methods:{start_button:function(){var t=this;this.menu.show=!0,this.startButton.hideStartButtonClass=!0,setTimeout(function(){t.startButton.show=!1},1500)}},mounted:function(){}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header header--page"},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.menu.show,expression:"menu.show"}],staticClass:"nav nav--page"},[n("ul",{staticClass:"list list--page-menu",attrs:{id:"menu"}},t._l(t.menu.items,function(e){return n("li",{staticClass:"list__item"},[n("h1",[t._v(t._s(e))])])}),0)]),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:t.startButton.show,expression:"startButton.show"}],staticClass:"button button--start",class:{hideStartButton:t.startButton.hideStartButtonClass},on:{click:t.start_button}},[t._v("\n        start\n    ")])])},staticRenderFns:[]},u={name:"App",components:{Background:n("VU/8")(r,s,!1,null,null,null).exports,Menu:n("VU/8")(o,i,!1,null,null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("Menu"),this._v(" "),e("Background")],1)},staticRenderFns:[]},h=n("VU/8")(u,l,!1,null,null,null).exports,c=n("/ocq"),d={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("hello")])},staticRenderFns:[]},m=n("VU/8")({name:"start"},d,!1,null,null,null).exports;a.a.use(c.a);var v=new c.a({routes:[{path:"/",name:"start",component:m}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:v,components:{App:h},template:"<App/>"})},hvFc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.14f3a6f5822cbe00e60d.js.map