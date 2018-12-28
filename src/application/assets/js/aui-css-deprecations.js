!function(e){var a={};function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,a,n){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)o.d(n,t,function(a){return e[a]}.bind(null,t));return n},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="",o(o.s=0)}([function(e,a,o){"use strict";var n=o(1),t=function(e){return e&&e.__esModule?e:{default:e}}(o(5));(0,n.css)(".aui-badge",{displayName:"AUI Badges class"}),(0,n.css)(".aui-message span.aui-icon",{displayName:"Message icon span"}),(0,n.css)(".aui-tabs.vertical-tabs",{displayName:"Vertical tabs"}),(0,n.css)("form.aui span.content"),(0,n.css)(["form.aui .button","form.aui .buttons-container"],{displayName:"Unprefixed buttons",alternativeName:"aui-button and aui-buttons"}),(0,n.css)(["form.aui .icon-date","form.aui .icon-range","form.aui .icon-help","form.aui .icon-required","form.aui .icon-inline-help","form.aui .icon-users",".aui-icon-date",".aui-icon-range",".aui-icon-help",".aui-icon-required",".aui-icon-users",".aui-icon-inline-help"],{displayName:"Form icons"}),(0,n.css)([".aui-dropdown2 .active",".aui-dropdown2 .checked",".aui-dropdown2 .disabled",".aui-dropdown2 .interactive"],{displayName:"Unprefixed dropdown2 css AUI-2150"});var l,r={arrow:"aui-inline-dialog-arrow",contents:"aui-inline-dialog-contents"};for(l in r)Object.hasOwnProperty.call(r,l)&&(0,n.css)(l,{alternativeName:r[l],removeVersion:"8.0.0",sinceVersion:"5.9.0"});(0,n.css)([".aui-header-logo-atlassian",".aui-header-logo-aui",".aui-header-logo-bamboo",".aui-header-logo-bitbucket",".aui-header-logo-stash",".aui-header-logo-clover",".aui-header-logo-confluence",".aui-header-logo-crowd",".aui-header-logo-crucible",".aui-header-logo-fecru",".aui-header-logo-fisheye",".aui-header-logo-hipchat",".aui-header-logo-jira",".aui-header-logo-jira-core",".aui-header-logo-jira-software",".aui-header-logo-jira-service-desk",".aui-header-logo-answer",".aui-header-logo-community",".aui-header-logo-developers",".aui-header-logo-expert",".aui-header-logo-partner-program",".aui-header-logo-marketplace",".aui-header-logo-support",".aui-header-logo-university",".aui-header-logo-cloud"],{displayName:"Atlassian Brand Logos",sinceVersion:"6.1.0",removeInVersion:"9.0.0",extraInfo:"The Atlassian logos were extracted to their own Node package. See https://www.npmjs.com/package/@atlassian/brand-logos"}),(0,n.css)(".aui-badge",{displayName:"AUI Badge CSS class",alternativeName:"aui-badge",sinceVersion:"7.1.0",extraInfo:"The badge pattern is best used as a web component instead of a CSS class"}),(0,n.css)([".aui-iconfont-image-extrasmall"],{displayName:"Special size icon names",sinceVersion:"7.5.0",extraInfo:"The only size variant allowed for icon names is `-small`."}),t.default.forEach(function(e){var a=e.newName,o=e.oldName;return(0,n.css)(".aui-iconfont-"+o,{displayName:"ADG2 icon",alternativeName:".aui-iconfont-"+a,sinceVersion:"7.5.0",removeVersion:"8.0.0",extraInfo:"Use the new ADGS icon CSS class name"})}),(0,n.css)(".aui-table-interactive",{alternativeName:".aui-table-list",sinceVersion:"7.8.0",removeInVersion:"9.0.0",extraInfo:'The "interactive" suffix caused some confusion when contrasted with sortable tables.The name has been updated to reflect its intended purpose: displaying lists of data in a tabular format.'}),(0,n.css)("aui-spinner[filled]",{sinceVersion:"7.9.4",removeInVersion:"9.0.0",extraInfo:"Add CSS to the parent element of the <aui-spinner>.\nUse CSS flexbox or grid to vertically align it.\nSee https://css-tricks.com/centering-css-complete-guide/ for techniques."})},function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getMessageLogger=a.propertyDeprecationSupported=a.obj=a.prop=a.css=a.construct=a.fn=void 0;var n=l(o(2)),t=l(o(4));function l(e){return e&&e.__esModule?e:{default:e}}var r=Object.prototype.hasOwnProperty,i=[];function d(){"undefined"!=typeof console&&console.warn&&Function.prototype.apply.call(console.warn,console,arguments)}function m(e,a){if("function"==typeof e)return e;var o=!1;return a=a||{},function(n){var t=function(e){var a=new Error,o=a.stack||a.stacktrace,n=o&&o.replace(/^Error\n/,"")||"";return n?(n=n.split("\n"))[e+2]:n}(n||1)||"";if(!o||-1===i.indexOf(t)){i.push(t),o=!0;var l="DEPRECATED "+(a.deprecationType+" "||!1)+"- "+function(e){return(e+="")?e.charAt(0).toUpperCase()+e.substring(1):""}(e)+" has been deprecated"+(a.sinceVersion?" since "+a.sinceVersion:"")+" and will be removed in "+(a.removeInVersion||"a future release")+".";a.alternativeName&&(l+=" Use "+a.alternativeName+" instead. "),a.extraInfo&&(l+=" "+a.extraInfo),t=""===t?" \n No stack trace of the deprecated usage is available in your current browser.":" \n "+t,a.extraObject?d(l+="\n",a.extraObject,t):d(l,t)}}}function s(e,a){var o=e.options.displayName;o=o?" ("+o+")":"";var t=n.default.extend({deprecationType:"CSS",extraObject:a},e.options);m("'"+e.selector+"' pattern"+o,t)()}function c(e,a,o){(o=o||{}).deprecationType=o.deprecationType||"JS";var n=m(a||e.name||"this function",o);return function(){return n(),e.apply(this,arguments)}}function u(e,a,o){(o=o||{}).deprecationType=o.deprecationType||"JS";var t=c(e,a,o);return t.prototype=e.prototype,n.default.extend(t,e),t}var N=!1;try{Object.defineProperty&&(Object.defineProperty({},"blam",{get:function(){},set:function(){}}),a.propertyDeprecationSupported=N=!0)}catch(e){}function p(e,a,o){if("function"==typeof e[a]){(o=o||{}).deprecationType=o.deprecationType||"JS";var n=o.displayName||a;e[a]=c(e[a],n,o)}else!function(e,a,o){if(N){var n=e[a];(o=o||{}).deprecationType=o.deprecationType||"JS";var t=m(o.displayName||a,o);Object.defineProperty(e,a,{get:function(){return t(),n},set:function(e){return n=e,t(),e}})}}(e,a,o)}function w(e,a,o){for(var t in o=o||{},e)r.call(e,t)&&(o.deprecationType=o.deprecationType||"JS",o.displayName=a+t,o.alternativeName=o.alternativeNamePrefix&&o.alternativeNamePrefix+t,p(e,t,n.default.extend({},o)))}function f(e){return function(a){for(var o={selector:a,options:e||{}},n=document.querySelectorAll(a),t=0;t<n.length;t++)s(o,n[t]);!function(e){if(h.push(e),!v){(v=new MutationObserver(function(e){e.forEach(function(e){for(var a=e.addedNodes,o=0;o<a.length;o++){var n=a[o];1===n.nodeType&&h.forEach(g(n))}})})).observe(document,{childList:!0,subtree:!0})}}(o)}}function b(e,a){"string"==typeof e&&(e=[e]),e.forEach(f(a))}function g(e){return function(a){(function(e,a){return(e.matches||e.msMatchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector).call(e,a)})(e,a.selector)&&s(a,e)}}var h=[],v=void 0;(0,t.default)("deprecate",{fn:c,construct:u,css:b,prop:p,obj:w,propertyDeprecationSupported:N,getMessageLogger:m}),a.fn=c,a.construct=u,a.css=b,a.prop=p,a.obj=w,a.propertyDeprecationSupported=N,a.getMessageLogger=m},function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o(3));a.default=window.jQuery||window.Zepto||n.default,e.exports=a.default},function(e,a){e.exports=jQuery},function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a.default=function(e,a){"object"!==n(window[t])&&(window[t]={});return window[t][e]=a};var t="AJS";e.exports=a.default},function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default=[{newName:"menu",oldName:"appswitcher"},{newName:"refresh",oldName:"build"},{newName:"cross",oldName:"close-dialog"},{newName:"chevron-right",oldName:"collapsed"},{newName:"settings",oldName:"configure"},{newName:"copy",oldName:"copy-clipboard"},{newName:"trash",oldName:"delete"},{newName:"detail-view",oldName:"details"},{newName:"arrow-left",oldName:"devtools-arrow-left"},{newName:"arrow-right",oldName:"devtools-arrow-right"},{newName:"sign-in",oldName:"devtools-checkout"},{newName:"import",oldName:"devtools-clone"},{newName:"folder-filled",oldName:"devtools-folder-closed"},{newName:"export",oldName:"devtools-pull-request"},{newName:"tag",oldName:"devtools-tag"},{newName:"tag",oldName:"devtools-tag-small"},{newName:"menu",oldName:"drag-vertical"},{newName:"edit-filled",oldName:"edit"},{newName:"edit-filled",oldName:"edit-small"},{newName:"chevron-up",oldName:"expanded"},{newName:"vid-full-screen-on",oldName:"focus"},{newName:"more-vertical",oldName:"handle-horizontal"},{newName:"question-circle",oldName:"help"},{newName:"home-circle",oldName:"homepage"},{newName:"image",oldName:"image-extrasmall"},{newName:"info-circle",oldName:"info"},{newName:"world",oldName:"weblink"},{newName:"add-circle",oldName:"list-add"},{newName:"cross-circle",oldName:"list-remove"},{newName:"lock-filled",oldName:"locked"},{newName:"lock-filled",oldName:"locked-small"},{newName:"document",oldName:"page-blank"},{newName:"document",oldName:"doc"},{newName:"documents",oldName:"pages"},{newName:"cross-circle",oldName:"remove"},{newName:"cross-circle",oldName:"remove-label"},{newName:"search",oldName:"search-small"},{newName:"person-circle",oldName:"space-personal"},{newName:"star-filled",oldName:"star"},{newName:"check",oldName:"success"},{newName:"recent",oldName:"time"},{newName:"vid-full-screen-off",oldName:"unfocus"},{newName:"unlock-filled",oldName:"unlocked"},{newName:"star",oldName:"unstar"},{newName:"watch",oldName:"unwatch"},{newName:"arrow-up",oldName:"up"},{newName:"arrow-down",oldName:"down"},{newName:"person",oldName:"user"},{newName:"watch-filled",oldName:"view"},{newName:"room-menu",oldName:"view-list"},{newName:"menu",oldName:"view-table"},{newName:"watch-filled",oldName:"watch"},{newName:"tray",oldName:"workbox"},{newName:"bullet-list",oldName:"configure-columns"},{newName:"image",oldName:"file-image"},{newName:"group",oldName:"admin-roles"},{newName:"vid-pause",oldName:"pause"},{newName:"refresh",oldName:"refresh-small"},{newName:"swap",oldName:"switch-small"},{newName:"arrow-down-small",oldName:"arrow-down"},{newName:"arrow-up-small",oldName:"arrow-up"},{newName:"email",oldName:"email-large"},{newName:"documents",oldName:"pages-large"},{newName:"person",oldName:"user-large"},{newName:"documents",oldName:"bp-decisions"},{newName:"documents",oldName:"bp-default"},{newName:"documents",oldName:"bp-files"},{newName:"documents",oldName:"bp-requirements"},{newName:"documents",oldName:"bp-howto"},{newName:"documents",oldName:"bp-jira"},{newName:"documents",oldName:"bp-meeting"},{newName:"documents",oldName:"bp-retrospective"},{newName:"documents",oldName:"bp-sharedlinks"},{newName:"documents",oldName:"bp-troubleshooting"},{newName:"upload",oldName:"deploy"},{newName:"file",oldName:"page-default"},{newName:"shortcut",oldName:"sidebar-link"},{newName:"shortcut",oldName:"sidebar-link-large"},{newName:"incomplete-build",oldName:"devtools-task-cancelled"},{newName:"plan-disabled",oldName:"devtools-task-disabled"},{newName:"queued-build",oldName:"devtools-task-in-progress"},{newName:"branch",oldName:"devtools-branch"},{newName:"branch",oldName:"devtools-branch-small"},{newName:"commits",oldName:"devtools-commit"},{newName:"create-fork",oldName:"devtools-for"},{newName:"bold",oldName:"editor-bold"},{newName:"italic",oldName:"editor-italic"},{newName:"underline",oldName:"editor-underline"},{newName:"text-color",oldName:"editor-color"},{newName:"left-alignment",oldName:"editor-align-left"},{newName:"right-alignment",oldName:"editor-align-right"},{newName:"center-alignment",oldName:"editor-align-center"},{newName:"indent-left-mall",oldName:"editor-indent"},{newName:"indent-right-mall",oldName:"editor-outdent"},{newName:"number-list-mall",oldName:"editor-list-number"},{newName:"bullet-list-mall",oldName:"editor-list-bullet"},{newName:"mention",oldName:"editor-mention"},{newName:"table-of-contents-mall",oldName:"editor-macro-toc"},{newName:"advanced",oldName:"editor-style"},{newName:"symbol",oldName:"editor-symbol"},{newName:"horizontal-rule",oldName:"editor-hr"},{newName:"page-layout-toggle",oldName:"editor-layout"},{newName:"table",oldName:"editor-table"},{newName:"location",oldName:"nav-children-large"},{newName:"location",oldName:"nav-children"},{newName:"single-column",oldName:"layout-1col-large"},{newName:"two-column",oldName:"layout-2col-large"},{newName:"right-side-bar",oldName:"layout-2col-left-large"},{newName:"left-side-bar",oldName:"layout-2col-right-large"},{newName:"three-column-side-bars",oldName:"layout-3col-center-large"},{newName:"three-column",oldName:"layout-3col-large"},{newName:"heading-column",oldName:"table-header-column"},{newName:"heading-row",oldName:"table-header-row"},{newName:"insert-row-after",oldName:"table-row-down"},{newName:"insert-row-before",oldName:"table-row-up"},{newName:"remove-row",oldName:"table-row-remove"},{newName:"remove-column",oldName:"table-col-remove"},{newName:"insert-column-before",oldName:"table-col-left"},{newName:"insert-column-after",oldName:"table-col-right"},{newName:"remove-table",oldName:"table-remove"},{newName:"merge-table-cells",oldName:"table-merge"},{newName:"split-merged-table-cells",oldName:"table-split"},{newName:"copy-table-row",oldName:"table-copy-row"},{newName:"paste-table-row",oldName:"table-paste-row"},{newName:"cut-table-row",oldName:"table-cut-row"},{newName:"team-calendar",oldName:"teamcals-large"},{newName:"team-calendar",oldName:"teamcals"},{newName:"emoji",oldName:"editor-emoticon"},{newName:"help",oldName:"editor-help"},{newName:"task",oldName:"editor-task"},{newName:"like",oldName:"like-small"},{newName:"submodule",oldName:"devtools-submodule"}],e.exports=a.default}]);
//# sourceMappingURL=aui-css-deprecations.js.map