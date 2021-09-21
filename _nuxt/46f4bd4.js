/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{284:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},285:function(e,t,n){var r=n(35),o=n(18),c="["+n(284)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(e){return function(t){var n=o(r(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(d,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},286:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return d}));var r=e.env.SUBMIT_EVENT_URL||"https://docs.google.com/forms/d/e/1FAIpQLSe1ZK-NHycf2ZX4R6DUbKklErE2KyEBnAmsED8BtwBt9XMing/viewform",o=e.env.EVENTS_URL||"https://raw.githubusercontent.com/otherplane/liscon-week/main/events.csv",c=e.env.DEFAULT_BACKGROUND_IMAGE,l=[{label:"All"},{label:"Favorites"},{label:"Events"},{label:"Hackathons"},{label:"Workshops"},{label:"Drinks"}],d={18:{key:"18",timestamp:16345152e5,name:"Mon"},19:{key:"19",timestamp:16346016e5,name:"Tue"},20:{key:"20",timestamp:1634688e6,name:"Wed"},21:{key:"21",timestamp:16347744e5,name:"Thur"},22:{key:"22",timestamp:16348608e5,name:"Fri"},23:{key:"23",timestamp:16349472e5,name:"Sat"},24:{key:"24",timestamp:16350336e5,name:"Sun"}}}).call(this,n(202))},287:function(e,t,n){"use strict";var r=n(6),o=n(285).trim;r({target:"String",proto:!0,forced:n(288)("trim")},{trim:function(){return o(this)}})},288:function(e,t,n){var r=n(9),o=n(284);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},289:function(e,t,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(64).default)("b6017d60",content,!0,{sourceMap:!1})},298:function(e,t,n){var r,o,c;o=[],void 0===(c="function"==typeof(r=function s(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},t=!e.document&&!!e.postMessage,n=t&&/blob:/i.test((e.location||{}).protocol),a={},r=0,b={parse:function(t,n){var i=(n=n||{}).dynamicTyping||!1;if(k(i)&&(n.dynamicTypingFunction=i,i={}),n.dynamicTyping=i,n.transform=!!k(n.transform)&&n.transform,n.worker&&b.WORKERS_SUPPORTED){var o=function(){if(!b.WORKERS_SUPPORTED)return!1;var i,t,n=(i=e.URL||e.webkitURL||null,t=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",t,")();"],{type:"text/javascript"})))),o=new e.Worker(n);return o.onmessage=h,o.id=r++,a[o.id]=o}();return o.userStep=n.step,o.userChunk=n.chunk,o.userComplete=n.complete,o.userError=n.error,n.step=k(n.step),n.chunk=k(n.chunk),n.complete=k(n.complete),n.error=k(n.error),delete n.worker,void o.postMessage({input:t,config:n,workerId:o.id})}var d=null;return b.NODE_STREAM_INPUT,"string"==typeof t?d=n.download?new c(n):new p(n):!0===t.readable&&k(t.read)&&k(t.on)?d=new g(n):(e.File&&t instanceof File||t instanceof Object)&&(d=new l(n)),d.stream(t)},unparse:function(e,t){var n=!1,r=!0,o=",",c="\r\n",s='"',a=s+s,i=!1,l=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(o=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines),"string"==typeof t.newline&&(c=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s),"boolean"==typeof t.escapeFormulae&&(f=t.escapeFormulae)}}();var h=new RegExp(d(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(l||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var n="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var l=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(l&&r){for(var a=0;a<e.length;a++)0<a&&(n+=o),n+=m(e[a],a);0<t.length&&(n+=c)}for(var d=0;d<t.length;d++){var f=l?e.length:t[d].length,u=!1,h=l?0===Object.keys(t[d]).length:0===t[d].length;if(i&&!l&&(u="greedy"===i?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===i&&l){for(var v=[],y=0;y<f;y++){var _=s?e[y]:y;v.push(t[d][_])}u=""===v.join("").trim()}if(!u){for(var p=0;p<f;p++){0<p&&!h&&(n+=o);var g=l&&s?e[p]:p;n+=m(t[d][g],p)}d<t.length-1&&(!i||0<f&&!h)&&(n+=c)}}return n}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===f&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(h,a);return"boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(o)||" "===i.charAt(0)||" "===i.charAt(i.length-1)?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!t&&!!e.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=f,b.ParserHandle=i,b.NetworkStreamer=c,b.FileStreamer=l,b.StringStreamer=p,b.ReadableStreamStreamer=g,e.jQuery){var o=e.jQuery;o.fn.parse=function(t){var i=t.config||{},n=[];return this.each((function(t){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var r=0;r<this.files.length;r++)n.push({file:this.files[r],inputElem:this,instanceConfig:o.extend({},i)})})),r(),this;function r(){if(0!==n.length){var e,r,i,c,l=n[0];if(k(t.before)){var s=t.before(l.file,l.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",r=l.file,i=l.inputElem,c=s.reason,void(k(t.error)&&t.error({name:e},r,i,c));if("skip"===s.action)return void u();"object"==typeof s.config&&(l.instanceConfig=o.extend(l.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=l.instanceConfig.complete;l.instanceConfig.complete=function(e){k(a)&&a(e,l.file,l.inputElem),u()},b.parse(l.file,l.instanceConfig)}else k(t.complete)&&t.complete()}function u(){n.splice(0,1),r()}}}function u(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,t),this.parseChunk=function(t,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var c=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=c.meta.cursor;this._finished||(this._partialLine=o.substring(s-this._baseIndex),this._baseIndex=s),c&&c.data&&(this._rowCount+=c.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)e.postMessage({results:c,workerId:b.WORKER_ID,finished:a});else if(k(this._config.chunk)&&!r){if(this._config.chunk(c,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);c=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(c.data),this._completeResults.errors=this._completeResults.errors.concat(c.errors),this._completeResults.meta=c.meta),this._completed||!a||!k(this._config.complete)||c&&c.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||c&&c.meta.paused||this._nextChunk(),c}this._halted=!0},this._sendError=function(t){k(this._config.error)?this._config.error(t):n&&this._config.error&&e.postMessage({workerId:b.WORKER_ID,error:t,finished:!1})}}function c(e){var n;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=t?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),t||(n.onload=_(this._chunkLoaded,this),n.onerror=_(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!t),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)n.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{n.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}t&&0===n.status&&this._chunkError()}},this._chunkLoaded=function(){4===n.readyState&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(e){var t=n.statusText||e;this._sendError(new Error(t))}}function l(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((t=new FileReader).onload=_(this._chunkLoaded,this),t.onerror=_(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var r=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,r)}var i=t.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=_((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=_((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=_((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=_((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function i(e){var a,t,n,r=Math.pow(2,53),o=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,c=this,i=0,l=0,h=!1,m=!1,v=[],_={data:[],errors:[],meta:{}};if(k(e.step)){var p=e.step;e.step=function(n){if(_=n,E())g();else{if(g(),0===_.data.length)return;i+=n.data.length,e.preview&&i>e.preview?t.abort():(_.data=_.data[0],p(_,c))}}}function w(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function g(){if(_&&n&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines)for(var t=0;t<_.data.length;t++)w(_.data[t])&&_.data.splice(t--,1);return E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;E()&&t<_.data.length;t++)_.data[t].forEach(n);_.data.splice(0,1)}else _.data.forEach(n);function n(t,n){k(e.transformHeader)&&(t=e.transformHeader(t,n)),v.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,n){var i,r=e.header?{}:[];for(i=0;i<t.length;i++){var o=i,s=t[i];e.header&&(o=i>=v.length?"__parsed_extra":v[i]),e.transform&&(s=e.transform(s,o)),s=x(o,s),"__parsed_extra"===o?(r[o]=r[o]||[],r[o].push(s)):r[o]=s}return e.header&&(i>v.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+i,l+n):i<v.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+i,l+n)),r}var n=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),n=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=v),l+=n,_}()}function E(){return e.header&&0===v.length}function x(t,n){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(s.test(e)){var t=parseFloat(e);if(o<t&&t<r)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var i}function C(e,t,i,n){var r={type:e,code:t,message:i};void 0!==n&&(r.row=n),_.errors.push(r)}this.parse=function(r,o,i){var c=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(d(t)+"([^]*?)"+d(t),"gm"),n=(e=e.replace(i,"")).split("\r"),r=e.split("\n"),s=1<r.length&&r[0].length<n[0].length;if(1===n.length||s)return"\n";for(var a=0,o=0;o<n.length;o++)"\n"===n[o][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(r,c)),n=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(r),_.meta.delimiter=e.delimiter);else{var l=function(t,n,i,r,o){var s,a,c,l;o=o||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<o.length;u++){var d=o[u],h=0,m=0,v=0;c=void 0;for(var p=new f({comments:r,delimiter:d,newline:n,preview:10}).parse(t),g=0;g<p.data.length;g++)if(i&&w(p.data[g]))v++;else{var y=p.data[g].length;m+=y,void 0!==c?0<y&&(h+=Math.abs(y-c),c=y):c=y}0<p.data.length&&(m/=p.data.length-v),(void 0===a||h<=a)&&(void 0===l||l<m)&&1.99<m&&(a=h,s=d,l=m)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(r,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=b.DefaultDelimiter),_.meta.delimiter=e.delimiter}var s=y(e);return e.preview&&e.header&&s.preview++,a=r,t=new f(s),_=t.parse(a,o,i),g(),h?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,t.abort(),a=k(e.chunk)?"":a.substring(t.getCharIndex())},this.resume=function(){c.streamer._halted?(h=!1,c.streamer.parseChunk(a,!0)):setTimeout(c.resume,3)},this.aborted=function(){return m},this.abort=function(){m=!0,t.abort(),_.meta.aborted=!0,k(e.complete)&&e.complete(_),a=""}}function d(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function f(e){var t,n=(e=e||{}).delimiter,r=e.newline,o=e.comments,c=e.step,l=e.preview,f=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof n||-1<b.BAD_DELIMITERS.indexOf(n))&&(n=","),o===n)throw new Error("Comment character same as delimiter");!0===o?o="#":("string"!=typeof o||-1<b.BAD_DELIMITERS.indexOf(o))&&(o=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var m=0,v=!1;this.parse=function(e,y,i){if("string"!=typeof e)throw new Error("Input must be a string");var _=e.length,w=n.length,s=r.length,a=o.length,E=k(c),x=[],u=[],C=[],O=m=0;if(!e)return F();if(f||!1!==f&&-1===e.indexOf(t)){for(var S=e.split(r),R=0;R<S.length;R++){if(C=S[R],m+=C.length,R!==S.length-1)m+=r.length;else if(i)return F();if(!o||C.substring(0,a)!==o){if(E){if(x=[],A(C.split(n)),U(),v)return F()}else A(C.split(n));if(l&&l<=R)return x=x.slice(0,l),F(!0)}}return F()}for(var p=e.indexOf(n,m),g=e.indexOf(r,m),D=new RegExp(d(h)+d(t),"g"),T=e.indexOf(t,m);;)if(e[m]!==t)if(o&&0===C.length&&e.substring(m,m+a)===o){if(-1===g)return F();m=g+s,g=e.indexOf(r,m),p=e.indexOf(n,m)}else if(-1!==p&&(p<g||-1===g))C.push(e.substring(m,p)),m=p+w,p=e.indexOf(n,m);else{if(-1===g)break;if(C.push(e.substring(m,g)),M(g+s),E&&(U(),v))return F();if(l&&x.length>=l)return F(!0)}else for(T=m,m++;;){if(-1===(T=e.indexOf(t,T+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:x.length,index:m}),L();if(T===_-1)return L(e.substring(m,T).replace(D,t));if(t!==h||e[T+1]!==h){if(t===h||0===T||e[T-1]!==h){-1!==p&&p<T+1&&(p=e.indexOf(n,T+1)),-1!==g&&g<T+1&&(g=e.indexOf(r,T+1));var I=b(-1===g?p:Math.min(p,g));if(e[T+1+I]===n){C.push(e.substring(m,T).replace(D,t)),e[m=T+1+I+w]!==t&&(T=e.indexOf(t,m)),p=e.indexOf(n,m),g=e.indexOf(r,m);break}var j=b(g);if(e.substring(T+1+j,T+1+j+s)===r){if(C.push(e.substring(m,T).replace(D,t)),M(T+1+j+s),p=e.indexOf(n,m),T=e.indexOf(t,m),E&&(U(),v))return F();if(l&&x.length>=l)return F(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:x.length,index:m}),T++}}else T++}return L();function A(e){x.push(e),O=m}function b(t){var n=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(n=i.length)}return n}function L(t){return i||(void 0===t&&(t=e.substring(m)),C.push(t),m=_,A(C),E&&U()),F()}function M(t){m=t,A(C),C=[],g=e.indexOf(r,m)}function F(e){return{data:x,errors:u,meta:{delimiter:n,linebreak:r,aborted:v,truncated:!!e,cursor:O+(y||0)}}}function U(){c(F()),x=[],u=[]}},this.abort=function(){v=!0},this.getCharIndex=function(){return m}}function h(e){var t=e.data,i=a[t.workerId],n=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var r={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(k(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},r),!n);s++);delete t.results}else k(i.userChunk)&&(i.userChunk(t.results,r,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var i=a[e];k(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=y(e[i]);return t}function _(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return n&&(e.onmessage=function(t){var n=t.data;if(void 0===b.WORKER_ID&&n&&(b.WORKER_ID=n.workerId),"string"==typeof n.input)e.postMessage({workerId:b.WORKER_ID,results:b.parse(n.input,n.config),finished:!0});else if(e.File&&n.input instanceof File||n.input instanceof Object){var i=b.parse(n.input,n.config);i&&e.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(c.prototype=Object.create(u.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b})?r.apply(t,o):r)||(e.exports=c)},299:function(e,t,n){"use strict";n(289)},300:function(e,t,n){var r=n(63)(!1);r.push([e.i,"[data-v-0c7ea704]:root{--selected-background:#37414c;--selected-text:#fff;--selected-icon:rgba(98,177,176,0.3451);--selected-options-background:#37414c;--selected-options-text:#fff;--selected-options-border:1px solid #1f1f24;--selected-options-shadow:1px 1px 10 2px rgba(98,177,176,0.16078);--selected-options-highlight:rgba(98,177,176,0.08235)}.appear-enter-active[data-v-0c7ea704],.appear-leave-active[data-v-0c7ea704]{transition:all .3s ease-in-out}.appear-enter[data-v-0c7ea704],.appear-leave-to[data-v-0c7ea704]{transform:translate(-50%,-50%);opacity:0}.current[data-v-0c7ea704]{color:#d94d49}.current.label[data-v-0c7ea704]{border:1px solid #d94d49}.agenda[data-v-0c7ea704]{display:grid;grid-template:-webkit-max-content 1fr/1fr;grid-template:max-content 1fr/1fr;grid-row-gap:34px;justify-content:center}.agenda .header[data-v-0c7ea704]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #c9c9c8;padding:34px 0;font-family:JoystixMonospace,sans-serif}.agenda .content[data-v-0c7ea704]{display:grid;grid-template:-webkit-max-content 1fr/1fr;grid-template:max-content 1fr/1fr;grid-row-gap:34px}.agenda .content .day-switch[data-v-0c7ea704]{display:flex;justify-content:space-around}.agenda .content .row[data-v-0c7ea704]{display:grid;grid-template-columns:-webkit-max-content auto auto 1fr;grid-template-columns:max-content auto auto 1fr;padding:24px;font-size:18px;grid-column-gap:34px;align-items:center;justify-content:center;border-bottom:1px solid #c9c9c8}.agenda .content .svg-container[data-v-0c7ea704]{cursor:pointer}.agenda .content .title[data-v-0c7ea704]{text-decoration:underline;cursor:pointer}.agenda .content .col[data-v-0c7ea704]{margin:16px;display:flex;flex-wrap:wrap;justify-content:center}.agenda .content .col.categories[data-v-0c7ea704]{justify-content:flex-end}.agenda .content .col .label[data-v-0c7ea704]{border:1px solid #30333a;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:4px 8px;margin:8px}.agenda .content .col .current.label[data-v-0c7ea704]{border:1px solid #d94d49}.agenda .content .day[data-v-0c7ea704]{margin:16px;font-size:24px;cursor:pointer;text-align:center}@media (max-width:780px){.agenda[data-v-0c7ea704]{justify-content:flex-start}.agenda .header[data-v-0c7ea704]{display:flex;flex-direction:column;align-items:flex-start}.agenda .header .select[data-v-0c7ea704]{align-self:flex-end;margin-top:24px}.agenda .content[data-v-0c7ea704]{grid-template-columns:70px 1fr;grid-column-gap:24px;justify-content:flex-start}.agenda .content .day-switch[data-v-0c7ea704]{flex-direction:column;justify-content:normal;position:sticky;top:0;height:100vh}.agenda .content .events-list .row[data-v-0c7ea704]{display:flex;flex-direction:column}.agenda .content .events-list .row .col[data-v-0c7ea704]{text-align:center;margin:8px}.agenda .content .events-list .row .col.categories[data-v-0c7ea704]{justify-content:center;margin-right:0;margin-left:0}}",""]),e.exports=r},323:function(e,t,n){"use strict";n.r(t);n(25),n(67),n(36),n(68);var r=n(22),o=n(7),c=(n(37),n(55),n(123),n(45),n(47),n(44),n(204),n(57),n(112)),l=(n(19),n(287),n(66),n(46),n(81),n(298)),d=n.n(l);function f(e){return Object(c.a)(new Date(e),"HH:mm")}function h(e){return new Promise((function(t,n){d.a.parse(e,{download:!0,header:!0,skipEmptyLines:!0,trimHeaders:!0,transformHeader:function(e){return e.trim()},complete:function(e){return e.data?t(e.data.map(m).filter((function(e){return e}))):n(e.errors)}})}))}function m(e){if(e["Title of your event"]){var t=v(e["Event date"],e["Starting time"]),n=v(e["Event date"],e["End time"]);return{id:"".concat(e["Title of your event"]," ").concat(t),sponsors:e["Sponsor(s)"],speakers:e["Speaker(s)"],eventType:e["Event type"],title:e["Title of your event"],description:e["Long description of your event"],startTimestamp:t,endTimestamp:n,venue:e.Venue,address:e.Address,image:e.Image,registrationUrl:e["Registration Url"],startTime:f(t),endTime:f(n),categories:e["Event type"].split(",").map((function(e){return e.trim()}))}}return null}function v(e,time){return new Date("".concat(e," ").concat(time)).getTime()}var y=n(286);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={data:function(){return{days:y.e,options:y.c,eventsUrl:y.b,selected:{label:"All"},filteredEvents:[],selectedEvents:[],currentDay:"18",currentEvent:null,isModalVisible:!1,events:[],favorites:[]}},fetch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{defaultDay:function(){return Object(c.a)(new Date(1634544e6),"dd-MM-yyyy")},keyDays:function(){return Object.keys(this.days)}},watch:{favorites:function(){this.setFavorites()},currentDay:function(){this.filterEvents(this.selectedEvents)}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e.eventsUrl);case 2:e.events=t.sent,e.loadFavorites(),e.setFavorites(),e.setCurrentEvent(),e.filterEvents();case 7:case"end":return t.stop()}}),t)})))()},methods:{loadFavorites:function(){this.favorites=JSON.parse(localStorage.getItem("favorites"))||[]},setFavorites:function(){var e=this;this.favorites&&(this.events=this.events.map((function(t){return k(k({},t),{},{favorite:e.favorites.find((function(e){return e===t.id}))})})),this.filterEvents())},makeEventFav:function(e){var t=this;this.favorites.includes(e)?this.favorites=this.favorites.filter((function(t){return t!==e})):this.favorites.push(e),localStorage.setItem("favorites",JSON.stringify(this.favorites)),this.$nextTick((function(){t.updateSelected(t.selected)}))},setCurrentDay:function(e){this.currentDay=e},showModal:function(e){var t=this;document.body.style.top="-".concat(window.scrollY,"px"),document.body.style.position="fixed",this.$nextTick((function(){t.currentEvent=e}))},closeModal:function(){this.currentEvent=null,this.$nextTick((function(){var e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}))},getDate:function(e){return Object(c.a)(new Date(e),"dd-MM-yyyy")},getDay:function(e){return Object(c.a)(new Date(e),"dd")},setCurrentEvent:function(){var e=this;this.events.map((function(t){return t.startTimestamp<(new Date).getTime()&&t.endTimestamp>(new Date).getTime()?(e.currentDay=e.getDay(t.endTimestamp),t.current=!0):t.current=!1,t})),this.selectedEvents=this.events},filterEvents:function(e){var t=this,n=e||this.events;this.days[this.currentDay].timestamp||(this.currentDay=this.keyDays[0]),this.filteredEvents=n.filter((function(e){return t.getDate(e.startTimestamp)===t.getDate(t.days[t.currentDay].timestamp||0)})).sort((function(e,t){return e.startTimestamp-t.startTimestamp}))},updateSelected:function(e){var t=this;this.selected=e,"All"===this.selected.label?this.selectedEvents=this.events:"Favorites"===this.selected.label?this.selectedEvents=this.events.filter((function(e){return e.favorite})):this.selectedEvents=this.events.filter((function(e){return e.categories.map((function(e){return e.toLowerCase()})).includes(t.selected.label.toLowerCase())})),this.filterEvents(this.selectedEvents)}}},E=(n(299),n(71)),component=Object(E.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agenda"},[n("div",{staticClass:"header"},[n("h2",{staticClass:"text"},[e._v("October 2021")]),e._v(" "),n("Select",{staticClass:"select",attrs:{options:e.options,"default-option":e.selected},on:{"update-selected":e.updateSelected}})],1),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"day-switch"},e._l(e.days,(function(t){return n("div",{key:t.key,staticClass:"day",class:{current:e.currentDay===t.key},on:{click:function(n){return e.setCurrentDay(t.key)}}},[n("p",[e._v(e._s(t.name))]),e._v(" "),n("p",[e._v(e._s(t.key))])])})),0),e._v(" "),e.filteredEvents.length?n("div",{staticClass:"events-list"},e._l(e.filteredEvents,(function(t){return n("div",{key:t.title,staticClass:"row",class:{current:t.current}},[n("div",{staticClass:"col svg-container",on:{click:function(n){return e.makeEventFav(t.id)}}},[n("SvgIcon",{attrs:{name:"heart","current-class":t.favorite?"fav":"default"}})],1),e._v(" "),n("p",{staticClass:"col"},[e._v(e._s(t.startTime)+" - "+e._s(t.endTime))]),e._v(" "),n("div",[n("div",{staticClass:"trigger col",on:{click:function(n){return e.showModal(t)}}},[n("p",{staticClass:"trigger title"},[e._v(e._s(t.title))])])]),e._v(" "),n("div",{staticClass:"col categories"},e._l(t.categories,(function(r){return n("p",{key:r,staticClass:"label",class:{current:t.current}},[e._v("\n            "+e._s(r)+"\n          ")])})),0)])})),0):n("Empty",{attrs:{day:e.currentDay,category:e.selected.label}}),e._v(" "),n("transition",{attrs:{name:"appear"}},[e.currentEvent?n("EventInfoModal",{attrs:{event:e.currentEvent},on:{close:e.closeModal}}):e._e()],1)],1)])}),[],!1,null,"0c7ea704",null);t.default=component.exports;installComponents(component,{Select:function(){return n.e(8).then(n.bind(null,327)).then((function(e){return e.default||e}))},SvgIcon:function(){return n.e(9).then(n.bind(null,328)).then((function(e){return e.default||e}))},Empty:function(){return n.e(4).then(n.bind(null,325)).then((function(e){return e.default||e}))},EventInfoModal:function(){return n.e(5).then(n.bind(null,326)).then((function(e){return e.default||e}))}})}}]);