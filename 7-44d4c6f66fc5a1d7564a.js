(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(t,e,i){"use strict";var n=i(8);e.__esModule=!0,e.default=void 0;var s,o=n(i(7)),r=n(i(35)),a=n(i(75)),l=n(i(76)),h=n(i(0)),u=n(i(4)),c=function(t){var e=(0,l.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},d=Object.create({}),f=function(t){var e=c(t),i=e.fluid?e.fluid.src:e.fixed.src;return d[i]||!1},p=new WeakMap;var m=function(t,e){var i=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(t){t.forEach(function(t){if(p.has(t.target)){var e=p.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(s.unobserve(t.target),p.delete(t.target),e())}})},{rootMargin:"200px"})),s);return i&&(i.observe(t),p.set(t,e)),function(){i.unobserve(t),p.delete(t)}},v=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',i=t.sizes?'sizes="'+t.sizes+'" ':"",n=t.srcSetWebp?"<source type='image/webp' srcset=\""+t.srcSetWebp+'" '+i+"/>":"",s=t.srcSet?'srcset="'+t.srcSet+'" ':"",o=t.title?'title="'+t.title+'" ':"",r=t.alt?'alt="'+t.alt+'" ':'alt="" ',a=t.width?'width="'+t.width+'" ':"",l=t.height?'height="'+t.height+'" ':"",h=t.opacity?t.opacity:"1",u=t.transitionDelay?t.transitionDelay:"0.5s";return"<picture>"+n+"<img "+a+l+i+s+e+r+o+(t.crossOrigin?'crossorigin="'+t.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+h+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=h.default.forwardRef(function(t,e){var i=t.sizes,n=t.srcSet,s=t.src,o=t.style,r=t.onLoad,u=t.onError,c=(0,a.default)(t,["sizes","srcSet","src","style","onLoad","onError"]);return h.default.createElement("img",(0,l.default)({sizes:i,srcSet:n,src:s},c,{onLoad:r,onError:u,ref:e,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},o)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var g=function(t){function e(e){var i;i=t.call(this,e)||this;var n=!0,s=!1,o=e.fadeIn,a=f(e);!a&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,s=!0),"undefined"==typeof window&&(n=!1),e.critical&&(n=!0,s=!1);var l=!(e.critical&&!e.fadeIn);return i.state={isVisible:n,imgLoaded:!1,IOSupported:s,fadeIn:o,hasNoScript:l,seenBefore:a},i.imageRef=h.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,r.default)((0,r.default)(i))),i.handleRef=i.handleRef.bind((0,r.default)((0,r.default)(i))),i}(0,o.default)(e,t);var i=e.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(t){var e=this;this.state.IOSupported&&t&&(this.cleanUpListeners=m(t,function(){var t=f(e.props);e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:t}),e.setState({isVisible:!0,imgLoaded:t})}))},i.handleImageLoaded=function(){var t,e,i;t=this.props,e=c(t),i=e.fluid?e.fluid.src:e.fixed.src,d[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var t=c(this.props),e=t.title,i=t.alt,n=t.className,s=t.style,o=void 0===s?{}:s,r=t.imgStyle,a=void 0===r?{}:r,u=t.placeholderStyle,d=void 0===u?{}:u,f=t.placeholderClassName,p=t.fluid,m=t.fixed,g=t.backgroundColor,b=t.Tag,w=t.itemProp,Y="boolean"==typeof g?"lightgray":g,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},a,d),X=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},a),T={title:e,alt:this.state.isVisible?"":i,style:S,className:f};if(p){var E=p;return h.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},h.default.createElement(b,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),Y&&h.default.createElement(b,{title:e,style:{backgroundColor:Y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),E.base64&&h.default.createElement(y,(0,l.default)({src:E.base64},T)),E.tracedSVG&&h.default.createElement(y,(0,l.default)({src:E.tracedSVG},T)),this.state.isVisible&&h.default.createElement("picture",null,E.srcSetWebp&&h.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),h.default.createElement(y,{alt:i,title:e,sizes:E.sizes,src:E.src,crossOrigin:this.props.crossOrigin,srcSet:E.srcSet,style:X,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:i,title:e},E))}}))}if(m){var k=m,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},o);return"inherit"===o.display&&delete C.display,h.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},Y&&h.default.createElement(b,{title:e,style:{backgroundColor:Y,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),k.base64&&h.default.createElement(y,(0,l.default)({src:k.base64},T)),k.tracedSVG&&h.default.createElement(y,(0,l.default)({src:k.tracedSVG},T)),this.state.isVisible&&h.default.createElement("picture",null,k.srcSetWebp&&h.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),h.default.createElement(y,{alt:i,title:e,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:X,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:i,title:e,width:k.width,height:k.height},k))}}))}return null},e}(h.default.Component);g.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),w=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});g.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var Y=g;e.default=Y},163:function(t,e,i){"use strict";i(164)("fixed",function(t){return function(){return t(this,"tt","","")}})},164:function(t,e,i){var n=i(11),s=i(18),o=i(19),r=/"/g,a=function(t,e,i,n){var s=String(o(t)),a="<"+e;return""!==i&&(a+=" "+i+'="'+String(n).replace(r,"&quot;")+'"'),a+">"+s+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(a),n(n.P+n.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},165:function(t,e){t.exports=function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}},167:function(t,e,i){(function(e){var i;t.exports=function t(e,n,s){function o(a,l){if(!n[a]){if(!e[a]){var h="function"==typeof i&&i;if(!l&&h)return i(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var i=e[a][1][t];return o(i||t)},c,c.exports,t,e,n,s)}return n[a].exports}for(var r="function"==typeof i&&i,a=0;a<s.length;a++)o(s[a]);return o}({1:[function(t,e,i){"use strict";var n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;var n=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==n.join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(t){s[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(o){return!1}}()?Object.assign:function(t,e){for(var i,r,a=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),l=1;l<arguments.length;l++){for(var h in i=Object(arguments[l]))s.call(i,h)&&(a[h]=i[h]);if(n){r=n(i);for(var u=0;u<r.length;u++)o.call(i,r[u])&&(a[r[u]]=i[r[u]])}}return a}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,s,o,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(i()-r)/1e6},n=t.hrtime,o=(i=function(){var t;return 1e9*(t=n())[0]+t[1]})(),a=1e9*t.uptime(),r=o-a):Date.now?(e.exports=function(){return Date.now()-s},s=Date.now()):(e.exports=function(){return(new Date).getTime()-s},s=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){var n,s,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(t){n=r}try{s="function"==typeof clearTimeout?clearTimeout:a}catch(t){s=a}}();var h,u=[],c=!1,d=-1;function f(){c&&h&&(c=!1,h.length?u=h.concat(u):d=-1,u.length&&p())}function p(){if(!c){var t=l(f);c=!0;for(var e=u.length;e;){for(h=u,u=[];++d<e;)h&&h[d].run();d=-1,e=u.length}h=null,c=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(e){try{return s.call(null,t)}catch(e){return s.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];u.push(new m(t,e)),1!==u.length||c||l(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],4:[function(t,i,n){(function(e){for(var n=t("performance-now"),s="undefined"==typeof window?e:window,o=["moz","webkit"],r="AnimationFrame",a=s["request"+r],l=s["cancel"+r]||s["cancelRequest"+r],h=0;!a&&h<o.length;h++)a=s[o[h]+"Request"+r],l=s[o[h]+"Cancel"+r]||s[o[h]+"CancelRequest"+r];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(i){setTimeout(function(){throw i},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}i.exports=function(t){return a.call(s,t)},i.exports.cancel=function(){l.apply(s,arguments)},i.exports.polyfill=function(){s.requestAnimationFrame=a,s.cancelAnimationFrame=l}}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=t("raf"),o=t("object-assign"),r={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return r.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){r.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),r.css(t,"transform-style","preserve-3d"),r.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,s=!1,o=null,a=null,l=0,h=r.vendors.length;l<h;l++)if(null!==r.vendors[l]?(o=r.vendors[l][0]+"transform",a=r.vendors[l][1]+"Transform"):(o="transform",a="transform"),void 0!==e.style[a]){i=!0;break}switch(t){case"2D":s=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,f=!1;document.body||(f=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[a]="translate3d(1px,1px,1px)",n=window.getComputedStyle(e).getPropertyValue(o),s=void 0!==n&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),f&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return s},css:function(t,e,i){var n=r.propertyCache[e];if(!n)for(var s=0,o=r.vendors.length;s<o;s++)if(n=null!==r.vendors[s]?r.camelCase(r.vendors[s][1]+"-"+e):e,void 0!==t.style[n]){r.propertyCache[e]=n;break}t.style[n]=i}},a={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},l=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e;var n={calibrateX:r.data(this.element,"calibrate-x"),calibrateY:r.data(this.element,"calibrate-y"),invertX:r.data(this.element,"invert-x"),invertY:r.data(this.element,"invert-y"),limitX:r.data(this.element,"limit-x"),limitY:r.data(this.element,"limit-y"),scalarX:r.data(this.element,"scalar-x"),scalarY:r.data(this.element,"scalar-y"),frictionX:r.data(this.element,"friction-x"),frictionY:r.data(this.element,"friction-y"),originX:r.data(this.element,"origin-x"),originY:r.data(this.element,"origin-y"),pointerEvents:r.data(this.element,"pointer-events"),precision:r.data(this.element,"precision"),relativeInput:r.data(this.element,"relative-input"),clipRelativeInput:r.data(this.element,"clip-relative-input"),hoverOnly:r.data(this.element,"hover-only"),inputElement:document.querySelector(r.data(this.element,"input-element")),selector:r.data(this.element,"selector")};for(var s in n)null===n[s]&&delete n[s];o(this,a,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=r.transformSupport("2D"),this.transform3DSupport=r.transformSupport("3D")),this.transform3DSupport&&r.accelerate(this.element);var t=window.getComputedStyle(this.element);"static"===t.getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&r.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=r.data(e,"depth")||0;this.depthsX.push(r.data(e,"depth-x")||i),this.depthsY.push(r.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=s(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),s.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?r.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?r.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=r.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=r.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=s(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,s=this.windowHeight>this.windowWidth;this.portrait!==s&&(this.portrait=s,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=l},{"object-assign":1,raf:4}]},{},[5])(5)}).call(this,i(74))}}]);
//# sourceMappingURL=7-44d4c6f66fc5a1d7564a.js.map