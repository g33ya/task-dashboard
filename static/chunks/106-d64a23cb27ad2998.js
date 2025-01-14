"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{4454:t=>{var e={linear:function(t,e,i,n){return(i-e)*t/n+e},easeInQuad:function(t,e,i,n){return(i-e)*(t/=n)*t+e},easeOutQuad:function(t,e,i,n){return-(i-e)*(t/=n)*(t-2)+e},easeInOutQuad:function(t,e,i,n){var a=i-e;return(t/=n/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,i,n){return(i-e)*(t/=n)*t*t+e},easeOutCubic:function(t,e,i,n){return(i-e)*((t=t/n-1)*t*t+1)+e},easeInOutCubic:function(t,e,i,n){var a=i-e;return(t/=n/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,i,n){return(i-e)*(t/=n)*t*t*t+e},easeOutQuart:function(t,e,i,n){return-(i-e)*((t=t/n-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,i,n){var a=i-e;return(t/=n/2)<1?a/2*t*t*t*t+e:-a/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,i,n){return(i-e)*(t/=n)*t*t*t*t+e},easeOutQuint:function(t,e,i,n){return(i-e)*((t=t/n-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,i,n){var a=i-e;return(t/=n/2)<1?a/2*t*t*t*t*t+e:a/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,i,n){var a=i-e;return-a*Math.cos(t/n*(Math.PI/2))+a+e},easeOutSine:function(t,e,i,n){return(i-e)*Math.sin(t/n*(Math.PI/2))+e},easeInOutSine:function(t,e,i,n){return-(i-e)/2*(Math.cos(Math.PI*t/n)-1)+e},easeInExpo:function(t,e,i,n){return 0==t?e:(i-e)*Math.pow(2,10*(t/n-1))+e},easeOutExpo:function(t,e,i,n){var a=i-e;return t==n?e+a:a*(-Math.pow(2,-10*t/n)+1)+e},easeInOutExpo:function(t,e,i,n){var a=i-e;return 0===t?e:t===n?e+a:(t/=n/2)<1?a/2*Math.pow(2,10*(t-1))+e:a/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(t,e,i,n){return-(i-e)*(Math.sqrt(1-(t/=n)*t)-1)+e},easeOutCirc:function(t,e,i,n){return(i-e)*Math.sqrt(1-(t=t/n-1)*t)+e},easeInOutCirc:function(t,e,i,n){var a=i-e;return(t/=n/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+e:a/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,i,n){var a,s,r,o=i-e;return(r=1.70158,s=0,a=o,0===t)?e:1==(t/=n)?e+o:(s||(s=.3*n),a<Math.abs(o)?(a=o,r=s/4):r=s/(2*Math.PI)*Math.asin(o/a),-(a*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*n-r)/s))+e)},easeOutElastic:function(t,e,i,n){var a,s,r,o=i-e;return(r=1.70158,s=0,a=o,0===t)?e:1==(t/=n)?e+o:(s||(s=.3*n),a<Math.abs(o)?(a=o,r=s/4):r=s/(2*Math.PI)*Math.asin(o/a),a*Math.pow(2,-10*t)*Math.sin(2*Math.PI*(t*n-r)/s)+o+e)},easeInOutElastic:function(t,e,i,n){var a,s,r,o=i-e;return(r=1.70158,s=0,a=o,0===t)?e:2==(t/=n/2)?e+o:(s||(s=.3*1.5*n),a<Math.abs(o)?(a=o,r=s/4):r=s/(2*Math.PI)*Math.asin(o/a),t<1)?-.5*(a*Math.pow(2,10*(t-=1))*Math.sin(2*Math.PI*(t*n-r)/s))+e:a*Math.pow(2,-10*(t-=1))*Math.sin(2*Math.PI*(t*n-r)/s)*.5+o+e},easeInBack:function(t,e,i,n,a){return void 0===a&&(a=1.70158),(i-e)*(t/=n)*t*((a+1)*t-a)+e},easeOutBack:function(t,e,i,n,a){return void 0===a&&(a=1.70158),(i-e)*((t=t/n-1)*t*((a+1)*t+a)+1)+e},easeInOutBack:function(t,e,i,n,a){var s=i-e;return(void 0===a&&(a=1.70158),(t/=n/2)<1)?s/2*(t*t*(((a*=1.525)+1)*t-a))+e:s/2*((t-=2)*t*(((a*=1.525)+1)*t+a)+2)+e},easeInBounce:function(t,i,n,a){var s,r=n-i;return s=e.easeOutBounce(a-t,0,r,a),r-s+i},easeOutBounce:function(t,e,i,n){var a=i-e;return(t/=n)<1/2.75?7.5625*t*t*a+e:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+e:a*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,i,n,a){var s=n-i;return t<a/2?.5*e.easeInBounce(2*t,0,s,a)+i:.5*e.easeOutBounce(2*t-a,0,s,a)+.5*s+i}};t.exports=e},955:(t,e,i)=>{i.d(e,{A:()=>a});var n=i(2115);let a=n.forwardRef(function(t,e){let{title:i,titleId:a,...s}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":a},s),i?n.createElement("title",{id:a},i):null,n.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))})},4390:(t,e,i)=>{i.d(e,{A:()=>a});var n=i(2115);let a=n.forwardRef(function(t,e){let{title:i,titleId:a,...s}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":a},s),i?n.createElement("title",{id:a},i):null,n.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"}))})},7360:(t,e,i)=>{i.d(e,{A:()=>a});var n=i(2115);let a=n.forwardRef(function(t,e){let{title:i,titleId:a,...s}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":a},s),i?n.createElement("title",{id:a},i):null,n.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))})},9069:(t,e,i)=>{i.d(e,{A:()=>a});var n=i(2115);let a=n.forwardRef(function(t,e){let{title:i,titleId:a,...s}=t;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":a},s),i?n.createElement("title",{id:a},i):null,n.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"}))})},2887:(t,e,i)=>{i.d(e,{A:()=>w});var n,a,s=i(5155),r=i(2115),o=i(4454);function h(t,e){return t+Math.random()*(e-t)}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(n||(n={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(a||(a={}));class c{constructor(t,e,i,n){this.getOptions=e;let{colors:s,initialVelocityX:r,initialVelocityY:o}=this.getOptions();this.context=t,this.x=i,this.y=n,this.w=h(5,20),this.h=h(5,20),this.radius=h(5,10),this.vx="number"==typeof r?h(-r,r):h(r.min,r.max),this.vy="number"==typeof o?h(-o,0):h(o.min,o.max),this.shape=Math.floor(0+3*Math.random()),this.angle=h(0,360)*Math.PI/180,this.angularSpin=h(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=h(0,1),this.rotationDirection=h(0,1)?a.Positive:a.Negative}update(){let{gravity:t,wind:e,friction:i,opacity:s,drawShape:r}=this.getOptions();this.x+=this.vx,this.y+=this.vy,this.vy+=t,this.vx+=e,this.vx*=i,this.vy*=i,this.rotateY>=1&&this.rotationDirection===a.Positive?this.rotationDirection=a.Negative:this.rotateY<=-1&&this.rotationDirection===a.Negative&&(this.rotationDirection=a.Positive);let o=.1*this.rotationDirection;if(this.rotateY+=o,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=s,this.context.lineCap="round",this.context.lineWidth=2,r&&"function"==typeof r)r.call(this,this.context);else switch(this.shape){case n.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case n.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case n.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}class l{constructor(t,e){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenInitTime=Date.now(),this.particles=[],this.particlesGenerated=0,this.removeParticleAt=t=>{this.particles.splice(t,1)},this.getParticle=()=>{let t=h(this.x,this.w+this.x),e=h(this.y,this.h+this.y);return new c(this.context,this.getOptions,t,e)},this.animate=()=>{let{canvas:t,context:e,particlesGenerated:i,lastNumberOfPieces:n}=this,{run:a,recycle:s,numberOfPieces:r,debug:o,tweenFunction:h,tweenDuration:c}=this.getOptions();if(!a)return!1;let l=this.particles.length,u=s?l:i,f=Date.now();if(u<r){n!==r&&(this.tweenInitTime=f,this.lastNumberOfPieces=r);let{tweenInitTime:t}=this,e=Math.round(h(f-t>c?c:Math.max(0,f-t),u,r,c)-u);for(let t=0;t<e;t++)this.particles.push(this.getParticle());this.particlesGenerated+=e}return o&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText(`Particles: ${l}`,t.width-10,t.height-20)),this.particles.forEach((e,i)=>{e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&u<=r?this.particles[i]=this.getParticle():this.removeParticleAt(i))}),l>0||u<r},this.canvas=t;let i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=e}}let u={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:o.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class f{constructor(t,e){this.lastFrameTime=Date.now(),this.setOptionsWithDefaults=t=>{let e={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...e,...u,...t},Object.assign(this,t.confettiSource)},this.update=()=>{let{options:{run:t,onConfettiComplete:e,frameRate:i},canvas:n,context:a}=this;if(i){let t=Date.now(),e=t-this.lastFrameTime;if(e<1e3/i){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=t-e%i}t&&(a.fillStyle="white",a.clearRect(0,0,n.width,n.height)),this.generator.animate()?this.rafId=requestAnimationFrame(this.update):(e&&"function"==typeof e&&this.generator.particlesGenerated>0&&e.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;let i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new l(this.canvas,()=>this.options),this.options=e,this.update()}get options(){return this._options}set options(t){let e=this._options?.run,i=this._options?.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===i&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}let d=r.createRef();class p extends r.Component{constructor(t){super(t),this.canvas=r.createRef(),this.canvas=t.canvasRef||d}componentDidMount(){if(this.canvas.current){let t=v(this.props)[0];this.confetti=new f(this.canvas.current,t)}}componentDidUpdate(){let t=v(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){let[t,e]=v(this.props),i={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...e.style};return(0,s.jsx)("canvas",{width:t.width,height:t.height,ref:this.canvas,...e,style:i})}}function v(t){let e={},i={},n=[...Object.keys(u),"confettiSource","drawShape","onConfettiComplete","frameRate"],a=["canvasRef"];for(let s in t){let r=t[s];n.includes(s)?e[s]=r:a.includes(s)?a[s]=r:i[s]=r}return[e,i,{}]}p.defaultProps={...u},p.displayName="ReactConfetti";let w=r.forwardRef((t,e)=>(0,s.jsx)(p,{canvasRef:e,...t}))}}]);