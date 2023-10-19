var t,e,i,n,s;t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},null==(n=t.parcelRequirec111)&&((n=function(t){if(t in e)return e[t].exports;if(t in i){var n=i[t];delete i[t];var s={id:t,exports:{}};return e[t]=s,n.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},t.parcelRequirec111=n),(0,n.register)("9qak9",function(t,e){var i,n;i="undefined"!=typeof window?window:t.exports,n=function(t,e){var i,n=[],s=Object.getPrototypeOf,o=n.slice,r=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},a=n.push,l=n.indexOf,c={},d=c.toString,h=c.hasOwnProperty,u=h.toString,p=u.call(Object),f={},g=function(t){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item},v=function(t){return null!=t&&t===t.window},y=t.document,m={type:!0,src:!0,nonce:!0,noModule:!0};function b(t,e,i){var n,s,o=(i=i||y).createElement("script");if(o.text=t,e)for(n in m)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(s=e[n]||e.getAttribute&&e.getAttribute(n))&&o.setAttribute(n,s);i.head.appendChild(o).parentNode.removeChild(o)}function x(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?c[d.call(t)]||"object":typeof t}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",k=/HTML$/i,T=function(t,e){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new T.fn.init(t,e)};function S(t){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,i=x(t);return!(g(t)||v(t))&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function C(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}T.fn=T.prototype={// The current version of jQuery being used
jquery:w,constructor:T,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){return(// Return all the elements in a clean array
null==t?o.call(this):t<0?this[t+this.length]:this[t])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){// Build a new jQuery matched element set
var e=T.merge(this.constructor(),t);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
e.prevObject=this,e)},// Execute a callback for every element in the matched set.
each:function(t){return T.each(this,t)},map:function(t){return this.pushStack(T.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(t,e){return(e+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(t,e){return e%2}))},eq:function(t){var e=this.length,i=+t+(t<0?e:0);return this.pushStack(i>=0&&i<e?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:a,sort:n.sort,splice:n.splice},T.extend=T.fn.extend=function(){var t,e,i,n,s,o,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,// Skip the boolean and the target
r=arguments[a]||{},a++),"object"==typeof r||g(r)||(r={}),a===l&&(r=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(t=arguments[a]))for(e in t)n=t[e],"__proto__"!==e&&r!==n&&(c&&n&&(T.isPlainObject(n)||(s=Array.isArray(n)))?(i=r[e],o=s&&!Array.isArray(i)?[]:s||T.isPlainObject(i)?i:{},s=!1,// Never move original objects, clone them
r[e]=T.extend(c,o,n)):void 0!==n&&(r[e]=n));// Return the modified object
return r},T.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw Error(t)},noop:function(){},isPlainObject:function(t){var e,i;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!t&&"[object Object]"===d.call(t)&&(!(e=s(t))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(i=h.call(e,"constructor")&&e.constructor)&&u.call(i)===p))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(t,e,i){b(t,{nonce:e&&e.nonce},i)},each:function(t,e){var i,n=0;if(S(t))for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)if(!1===e.call(t[n],n,t[n]))break;return t},// Retrieve the text value of an array of DOM nodes
text:function(t){var e,i="",n=0,s=t.nodeType;if(!s)for(;e=t[n++];)i+=T.text(e);return 1===s||11===s?t.textContent:9===s?t.documentElement.textContent:3===s||4===s?t.nodeValue:i},// results is for internal usage only
makeArray:function(t,e){var i=e||[];return null!=t&&(S(Object(t))?T.merge(i,"string"==typeof t?[t]:t):a.call(i,t)),i},inArray:function(t,e,i){return null==e?-1:l.call(e,t,i)},isXMLDoc:function(t){var e=t&&t.namespaceURI,i=t&&(t.ownerDocument||t).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!k.test(e||i&&i.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var i=+e.length,n=0,s=t.length;n<i;n++)t[s++]=e[n];return t.length=s,t},grep:function(t,e,i){// Go through the array, only saving the items
// that pass the validator function
for(var n=[],s=0,o=t.length,r=!i;s<o;s++)!e(t[s],s)!==r&&n.push(t[s]);return n},// arg is for internal usage only
map:function(t,e,i){var n,s,o=0,a=[];// Go through the array, translating each of the items to their new values
if(S(t))for(n=t.length;o<n;o++)null!=(s=e(t[o],o,i))&&a.push(s);else for(o in t)null!=(s=e(t[o],o,i))&&a.push(s);// Flatten any nested arrays
return r(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:f}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),// Populate the class2type map
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){c["[object "+e+"]"]=e.toLowerCase()});var $=n.pop,A=n.sort,E=n.splice,j="[\\x20\\t\\r\\n\\f]",D=RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g");// Note: an element does not contain itself
T.contains=function(t,e){var i=e&&e.parentNode;return t===i||!!(i&&1===i.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(t.contains?t.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var H=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function O(t,e){return e?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}T.escapeSelector=function(t){return(t+"").replace(H,O)},function(){var e,i,s,r,c,d,u,p,g,v,m=a,b=T.expando,x=0,w=0,k=tt(),S=tt(),H=tt(),O=tt(),L=function(t,e){return t===e&&(c=!0),0},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
N="(?:\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",q="\\["+j+"*("+N+")(?:"+j+// Operator (capture 2)
"*([*^$|!~]?=)"+j+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+j+"*\\]",M=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+q+")*)|.*)\\)|)",I=RegExp(j+"+","g"),z=RegExp("^"+j+"*,"+j+"*"),W=RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),R=RegExp(j+"|>"),F=new RegExp(M),B=RegExp("^"+N+"$"),U={ID:RegExp("^#("+N+")"),CLASS:RegExp("^\\.("+N+")"),TAG:RegExp("^("+N+"|[*])"),ATTR:RegExp("^"+q),PSEUDO:RegExp("^"+M),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:RegExp("^(?:"+P+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,_=/^h\d$/i,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,V=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
G=RegExp("\\\\[\\da-fA-F]{1,6}"+j+"?|\\\\([^\\r\\n\\f])","g"),Q=function(t,e){var i="0x"+t.slice(1)-65536;return e||(i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
J=function(){tr()},K=td(function(t){return!0===t.disabled&&C(t,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{m.apply(n=o.call(y.childNodes),y.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
n[y.childNodes.length].nodeType}catch(t){m={apply:function(t,e){a.apply(t,o.call(e))},call:function(t){a.apply(t,o.call(arguments,1))}}}function Z(t,e,i,n){var s,o,r,a,l,c,h,u=e&&e.ownerDocument,v=e?e.nodeType:9;// Return early from calls with invalid selector or context
if(i=i||[],"string"!=typeof t||!t||1!==v&&9!==v&&11!==v)return i;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!n&&(tr(e),e=e||d,p)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==v&&(l=Y.exec(t))){// ID selector
if(s=l[1]){// Document context
if(9===v){if(!(r=e.getElementById(s)))return i;if(r.id===s)return m.call(i,r),i;// Element context
}else // getElementById can match elements by name instead of ID
if(u&&(r=u.getElementById(s))&&Z.contains(e,r)&&r.id===s)return m.call(i,r),i}else if(l[2])return m.apply(i,e.getElementsByTagName(t)),i;else if((s=l[3])&&e.getElementsByClassName)return m.apply(i,e.getElementsByClassName(s)),i}// Take advantage of querySelectorAll
if(!O[t+" "]&&(!g||!g.test(t))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(h=t,u=e,1===v&&(R.test(t)||W.test(t))){for(// Expand context for sibling selectors
(u=V.test(t)&&to(e.parentNode)||e)==e&&f.scope||((a=e.getAttribute("id"))?a=T.escapeSelector(a):e.setAttribute("id",a=b)),o=// Prefix every selector in the list
(c=tl(t)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+tc(c[o]);h=c.join(",")}try{return m.apply(i,u.querySelectorAll(h)),i}catch(e){O(t,!0)}finally{a===b&&e.removeAttribute("id")}}}// All others
return tf(t.replace(D,"$1"),e,i,n)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function tt(){var t=[];function e(n,s){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=s}return e}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function te(t){return t[b]=!0,t}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ti(t){var e=d.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),// release memory in IE
e=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function tn(t){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(e){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in e)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
e.parentNode&&!1===e.disabled?// Option elements defer to a parent optgroup if present
"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||// Where there is no isDisabled, check manually
!t!==e.isDisabled&&K(e)===t:e.disabled===t);return"label"in e&&e.disabled===t}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function ts(t){return te(function(e){return e=+e,te(function(i,n){// Match elements found at the specified indexes
for(var s,o=t([],i.length,e),r=o.length;r--;)i[s=o[r]]&&(i[s]=!(n[s]=i[s]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function to(t){return t&&void 0!==t.getElementsByTagName&&t}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function tr(t){var e,n=t?t.ownerDocument||t:y;return n!=d&&9===n.nodeType&&n.documentElement&&(u=// Update global variables
(d=n).documentElement,p=!T.isXMLDoc(d),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
v=u.matches||u.webkitMatchesSelector||u.msMatchesSelector,u.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
y!=d&&(e=d.defaultView)&&e.top!==e&&e.addEventListener("unload",J),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
f.getById=ti(function(t){return u.appendChild(t).id=T.expando,!d.getElementsByName||!d.getElementsByName(T.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
f.disconnectedMatch=ti(function(t){return v.call(t,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
f.scope=ti(function(){return d.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
f.cssHas=ti(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch(t){return!0}}),f.getById?(i.filter.ID=function(t){var e=t.replace(G,Q);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&p){var i=e.getElementById(t);return i?[i]:[]}}):(i.filter.ID=function(t){var e=t.replace(G,Q);return function(t){var i=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return i&&i.value===e}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
i.find.ID=function(t,e){if(void 0!==e.getElementById&&p){var i,n,s,o=e.getElementById(t);if(o){if(// Verify the id attribute
(i=o.getAttributeNode("id"))&&i.value===t)return[o];for(// Fall back on getElementsByName
s=e.getElementsByName(t),n=0;o=s[n++];)if((i=o.getAttributeNode("id"))&&i.value===t)return[o]}return[]}}),// Tag
i.find.TAG=function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):e.querySelectorAll(t)},// Class
i.find.CLASS=function(t,e){if(void 0!==e.getElementsByClassName&&p)return e.getElementsByClassName(t)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
ti(function(t){var e;u.appendChild(t).innerHTML="<a id='"+b+"' href='' disabled='disabled'></a><select id='"+b+"-\r\\' disabled='disabled'><option selected=''></option></select>",t.querySelectorAll("[selected]").length||g.push("\\["+j+"*(?:value|"+P+")"),t.querySelectorAll("[id~="+b+"-]").length||g.push("~="),t.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]"),t.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(e=d.createElement("input")).setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
u.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(e=d.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||g.push("\\["+j+"*name"+j+"*="+j+"*(?:''|\"\")")}),f.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
L=function(t,e){// Flag for duplicate removal
if(t===e)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!f.sortDetached&&e.compareDocumentPosition(t)===i?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
t===d||t.ownerDocument==y&&Z.contains(y,t)?-1:e===d||e.ownerDocument==y&&Z.contains(y,e)?1:r?l.call(r,t)-l.call(r,e):0:4&i?-1:1)}),d}// Add button/input type pseudos
for(e in Z.matches=function(t,e){return Z(t,null,null,e)},Z.matchesSelector=function(t,e){if(tr(t),p&&!O[e+" "]&&(!g||!g.test(e)))try{var i=v.call(t,e);// IE 9's matchesSelector returns false on disconnected nodes
if(i||f.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return i}catch(t){O(e,!0)}return Z(e,d,null,[t]).length>0},Z.contains=function(t,e){return(t.ownerDocument||t)!=d&&tr(t),T.contains(t,e)},Z.attr=function(t,e){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(t.ownerDocument||t)!=d&&tr(t);var n=i.attrHandle[e.toLowerCase()],s=n&&h.call(i.attrHandle,e.toLowerCase())?n(t,e,!p):void 0;return void 0!==s?s:t.getAttribute(e)},Z.error=function(t){throw Error("Syntax error, unrecognized expression: "+t)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */T.uniqueSort=function(t){var e,i=[],n=0,s=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!f.sortStable,r=!f.sortStable&&o.call(t,0),A.call(t,L),c){for(;e=t[s++];)e===t[s]&&(n=i.push(s));for(;n--;)E.call(t,i[n],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
r=null,t)},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(o.apply(this)))},(i=T.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:te,match:U,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(G,Q),// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(G,Q),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||Z.error(t[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&Z.error(t[0]),t)},PSEUDO:function(t){var e,i=!t[6]&&t[2];return U.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&F.test(i)&&// Get excess from tokenize (recursively)
(e=tl(i,!0))&&// advance to the next closing parenthesis
(e=i.indexOf(")",i.length-e)-i.length)&&(// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(G,Q).toLowerCase();return"*"===t?function(){return!0}:function(t){return C(t,e)}},CLASS:function(t){var e=k[t+" "];return e||(e=RegExp("(^|"+j+")"+t+"("+j+"|$)"),k(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,i){return function(n){var s=Z.attr(n,t);return null==s?"!="===e:!e||((s+="","="===e)?s===i:"!="===e?s!==i:"^="===e?i&&0===s.indexOf(i):"*="===e?i&&s.indexOf(i)>-1:"$="===e?i&&s.slice(-i.length)===i:"~="===e?(" "+s.replace(I," ")+" ").indexOf(i)>-1:"|="===e&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,i,n,s){var o="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e;return 1===n&&0===s?function(t){return!!t.parentNode}:function(e,i,l){var c,d,h,u,p,f=o!==r?"nextSibling":"previousSibling",g=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a,m=!1;if(g){// :(first|last|only)-(child|of-type)
if(o){for(;f;){for(h=e;h=h[f];)if(a?C(h,v):1===h.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
p=f="only"===t&&!p&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(p=[r?g.firstChild:g.lastChild],r&&y){for(m=(u=(c=// Seek `elem` from a previously-cached index
(d=g[b]||(g[b]={}))[t]||[])[0]===x&&c[1])&&c[2],h=u&&g.childNodes[u];h=++u&&h&&h[f]||// Fallback to seeking `elem` from the start
(m=u=0)||p.pop();)if(1===h.nodeType&&++m&&h===e){d[t]=[x,u,m];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(y&&(m=u=(c=(d=e[b]||(e[b]={}))[t]||[])[0]===x&&c[1]),!1===m)// Use the same loop as above to seek `elem` from the start
for(;(h=++u&&h&&h[f]||(m=u=0)||p.pop())&&(!((a?C(h,v):1===h.nodeType)&&++m)||(y&&((d=h[b]||(h[b]={}))[t]=[x,m]),h!==e)););return(// Incorporate the offset, then check against cycle size
(m-=s)===n||m%n==0&&m/n>=0)}}},PSEUDO:function(t,e){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,s=i.pseudos[t]||i.setFilters[t.toLowerCase()]||Z.error("unsupported pseudo: "+t);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
s[b]?s(e):s.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?te(function(t,i){for(var n,o=s(t,e),r=o.length;r--;)n=l.call(t,o[r]),t[n]=!(i[n]=o[r])}):function(t){return s(t,0,n)}):s)}},pseudos:{// Potentially complex pseudos
not:te(function(t){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var e=[],i=[],n=tp(t.replace(D,"$1"));return n[b]?te(function(t,e,i,s){// Match elements unmatched by `matcher`
for(var o,r=n(t,null,s,[]),a=t.length;a--;)(o=r[a])&&(t[a]=!(e[a]=o))}):function(t,s,o){return e[0]=t,n(e,null,o,i),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
e[0]=null,!i.pop()}}),has:te(function(t){return function(e){return Z(t,e).length>0}}),contains:te(function(t){return t=t.replace(G,Q),function(e){return(e.textContent||T.text(e)).indexOf(t)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:te(function(t){return B.test(t||"")||Z.error("unsupported lang: "+t),t=t.replace(G,Q).toLowerCase(),function(e){var i;do if(i=p?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(i=i.toLowerCase())===t||0===i.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType)return!1}}),// Miscellaneous
target:function(e){var i=t.location&&t.location.hash;return i&&i.slice(1)===e.id},root:function(t){return t===u},focus:function(t){return t===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return d.activeElement}catch(t){}}()&&d.hasFocus()&&!!(t.type||t.href||~t.tabIndex)},// Boolean properties
enabled:tn(!1),disabled:tn(!0),checked:function(t){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return C(t,"input")&&!!t.checked||C(t,"option")&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},// Contents
empty:function(t){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},// Element/input types
header:function(t){return _.test(t.nodeName)},input:function(t){return X.test(t.nodeName)},button:function(t){return C(t,"input")&&"button"===t.type||C(t,"button")},text:function(t){var e;return C(t,"input")&&"text"===t.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},// Position-in-collection
first:ts(function(){return[0]}),last:ts(function(t,e){return[e-1]}),eq:ts(function(t,e,i){return[i<0?i+e:i]}),even:ts(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:ts(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:ts(function(t,e,i){var n;for(n=i<0?i+e:i>e?e:i;--n>=0;)t.push(n);return t}),gt:ts(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(t){return function(e){return C(e,"input")&&e.type===t}}(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(t){return function(e){return(C(e,"input")||C(e,"button"))&&e.type===t}}(e);// Easy API for creating new setFilters
function ta(){}function tl(t,e){var n,s,o,r,a,l,c,d=S[t+" "];if(d)return e?0:d.slice(0);for(a=t,l=[],c=i.preFilter;a;){// Filters
for(r in(!n||(s=z.exec(a)))&&(s&&(a=a.slice(s[0].length)||a),l.push(o=[])),n=!1,(s=W.exec(a))&&(n=s.shift(),o.push({value:n,// Cast descendant combinators to space
type:s[0].replace(D," ")}),a=a.slice(n.length)),i.filter)(s=U[r].exec(a))&&(!c[r]||(s=c[r](s)))&&(n=s.shift(),o.push({value:n,type:r,matches:s}),a=a.slice(n.length));if(!n)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
e?a.length:a?Z.error(t):S(t,l).slice(0))}function tc(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}function td(t,e,i){var n=e.dir,s=e.next,o=s||n,r=i&&"parentNode"===o,a=w++;return e.first?function(e,i,s){for(;e=e[n];)if(1===e.nodeType||r)return t(e,i,s);return!1}:function(e,i,l){var c,d,h=[x,a];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;e=e[n];)if((1===e.nodeType||r)&&t(e,i,l))return!0}else for(;e=e[n];)if(1===e.nodeType||r){if(d=e[b]||(e[b]={}),s&&C(e,s))e=e[n]||e;else{if((c=d[o])&&c[0]===x&&c[1]===a)return h[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
d[o]=h,h[2]=t(e,i,l))return!0}}return!1}}function th(t){return t.length>1?function(e,i,n){for(var s=t.length;s--;)if(!t[s](e,i,n))return!1;return!0}:t[0]}function tu(t,e,i,n,s){for(var o,r=[],a=0,l=t.length,c=null!=e;a<l;a++)(o=t[a])&&(!i||i(o,n,s))&&(r.push(o),c&&e.push(a));return r}function tp(t,e/* Internal Use Only */){var n,o,r,a,c=[],h=[],u=H[t+" "];if(!u){for(e||(e=tl(t)),a=e.length;a--;)(u=function t(e){for(var n,o,r,a=e.length,c=i.relative[e[0].type],d=c||i.relative[" "],h=c?1:0,u=td(function(t){return t===n},d,!0),p=td(function(t){return l.call(n,t)>-1},d,!0),f=[function(t,e,i){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!c&&(i||e!=s)||((n=e).nodeType?u(t,e,i):p(t,e,i));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
n=null,o)}];h<a;h++)if(o=i.relative[e[h].type])f=[td(th(f),o)];else{// Return special upon seeing a positional matcher
if((o=i.filter[e[h].type].apply(null,e[h].matches))[b]){for(// Find the next relative operator (if any) for proper handling
r=++h;r<a&&!i.relative[e[r].type];r++);return function t(e,i,n,s,o,r){return s&&!s[b]&&(s=t(s)),o&&!o[b]&&(o=t(o,r)),te(function(t,r,a,c){var d,h,u,p,f=[],g=[],v=r.length,y=t||function(t,e,i){for(var n=0,s=e.length;n<s;n++)Z(t,e[n],i);return i}(i||"*",a.nodeType?[a]:a,[]),b=e&&(t||!i)?tu(y,f,e,a,c):y;// Apply postFilter
if(n?// Find primary matches
n(b,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
p=o||(t?e:v||s)?[]:r,a,c):p=b,s)for(d=tu(p,g),s(d,[],a,c),// Un-match failing elements by moving them back to matcherIn
h=d.length;h--;)(u=d[h])&&(p[g[h]]=!(b[g[h]]=u));if(t){if(o||e){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
d=[],h=p.length;h--;)(u=p[h])&&d.push(b[h]=u);o(null,p=[],d,c)}for(// Move matched elements from seed to results to keep them synchronized
h=p.length;h--;)(u=p[h])&&(d=o?l.call(t,u):f[h])>-1&&(t[d]=!(r[d]=u))}}else p=tu(p===r?p.splice(v,p.length):p),o?o(null,r,p,c):m.apply(r,p)})}(h>1&&th(f),h>1&&tc(e.slice(0,h-1).concat({value:" "===e[h-2].type?"*":""})).replace(D,"$1"),o,h<r&&t(e.slice(h,r)),r<a&&t(e=e.slice(r)),r<a&&tc(e))}f.push(o)}return th(f)}(e[a]))[b]?c.push(u):h.push(u);// Save selector and tokenization
// Cache the compiled function
(u=H(t,(n=c.length>0,o=h.length>0,r=function(t,e,r,a,l){var u,f,g,v=0,y="0",b=t&&[],w=[],k=s,S=t||o&&i.find.TAG("*",l),C=x+=null==k?1:Math.random()||.1,A=S.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(s=e==d||e||l);y!==A&&null!=(u=S[y]);y++){if(o&&u){for(f=0,e||u.ownerDocument==d||(tr(u),r=!p);g=h[f++];)if(g(u,e||d,r)){m.call(a,u);break}l&&(x=C)}// Track unmatched elements for set filters
n&&((u=!g&&u)&&v--,t&&b.push(u))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
v+=y,n&&y!==v){for(f=0;g=c[f++];)g(b,w,e,r);if(t){// Reintegrate element matches to eliminate the need for sorting
if(v>0)for(;y--;)b[y]||w[y]||(w[y]=$.call(a));// Discard index placeholder values to get only actual matches
w=tu(w)}// Add matches to results
m.apply(a,w),l&&!t&&w.length>0&&v+c.length>1&&T.uniqueSort(a)}return l&&(x=C,s=k),b},n?te(r):r))).selector=t}return u}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function tf(t,e,n,s){var o,r,a,l,c,d="function"==typeof t&&t,h=!s&&tl(t=d.selector||t);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===h.length){if(// Reduce context if the leading compound selector is an ID
(r=h[0]=h[0].slice(0)).length>2&&"ID"===(a=r[0]).type&&9===e.nodeType&&p&&i.relative[r[1].type]){if(!(e=(i.find.ID(a.matches[0].replace(G,Q),e)||[])[0]))return n;d&&(e=e.parentNode),t=t.slice(r.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=U.needsContext.test(t)?0:r.length;// Abort if we hit a combinator
o--&&(a=r[o],!i.relative[l=a.type]);)if((c=i.find[l])&&(s=c(a.matches[0].replace(G,Q),V.test(r[0].type)&&to(e.parentNode)||e))){if(// If seed is empty or no tokens remain, we can return early
r.splice(o,1),!(t=s.length&&tc(r)))return m.apply(n,s),n;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(d||tp(t,h))(s,e,!p,n,!e||V.test(t)&&to(e.parentNode)||e),n)}ta.prototype=i.filters=i.pseudos,i.setFilters=new ta,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
f.sortStable=b.split("").sort(L).join("")===b,// Initialize against the default document
tr(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
f.sortDetached=ti(function(t){// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(d.createElement("fieldset"))}),T.find=Z,// Deprecated
T.expr[":"]=T.expr.pseudos,T.unique=T.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=tp,Z.select=tf,Z.setDocument=tr,Z.tokenize=tl,Z.escape=T.escapeSelector,Z.getText=T.text,Z.isXML=T.isXMLDoc,Z.selectors=T.expr,Z.support=T.support,Z.uniqueSort=T.uniqueSort;/* eslint-enable */}();var L=function(t,e,i){for(var n=[],s=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(s&&T(t).is(i))break;n.push(t)}return n},P=function(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i},N=T.expr.match.needsContext,q=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function M(t,e,i){return g(e)?T.grep(t,function(t,n){return!!e.call(t,n,t)!==i}):e.nodeType?T.grep(t,function(t){return t===e!==i}):"string"!=typeof e?T.grep(t,function(t){return l.call(e,t)>-1!==i}):T.filter(e,t,i)}T.filter=function(t,e,i){var n=e[0];return(i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType)?T.find.matchesSelector(n,t)?[n]:[]:T.find.matches(t,T.grep(e,function(t){return 1===t.nodeType}))},T.fn.extend({find:function(t){var e,i,n=this.length,s=this;if("string"!=typeof t)return this.pushStack(T(t).filter(function(){for(e=0;e<n;e++)if(T.contains(s[e],this))return!0}));for(e=0,i=this.pushStack([]);e<n;e++)T.find(t,s[e],i);return n>1?T.uniqueSort(i):i},filter:function(t){return this.pushStack(M(this,t||[],!1))},not:function(t){return this.pushStack(M(this,t||[],!0))},is:function(t){return!!M(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&N.test(t)?T(t):t||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var I,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(T.fn.init=function(t,e,i){var n,s;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
i=i||I,"string"==typeof t){// Match html or make sure no context is specified for #id
if((n="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:z.exec(t))&&(n[1]||!e)){// HANDLE: $(html) -> $(array)
if(!n[1])return(s=y.getElementById(n[2]))&&(// Inject the element directly into the jQuery object
this[0]=s,this.length=1),this;// HANDLE: $(html, props)
if(e=e instanceof T?e[0]:e,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
T.merge(this,T.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:y,!0)),q.test(n[1])&&T.isPlainObject(e))for(n in e)g(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}return!e||e.jquery?(e||i).find(t):this.constructor(e).find(t);// HANDLE: $(DOMElement)
}return t.nodeType?(this[0]=t,this.length=1,this):g(t)?void 0!==i.ready?i.ready(t):t(T):T.makeArray(t,this)}).prototype=T.fn,// Initialize central reference
I=T(y);var W=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function F(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}T.fn.extend({has:function(t){var e=T(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)if(T.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,s=this.length,o=[],r="string"!=typeof t&&T(t);// Positional selectors never match, since there's no _selection_ context
if(!N.test(t)){for(;n<s;n++)for(i=this[n];i&&i!==e;i=i.parentNode)if(i.nodeType<11&&(r?r.index(i)>-1:1===i.nodeType&&T.find.matchesSelector(i,t))){o.push(i);break}}return this.pushStack(o.length>1?T.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(t){return(// No argument, return index in parent
t?"string"==typeof t?l.call(T(t),this[0]):l.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(t,e){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),T.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return L(t,"parentNode")},parentsUntil:function(t,e,i){return L(t,"parentNode",i)},next:function(t){return F(t,"nextSibling")},prev:function(t){return F(t,"previousSibling")},nextAll:function(t){return L(t,"nextSibling")},prevAll:function(t){return L(t,"previousSibling")},nextUntil:function(t,e,i){return L(t,"nextSibling",i)},prevUntil:function(t,e,i){return L(t,"previousSibling",i)},siblings:function(t){return P((t.parentNode||{}).firstChild,t)},children:function(t){return P(t.firstChild)},contents:function(t){return null!=t.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
s(t.contentDocument)?t.contentDocument:(C(t,"template")&&(t=t.content||t),T.merge([],t.childNodes))}},function(t,e){T.fn[t]=function(i,n){var s=T.map(this,e,i);return"Until"!==t.slice(-5)&&(n=i),n&&"string"==typeof n&&(s=T.filter(n,s)),this.length>1&&(R[t]||T.uniqueSort(s),W.test(t)&&s.reverse()),this.pushStack(s)}});var B=/[^\x20\t\r\n\f]+/g;function U(t){return t}function X(t){throw t}function _(t,e,i,n){var s;try{// Check for promise aspect first to privilege synchronous behavior
t&&g(s=t.promise)?s.call(t).done(e).fail(i):t&&g(s=t.then)?s.call(t,e,i):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(n));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
i.apply(void 0,[t])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */T.Callbacks=function(t){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
t="string"==typeof t?(e=t,i={},T.each(e.match(B)||[],function(t,e){i[e]=!0}),i):T.extend({},t);var e,i,n,s,o,r,a=[],l=[],c=-1,d=function(){for(// Enforce single-firing
r=r||t.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=n=!0;l.length;c=-1)for(s=l.shift();++c<a.length;)!1===a[c].apply(s[0],s[1])&&t.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=a.length,s=!1);t.memory||(s=!1),n=!1,r&&(a=s?[]:"")},h={// Add a callback or a collection of callbacks to the list
add:function(){return a&&(s&&!n&&(c=a.length-1,l.push(s)),function e(i){T.each(i,function(i,n){g(n)?t.unique&&h.has(n)||a.push(n):n&&n.length&&"string"!==x(n)&&e(n)})}(arguments),s&&!n&&d()),this},// Remove a callback from the list
remove:function(){return T.each(arguments,function(t,e){for(var i;(i=T.inArray(e,a,i))>-1;)a.splice(i,1),i<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?T.inArray(t,a)>-1:a.length>0},// Remove all callbacks from the list
empty:function(){return a&&(a=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=l=[],a=s="",this},disabled:function(){return!a},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=l=[],s||n||(a=s=""),this},locked:function(){return!!r},// Call all callbacks with the given context and arguments
fireWith:function(t,e){return r||(e=[t,(e=e||[]).slice?e.slice():e],l.push(e),n||d()),this},// Call all the callbacks with the given arguments
fire:function(){return h.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return h},T.extend({Deferred:function(e){var i=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],n="pending",s={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},// Keep pipe for back-compat
pipe:function(){var t=arguments;return T.Deferred(function(e){T.each(i,function(i,n){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var s=g(t[n[4]])&&t[n[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[n[1]](function(){var t=s&&s.apply(this,arguments);t&&g(t.promise)?t.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[n[0]+"With"](this,s?[t]:arguments)})}),t=null}).promise()},then:function(e,n,s){var o=0;function r(e,i,n,s){return function(){var a=this,l=arguments,c=function(){var t,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=n.apply(a,l))===i.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=t&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof t||"function"==typeof t)&&t.then)?s?c.call(t,r(o,i,U,s),r(o,i,X,s)):(// ...and disregard older resolution values
o++,c.call(t,r(o,i,U,s),r(o,i,X,s),r(o,i,U,i.notifyWith))):(n!==U&&(a=void 0,l=[t]),// Process the value(s)
// Default process is resolve
(s||i.resolveWith)(a,l))}},d=s?c:function(){try{c()}catch(t){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(t,d.error),e+1>=o&&(n!==X&&(a=void 0,l=[t]),i.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?d():(T.Deferred.getErrorHook?d.error=T.Deferred.getErrorHook():T.Deferred.getStackHook&&(d.error=T.Deferred.getStackHook()),t.setTimeout(d))}}return T.Deferred(function(t){// progress_handlers.add( ... )
i[0][3].add(r(0,t,g(s)?s:U,t.notifyWith)),// fulfilled_handlers.add( ... )
i[1][3].add(r(0,t,g(e)?e:U)),// rejected_handlers.add( ... )
i[2][3].add(r(0,t,g(n)?n:X))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?T.extend(t,s):s}},o={};// All done!
return(// Add list-specific methods
T.each(i,function(t,e){var r=e[2],a=e[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
s[e[1]]=r.add,a&&r.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
n=a},// fulfilled_callbacks.disable
i[3-t][2].disable,// fulfilled_handlers.disable
i[3-t][3].disable,i[0][2].lock,i[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
r.add(e[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[e[0]]=function(){return o[e[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[e[0]+"With"]=r.fireWith}),// Make the deferred a promise
s.promise(o),e&&e.call(o,o),o)},// Deferred helper
when:function(t){var e=arguments.length,i=e,n=Array(i),s=o.call(arguments),r=T.Deferred(),a=function(t){return function(i){n[t]=this,s[t]=arguments.length>1?o.call(arguments):i,--e||r.resolveWith(n,s)}};// Single- and empty arguments are adopted like Promise.resolve
if(e<=1&&(_(t,r.done(a(i)).resolve,r.reject,!e),"pending"===r.state()||g(s[i]&&s[i].then)))return r.then();// Multiple arguments are aggregated like Promise.all array elements
for(;i--;)_(s[i],a(i),r.reject);return r.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
T.Deferred.exceptionHook=function(e,i){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
t.console&&t.console.warn&&e&&Y.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,i)},T.readyException=function(e){t.setTimeout(function(){throw e})};// The deferred used on DOM ready
var V=T.Deferred();// The ready event handler and self cleanup method
function G(){y.removeEventListener("DOMContentLoaded",G),t.removeEventListener("load",G),T.ready()}T.fn.ready=function(t){return V.then(t)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(t){T.readyException(t)}),this},T.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(t){// Abort if there are pending holds or we're already ready
!(!0===t?--T.readyWait:T.isReady)&&(// Remember that the DOM is ready
T.isReady=!0,!0!==t&&--T.readyWait>0||// If there are functions bound, to execute
V.resolveWith(y,[T]))}}),T.ready.then=V.then,"complete"!==y.readyState&&("loading"===y.readyState||y.documentElement.doScroll)?(// Use the handy event callback
y.addEventListener("DOMContentLoaded",G),// A fallback to window.onload, that will always work
t.addEventListener("load",G)):t.setTimeout(T.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Q=function(t,e,i,n,s,o,r){var a=0,l=t.length,c=null==i;// Sets many values
if("object"===x(i))for(a in s=!0,i)Q(t,e,a,i[a],!0,o,r);else if(void 0!==n&&(s=!0,g(n)||(r=!0),c&&(r?(e.call(t,n),e=null):(c=e,e=function(t,e,i){return c.call(T(t),i)})),e))for(;a<l;a++)e(t[a],i,r?n:n.call(t[a],a,e(t[a],i)));return s?t:c?e.call(t):l?e(t[0],i):o},J=/^-ms-/,K=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(t,e){return e.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function tt(t){return t.replace(J,"ms-").replace(K,Z)}var te=function(t){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function ti(){this.expando=T.expando+ti.uid++}ti.uid=1,ti.prototype={cache:function(t){// Check if the owner object already has a cache
var e=t[this.expando];return!e&&(e={},te(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,s=this.cache(t);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)s[tt(e)]=i;else for(n in e)s[tt(n)]=e[n];return s},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][tt(e)]},access:function(t,e,i){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,i),void 0!==i?i:e))},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e)for(i=(// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(tt):((e=tt(e))in n)?[e]:e.match(B)||[]).length;i--;)delete n[e[i]];// Remove the expando if there's no more data
(void 0===e||T.isEmptyObject(n))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!T.isEmptyObject(e)}};var tn=new ti,ts=new ti,to=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,tr=/[A-Z]/g;function ta(t,e,i){var n,s;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===i&&1===t.nodeType){if(n="data-"+e.replace(tr,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{s=i,i="true"===s||"false"!==s&&("null"===s?null:s===+s+""?+s:to.test(s)?JSON.parse(s):s)}catch(t){}// Make sure we set the data so it isn't changed later
ts.set(t,e,i)}else i=void 0}return i}T.extend({hasData:function(t){return ts.hasData(t)||tn.hasData(t)},data:function(t,e,i){return ts.access(t,e,i)},removeData:function(t,e){ts.remove(t,e)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,i){return tn.access(t,e,i)},_removeData:function(t,e){tn.remove(t,e)}}),T.fn.extend({data:function(t,e){var i,n,s,o=this[0],r=o&&o.attributes;// Gets all values
if(void 0===t){if(this.length&&(s=ts.get(o),1===o.nodeType&&!tn.get(o,"hasDataAttrs"))){for(i=r.length;i--;)// The attrs elements can be null (trac-14894)
r[i]&&0===(n=r[i].name).indexOf("data-")&&ta(o,n=tt(n.slice(5)),s[n]);tn.set(o,"hasDataAttrs",!0)}return s}return(// Sets multiple values
"object"==typeof t?this.each(function(){ts.set(this,t)}):Q(this,function(e){var i;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===e)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(i=ts.get(o,t))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(i=ta(o,t))?i:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
ts.set(this,t,e)})},null,e,arguments.length>1,null,!0))},removeData:function(t){return this.each(function(){ts.remove(this,t)})}}),T.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=tn.get(t,e),i&&(!n||Array.isArray(i)?n=tn.access(t,e,T.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=T.queue(t,e),n=i.length,s=i.shift(),o=T._queueHooks(t,e);"inprogress"===s&&(s=i.shift(),n--),s&&("fx"===e&&i.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,s.call(t,function(){T.dequeue(t,e)},o)),!n&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var i=e+"queueHooks";return tn.get(t,i)||tn.access(t,i,{empty:T.Callbacks("once memory").add(function(){tn.remove(t,[e+"queue",i])})})}}),T.fn.extend({queue:function(t,e){var i=2;return("string"!=typeof t&&(e=t,t="fx",i--),arguments.length<i)?T.queue(this[0],t):void 0===e?this:this.each(function(){var i=T.queue(this,t,e);// Ensure a hooks for this queue
T._queueHooks(this,t),"fx"===t&&"inprogress"!==i[0]&&T.dequeue(this,t)})},dequeue:function(t){return this.each(function(){T.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){var i,n=1,s=T.Deferred(),o=this,r=this.length,a=function(){--n||s.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)(i=tn.get(o[r],t+"queueHooks"))&&i.empty&&(n++,i.empty.add(a));return a(),s.promise(e)}});var tl=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,tc=RegExp("^(?:([+-])=|)("+tl+")([a-z%]*)$","i"),td=["Top","Right","Bottom","Left"],th=y.documentElement,tu=function(t){return T.contains(t.ownerDocument,t)},tp={composed:!0};th.getRootNode&&(tu=function(t){return T.contains(t.ownerDocument,t)||t.getRootNode(tp)===t.ownerDocument});var tf=function(t,e){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(t=e||t).style.display||""===t.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
tu(t)&&"none"===T.css(t,"display")};function tg(t,e,i,n){var s,o,r=20,a=n?function(){return n.cur()}:function(){return T.css(t,e,"")},l=a(),c=i&&i[3]||(T.cssNumber[e]?"":"px"),d=t.nodeType&&(T.cssNumber[e]||"px"!==c&&+l)&&tc.exec(T.css(t,e));if(d&&d[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||d[3],// Iteratively approximate from a nonzero starting point
d=+l||1;r--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
T.style(t,e,d+c),(1-o)*(1-(o=a()/l||.5))<=0&&(r=0),d/=o;d*=2,T.style(t,e,d+c),// Make sure we update the tween properties later on
i=i||[]}return i&&(d=+d||+l||0,// Apply relative offset (+=/-=) if specified
s=i[1]?d+(i[1]+1)*i[2]:+i[2],n&&(n.unit=c,n.start=d,n.end=s)),s}var tv={};function ty(t,e){// Determine new display value for elements that need to change
for(var i,n,s=[],o=0,r=t.length;o<r;o++)(n=t[o]).style&&(i=n.style.display,e?("none"!==i||(s[o]=tn.get(n,"display")||null,s[o]||(n.style.display="")),""===n.style.display&&tf(n)&&(s[o]=function(t){var e,i=t.ownerDocument,n=t.nodeName,s=tv[n];return s||(e=i.body.appendChild(i.createElement(n)),s=T.css(e,"display"),e.parentNode.removeChild(e),"none"===s&&(s="block"),tv[n]=s),s}(n))):"none"!==i&&(s[o]="none",// Remember what we're overwriting
tn.set(n,"display",i)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<r;o++)null!=s[o]&&(t[o].style.display=s[o]);return t}T.fn.extend({show:function(){return ty(this,!0)},hide:function(){return ty(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){tf(this)?T(this).show():T(this).hide()})}});var tm=/^(?:checkbox|radio)$/i,tb=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tx=/^$|^module$|\/(?:java|ecma)script/i;t5=y.createDocumentFragment().appendChild(y.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(t4=y.createElement("input")).setAttribute("type","radio"),t4.setAttribute("checked","checked"),t4.setAttribute("name","t"),t5.appendChild(t4),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
f.checkClone=t5.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t5.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!t5.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
t5.innerHTML="<option></option>",f.option=!!t5.lastChild;// We have to close these tags to support XHTML (trac-13200)
var tw={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function tk(t,e){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var i;return(i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&C(t,e))?T.merge([t],i):i}// Mark scripts as having already been evaluated
function tT(t,e){for(var i=0,n=t.length;i<n;i++)tn.set(t[i],"globalEval",!e||tn.get(e[i],"globalEval"))}tw.tbody=tw.tfoot=tw.colgroup=tw.caption=tw.thead,tw.th=tw.td,f.option||(tw.optgroup=tw.option=[1,"<select multiple='multiple'>","</select>"]);var tS=/<|&#?\w+;/;function tC(t,e,i,n,s){for(var o,r,a,l,c,d=e.createDocumentFragment(),h=[],u=0,p=t.length;u<p;u++)if((o=t[u])||0===o){// Add nodes directly
if("object"===x(o))// push.apply(_, arraylike) throws on ancient WebKit
T.merge(h,o.nodeType?[o]:o);else if(tS.test(o)){for(r=r||d.appendChild(e.createElement("div")),a=tw[(tb.exec(o)||["",""])[1].toLowerCase()]||tw._default,r.innerHTML=a[1]+T.htmlPrefilter(o)+a[2],// Descend through wrappers to the right content
c=a[0];c--;)r=r.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(h,r.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(r=d.firstChild).textContent=""}else h.push(e.createTextNode(o))}for(// Remove wrapper from fragment
d.textContent="",u=0;o=h[u++];){// Skip elements already in the context collection (trac-4087)
if(n&&T.inArray(o,n)>-1){s&&s.push(o);continue}// Capture executables
if(l=tu(o),// Append to fragment
r=tk(d.appendChild(o),"script"),l&&tT(r),i)for(c=0;o=r[c++];)tx.test(o.type||"")&&i.push(o)}return d}var t$=/^([^.]*)(?:\.(.+)|)/;function tA(){return!0}function tE(){return!1}function tj(t,e,i,n,s,o){var r,a;// Types can be a map of types/handlers
if("object"==typeof e){for(a in"string"!=typeof i&&(// ( types-Object, data )
n=n||i,i=void 0),e)tj(t,a,i,n,e[a],o);return t}if(null==n&&null==s?(// ( types, fn )
s=i,n=i=void 0):null==s&&("string"==typeof i?(// ( types, selector, fn )
s=n,n=void 0):(// ( types, data, fn )
s=n,n=i,i=void 0)),!1===s)s=tE;else if(!s)return t;return 1===o&&(r=s,// Use same guid so caller can remove using origFn
(s=function(t){return(// Can use an empty set, since event contains the info
T().off(t),r.apply(this,arguments))}).guid=r.guid||(r.guid=T.guid++)),t.each(function(){T.event.add(this,e,s,n,i)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function tD(t,e,i){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!i){void 0===tn.get(t,e)&&T.event.add(t,e,tA);return}// Register the controller as a special universal handler for all event namespaces
tn.set(t,e,!1),T.event.add(t,e,{namespace:!1,handler:function(t){var i,n=tn.get(this,e);if(1&t.isTrigger&&this[e]){// Interrupt processing of the outer synthetic .trigger()ed event
if(n)(T.event.special[e]||{}).delegateType&&t.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
n=o.call(arguments),tn.set(this,e,n),// Trigger the native event and capture its result
this[e](),i=tn.get(this,e),tn.set(this,e,!1),n!==i)return(// Cancel the outer synthetic event
t.stopImmediatePropagation(),t.preventDefault(),i)}else n&&(// ...and capture the result
tn.set(this,e,T.event.trigger(n[0],n.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
t.stopPropagation(),t.isImmediatePropagationStopped=tA)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */T.event={global:{},add:function(t,e,i,n,s){var o,r,a,l,c,d,h,u,p,f,g,v=tn.get(t);// Only attach events to objects that accept data
if(te(t))for(i.handler&&(i=(o=i).handler,s=o.selector),s&&T.find.matchesSelector(th,s),i.guid||(i.guid=T.guid++),(l=v.events)||(l=v.events=Object.create(null)),(r=v.handle)||(r=v.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return T.event.triggered!==e.type?T.event.dispatch.apply(t,arguments):void 0}),c=// Handle multiple events separated by a space
(e=(e||"").match(B)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
p=g=(a=t$.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),p&&(// If event changes its type, use the special event handlers for the changed type
h=T.event.special[p]||{},// If selector defined, determine special event api type, otherwise given type
p=(s?h.delegateType:h.bindType)||p,// Update special based on newly reset type
h=T.event.special[p]||{},// handleObj is passed to all event handlers
d=T.extend({type:p,origType:g,data:n,handler:i,guid:i.guid,selector:s,needsContext:s&&T.expr.match.needsContext.test(s),namespace:f.join(".")},o),(u=l[p])||((u=l[p]=[]).delegateCount=0,(!h.setup||!1===h.setup.call(t,n,f,r))&&t.addEventListener&&t.addEventListener(p,r)),h.add&&(h.add.call(t,d),d.handler.guid||(d.handler.guid=i.guid)),s?u.splice(u.delegateCount++,0,d):u.push(d),// Keep track of which events have ever been used, for event optimization
T.event.global[p]=!0)},// Detach an event or set of events from an element
remove:function(t,e,i,n,s){var o,r,a,l,c,d,h,u,p,f,g,v=tn.hasData(t)&&tn.get(t);if(v&&(l=v.events)){for(c=// Once for each type.namespace in types; type may be omitted
(e=(e||"").match(B)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(p=g=(a=t$.exec(e[c])||[])[1],f=(a[2]||"").split(".").sort(),!p){for(p in l)T.event.remove(t,p+e[c],i,n,!0);continue}for(h=T.event.special[p]||{},u=l[p=(n?h.delegateType:h.bindType)||p]||[],a=a[2]&&RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
r=o=u.length;o--;)d=u[o],(s||g===d.origType)&&(!i||i.guid===d.guid)&&(!a||a.test(d.namespace))&&(!n||n===d.selector||"**"===n&&d.selector)&&(u.splice(o,1),d.selector&&u.delegateCount--,h.remove&&h.remove.call(t,d));r&&!u.length&&(h.teardown&&!1!==h.teardown.call(t,f,v.handle)||T.removeEvent(t,p,v.handle),delete l[p])}T.isEmptyObject(l)&&tn.remove(t,"handle events")}},dispatch:function(t){var e,i,n,s,o,r,a=Array(arguments.length),l=T.event.fix(t),c=(tn.get(this,"events")||Object.create(null))[l.type]||[],d=T.event.special[l.type]||{};for(e=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;e<arguments.length;e++)a[e]=arguments[e];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,l)){for(// Determine handlers
r=T.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
e=0;(s=r[e++])&&!l.isPropagationStopped();)for(l.currentTarget=s.elem,i=0;(o=s.handlers[i++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(n=((T.event.special[o.origType]||{}).handle||o.handler).apply(s.elem,a))&&!1===(l.result=n)&&(l.preventDefault(),l.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,l),l.result}},handlers:function(t,e){var i,n,s,o,r,a=[],l=e.delegateCount,c=t.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&t.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===t.type&&!0===c.disabled)){for(i=0,o=[],r={};i<l;i++)void 0===r[// Don't conflict with Object.prototype properties (trac-13203)
s=(n=e[i]).selector+" "]&&(r[s]=n.needsContext?T(s,this).index(c)>-1:T.find(s,this,null,[c]).length),r[s]&&o.push(n);o.length&&a.push({elem:c,handlers:o})}}return(// Add the remaining (directly-bound) handlers
c=this,l<e.length&&a.push({elem:c,handlers:e.slice(l)}),a)},addProp:function(t,e){Object.defineProperty(T.Event.prototype,t,{enumerable:!0,configurable:!0,get:g(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[T.expando]?t:new T.Event(t)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return false to allow normal processing in the caller
return tm.test(e.type)&&e.click&&C(e,"input")&&tD(e,"click",!0),!1},trigger:function(t){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var e=this||t;// Return non-false to allow normal event-path propagation
return tm.test(e.type)&&e.click&&C(e,"input")&&tD(e,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(t){var e=t.target;return tm.test(e.type)&&e.click&&C(e,"input")&&tn.get(e,"click")||C(e,"a")}},beforeunload:{postDispatch:function(t){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},T.removeEvent=function(t,e,i){// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,i)},T.Event=function(t,e){// Allow instantiation without the 'new' keyword
if(!(this instanceof T.Event))return new T.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&// Support: Android <=2.3 only
!1===t.returnValue?tA:tE,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&T.extend(this,e),// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),// Mark it as fixed
this[T.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
T.Event.prototype={constructor:T.Event,isDefaultPrevented:tE,isPropagationStopped:tE,isImmediatePropagationStopped:tE,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=tA,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=tA,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=tA,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(t,e){function i(t){if(y.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var i=tn.get(this,"handle"),n=T.event.fix(t);n.type="focusin"===t.type?"focus":"blur",n.isSimulated=!0,// First, handle focusin/focusout
i(t),n.target===n.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
i(n)}else // while someone wants focusin/focusout.
T.event.simulate(e,t.target,T.event.fix(t))}T.event.special[t]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var n;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
tD(this,t,!0),!y.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(n=tn.get(this,e))||this.addEventListener(e,i),tn.set(this,e,(n||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
tD(this,t),!0)},teardown:function(){var t;if(!y.documentMode)return!1;(t=tn.get(this,e)-1)?tn.set(this,e,t):(this.removeEventListener(e,i),tn.remove(this,e))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(e){return tn.get(e.target,t)},delegateType:e},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
T.event.special[e]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var n=this.ownerDocument||this.document||this,s=y.documentMode?this:n,o=tn.get(s,e);o||(y.documentMode?this.addEventListener(e,i):n.addEventListener(t,i,!0)),tn.set(s,e,(o||0)+1)},teardown:function(){var n=this.ownerDocument||this.document||this,s=y.documentMode?this:n,o=tn.get(s,e)-1;o?tn.set(s,e,o):(y.documentMode?this.removeEventListener(e,i):n.removeEventListener(t,i,!0),tn.remove(s,e))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){T.event.special[t]={delegateType:e,bindType:e,handle:function(t){var i,n=t.relatedTarget,s=t.handleObj;return n&&(n===this||T.contains(this,n))||(t.type=s.origType,i=s.handler.apply(this,arguments),t.type=e),i}}}),T.fn.extend({on:function(t,e,i,n){return tj(this,t,e,i,n)},one:function(t,e,i,n){return tj(this,t,e,i,n,1)},off:function(t,e,i){var n,s;if(t&&t.preventDefault&&t.handleObj)return(// ( event )  dispatched jQuery.Event
n=t.handleObj,T(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this);if("object"==typeof t){// ( types-object [, selector] )
for(s in t)this.off(s,e,t[s]);return this}return(!1===e||"function"==typeof e)&&(// ( types [, fn] )
i=e,e=void 0),!1===i&&(i=tE),this.each(function(){T.event.remove(this,t,i,e)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
tH=/<script|<style|<link/i,tO=/checked\s*(?:[^=]|=\s*.checked.)/i,tL=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function tP(t,e){return C(t,"table")&&C(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}// Replace/restore the type attribute of script elements for safe DOM manipulation
function tN(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function tq(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function tM(t,e){var i,n,s,o,r,a;if(1===e.nodeType){// 1. Copy private data: events, handlers, etc.
if(tn.hasData(t)&&(a=tn.get(t).events))for(s in tn.remove(e,"handle events"),a)for(i=0,n=a[s].length;i<n;i++)T.event.add(e,s,a[s][i]);// 2. Copy user data
ts.hasData(t)&&(o=ts.access(t),r=T.extend({},o),ts.set(e,r))}}function tI(t,e,i,n){// Flatten any nested arrays
e=r(e);var s,o,a,l,c,d,h=0,u=t.length,p=u-1,v=e[0],y=g(v);// We can't cloneNode fragments that contain checked, in WebKit
if(y||u>1&&"string"==typeof v&&!f.checkClone&&tO.test(v))return t.each(function(s){var o=t.eq(s);y&&(e[0]=v.call(this,s,o.html())),tI(o,e,i,n)});if(u&&(o=(s=tC(e,t[0].ownerDocument,!1,t,n)).firstChild,1===s.childNodes.length&&(s=o),o||n)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=T.map(tk(s,"script"),tN)).length;h<u;h++)c=s,h!==p&&(c=T.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
T.merge(a,tk(c,"script"))),i.call(t[h],c,h);if(l)// Evaluate executable scripts on first document insertion
for(d=a[a.length-1].ownerDocument,// Re-enable scripts
T.map(a,tq),h=0;h<l;h++)c=a[h],tx.test(c.type||"")&&!tn.access(c,"globalEval")&&T.contains(d,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},d):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
b(c.textContent.replace(tL,""),c,d))}return t}function tz(t,e,i){for(var n,s=e?T.filter(e,t):t,o=0;null!=(n=s[o]);o++)i||1!==n.nodeType||T.cleanData(tk(n)),n.parentNode&&(i&&tu(n)&&tT(tk(n,"script")),n.parentNode.removeChild(n));return t}T.extend({htmlPrefilter:function(t){return t},clone:function(t,e,i){var n,s,o,r,a=t.cloneNode(!0),l=tu(t);// Fix IE cloning issues
if(!f.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!T.isXMLDoc(t))for(n=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
r=tk(a),s=(o=tk(t)).length;n<s;n++)!// Fix IE bugs, see support tests
function(t,e){var i=e.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===i&&tm.test(t.type)?e.checked=t.checked:("input"===i||"textarea"===i)&&(e.defaultValue=t.defaultValue)}(o[n],r[n]);// Copy the events from the original to the clone
if(e){if(i)for(n=0,o=o||tk(t),r=r||tk(a),s=o.length;n<s;n++)tM(o[n],r[n]);else tM(t,a)}// Return the cloned set
return(// Preserve script evaluation history
(r=tk(a,"script")).length>0&&tT(r,!l&&tk(t,"script")),a)},cleanData:function(t){for(var e,i,n,s=T.event.special,o=0;void 0!==(i=t[o]);o++)if(te(i)){if(e=i[tn.expando]){if(e.events)for(n in e.events)s[n]?T.event.remove(i,n):T.removeEvent(i,n,e.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
i[tn.expando]=void 0}i[ts.expando]&&// Assign undefined instead of using delete, see Data#remove
(i[ts.expando]=void 0)}}}),T.fn.extend({detach:function(t){return tz(this,t,!0)},remove:function(t){return tz(this,t)},text:function(t){return Q(this,function(t){return void 0===t?T.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=t)})},null,t,arguments.length)},append:function(){return tI(this,arguments,function(t){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&tP(this,t).appendChild(t)})},prepend:function(){return tI(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=tP(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return tI(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return tI(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(// Prevent memory leaks
T.cleanData(tk(t,!1)),// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return T.clone(this,t,e)})},html:function(t){return Q(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!tH.test(t)&&!tw[(tb.exec(t)||["",""])[1].toLowerCase()]){t=T.htmlPrefilter(t);try{for(;i<n;i++)e=this[i]||{},1===e.nodeType&&(T.cleanData(tk(e,!1)),e.innerHTML=t);e=0;// If using innerHTML throws an exception, use the fallback method
}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];// Make the changes, replacing each non-ignored context element with the new content
return tI(this,arguments,function(e){var i=this.parentNode;0>T.inArray(this,t)&&(T.cleanData(tk(this)),i&&i.replaceChild(e,this));// Force callback invocation
},t)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){T.fn[t]=function(t){for(var i,n=[],s=T(t),o=s.length-1,r=0;r<=o;r++)i=r===o?this:this.clone(!0),T(s[r])[e](i),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
a.apply(n,i.get());return this.pushStack(n)}});var tW=RegExp("^("+tl+")(?!px)[a-z%]+$","i"),tR=/^--/,tF=function(e){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var i=e.ownerDocument.defaultView;return i&&i.opener||(i=t),i.getComputedStyle(e)},tB=function(t,e,i){var n,s,o={};// Remember the old values, and insert the new ones
for(s in e)o[s]=t.style[s],t.style[s]=e[s];// Revert the old values
for(s in n=i.call(t),e)t.style[s]=o[s];return n},tU=RegExp(td.join("|"),"i");function tX(t,e,i){var n,s,o,r,a=tR.test(e),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=t.style;return(i=i||tF(t))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
r=i.getPropertyValue(e)||i[e],a&&r&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(r=r.replace(D,"$1")||void 0),""!==r||tu(t)||(r=T.style(t,e)),!f.pixelBoxStyles()&&tW.test(r)&&tU.test(e)&&(// Remember the original values
n=l.width,s=l.minWidth,o=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=r,r=i.width,// Revert the changed values
l.width=n,l.minWidth=s,l.maxWidth=o)),void 0!==r?// IE returns zIndex value as an integer.
r+"":r}function t_(t,e){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(t()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){// This is a singleton, we need to execute it only once
if(d){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",d.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",th.appendChild(c).appendChild(d);var e=t.getComputedStyle(d);n="1%"!==e.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===i(e.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
d.style.right="60%",r=36===i(e.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
s=36===i(e.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
d.style.position="absolute",o=12===i(d.offsetWidth/3),th.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
d=null}}function i(t){return Math.round(parseFloat(t))}var n,s,o,r,a,l,c=y.createElement("div"),d=y.createElement("div");// Finish early in limited (non-browser) environments
d.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===d.style.backgroundClip,T.extend(f,{boxSizingReliable:function(){return e(),s},pixelBoxStyles:function(){return e(),r},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),l},scrollboxSize:function(){return e(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var e,i,n,s;return null==a&&(e=y.createElement("table"),i=y.createElement("tr"),n=y.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",i.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
i.style.height="1px",n.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
n.style.display="block",th.appendChild(e).appendChild(i).appendChild(n),a=parseInt((s=t.getComputedStyle(i)).height,10)+parseInt(s.borderTopWidth,10)+parseInt(s.borderBottomWidth,10)===i.offsetHeight,th.removeChild(e)),a}}))}();var tY=["Webkit","Moz","ms"],tV=y.createElement("div").style,tG={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function tQ(t){return T.cssProps[t]||tG[t]||(t in tV?t:tG[t]=// Return a vendor-prefixed property or undefined
function(t){for(// Check for vendor prefixed names
var e=t[0].toUpperCase()+t.slice(1),i=tY.length;i--;)if((t=tY[i]+e)in tV)return t}(t)||t)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
tJ=/^(none|table(?!-c[ea]).+)/,tK={position:"absolute",visibility:"hidden",display:"block"},tZ={letterSpacing:"0",fontWeight:"400"};function t0(t,e,i){// Any relative (+/-) values have already been
// normalized at this point
var n=tc.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}function t1(t,e,i,n,s,o){var r="width"===e?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(i===(n?"border":"content"))return 0;for(;r<4;r+=2)"margin"===i&&(c+=T.css(t,i+td[r],!0,s)),n?("content"===i&&(l-=T.css(t,"padding"+td[r],!0,s)),"margin"!==i&&(l-=T.css(t,"border"+td[r]+"Width",!0,s))):(// Add padding
l+=T.css(t,"padding"+td[r],!0,s),"padding"!==i?l+=T.css(t,"border"+td[r]+"Width",!0,s):a+=T.css(t,"border"+td[r]+"Width",!0,s));return!n&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-l-a-.5))||0),l+c}function t2(t,e,i){// Start with computed style
var n=tF(t),s=(!f.boxSizingReliable()||i)&&"border-box"===T.css(t,"boxSizing",!1,n),o=s,r=tX(t,e,n),a="offset"+e[0].toUpperCase()+e.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(tW.test(r)){if(!i)return r;r="auto"}// Adjust for the element's box model
return(!f.boxSizingReliable()&&s||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!f.reliableTrDimensions()&&C(t,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===r||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(r)&&"inline"===T.css(t,"display",!1,n))&&// Make sure the element is visible & connected
t.getClientRects().length&&(s="border-box"===T.css(t,"boxSizing",!1,n),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=a in t)&&(r=t[a])),// Normalize "" and auto
(r=parseFloat(r)||0)+t1(t,e,i||(s?"border":"content"),o,n,r)+"px"}function t3(t,e,i,n,s){return new t3.prototype.init(t,e,i,n,s)}T.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){// We should always get a number back from opacity
var i=tX(t,"opacity");return""===i?"1":i}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(t,e,i,n){// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){// Make sure that we're working with the right name
var s,o,r,a=tt(e),l=tR.test(e),c=t.style;// Check if we're setting a value
if(l||(e=tQ(a)),// Gets hook for the prefixed version, then unprefixed version
r=T.cssHooks[e]||T.cssHooks[a],void 0===i)return(// If a hook was provided get the non-computed value from there
r&&"get"in r&&void 0!==(s=r.get(t,!1,n))?s:c[e]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(o=typeof i)&&(s=tc.exec(i))&&s[1]&&(i=tg(t,e,s),// Fixes bug trac-9237
o="number"),null!=i&&i==i&&("number"!==o||l||(i+=s&&s[3]||(T.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==i||0!==e.indexOf("background")||(c[e]="inherit"),r&&"set"in r&&void 0===(i=r.set(t,i,n))||(l?c.setProperty(e,i):c[e]=i))}},css:function(t,e,i,n){var s,o,r,a=tt(e);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(tR.test(e)||(e=tQ(a)),// Try prefixed name followed by the unprefixed name
(r=T.cssHooks[e]||T.cssHooks[a])&&"get"in r&&(s=r.get(t,!0,i)),void 0===s&&(s=tX(t,e,n)),"normal"===s&&e in tZ&&(s=tZ[e]),""===i||i)?(o=parseFloat(s),!0===i||isFinite(o)?o||0:s):s)}}),T.each(["height","width"],function(t,e){T.cssHooks[e]={get:function(t,i,n){if(i)// but it must have a current display style that would benefit
return!tJ.test(T.css(t,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?t2(t,e,n):tB(t,tK,function(){return t2(t,e,n)})},set:function(t,i,n){var s,o=tF(t),// to avoid forcing a reflow.
r=!f.scrollboxSize()&&"absolute"===o.position,a=(r||n)&&"border-box"===T.css(t,"boxSizing",!1,o),l=n?t1(t,e,n,a,o):0;return a&&r&&(l-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-t1(t,e,"border",!1,o)-.5)),l&&(s=tc.exec(i))&&"px"!==(s[3]||"px")&&(t.style[e]=i,i=T.css(t,e)),t0(t,i,l)}}}),T.cssHooks.marginLeft=t_(f.reliableMarginLeft,function(t,e){if(e)return(parseFloat(tX(t,"marginLeft"))||t.getBoundingClientRect().left-tB(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
T.each({margin:"",padding:"",border:"Width"},function(t,e){T.cssHooks[t+e]={expand:function(i){for(var n=0,s={},o="string"==typeof i?i.split(" "):[i];n<4;n++)s[t+td[n]+e]=o[n]||o[n-2]||o[0];return s}},"margin"!==t&&(T.cssHooks[t+e].set=t0)}),T.fn.extend({css:function(t,e){return Q(this,function(t,e,i){var n,s,o={},r=0;if(Array.isArray(e)){for(n=tF(t),s=e.length;r<s;r++)o[e[r]]=T.css(t,e[r],!1,n);return o}return void 0!==i?T.style(t,e,i):T.css(t,e)},t,e,arguments.length>1)}}),T.Tween=t3,t3.prototype={constructor:t3,init:function(t,e,i,n,s,o){this.elem=t,this.prop=i,this.easing=s||T.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=o||(T.cssNumber[i]?"":"px")},cur:function(){var t=t3.propHooks[this.prop];return t&&t.get?t.get(this):t3.propHooks._default.get(this)},run:function(t){var e,i=t3.propHooks[this.prop];return this.options.duration?this.pos=e=T.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):t3.propHooks._default.set(this),this}},t3.prototype.init.prototype=t3.prototype,t3.propHooks={_default:{get:function(t){var e;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(e=T.css(t.elem,t.prop,""))&&"auto"!==e?e:0)},set:function(t){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
T.fx.step[t.prop]?T.fx.step[t.prop](t):1===t.elem.nodeType&&(T.cssHooks[t.prop]||null!=t.elem.style[tQ(t.prop)])?T.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
t3.propHooks.scrollTop=t3.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},T.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},T.fx=t3.prototype.init,// Back compat <1.8 extension point
T.fx.step={};var t5,t4,t6,t9,t8=/^(?:toggle|show|hide)$/,t7=/queueHooks$/;// Animations created synchronously will run synchronously
function et(){return t.setTimeout(function(){t6=void 0}),t6=Date.now()}// Generate parameters to create a standard animation
function ee(t,e){var i,n=0,s={height:t};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
e=e?1:0;n<4;n+=2-e)s["margin"+(i=td[n])]=s["padding"+i]=t;return e&&(s.opacity=s.width=t),s}function ei(t,e,i){for(var n,s=(en.tweeners[e]||[]).concat(en.tweeners["*"]),o=0,r=s.length;o<r;o++)if(n=s[o].call(i,e,t))return n}function en(t,e,i){var n,s,o=0,r=en.prefilters.length,a=T.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(s)return!1;for(var e=t6||et(),i=Math.max(0,c.startTime+c.duration-e),n=1-(i/c.duration||0),o=0,r=c.tweens.length;o<r;o++)c.tweens[o].run(n);return(// If there's more to do, yield
(a.notifyWith(t,[c,n,i]),n<1&&r)?i:(r||a.notifyWith(t,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(t,[c]),!1))},c=a.promise({elem:t,props:T.extend({},e),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},i),originalProperties:e,originalOptions:i,startTime:t6||et(),duration:i.duration,tweens:[],createTween:function(e,i){var n=T.Tween(t,c.opts,e,i,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var i=0,// otherwise we skip this part
n=e?c.tweens.length:0;if(s)return this;for(s=!0;i<n;i++)c.tweens[i].run(1);return e?(a.notifyWith(t,[c,1,0]),a.resolveWith(t,[c,e])):a.rejectWith(t,[c,e]),this}}),d=c.props;for(function(t,e){var i,n,s,o,r;// camelCase, specialEasing and expand cssHook pass
for(i in t)if(s=e[n=tt(i)],Array.isArray(o=t[i])&&(s=o[1],o=t[i]=o[0]),i!==n&&(t[n]=o,delete t[i]),(r=T.cssHooks[n])&&("expand"in r))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(i in o=r.expand(o),delete t[n],o)(i in t)||(t[i]=o[i],e[i]=s);else e[n]=s}(d,c.opts.specialEasing);o<r;o++)if(n=en.prefilters[o].call(c,t,d,c.opts))return g(n.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return T.map(d,ei,c),g(c.opts.start)&&c.opts.start.call(t,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(en,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return tg(i.elem,t,tc.exec(e),i),i}]},tweener:function(t,e){g(t)?(e=t,t=["*"]):t=t.match(B);for(var i,n=0,s=t.length;n<s;n++)i=t[n],en.tweeners[i]=en.tweeners[i]||[],en.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,s,o,r,a,l,c,d,h="width"in e||"height"in e,u=this,p={},f=t.style,g=t.nodeType&&tf(t),v=tn.get(t,"fxshow");// Detect show/hide animations
for(n in i.queue||(null==(r=T._queueHooks(t,"fx")).unqueued&&(r.unqueued=0,a=r.empty.fire,r.empty.fire=function(){r.unqueued||a()}),r.unqueued++,u.always(function(){// Ensure the complete handler is called before this completes
u.always(function(){r.unqueued--,T.queue(t,"fx").length||r.empty.fire()})})),e)if(s=e[n],t8.test(s)){if(delete e[n],o=o||"toggle"===s,s===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==s||!v||void 0===v[n])continue;g=!0}p[n]=v&&v[n]||T.style(t,n)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!T.isEmptyObject(e))&&T.isEmptyObject(p)))for(n in h&&1===t.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
i.overflow=[f.overflow,f.overflowX,f.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=v&&v.display)&&(c=tn.get(t,"display")),"none"===(d=T.css(t,"display"))&&(c?d=c:(// Get nonempty value(s) by temporarily forcing visibility
ty([t],!0),c=t.style.display||c,d=T.css(t,"display"),ty([t]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===T.css(t,"float")&&(l||(u.done(function(){f.display=c}),null!=c||(c="none"===(d=f.display)?"":d)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",u.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),// Implement show/hide animations
l=!1,p)l||(v?"hidden"in v&&(g=v.hidden):v=tn.access(t,"fxshow",{display:c}),o&&(v.hidden=!g),g&&ty([t],!0),/* eslint-disable no-loop-func */u.done(function(){for(n in g||ty([t]),tn.remove(t,"fxshow"),p)T.style(t,n,p[n])})),// Per-property setup
l=ei(g?v[n]:0,n,u),n in v||(v[n]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?en.prefilters.unshift(t):en.prefilters.push(t)}}),T.speed=function(t,e,i){var n=t&&"object"==typeof t?T.extend({},t):{complete:i||!i&&e||g(t)&&t,duration:t,easing:i&&e||e&&!g(e)&&e};return T.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in T.fx.speeds?n.duration=T.fx.speeds[n.duration]:n.duration=T.fx.speeds._default),(null==n.queue||!0===n.queue)&&(n.queue="fx"),// Queueing
n.old=n.complete,n.complete=function(){g(n.old)&&n.old.call(this),n.queue&&T.dequeue(this,n.queue)},n},T.fn.extend({fadeTo:function(t,e,i,n){// Show any hidden elements after setting opacity to 0
return this.filter(tf).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:e},t,i,n)},animate:function(t,e,i,n){var s=T.isEmptyObject(t),o=T.speed(e,i,n),r=function(){// Operate on a copy of prop so per-property easing won't be lost
var e=en(this,T.extend({},t),o);// Empty animations, or finishing resolves immediately
(s||tn.get(this,"finish"))&&e.stop(!0)};return r.finish=r,s||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(t,e,i){var n=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof t&&(i=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each(function(){var e=!0,s=null!=t&&t+"queueHooks",o=T.timers,r=tn.get(this);if(s)r[s]&&r[s].stop&&n(r[s]);else for(s in r)r[s]&&r[s].stop&&t7.test(s)&&n(r[s]);for(s=o.length;s--;)o[s].elem===this&&(null==t||o[s].queue===t)&&(o[s].anim.stop(i),e=!1,o.splice(s,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(e||!i)&&T.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,i=tn.get(this),n=i[t+"queue"],s=i[t+"queueHooks"],o=T.timers,r=n?n.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
i.finish=!0,// Empty the queue first
T.queue(this,t,[]),s&&s.stop&&s.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));// Look for any animations in the old queue and finish them
for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);// Turn off finishing flag
delete i.finish})}}),T.each(["toggle","show","hide"],function(t,e){var i=T.fn[e];T.fn[e]=function(t,n,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(ee(e,!0),t,n,s)}}),// Generate shortcuts for custom animations
T.each({slideDown:ee("show"),slideUp:ee("hide"),slideToggle:ee("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){T.fn[t]=function(t,i,n){return this.animate(e,t,i,n)}}),T.timers=[],T.fx.tick=function(){var t,e=0,i=T.timers;for(t6=Date.now();e<i.length;e++)// Run the timer and safely remove it when done (allowing for external removal)
(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||T.fx.stop(),t6=void 0},T.fx.timer=function(t){T.timers.push(t),T.fx.start()},T.fx.interval=13,T.fx.start=function(){t9||(t9=!0,function e(){t9&&(!1===y.hidden&&t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,T.fx.interval),T.fx.tick())}())},T.fx.stop=function(){t9=null},T.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
T.fn.delay=function(e,i){return e=T.fx&&T.fx.speeds[e]||e,i=i||"fx",this.queue(i,function(i,n){var s=t.setTimeout(i,e);n.stop=function(){t.clearTimeout(s)}})},es=y.createElement("input"),eo=y.createElement("select").appendChild(y.createElement("option")),es.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
f.checkOn=""!==es.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
f.optSelected=eo.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(es=y.createElement("input")).value="t",es.type="radio",f.radioValue="t"===es.value;var es,eo,er,ea=T.expr.attrHandle;T.fn.extend({attr:function(t,e){return Q(this,T.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){T.removeAttr(this,t)})}}),T.extend({attr:function(t,e,i){var n,s,o=t.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===t.getAttribute)return T.prop(t,e,i);if(1===o&&T.isXMLDoc(t)||(s=T.attrHooks[e.toLowerCase()]||(T.expr.match.bool.test(e)?er:void 0)),void 0!==i){if(null===i){T.removeAttr(t,e);return}return s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:(t.setAttribute(e,i+""),i)}return s&&"get"in s&&null!==(n=s.get(t,e))?n:null==(n=T.find.attr(t,e))?void 0:n}},attrHooks:{type:{set:function(t,e){if(!f.radioValue&&"radio"===e&&C(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
s=e&&e.match(B);if(s&&1===t.nodeType)for(;i=s[n++];)t.removeAttribute(i)}}),// Hooks for boolean attributes
er={set:function(t,e,i){return!1===e?T.removeAttr(t,i):t.setAttribute(i,i),i}},T.each(T.expr.match.bool.source.match(/\w+/g),function(t,e){var i=ea[e]||T.find.attr;ea[e]=function(t,e,n){var s,o,r=e.toLowerCase();return n||(// Avoid an infinite loop by temporarily removing this function from the getter
o=ea[r],ea[r]=s,s=null!=i(t,e,n)?r:null,ea[r]=o),s}});var el=/^(?:input|select|textarea|button)$/i,ec=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ed(t){return(t.match(B)||[]).join(" ")}function eh(t){return t.getAttribute&&t.getAttribute("class")||""}function eu(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(B)||[]}T.fn.extend({prop:function(t,e){return Q(this,T.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[T.propFix[t]||t]})}}),T.extend({prop:function(t,e,i){var n,s,o=t.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&T.isXMLDoc(t)||(// Fix name and attach hooks
e=T.propFix[e]||e,s=T.propHooks[e]),void 0!==i)?s&&"set"in s&&void 0!==(n=s.set(t,i,e))?n:t[e]=i:s&&"get"in s&&null!==(n=s.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var e=T.find.attr(t,"tabindex");return e?parseInt(e,10):el.test(t.nodeName)||ec.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(T.propHooks.selected={get:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){/* eslint no-unused-expressions: "off" */var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(t){var e,i,n,s,o,r;return g(t)?this.each(function(e){T(this).addClass(t.call(this,e,eh(this)))}):(e=eu(t)).length?this.each(function(){if(n=eh(this),i=1===this.nodeType&&" "+ed(n)+" "){for(o=0;o<e.length;o++)s=e[o],0>i.indexOf(" "+s+" ")&&(i+=s+" ");n!==// Only assign if different to avoid unneeded rendering.
(r=ed(i))&&this.setAttribute("class",r)}}):this},removeClass:function(t){var e,i,n,s,o,r;return g(t)?this.each(function(e){T(this).removeClass(t.call(this,e,eh(this)))}):arguments.length?(e=eu(t)).length?this.each(function(){if(n=eh(this),// This expression is here for better compressibility (see addClass)
i=1===this.nodeType&&" "+ed(n)+" "){for(o=0;o<e.length;o++)// Remove *all* instances
for(s=e[o];i.indexOf(" "+s+" ")>-1;)i=i.replace(" "+s+" "," ");n!==// Only assign if different to avoid unneeded rendering.
(r=ed(i))&&this.setAttribute("class",r)}}):this:this.attr("class","")},toggleClass:function(t,e){var i,n,s,o,r=typeof t,a="string"===r||Array.isArray(t);return g(t)?this.each(function(i){T(this).toggleClass(t.call(this,i,eh(this),e),e)}):"boolean"==typeof e&&a?e?this.addClass(t):this.removeClass(t):(i=eu(t),this.each(function(){if(a)for(s=0,// Toggle individual class names
o=T(this);s<i.length;s++)n=i[s],o.hasClass(n)?o.removeClass(n):o.addClass(n);else(void 0===t||"boolean"===r)&&((n=eh(this))&&tn.set(this,"__className__",n),this.setAttribute&&this.setAttribute("class",n||!1===t?"":tn.get(this,"__className__")||""))}))},hasClass:function(t){var e,i,n=0;for(e=" "+t+" ";i=this[n++];)if(1===i.nodeType&&(" "+ed(eh(i))+" ").indexOf(e)>-1)return!0;return!1}});var ep=/\r/g;T.fn.extend({val:function(t){var e,i,n,s=this[0];return arguments.length?(n=g(t),this.each(function(i){var s;1!==this.nodeType||(null==(s=n?t.call(this,i,T(this).val()):t)?s="":"number"==typeof s?s+="":Array.isArray(s)&&(s=T.map(s,function(t){return null==t?"":t+""})),(e=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,s,"value")||(this.value=s))})):s?(e=T.valHooks[s.type]||T.valHooks[s.nodeName.toLowerCase()])&&"get"in e&&void 0!==(i=e.get(s,"value"))?i:"string"==typeof(i=s.value)?i.replace(ep,""):null==i?"":i:void 0}}),T.extend({valHooks:{option:{get:function(t){var e=T.find.attr(t,"value");return null!=e?e:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
ed(T.text(t))}},select:{get:function(t){var e,i,n,s=t.options,o=t.selectedIndex,r="select-one"===t.type,a=r?null:[],l=r?o+1:s.length;// Loop through all the selected options
for(n=o<0?l:r?o:0;n<l;n++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((i=s[n]).selected||n===o)&&// Don't return options that are disabled or in a disabled optgroup
!i.disabled&&(!i.parentNode.disabled||!C(i.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
e=T(i).val(),r)return e;// Multi-Selects return an array
a.push(e)}return a},set:function(t,e){for(var i,n,s=t.options,o=T.makeArray(e),r=s.length;r--;)/* eslint-disable no-cond-assign */((n=s[r]).selected=T.inArray(T.valHooks.option.get(n),o)>-1)&&(i=!0);return i||(t.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=T.inArray(T(t).val(),e)>-1}},f.checkOn||(T.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});// Return jQuery for attributes-only inclusion
var ef=t.location,eg={guid:Date.now()},ev=/\?/;// Cross-browser xml parsing
T.parseXML=function(e){var i,n;if(!e||"string"!=typeof e)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{i=new t.DOMParser().parseFromString(e,"text/xml")}catch(t){}return n=i&&i.getElementsByTagName("parsererror")[0],(!i||n)&&T.error("Invalid XML: "+(n?T.map(n.childNodes,function(t){return t.textContent}).join("\n"):e)),i};var ey=/^(?:focusinfocus|focusoutblur)$/,em=function(t){t.stopPropagation()};T.extend(T.event,{trigger:function(e,i,n,s){var o,r,a,l,c,d,u,p,f=[n||y],m=h.call(e,"type")?e.type:e,b=h.call(e,"namespace")?e.namespace.split("."):[];// Don't do events on text and comment nodes
if(r=p=a=n=n||y,!(3===n.nodeType||8===n.nodeType||ey.test(m+T.event.triggered))&&(m.indexOf(".")>-1&&(m=// Namespaced trigger; create a regexp to match event type in handle()
(b=m.split(".")).shift(),b.sort()),c=0>m.indexOf(":")&&"on"+m,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(e=e[T.expando]?e:new T.Event(m,"object"==typeof e&&e)).isTrigger=s?2:3,e.namespace=b.join("."),e.rnamespace=e.namespace?RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=n),// Clone any incoming data and prepend the event, creating the handler arg list
i=null==i?[e]:T.makeArray(i,[e]),// Allow special events to draw outside the lines
u=T.event.special[m]||{},s||!u.trigger||!1!==u.trigger.apply(n,i))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!s&&!u.noBubble&&!v(n)){for(l=u.delegateType||m,ey.test(l+m)||(r=r.parentNode);r;r=r.parentNode)f.push(r),a=r;a===(n.ownerDocument||y)&&f.push(a.defaultView||a.parentWindow||t)}for(// Fire handlers on the event path
o=0;(r=f[o++])&&!e.isPropagationStopped();)p=r,e.type=o>1?l:u.bindType||m,// jQuery handler
(d=(tn.get(r,"events")||Object.create(null))[e.type]&&tn.get(r,"handle"))&&d.apply(r,i),// Native handler
(d=c&&r[c])&&d.apply&&te(r)&&(e.result=d.apply(r,i),!1===e.result&&e.preventDefault());return e.type=m,!s&&!e.isDefaultPrevented()&&(!u._default||!1===u._default.apply(f.pop(),i))&&te(n)&&c&&g(n[m])&&!v(n)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=n[c])&&(n[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
T.event.triggered=m,e.isPropagationStopped()&&p.addEventListener(m,em),n[m](),e.isPropagationStopped()&&p.removeEventListener(m,em),T.event.triggered=void 0,a&&(n[c]=a)),e.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,i){var n=T.extend(new T.Event,i,{type:t,isSimulated:!0});T.event.trigger(n,null,e)}}),T.fn.extend({trigger:function(t,e){return this.each(function(){T.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return T.event.trigger(t,e,i,!0)}});var eb=/\[\]$/,ex=/\r?\n/g,ew=/^(?:submit|button|image|reset|file)$/i,ek=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
T.param=function(t,e){var i,n=[],s=function(t,e){// If value is a function, invoke it and use its return value
var i=g(e)?e():e;n[n.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==i?"":i)};if(null==t)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!T.isPlainObject(t))T.each(t,function(){s(this.name,this.value)});else // did it), otherwise encode params recursively.
for(i in t)!function t(e,i,n,s){var o;if(Array.isArray(i))T.each(i,function(i,o){n||eb.test(e)?s(e,o):t(e+"["+("object"==typeof o&&null!=o?i:"")+"]",o,n,s)});else if(n||"object"!==x(i))s(e,i);else for(o in i)t(e+"["+o+"]",i[o],n,s)}(i,t[i],e,s);// Return the resulting serialization
return n.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var t=T.prop(this,"elements");return t?T.makeArray(t):this}).filter(function(){var t=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!T(this).is(":disabled")&&ek.test(this.nodeName)&&!ew.test(t)&&(this.checked||!tm.test(t))}).map(function(t,e){var i=T(this).val();return null==i?null:Array.isArray(i)?T.map(i,function(t){return{name:e.name,value:t.replace(ex,"\r\n")}}):{name:e.name,value:i.replace(ex,"\r\n")}}).get()}});var eT=/%20/g,eS=/#.*$/,eC=/([?&])_=[^&]*/,e$=/^(.*?):[ \t]*([^\r\n]*)$/mg,eA=/^(?:GET|HEAD)$/,eE=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ej={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */eD={},eH="*/".concat("*"),eO=y.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function eL(t){// dataTypeExpression is optional and defaults to "*"
return function(e,i){"string"!=typeof e&&(i=e,e="*");var n,s=0,o=e.toLowerCase().match(B)||[];if(g(i))// For each dataType in the dataTypeExpression
for(;n=o[s++];)"+"===n[0]?(t[n=n.slice(1)||"*"]=t[n]||[]).unshift(i):(t[n]=t[n]||[]).push(i)}}// Base inspection function for prefilters and transports
function eP(t,e,i,n){var s={},o=t===eD;function r(a){var l;return s[a]=!0,T.each(t[a]||[],function(t,a){var c=a(e,i,n);return"string"!=typeof c||o||s[c]?o?!(l=c):void 0:(e.dataTypes.unshift(c),r(c),!1)}),l}return r(e.dataTypes[0])||!s["*"]&&r("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function eN(t,e){var i,n,s=T.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((s[i]?t:n||(n={}))[i]=e[i]);return n&&T.extend(!0,t,n),t}eO.href=ef.href,T.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:ef.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ef.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":eH,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":T.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?eN(eN(t,T.ajaxSettings),e):eN(T.ajaxSettings,t)},ajaxPrefilter:eL(ej),ajaxTransport:eL(eD),// Main method
ajax:function(e,i){"object"==typeof e&&(i=e,e=void 0),// Force options to be an object
i=i||{};var n,s,o,r,a,l,c,d,h,u,p=T.ajaxSetup({},i),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?T(f):T.event,v=T.Deferred(),m=T.Callbacks("once memory"),b=p.statusCode||{},x={},w={},k="canceled",S={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(c){if(!r)for(r={};e=e$.exec(o);)r[e[1].toLowerCase()+" "]=(r[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=r[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?o:null},// Caches the header
setRequestHeader:function(t,e){return null==c&&(x[t=w[t.toLowerCase()]=w[t.toLowerCase()]||t]=e),this},// Overrides response content-type header
overrideMimeType:function(t){return null==c&&(p.mimeType=t),this},// Status-dependent callbacks
statusCode:function(t){var e;if(t){if(c)S.always(t[S.status]);else for(e in t)b[e]=[b[e],t[e]]}return this},// Cancel the request
abort:function(t){var e=t||k;return n&&n.abort(e),C(0,e),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
v.promise(S),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
p.url=((e||p.url||ef.href)+"").replace(eE,ef.protocol+"//"),// Alias method option to type as per ticket trac-12004
p.type=i.method||i.type||p.method||p.type,// Extract dataTypes list
p.dataTypes=(p.dataType||"*").toLowerCase().match(B)||[""],null==p.crossDomain){l=y.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=p.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,p.crossDomain=eO.protocol+"//"+eO.host!=l.protocol+"//"+l.host}catch(t){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
p.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=T.param(p.data,p.traditional)),// Apply prefilters
eP(ej,p,i,S),c)return S;// Check for headers option
for(h in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(d=T.event&&p.global)&&0==T.active++&&T.event.trigger("ajaxStart"),// Uppercase the type
p.type=p.type.toUpperCase(),// Determine if request has content
p.hasContent=!eA.test(p.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
s=p.url.replace(eS,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(eT,"+")):(// Remember the hash so we can put it back
u=p.url.slice(s.length),p.data&&(p.processData||"string"==typeof p.data)&&(s+=(ev.test(s)?"&":"?")+p.data,// trac-9682: remove data so that it's not used in an eventual retry
delete p.data),!1===p.cache&&(s=s.replace(eC,"$1"),u=(ev.test(s)?"&":"?")+"_="+eg.guid+++u),// Put hash and anti-cache on the URL that will be requested (gh-1732)
p.url=s+u),p.ifModified&&(T.lastModified[s]&&S.setRequestHeader("If-Modified-Since",T.lastModified[s]),T.etag[s]&&S.setRequestHeader("If-None-Match",T.etag[s])),(p.data&&p.hasContent&&!1!==p.contentType||i.contentType)&&S.setRequestHeader("Content-Type",p.contentType),// Set the Accepts header for the server, depending on the dataType
S.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+eH+"; q=0.01":""):p.accepts["*"]),p.headers)S.setRequestHeader(h,p.headers[h]);// Allow custom headers/mimetypes and early abort
if(p.beforeSend&&(!1===p.beforeSend.call(f,S,p)||c))return S.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
k="abort",// Install callbacks on deferreds
m.add(p.complete),S.done(p.success),S.fail(p.error),// Get transport
n=eP(eD,p,i,S)){// If request was aborted inside ajaxSend, stop there
if(S.readyState=1,d&&g.trigger("ajaxSend",[S,p]),c)return S;p.async&&p.timeout>0&&(a=t.setTimeout(function(){S.abort("timeout")},p.timeout));try{c=!1,n.send(x,C)}catch(t){// Rethrow post-completion exceptions
if(c)throw t;// Propagate others as results
C(-1,t)}}else C(-1,"No Transport");// Callback for when everything is done
function C(e,i,r,l){var h,u,y,x,w,k=i;// Ignore repeat invocations
c||(c=!0,a&&t.clearTimeout(a),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
n=void 0,// Cache response headers
o=l||"",// Set readyState
S.readyState=e>0?4:0,// Determine if successful
h=e>=200&&e<300||304===e,r&&(x=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(t,e,i){// Remove auto dataType and get content-type in the process
for(var n,s,o,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(n){for(s in a)if(a[s]&&a[s].test(n)){l.unshift(s);break}}// Check to see if we have a response for the expected dataType
if(l[0]in i)o=l[0];else{// Try convertible dataTypes
for(s in i){if(!l[0]||t.converters[s+" "+l[0]]){o=s;break}r||(r=s)}// Or just use first one
o=o||r}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),i[o]}(p,S,r)),!h&&T.inArray("script",p.dataTypes)>-1&&0>T.inArray("json",p.dataTypes)&&(p.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
x=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(t,e,i,n){var s,o,r,a,l,c={},d=t.dataTypes.slice();// Create converters map with lowercased keys
if(d[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];// Convert to each sequential dataType
for(o=d.shift();o;)if(t.responseFields[o]&&(i[t.responseFields[o]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=d.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){// If none found, seek a pair
if(!// Seek a direct converter
(r=c[l+" "+o]||c["* "+o])){for(s in c)if(// If conv2 outputs current
(a=s.split(" "))[1]===o&&// If prev can be converted to accepted input
(r=c[l+" "+a[0]]||c["* "+a[0]])){// Condense equivalence converters
!0===r?r=c[s]:!0!==c[s]&&(o=a[0],d.unshift(a[1]));break}}// Apply converter (if not an equivalence)
if(!0!==r){// Unless errors are allowed to bubble, catch and return them
if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:e}}(p,x,S,h),h?(p.ifModified&&((w=S.getResponseHeader("Last-Modified"))&&(T.lastModified[s]=w),(w=S.getResponseHeader("etag"))&&(T.etag[s]=w)),204===e||"HEAD"===p.type?k="nocontent":304===e?k="notmodified":(k=x.state,u=x.data,h=!(y=x.error))):(// Extract error from statusText and normalize for non-aborts
y=k,(e||!k)&&(k="error",e<0&&(e=0))),// Set data for the fake xhr object
S.status=e,S.statusText=(i||k)+"",h?v.resolveWith(f,[u,k,S]):v.rejectWith(f,[S,k,y]),// Status-dependent callbacks
S.statusCode(b),b=void 0,d&&g.trigger(h?"ajaxSuccess":"ajaxError",[S,p,h?u:y]),// Complete
m.fireWith(f,[S,k]),!d||(g.trigger("ajaxComplete",[S,p]),--T.active||T.event.trigger("ajaxStop")))}return S},getJSON:function(t,e,i){return T.get(t,e,i,"json")},getScript:function(t,e){return T.get(t,void 0,e,"script")}}),T.each(["get","post"],function(t,e){T[e]=function(t,i,n,s){// The url can be an options object (which then must have .url)
return g(i)&&(s=s||n,n=i,i=void 0),T.ajax(T.extend({url:t,type:e,dataType:s,data:i,success:n},T.isPlainObject(t)&&t))}}),T.ajaxPrefilter(function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")}),T._evalUrl=function(t,e,i){return T.ajax({url:t,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(t){T.globalEval(t,e,i)}})},T.fn.extend({wrapAll:function(t){var e;return this[0]&&(g(t)&&(t=t.call(this[0])),// The elements to wrap the target around
e=T(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return g(t)?this.each(function(e){T(this).wrapInner(t.call(this,e))}):this.each(function(){var e=T(this),i=e.contents();i.length?i.wrapAll(t):e.append(t)})},wrap:function(t){var e=g(t);return this.each(function(i){T(this).wrapAll(e?t.call(this,i):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(t){return!T.expr.pseudos.visible(t)},T.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch(t){}};var eq={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},eM=T.ajaxSettings.xhr();f.cors=!!eM&&"withCredentials"in eM,f.ajax=eM=!!eM,T.ajaxTransport(function(e){var i,n;// Cross domain only allowed if supported through XMLHttpRequest
if(f.cors||eM&&!e.crossDomain)return{send:function(s,o){var r,a=e.xhr();// Apply custom fields if provided
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)a[r]=e.xhrFields[r];// Set headers
for(r in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||s["X-Requested-With"]||(s["X-Requested-With"]="XMLHttpRequest"),s)a.setRequestHeader(r,s[r]);// Callback
i=function(t){return function(){i&&(i=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(eq[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=i(),n=a.onerror=a.ontimeout=i("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){// Check readyState before timeout as it changes
4===a.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
t.setTimeout(function(){i&&n()})},// Create the abort callback
i=i("abort");try{// Do send the request (this may raise an exception)
a.send(e.hasContent&&e.data||null)}catch(t){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(i)throw t}},abort:function(){i&&i()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
T.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),// Install script dataType
T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return T.globalEval(t),t}}}),// Handle cache's special case and crossDomain
T.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),// Bind script tag hack transport
T.ajaxTransport("script",function(t){// This transport only deals with cross domain or forced-by-attrs requests
if(t.crossDomain||t.scriptAttrs){var e,i;return{send:function(n,s){e=T("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",i=function(t){e.remove(),i=null,t&&s("error"===t.type?404:200,t.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
y.head.appendChild(e[0])},abort:function(){i&&i()}}}});var eI=[],ez=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=eI.pop()||T.expando+"_"+eg.guid++;return this[t]=!0,t}}),// Detect, normalize options and install callbacks for jsonp requests
T.ajaxPrefilter("json jsonp",function(e,i,n){var s,o,r,a=!1!==e.jsonp&&(ez.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&ez.test(e.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===e.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
s=e.jsonpCallback=g(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(ez,"$1"+s):!1!==e.jsonp&&(e.url+=(ev.test(e.url)?"&":"?")+e.jsonp+"="+s),// Use data converter to retrieve json after script execution
e.converters["script json"]=function(){return r||T.error(s+" was not called"),r[0]},// Force json dataType
e.dataTypes[0]="json",// Install callback
o=t[s],t[s]=function(){r=arguments},// Clean-up function (fires after converters)
n.always(function(){void 0===o?T(t).removeProp(s):t[s]=o,e[s]&&(// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=i.jsonpCallback,// Save the callback name for future use
eI.push(s)),r&&g(o)&&o(r[0]),r=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
f.createHTMLDocument=((i=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===i.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
T.parseHTML=function(t,e,i){var n,s,o;return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(f.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(n=(e=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,e.head.appendChild(n)):e=y),s=q.exec(t),o=!i&&[],s)?[e.createElement(s[1])]:(s=tC([t],e,o),o&&o.length&&T(o).remove(),T.merge([],s.childNodes))},/**
 * Load a url into a page
 */T.fn.load=function(t,e,i){var n,s,o,r=this,a=t.indexOf(" ");return a>-1&&(n=ed(t.slice(a)),t=t.slice(0,a)),g(e)?(// We assume that it's the callback
i=e,e=void 0):e&&"object"==typeof e&&(s="POST"),r.length>0&&T.ajax({url:t,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:s||"GET",dataType:"html",data:e}).done(function(t){// Save response for use in complete callback
o=arguments,r.html(n?// Exclude scripts to avoid IE 'Permission Denied' errors
T("<div>").append(T.parseHTML(t)).find(n):t);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(i&&function(t,e){r.each(function(){i.apply(this,o||[t.responseText,e,t])})}),this},T.expr.pseudos.animated=function(t){return T.grep(T.timers,function(e){return t===e.elem}).length},T.offset={setOffset:function(t,e,i){var n,s,o,r,a,l,c=T.css(t,"position"),d=T(t),h={};"static"===c&&(t.style.position="relative"),a=d.offset(),o=T.css(t,"top"),l=T.css(t,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(r=(n=d.position()).top,s=n.left):(r=parseFloat(o)||0,s=parseFloat(l)||0),g(e)&&(e=e.call(t,i,T.extend({},a))),null!=e.top&&(h.top=e.top-a.top+r),null!=e.left&&(h.left=e.left-a.left+s),"using"in e?e.using.call(t,h):d.css(h)}},T.fn.extend({// offset() relates an element's border box to the document origin
offset:function(t){// Preserve chaining for setter
if(arguments.length)return void 0===t?this:this.each(function(e){T.offset.setOffset(this,t,e)});var e,i,n=this[0];if(n)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
n.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
e=n.getBoundingClientRect(),i=n.ownerDocument.defaultView,{top:e.top+i.pageYOffset,left:e.left+i.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,i,n=this[0],s={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===T.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===T.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
s=T(t).offset(),s.top+=T.css(t,"borderTopWidth",!0),s.left+=T.css(t,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:e.top-s.top-T.css(n,"marginTop",!0),left:e.left-s.left-T.css(n,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===T.css(t,"position");)t=t.offsetParent;return t||th})}}),// Create scrollLeft and scrollTop methods
T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var i="pageYOffset"===e;T.fn[t]=function(n){return Q(this,function(t,n,s){// Coalesce documents and windows
var o;if(v(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===s)return o?o[e]:t[n];o?o.scrollTo(i?o.pageXOffset:s,i?s:o.pageYOffset):t[n]=s},t,n,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
T.each(["top","left"],function(t,e){T.cssHooks[e]=t_(f.pixelPosition,function(t,i){if(i)// If curCSS returns percentage, fallback to offset
return i=tX(t,e),tW.test(i)?T(t).position()[e]+"px":i})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
T.each({Height:"height",Width:"width"},function(t,e){T.each({padding:"inner"+t,content:e,"":"outer"+t},function(i,n){// Margin is only for outerHeight, outerWidth
T.fn[n]=function(s,o){var r=arguments.length&&(i||"boolean"!=typeof s),a=i||(!0===s||!0===o?"margin":"border");return Q(this,function(e,i,s){var o;return v(e)?0===n.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===s?T.css(e,i,a):T.style(e,i,s,a)},e,r?s:void 0,r)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){T.fn[e]=function(t){return this.on(e,t)}}),T.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(t,"**"):this.off(e,t||"**",i)},hover:function(t,e){return this.on("mouseenter",t).on("mouseleave",e||t)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){// Handle event binding
T.fn[e]=function(t,i){return arguments.length>0?this.on(e,null,t,i):this.trigger(e)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var eW=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
T.proxy=function(t,e){var i,n,s;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(i=t[e],e=t,t=i),g(t))return(// Simulated bind
n=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(s=function(){return t.apply(e||this,n.concat(o.call(arguments)))}).guid=t.guid=t.guid||T.guid++,s)},T.holdReady=function(t){t?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=C,T.isFunction=g,T.isWindow=v,T.camelCase=tt,T.type=x,T.now=Date.now,T.isNumeric=function(t){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=T.type(t);return("number"===e||"string"===e)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},T.trim=function(t){return null==t?"":(t+"").replace(eW,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var eR=t.jQuery,eF=t.$;return T.noConflict=function(e){return t.$===T&&(t.$=eF),e&&t.jQuery===T&&(t.jQuery=eR),T},void 0===e&&(t.jQuery=t.$=T),T},"object"==typeof t.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
t.exports=i.document?n(i,!0):function(t){if(!t.document)throw Error("jQuery requires a window with a document");return n(t)}:n(i)}),s=function(t){var e,i=window.Slick||{};(e=0,i=function(i,n){var s;this.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:t(i),appendDots:t(i),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,i){return t('<button type="button" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},this.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},t.extend(this,this.initials),this.activeBreakpoint=null,this.animType=null,this.animProp=null,this.breakpoints=[],this.breakpointSettings=[],this.cssTransitions=!1,this.focussed=!1,this.interrupted=!1,this.hidden="hidden",this.paused=!0,this.positionProp=null,this.respondTo=null,this.rowCount=1,this.shouldClick=!0,this.$slider=t(i),this.$slidesCache=null,this.transformType=null,this.transitionType=null,this.visibilityChange="visibilitychange",this.windowWidth=0,this.windowTimer=null,s=t(i).data("slick")||{},this.options=t.extend({},this.defaults,n,s),this.currentSlide=this.options.initialSlide,this.originalSettings=this.options,void 0!==document.mozHidden?(this.hidden="mozHidden",this.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),this.autoPlay=t.proxy(this.autoPlay,this),this.autoPlayClear=t.proxy(this.autoPlayClear,this),this.autoPlayIterator=t.proxy(this.autoPlayIterator,this),this.changeSlide=t.proxy(this.changeSlide,this),this.clickHandler=t.proxy(this.clickHandler,this),this.selectHandler=t.proxy(this.selectHandler,this),this.setPosition=t.proxy(this.setPosition,this),this.swipeHandler=t.proxy(this.swipeHandler,this),this.dragHandler=t.proxy(this.dragHandler,this),this.keyHandler=t.proxy(this.keyHandler,this),this.instanceUid=e++,this.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,this.registerBreakpoints(),this.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},i.prototype.addSlide=i.prototype.slickAdd=function(e,i,n){if("boolean"==typeof i)n=i,i=null;else if(i<0||i>=this.slideCount)return!1;this.unload(),"number"==typeof i?0===i&&0===this.$slides.length?t(e).appendTo(this.$slideTrack):n?t(e).insertBefore(this.$slides.eq(i)):t(e).insertAfter(this.$slides.eq(i)):!0===n?t(e).prependTo(this.$slideTrack):t(e).appendTo(this.$slideTrack),this.$slides=this.$slideTrack.children(this.options.slide),this.$slideTrack.children(this.options.slide).detach(),this.$slideTrack.append(this.$slides),this.$slides.each(function(e,i){t(i).attr("data-slick-index",e)}),this.$slidesCache=this.$slides,this.reinit()},i.prototype.animateHeight=function(){if(1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical){var t=this.$slides.eq(this.currentSlide).outerHeight(!0);this.$list.animate({height:t},this.options.speed)}},i.prototype.animateSlide=function(e,i){var n={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,i):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,i):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),t({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(t){t=Math.ceil(t),!1===s.options.vertical?n[s.animType]="translate("+t+"px, 0px)":n[s.animType]="translate(0px,"+t+"px)",s.$slideTrack.css(n)},complete:function(){i&&i.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?n[s.animType]="translate3d("+e+"px, 0px, 0px)":n[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(n),i&&setTimeout(function(){s.disableTransition(),i.call()},s.options.speed))},i.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=t(e).not(this.$slider)),e},i.prototype.asNavFor=function(e){var i=this.getNavTarget();null!==i&&"object"==typeof i&&i.each(function(){var i=t(this).slick("getSlick");i.unslicked||i.slideHandler(e,!0)})},i.prototype.applyTransition=function(t){var e={};!1===this.options.fade?e[this.transitionType]=this.transformType+" "+this.options.speed+"ms "+this.options.cssEase:e[this.transitionType]="opacity "+this.options.speed+"ms "+this.options.cssEase,!1===this.options.fade?this.$slideTrack.css(e):this.$slides.eq(t).css(e)},i.prototype.autoPlay=function(){this.autoPlayClear(),this.slideCount>this.options.slidesToShow&&(this.autoPlayTimer=setInterval(this.autoPlayIterator,this.options.autoplaySpeed))},i.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},i.prototype.autoPlayIterator=function(){var t=this.currentSlide+this.options.slidesToScroll;this.paused||this.interrupted||this.focussed||(!1===this.options.infinite&&(1===this.direction&&this.currentSlide+1===this.slideCount-1?this.direction=0:0===this.direction&&(t=this.currentSlide-this.options.slidesToScroll,this.currentSlide-1==0&&(this.direction=1))),this.slideHandler(t))},i.prototype.buildArrows=function(){!0===this.options.arrows&&(this.$prevArrow=t(this.options.prevArrow).addClass("slick-arrow"),this.$nextArrow=t(this.options.nextArrow).addClass("slick-arrow"),this.slideCount>this.options.slidesToShow?(this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),this.htmlExpr.test(this.options.prevArrow)&&this.$prevArrow.prependTo(this.options.appendArrows),this.htmlExpr.test(this.options.nextArrow)&&this.$nextArrow.appendTo(this.options.appendArrows),!0!==this.options.infinite&&this.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},i.prototype.buildDots=function(){var e,i;if(!0===this.options.dots){for(this.$slider.addClass("slick-dotted"),i=t("<ul />").addClass(this.options.dotsClass),e=0;e<=this.getDotCount();e+=1)i.append(t("<li />").append(this.options.customPaging.call(this,this,e)));this.$dots=i.appendTo(this.options.appendDots),this.$dots.find("li").first().addClass("slick-active")}},i.prototype.buildOut=function(){this.$slides=this.$slider.children(this.options.slide+":not(.slick-cloned)").addClass("slick-slide"),this.slideCount=this.$slides.length,this.$slides.each(function(e,i){t(i).attr("data-slick-index",e).data("originalStyling",t(i).attr("style")||"")}),this.$slider.addClass("slick-slider"),this.$slideTrack=0===this.slideCount?t('<div class="slick-track"/>').appendTo(this.$slider):this.$slides.wrapAll('<div class="slick-track"/>').parent(),this.$list=this.$slideTrack.wrap('<div class="slick-list"/>').parent(),this.$slideTrack.css("opacity",0),!0!==this.options.centerMode&&!0!==this.options.swipeToSlide||(this.options.slidesToScroll=1),t("img[data-lazy]",this.$slider).not("[src]").addClass("slick-loading"),this.setupInfinite(),this.buildArrows(),this.buildDots(),this.updateDots(),this.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),!0===this.options.draggable&&this.$list.addClass("draggable")},i.prototype.buildRows=function(){var t,e,i,n,s,o,r;if(n=document.createDocumentFragment(),o=this.$slider.children(),this.options.rows>1){for(r=this.options.slidesPerRow*this.options.rows,s=Math.ceil(o.length/r),t=0;t<s;t++){var a=document.createElement("div");for(e=0;e<this.options.rows;e++){var l=document.createElement("div");for(i=0;i<this.options.slidesPerRow;i++){var c=t*r+(e*this.options.slidesPerRow+i);o.get(c)&&l.appendChild(o.get(c))}a.appendChild(l)}n.appendChild(a)}this.$slider.empty().append(n),this.$slider.children().children().children().css({width:100/this.options.slidesPerRow+"%",display:"inline-block"})}},i.prototype.checkResponsive=function(e,i){var n,s,o,r=!1,a=this.$slider.width(),l=window.innerWidth||t(window).width();if("window"===this.respondTo?o=l:"slider"===this.respondTo?o=a:"min"===this.respondTo&&(o=Math.min(l,a)),this.options.responsive&&this.options.responsive.length&&null!==this.options.responsive){for(n in s=null,this.breakpoints)this.breakpoints.hasOwnProperty(n)&&(!1===this.originalSettings.mobileFirst?o<this.breakpoints[n]&&(s=this.breakpoints[n]):o>this.breakpoints[n]&&(s=this.breakpoints[n]));null!==s?null!==this.activeBreakpoint?(s!==this.activeBreakpoint||i)&&(this.activeBreakpoint=s,"unslick"===this.breakpointSettings[s]?this.unslick(s):(this.options=t.extend({},this.originalSettings,this.breakpointSettings[s]),!0===e&&(this.currentSlide=this.options.initialSlide),this.refresh(e)),r=s):(this.activeBreakpoint=s,"unslick"===this.breakpointSettings[s]?this.unslick(s):(this.options=t.extend({},this.originalSettings,this.breakpointSettings[s]),!0===e&&(this.currentSlide=this.options.initialSlide),this.refresh(e)),r=s):null!==this.activeBreakpoint&&(this.activeBreakpoint=null,this.options=this.originalSettings,!0===e&&(this.currentSlide=this.options.initialSlide),this.refresh(e),r=s),e||!1===r||this.$slider.trigger("breakpoint",[this,r])}},i.prototype.changeSlide=function(e,i){var n,s,o=t(e.currentTarget);switch(o.is("a")&&e.preventDefault(),o.is("li")||(o=o.closest("li")),n=this.slideCount%this.options.slidesToScroll!=0?0:(this.slideCount-this.currentSlide)%this.options.slidesToScroll,e.data.message){case"previous":s=0===n?this.options.slidesToScroll:this.options.slidesToShow-n,this.slideCount>this.options.slidesToShow&&this.slideHandler(this.currentSlide-s,!1,i);break;case"next":s=0===n?this.options.slidesToScroll:n,this.slideCount>this.options.slidesToShow&&this.slideHandler(this.currentSlide+s,!1,i);break;case"index":var r=0===e.data.index?0:e.data.index||o.index()*this.options.slidesToScroll;this.slideHandler(this.checkNavigable(r),!1,i),o.children().trigger("focus");break;default:return}},i.prototype.checkNavigable=function(t){var e,i;if(e=this.getNavigableIndexes(),i=0,t>e[e.length-1])t=e[e.length-1];else for(var n in e){if(t<e[n]){t=i;break}i=e[n]}return t},i.prototype.cleanUpEvents=function(){this.options.dots&&null!==this.$dots&&(t("li",this.$dots).off("click.slick",this.changeSlide).off("mouseenter.slick",t.proxy(this.interrupt,this,!0)).off("mouseleave.slick",t.proxy(this.interrupt,this,!1)),!0===this.options.accessibility&&this.$dots.off("keydown.slick",this.keyHandler)),this.$slider.off("focus.slick blur.slick"),!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow&&this.$prevArrow.off("click.slick",this.changeSlide),this.$nextArrow&&this.$nextArrow.off("click.slick",this.changeSlide),!0===this.options.accessibility&&(this.$prevArrow&&this.$prevArrow.off("keydown.slick",this.keyHandler),this.$nextArrow&&this.$nextArrow.off("keydown.slick",this.keyHandler))),this.$list.off("touchstart.slick mousedown.slick",this.swipeHandler),this.$list.off("touchmove.slick mousemove.slick",this.swipeHandler),this.$list.off("touchend.slick mouseup.slick",this.swipeHandler),this.$list.off("touchcancel.slick mouseleave.slick",this.swipeHandler),this.$list.off("click.slick",this.clickHandler),t(document).off(this.visibilityChange,this.visibility),this.cleanUpSlideEvents(),!0===this.options.accessibility&&this.$list.off("keydown.slick",this.keyHandler),!0===this.options.focusOnSelect&&t(this.$slideTrack).children().off("click.slick",this.selectHandler),t(window).off("orientationchange.slick.slick-"+this.instanceUid,this.orientationChange),t(window).off("resize.slick.slick-"+this.instanceUid,this.resize),t("[draggable!=true]",this.$slideTrack).off("dragstart",this.preventDefault),t(window).off("load.slick.slick-"+this.instanceUid,this.setPosition)},i.prototype.cleanUpSlideEvents=function(){this.$list.off("mouseenter.slick",t.proxy(this.interrupt,this,!0)),this.$list.off("mouseleave.slick",t.proxy(this.interrupt,this,!1))},i.prototype.cleanUpRows=function(){var t;this.options.rows>1&&((t=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(t))},i.prototype.clickHandler=function(t){!1===this.shouldClick&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},i.prototype.destroy=function(e){this.autoPlayClear(),this.touchObject={},this.cleanUpEvents(),t(".slick-cloned",this.$slider).detach(),this.$dots&&this.$dots.remove(),this.$prevArrow&&this.$prevArrow.length&&(this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),this.htmlExpr.test(this.options.prevArrow)&&this.$prevArrow.remove()),this.$nextArrow&&this.$nextArrow.length&&(this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),this.htmlExpr.test(this.options.nextArrow)&&this.$nextArrow.remove()),this.$slides&&(this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){t(this).attr("style",t(this).data("originalStyling"))}),this.$slideTrack.children(this.options.slide).detach(),this.$slideTrack.detach(),this.$list.detach(),this.$slider.append(this.$slides)),this.cleanUpRows(),this.$slider.removeClass("slick-slider"),this.$slider.removeClass("slick-initialized"),this.$slider.removeClass("slick-dotted"),this.unslicked=!0,e||this.$slider.trigger("destroy",[this])},i.prototype.disableTransition=function(t){var e={};e[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(e):this.$slides.eq(t).css(e)},i.prototype.fadeSlide=function(t,e){var i=this;!1===i.cssTransitions?(i.$slides.eq(t).css({zIndex:i.options.zIndex}),i.$slides.eq(t).animate({opacity:1},i.options.speed,i.options.easing,e)):(i.applyTransition(t),i.$slides.eq(t).css({opacity:1,zIndex:i.options.zIndex}),e&&setTimeout(function(){i.disableTransition(t),e.call()},i.options.speed))},i.prototype.fadeSlideOut=function(t){!1===this.cssTransitions?this.$slides.eq(t).animate({opacity:0,zIndex:this.options.zIndex-2},this.options.speed,this.options.easing):(this.applyTransition(t),this.$slides.eq(t).css({opacity:0,zIndex:this.options.zIndex-2}))},i.prototype.filterSlides=i.prototype.slickFilter=function(t){null!==t&&(this.$slidesCache=this.$slides,this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.filter(t).appendTo(this.$slideTrack),this.reinit())},i.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(i){i.stopImmediatePropagation();var n=t(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=n.is(":focus"),e.autoPlay())},0)})},i.prototype.getCurrent=i.prototype.slickCurrentSlide=function(){return this.currentSlide},i.prototype.getDotCount=function(){var t=0,e=0,i=0;if(!0===this.options.infinite){if(this.slideCount<=this.options.slidesToShow)++i;else for(;t<this.slideCount;)++i,t=e+this.options.slidesToScroll,e+=this.options.slidesToScroll<=this.options.slidesToShow?this.options.slidesToScroll:this.options.slidesToShow}else if(!0===this.options.centerMode)i=this.slideCount;else if(this.options.asNavFor)for(;t<this.slideCount;)++i,t=e+this.options.slidesToScroll,e+=this.options.slidesToScroll<=this.options.slidesToShow?this.options.slidesToScroll:this.options.slidesToShow;else i=1+Math.ceil((this.slideCount-this.options.slidesToShow)/this.options.slidesToScroll);return i-1},i.prototype.getLeft=function(t){var e,i,n,s,o=0;return this.slideOffset=0,i=this.$slides.first().outerHeight(!0),!0===this.options.infinite?(this.slideCount>this.options.slidesToShow&&(this.slideOffset=-(this.slideWidth*this.options.slidesToShow*1),s=-1,!0===this.options.vertical&&!0===this.options.centerMode&&(2===this.options.slidesToShow?s=-1.5:1===this.options.slidesToShow&&(s=-2)),o=i*this.options.slidesToShow*s),this.slideCount%this.options.slidesToScroll!=0&&t+this.options.slidesToScroll>this.slideCount&&this.slideCount>this.options.slidesToShow&&(t>this.slideCount?(this.slideOffset=-((this.options.slidesToShow-(t-this.slideCount))*this.slideWidth*1),o=-((this.options.slidesToShow-(t-this.slideCount))*i*1)):(this.slideOffset=-(this.slideCount%this.options.slidesToScroll*this.slideWidth*1),o=-(this.slideCount%this.options.slidesToScroll*i*1)))):t+this.options.slidesToShow>this.slideCount&&(this.slideOffset=(t+this.options.slidesToShow-this.slideCount)*this.slideWidth,o=(t+this.options.slidesToShow-this.slideCount)*i),this.slideCount<=this.options.slidesToShow&&(this.slideOffset=0,o=0),!0===this.options.centerMode&&this.slideCount<=this.options.slidesToShow?this.slideOffset=this.slideWidth*Math.floor(this.options.slidesToShow)/2-this.slideWidth*this.slideCount/2:!0===this.options.centerMode&&!0===this.options.infinite?this.slideOffset+=this.slideWidth*Math.floor(this.options.slidesToShow/2)-this.slideWidth:!0===this.options.centerMode&&(this.slideOffset=0,this.slideOffset+=this.slideWidth*Math.floor(this.options.slidesToShow/2)),e=!1===this.options.vertical?-(t*this.slideWidth*1)+this.slideOffset:-(t*i*1)+o,!0===this.options.variableWidth&&(n=this.slideCount<=this.options.slidesToShow||!1===this.options.infinite?this.$slideTrack.children(".slick-slide").eq(t):this.$slideTrack.children(".slick-slide").eq(t+this.options.slidesToShow),e=!0===this.options.rtl?n[0]?-1*(this.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0,!0===this.options.centerMode&&(n=this.slideCount<=this.options.slidesToShow||!1===this.options.infinite?this.$slideTrack.children(".slick-slide").eq(t):this.$slideTrack.children(".slick-slide").eq(t+this.options.slidesToShow+1),e=(!0===this.options.rtl?n[0]?-1*(this.$slideTrack.width()-n[0].offsetLeft-n.width()):0:n[0]?-1*n[0].offsetLeft:0)+(this.$list.width()-n.outerWidth())/2)),e},i.prototype.getOption=i.prototype.slickGetOption=function(t){return this.options[t]},i.prototype.getNavigableIndexes=function(){var t,e=0,i=0,n=[];for(!1===this.options.infinite?t=this.slideCount:(e=-1*this.options.slidesToScroll,i=-1*this.options.slidesToScroll,t=2*this.slideCount);e<t;)n.push(e),e=i+this.options.slidesToScroll,i+=this.options.slidesToScroll<=this.options.slidesToShow?this.options.slidesToScroll:this.options.slidesToShow;return n},i.prototype.getSlick=function(){return this},i.prototype.getSlideCount=function(){var e,i,n=this;return i=!0===n.options.centerMode?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,!0===n.options.swipeToSlide?(n.$slideTrack.find(".slick-slide").each(function(s,o){if(o.offsetLeft-i+t(o).outerWidth()/2>-1*n.swipeLeft)return e=o,!1}),Math.abs(t(e).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},i.prototype.goTo=i.prototype.slickGoTo=function(t,e){this.changeSlide({data:{message:"index",index:parseInt(t)}},e)},i.prototype.init=function(e){t(this.$slider).hasClass("slick-initialized")||(t(this.$slider).addClass("slick-initialized"),this.buildRows(),this.buildOut(),this.setProps(),this.startLoad(),this.loadSlider(),this.initializeEvents(),this.updateArrows(),this.updateDots(),this.checkResponsive(!0),this.focusHandler()),e&&this.$slider.trigger("init",[this]),!0===this.options.accessibility&&this.initADA(),this.options.autoplay&&(this.paused=!1,this.autoPlay())},i.prototype.initADA=function(){var e=this,i=Math.ceil(e.slideCount/e.options.slidesToShow),n=e.getNavigableIndexes().filter(function(t){return t>=0&&t<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i){var s=n.indexOf(i);t(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+i,tabindex:-1}),-1!==s&&t(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var o=n[s];t(this).attr({role:"presentation"}),t(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+o,"aria-label":s+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,o=s+e.options.slidesToShow;s<o;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},i.prototype.initArrowEvents=function(){!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},this.changeSlide),this.$nextArrow.off("click.slick").on("click.slick",{message:"next"},this.changeSlide),!0===this.options.accessibility&&(this.$prevArrow.on("keydown.slick",this.keyHandler),this.$nextArrow.on("keydown.slick",this.keyHandler)))},i.prototype.initDotEvents=function(){!0===this.options.dots&&(t("li",this.$dots).on("click.slick",{message:"index"},this.changeSlide),!0===this.options.accessibility&&this.$dots.on("keydown.slick",this.keyHandler)),!0===this.options.dots&&!0===this.options.pauseOnDotsHover&&t("li",this.$dots).on("mouseenter.slick",t.proxy(this.interrupt,this,!0)).on("mouseleave.slick",t.proxy(this.interrupt,this,!1))},i.prototype.initSlideEvents=function(){this.options.pauseOnHover&&(this.$list.on("mouseenter.slick",t.proxy(this.interrupt,this,!0)),this.$list.on("mouseleave.slick",t.proxy(this.interrupt,this,!1)))},i.prototype.initializeEvents=function(){this.initArrowEvents(),this.initDotEvents(),this.initSlideEvents(),this.$list.on("touchstart.slick mousedown.slick",{action:"start"},this.swipeHandler),this.$list.on("touchmove.slick mousemove.slick",{action:"move"},this.swipeHandler),this.$list.on("touchend.slick mouseup.slick",{action:"end"},this.swipeHandler),this.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},this.swipeHandler),this.$list.on("click.slick",this.clickHandler),t(document).on(this.visibilityChange,t.proxy(this.visibility,this)),!0===this.options.accessibility&&this.$list.on("keydown.slick",this.keyHandler),!0===this.options.focusOnSelect&&t(this.$slideTrack).children().on("click.slick",this.selectHandler),t(window).on("orientationchange.slick.slick-"+this.instanceUid,t.proxy(this.orientationChange,this)),t(window).on("resize.slick.slick-"+this.instanceUid,t.proxy(this.resize,this)),t("[draggable!=true]",this.$slideTrack).on("dragstart",this.preventDefault),t(window).on("load.slick.slick-"+this.instanceUid,this.setPosition),t(this.setPosition)},i.prototype.initUI=function(){!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow.show(),this.$nextArrow.show()),!0===this.options.dots&&this.slideCount>this.options.slidesToShow&&this.$dots.show()},i.prototype.keyHandler=function(t){t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===t.keyCode&&!0===this.options.accessibility?this.changeSlide({data:{message:!0===this.options.rtl?"next":"previous"}}):39===t.keyCode&&!0===this.options.accessibility&&this.changeSlide({data:{message:!0===this.options.rtl?"previous":"next"}}))},i.prototype.lazyLoad=function(){function e(e){t("img[data-lazy]",e).each(function(){var e=t(this),i=t(this).attr("data-lazy"),n=t(this).attr("data-srcset"),s=t(this).attr("data-sizes")||o.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){n&&(e.attr("srcset",n),s&&e.attr("sizes",s)),e.attr("src",i).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),o.$slider.trigger("lazyLoaded",[o,e,i])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),o.$slider.trigger("lazyLoadError",[o,e,i])},r.src=i})}var i,n,s,o=this;if(!0===o.options.centerMode?!0===o.options.infinite?s=(n=o.currentSlide+(o.options.slidesToShow/2+1))+o.options.slidesToShow+2:(n=Math.max(0,o.currentSlide-(o.options.slidesToShow/2+1)),s=o.options.slidesToShow/2+1+2+o.currentSlide):(s=Math.ceil((n=o.options.infinite?o.options.slidesToShow+o.currentSlide:o.currentSlide)+o.options.slidesToShow),!0===o.options.fade&&(n>0&&n--,s<=o.slideCount&&s++)),i=o.$slider.find(".slick-slide").slice(n,s),"anticipated"===o.options.lazyLoad)for(var r=n-1,a=s,l=o.$slider.find(".slick-slide"),c=0;c<o.options.slidesToScroll;c++)r<0&&(r=o.slideCount-1),i=(i=i.add(l.eq(r))).add(l.eq(a)),r--,a++;e(i),o.slideCount<=o.options.slidesToShow?e(o.$slider.find(".slick-slide")):o.currentSlide>=o.slideCount-o.options.slidesToShow?e(o.$slider.find(".slick-cloned").slice(0,o.options.slidesToShow)):0===o.currentSlide&&e(o.$slider.find(".slick-cloned").slice(-1*o.options.slidesToShow))},i.prototype.loadSlider=function(){this.setPosition(),this.$slideTrack.css({opacity:1}),this.$slider.removeClass("slick-loading"),this.initUI(),"progressive"===this.options.lazyLoad&&this.progressiveLazyLoad()},i.prototype.next=i.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},i.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},i.prototype.pause=i.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},i.prototype.play=i.prototype.slickPlay=function(){this.autoPlay(),this.options.autoplay=!0,this.paused=!1,this.focussed=!1,this.interrupted=!1},i.prototype.postSlide=function(e){this.unslicked||(this.$slider.trigger("afterChange",[this,e]),this.animating=!1,this.slideCount>this.options.slidesToShow&&this.setPosition(),this.swipeLeft=null,this.options.autoplay&&this.autoPlay(),!0===this.options.accessibility&&(this.initADA(),this.options.focusOnChange&&t(this.$slides.get(this.currentSlide)).attr("tabindex",0).focus()))},i.prototype.prev=i.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},i.prototype.preventDefault=function(t){t.preventDefault()},i.prototype.progressiveLazyLoad=function(e){e=e||1;var i,n,s,o,r,a=this,l=t("img[data-lazy]",a.$slider);l.length?(n=(i=l.first()).attr("data-lazy"),s=i.attr("data-srcset"),o=i.attr("data-sizes")||a.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(i.attr("srcset",s),o&&i.attr("sizes",o)),i.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===a.options.adaptiveHeight&&a.setPosition(),a.$slider.trigger("lazyLoaded",[a,i,n]),a.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){a.progressiveLazyLoad(e+1)},500):(i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,i,n]),a.progressiveLazyLoad())},r.src=n):a.$slider.trigger("allImagesLoaded",[a])},i.prototype.refresh=function(e){var i,n;n=this.slideCount-this.options.slidesToShow,!this.options.infinite&&this.currentSlide>n&&(this.currentSlide=n),this.slideCount<=this.options.slidesToShow&&(this.currentSlide=0),i=this.currentSlide,this.destroy(!0),t.extend(this,this.initials,{currentSlide:i}),this.init(),e||this.changeSlide({data:{message:"index",index:i}},!1)},i.prototype.registerBreakpoints=function(){var e,i,n,s=this,o=s.options.responsive||null;if("array"===t.type(o)&&o.length){for(e in s.respondTo=s.options.respondTo||"window",o)if(n=s.breakpoints.length-1,o.hasOwnProperty(e)){for(i=o[e].breakpoint;n>=0;)s.breakpoints[n]&&s.breakpoints[n]===i&&s.breakpoints.splice(n,1),n--;s.breakpoints.push(i),s.breakpointSettings[i]=o[e].settings}s.breakpoints.sort(function(t,e){return s.options.mobileFirst?t-e:e-t})}},i.prototype.reinit=function(){this.$slides=this.$slideTrack.children(this.options.slide).addClass("slick-slide"),this.slideCount=this.$slides.length,this.currentSlide>=this.slideCount&&0!==this.currentSlide&&(this.currentSlide=this.currentSlide-this.options.slidesToScroll),this.slideCount<=this.options.slidesToShow&&(this.currentSlide=0),this.registerBreakpoints(),this.setProps(),this.setupInfinite(),this.buildArrows(),this.updateArrows(),this.initArrowEvents(),this.buildDots(),this.updateDots(),this.initDotEvents(),this.cleanUpSlideEvents(),this.initSlideEvents(),this.checkResponsive(!1,!0),!0===this.options.focusOnSelect&&t(this.$slideTrack).children().on("click.slick",this.selectHandler),this.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),this.setPosition(),this.focusHandler(),this.paused=!this.options.autoplay,this.autoPlay(),this.$slider.trigger("reInit",[this])},i.prototype.resize=function(){var e=this;t(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=t(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},i.prototype.removeSlide=i.prototype.slickRemove=function(t,e,i){if(t="boolean"==typeof t?!0===(e=t)?0:this.slideCount-1:!0===e?--t:t,this.slideCount<1||t<0||t>this.slideCount-1)return!1;this.unload(),!0===i?this.$slideTrack.children().remove():this.$slideTrack.children(this.options.slide).eq(t).remove(),this.$slides=this.$slideTrack.children(this.options.slide),this.$slideTrack.children(this.options.slide).detach(),this.$slideTrack.append(this.$slides),this.$slidesCache=this.$slides,this.reinit()},i.prototype.setCSS=function(t){var e,i,n={};!0===this.options.rtl&&(t=-t),e="left"==this.positionProp?Math.ceil(t)+"px":"0px",i="top"==this.positionProp?Math.ceil(t)+"px":"0px",n[this.positionProp]=t,!1===this.transformsEnabled||(n={},!1===this.cssTransitions?n[this.animType]="translate("+e+", "+i+")":n[this.animType]="translate3d("+e+", "+i+", 0px)"),this.$slideTrack.css(n)},i.prototype.setDimensions=function(){!1===this.options.vertical?!0===this.options.centerMode&&this.$list.css({padding:"0px "+this.options.centerPadding}):(this.$list.height(this.$slides.first().outerHeight(!0)*this.options.slidesToShow),!0===this.options.centerMode&&this.$list.css({padding:this.options.centerPadding+" 0px"})),this.listWidth=this.$list.width(),this.listHeight=this.$list.height(),!1===this.options.vertical&&!1===this.options.variableWidth?(this.slideWidth=Math.ceil(this.listWidth/this.options.slidesToShow),this.$slideTrack.width(Math.ceil(this.slideWidth*this.$slideTrack.children(".slick-slide").length))):!0===this.options.variableWidth?this.$slideTrack.width(5e3*this.slideCount):(this.slideWidth=Math.ceil(this.listWidth),this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0)*this.$slideTrack.children(".slick-slide").length)));var t=this.$slides.first().outerWidth(!0)-this.$slides.first().width();!1===this.options.variableWidth&&this.$slideTrack.children(".slick-slide").width(this.slideWidth-t)},i.prototype.setFade=function(){var e,i=this;i.$slides.each(function(n,s){e=-(i.slideWidth*n*1),!0===i.options.rtl?t(s).css({position:"relative",right:e,top:0,zIndex:i.options.zIndex-2,opacity:0}):t(s).css({position:"relative",left:e,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},i.prototype.setHeight=function(){if(1===this.options.slidesToShow&&!0===this.options.adaptiveHeight&&!1===this.options.vertical){var t=this.$slides.eq(this.currentSlide).outerHeight(!0);this.$list.css("height",t)}},i.prototype.setOption=i.prototype.slickSetOption=function(){var e,i,n,s,o,r=this,a=!1;if("object"===t.type(arguments[0])?(n=arguments[0],a=arguments[1],o="multiple"):"string"===t.type(arguments[0])&&(n=arguments[0],s=arguments[1],a=arguments[2],"responsive"===arguments[0]&&"array"===t.type(arguments[1])?o="responsive":void 0!==arguments[1]&&(o="single")),"single"===o)r.options[n]=s;else if("multiple"===o)t.each(n,function(t,e){r.options[t]=e});else if("responsive"===o)for(i in s)if("array"!==t.type(r.options.responsive))r.options.responsive=[s[i]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[i].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[i])}a&&(r.unload(),r.reinit())},i.prototype.setPosition=function(){this.setDimensions(),this.setHeight(),!1===this.options.fade?this.setCSS(this.getLeft(this.currentSlide)):this.setFade(),this.$slider.trigger("setPosition",[this])},i.prototype.setProps=function(){var t=document.body.style;this.positionProp=!0===this.options.vertical?"top":"left","top"===this.positionProp?this.$slider.addClass("slick-vertical"):this.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===this.options.useCSS&&(this.cssTransitions=!0),this.options.fade&&("number"==typeof this.options.zIndex?this.options.zIndex<3&&(this.options.zIndex=3):this.options.zIndex=this.defaults.zIndex),void 0!==t.OTransform&&(this.animType="OTransform",this.transformType="-o-transform",this.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(this.animType=!1)),void 0!==t.MozTransform&&(this.animType="MozTransform",this.transformType="-moz-transform",this.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(this.animType=!1)),void 0!==t.webkitTransform&&(this.animType="webkitTransform",this.transformType="-webkit-transform",this.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(this.animType=!1)),void 0!==t.msTransform&&(this.animType="msTransform",this.transformType="-ms-transform",this.transitionType="msTransition",void 0===t.msTransform&&(this.animType=!1)),void 0!==t.transform&&!1!==this.animType&&(this.animType="transform",this.transformType="transform",this.transitionType="transition"),this.transformsEnabled=this.options.useTransform&&null!==this.animType&&!1!==this.animType},i.prototype.setSlideClasses=function(t){var e,i,n,s;if(i=this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),this.$slides.eq(t).addClass("slick-current"),!0===this.options.centerMode){var o=this.options.slidesToShow%2==0?1:0;e=Math.floor(this.options.slidesToShow/2),!0===this.options.infinite&&(t>=e&&t<=this.slideCount-1-e?this.$slides.slice(t-e+o,t+e+1).addClass("slick-active").attr("aria-hidden","false"):(n=this.options.slidesToShow+t,i.slice(n-e+1+o,n+e+2).addClass("slick-active").attr("aria-hidden","false")),0===t?i.eq(i.length-1-this.options.slidesToShow).addClass("slick-center"):t===this.slideCount-1&&i.eq(this.options.slidesToShow).addClass("slick-center")),this.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=this.slideCount-this.options.slidesToShow?this.$slides.slice(t,t+this.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):i.length<=this.options.slidesToShow?i.addClass("slick-active").attr("aria-hidden","false"):(s=this.slideCount%this.options.slidesToShow,n=!0===this.options.infinite?this.options.slidesToShow+t:t,this.options.slidesToShow==this.options.slidesToScroll&&this.slideCount-t<this.options.slidesToShow?i.slice(n-(this.options.slidesToShow-s),n+s).addClass("slick-active").attr("aria-hidden","false"):i.slice(n,n+this.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==this.options.lazyLoad&&"anticipated"!==this.options.lazyLoad||this.lazyLoad()},i.prototype.setupInfinite=function(){var e,i,n;if(!0===this.options.fade&&(this.options.centerMode=!1),!0===this.options.infinite&&!1===this.options.fade&&(i=null,this.slideCount>this.options.slidesToShow)){for(n=!0===this.options.centerMode?this.options.slidesToShow+1:this.options.slidesToShow,e=this.slideCount;e>this.slideCount-n;e-=1)i=e-1,t(this.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i-this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");for(e=0;e<n+this.slideCount;e+=1)i=e,t(this.$slides[i]).clone(!0).attr("id","").attr("data-slick-index",i+this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");this.$slideTrack.find(".slick-cloned").find("[id]").each(function(){t(this).attr("id","")})}},i.prototype.interrupt=function(t){t||this.autoPlay(),this.interrupted=t},i.prototype.selectHandler=function(e){var i=parseInt((t(e.target).is(".slick-slide")?t(e.target):t(e.target).parents(".slick-slide")).attr("data-slick-index"));i||(i=0),this.slideCount<=this.options.slidesToShow?this.slideHandler(i,!1,!0):this.slideHandler(i)},i.prototype.slideHandler=function(t,e,i){var n,s,o,r,a,l=null,c=this;if(e=e||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===t)){if(!1===e&&c.asNavFor(t),n=t,l=c.getLeft(n),r=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?r:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(t<0||t>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(n=c.currentSlide,!0!==i?c.animateSlide(r,function(){c.postSlide(n)}):c.postSlide(n));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(t<0||t>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(n=c.currentSlide,!0!==i?c.animateSlide(r,function(){c.postSlide(n)}):c.postSlide(n));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),s=n<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+n:n>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:n-c.slideCount:n,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,s]),o=c.currentSlide,c.currentSlide=s,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==i?(c.fadeSlideOut(o),c.fadeSlide(s,function(){c.postSlide(s)})):c.postSlide(s),void c.animateHeight();!0!==i?c.animateSlide(l,function(){c.postSlide(s)}):c.postSlide(s)}}},i.prototype.startLoad=function(){!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&(this.$prevArrow.hide(),this.$nextArrow.hide()),!0===this.options.dots&&this.slideCount>this.options.slidesToShow&&this.$dots.hide(),this.$slider.addClass("slick-loading")},i.prototype.swipeDirection=function(){var t,e;return t=this.touchObject.startX-this.touchObject.curX,(e=Math.round(180*Math.atan2(this.touchObject.startY-this.touchObject.curY,t)/Math.PI))<0&&(e=360-Math.abs(e)),e<=45&&e>=0?!1===this.options.rtl?"left":"right":e<=360&&e>=315?!1===this.options.rtl?"left":"right":e>=135&&e<=225?!1===this.options.rtl?"right":"left":!0===this.options.verticalSwiping?e>=35&&e<=135?"down":"up":"vertical"},i.prototype.swipeEnd=function(t){var e,i;if(this.dragging=!1,this.swiping=!1,this.scrolling)return this.scrolling=!1,!1;if(this.interrupted=!1,this.shouldClick=!(this.touchObject.swipeLength>10),void 0===this.touchObject.curX)return!1;if(!0===this.touchObject.edgeHit&&this.$slider.trigger("edge",[this,this.swipeDirection()]),this.touchObject.swipeLength>=this.touchObject.minSwipe){switch(i=this.swipeDirection()){case"left":case"down":e=this.options.swipeToSlide?this.checkNavigable(this.currentSlide+this.getSlideCount()):this.currentSlide+this.getSlideCount(),this.currentDirection=0;break;case"right":case"up":e=this.options.swipeToSlide?this.checkNavigable(this.currentSlide-this.getSlideCount()):this.currentSlide-this.getSlideCount(),this.currentDirection=1}"vertical"!=i&&(this.slideHandler(e),this.touchObject={},this.$slider.trigger("swipe",[this,i]))}else this.touchObject.startX!==this.touchObject.curX&&(this.slideHandler(this.currentSlide),this.touchObject={})},i.prototype.swipeHandler=function(t){if(!(!1===this.options.swipe||"ontouchend"in document&&!1===this.options.swipe||!1===this.options.draggable&&-1!==t.type.indexOf("mouse")))switch(this.touchObject.fingerCount=t.originalEvent&&void 0!==t.originalEvent.touches?t.originalEvent.touches.length:1,this.touchObject.minSwipe=this.listWidth/this.options.touchThreshold,!0===this.options.verticalSwiping&&(this.touchObject.minSwipe=this.listHeight/this.options.touchThreshold),t.data.action){case"start":this.swipeStart(t);break;case"move":this.swipeMove(t);break;case"end":this.swipeEnd(t)}},i.prototype.swipeMove=function(t){var e,i,n,s,o,r;return o=void 0!==t.originalEvent?t.originalEvent.touches:null,!(!this.dragging||this.scrolling||o&&1!==o.length)&&(e=this.getLeft(this.currentSlide),this.touchObject.curX=void 0!==o?o[0].pageX:t.clientX,this.touchObject.curY=void 0!==o?o[0].pageY:t.clientY,this.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(this.touchObject.curX-this.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(this.touchObject.curY-this.touchObject.startY,2))),this.options.verticalSwiping||this.swiping||!(r>4)?(!0===this.options.verticalSwiping&&(this.touchObject.swipeLength=r),i=this.swipeDirection(),void 0!==t.originalEvent&&this.touchObject.swipeLength>4&&(this.swiping=!0,t.preventDefault()),s=(!1===this.options.rtl?1:-1)*(this.touchObject.curX>this.touchObject.startX?1:-1),!0===this.options.verticalSwiping&&(s=this.touchObject.curY>this.touchObject.startY?1:-1),n=this.touchObject.swipeLength,this.touchObject.edgeHit=!1,!1===this.options.infinite&&(0===this.currentSlide&&"right"===i||this.currentSlide>=this.getDotCount()&&"left"===i)&&(n=this.touchObject.swipeLength*this.options.edgeFriction,this.touchObject.edgeHit=!0),!1===this.options.vertical?this.swipeLeft=e+n*s:this.swipeLeft=e+n*(this.$list.height()/this.listWidth)*s,!0===this.options.verticalSwiping&&(this.swipeLeft=e+n*s),!0!==this.options.fade&&!1!==this.options.touchMove&&(!0===this.animating?(this.swipeLeft=null,!1):void this.setCSS(this.swipeLeft))):(this.scrolling=!0,!1))},i.prototype.swipeStart=function(t){var e;if(this.interrupted=!0,1!==this.touchObject.fingerCount||this.slideCount<=this.options.slidesToShow)return this.touchObject={},!1;void 0!==t.originalEvent&&void 0!==t.originalEvent.touches&&(e=t.originalEvent.touches[0]),this.touchObject.startX=this.touchObject.curX=void 0!==e?e.pageX:t.clientX,this.touchObject.startY=this.touchObject.curY=void 0!==e?e.pageY:t.clientY,this.dragging=!0},i.prototype.unfilterSlides=i.prototype.slickUnfilter=function(){null!==this.$slidesCache&&(this.unload(),this.$slideTrack.children(this.options.slide).detach(),this.$slidesCache.appendTo(this.$slideTrack),this.reinit())},i.prototype.unload=function(){t(".slick-cloned",this.$slider).remove(),this.$dots&&this.$dots.remove(),this.$prevArrow&&this.htmlExpr.test(this.options.prevArrow)&&this.$prevArrow.remove(),this.$nextArrow&&this.htmlExpr.test(this.options.nextArrow)&&this.$nextArrow.remove(),this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},i.prototype.unslick=function(t){this.$slider.trigger("unslick",[this,t]),this.destroy()},i.prototype.updateArrows=function(){this.options.slidesToShow,!0===this.options.arrows&&this.slideCount>this.options.slidesToShow&&!this.options.infinite&&(this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===this.currentSlide?(this.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):this.currentSlide>=this.slideCount-this.options.slidesToShow&&!1===this.options.centerMode?(this.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):this.currentSlide>=this.slideCount-1&&!0===this.options.centerMode&&(this.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},i.prototype.updateDots=function(){null!==this.$dots&&(this.$dots.find("li").removeClass("slick-active").end(),this.$dots.find("li").eq(Math.floor(this.currentSlide/this.options.slidesToScroll)).addClass("slick-active"))},i.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},t.fn.slick=function(){var t,e,n=arguments[0],s=Array.prototype.slice.call(arguments,1),o=this.length;for(t=0;t<o;t++)if("object"==typeof n||void 0===n?this[t].slick=new i(this[t],n):e=this[t].slick[n].apply(this[t].slick,s),void 0!==e)return e;return this}},"function"==typeof define&&define.amd?define(["jquery"],s):s(n("9qak9"));//# sourceMappingURL=index.bbc4216f.js.map

//# sourceMappingURL=index.bbc4216f.js.map
