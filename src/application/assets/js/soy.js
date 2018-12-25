// This file was automatically generated from app.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace com.poovarasan.application.
 */

if (typeof com == 'undefined') { var com = {}; }
if (typeof com.poovarasan == 'undefined') { com.poovarasan = {}; }
if (typeof com.poovarasan.application == 'undefined') { com.poovarasan.application = {}; }


com.poovarasan.application.page = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  goog.asserts.assert(opt_data.header == null || (opt_data.header instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.header), "expected param 'header' of type null|string|undefined.");
  var header = /** @type {null|string|undefined} */ (opt_data.header);
  return '' + aui.page.document({windowTitle: '', headContent: '<link rel="stylesheet" href="/static/css/aui.min.css" /><link rel="stylesheet" href="/static/css/aui-experimental.css" /><link rel="stylesheet" href="/static/css/aui-iconfonts.min.css" />', content: aui.page.page({headerContent: '' + soy.$$escapeHtml(header), contentContent: '<!-- call aui.page.pagePanel here -->', footerContent: '<!-- literal content here -->'}) + '<script src="/static/js/jq.js"><\/script><script src="/static/js/aui.min.js"><\/script><script src="/static/js/aui-datepicker.min.js"><\/script><script src="/static/js/aui-soy.min.js"><\/script><script src="/static/js/soyutils.js"><\/script><script src="/static/js/soy.js"><\/script>'});
};
if (goog.DEBUG) {
  com.poovarasan.application.page.soyTemplateName = 'com.poovarasan.application.page';
}


com.poovarasan.application.boxPattern = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  goog.asserts.assert(opt_data.image == null || (opt_data.image instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.image), "expected param 'image' of type null|string|undefined.");
  var image = /** @type {null|string|undefined} */ (opt_data.image);
  goog.asserts.assert(opt_data.heading == null || (opt_data.heading instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.heading), "expected param 'heading' of type null|string|undefined.");
  var heading = /** @type {null|string|undefined} */ (opt_data.heading);
  goog.asserts.assert(opt_data.description == null || (opt_data.description instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.description), "expected param 'description' of type null|string|undefined.");
  var description = /** @type {null|string|undefined} */ (opt_data.description);
  goog.asserts.assert(opt_data.secondaryDescription == null || (opt_data.secondaryDescription instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.secondaryDescription), "expected param 'secondaryDescription' of type null|string|undefined.");
  var secondaryDescription = /** @type {null|string|undefined} */ (opt_data.secondaryDescription);
  return '<div class="col-4 card"><div class="col-3"><img class="img-responsive" src="' + soy.$$escapeHtml(image) + '"></div><div class="col-9"><h2>' + soy.$$escapeHtml(heading) + '</h2><p>' + soy.$$escapeHtml(description) + '</p>' + ((secondaryDescription) ? soy.$$filterNoAutoescape(secondaryDescription) : '') + '</div></div>';
};
if (goog.DEBUG) {
  com.poovarasan.application.boxPattern.soyTemplateName = 'com.poovarasan.application.boxPattern';
}


com.poovarasan.application.cboxPattern = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  goog.asserts.assert(opt_data.image == null || (opt_data.image instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.image), "expected param 'image' of type null|string|undefined.");
  var image = /** @type {null|string|undefined} */ (opt_data.image);
  goog.asserts.assert(opt_data.heading == null || (opt_data.heading instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.heading), "expected param 'heading' of type null|string|undefined.");
  var heading = /** @type {null|string|undefined} */ (opt_data.heading);
  goog.asserts.assert(opt_data.description == null || (opt_data.description instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.description), "expected param 'description' of type null|string|undefined.");
  var description = /** @type {null|string|undefined} */ (opt_data.description);
  goog.asserts.assert(opt_data.secondaryDescription == null || (opt_data.secondaryDescription instanceof goog.soy.data.SanitizedContent) || goog.isString(opt_data.secondaryDescription), "expected param 'secondaryDescription' of type null|string|undefined.");
  var secondaryDescription = /** @type {null|string|undefined} */ (opt_data.secondaryDescription);
  return '<div class="aui-help aui-help-empty-state"><div class="aui-help-illustration"><img height="128" width="128" src="' + soy.$$escapeHtml(image) + '" /></div><div class="aui-help-content"><h6>' + soy.$$escapeHtml(heading) + '</h6><p>' + soy.$$escapeHtml(description) + '</p>' + ((secondaryDescription) ? soy.$$filterNoAutoescape(secondaryDescription) : '') + '</div></div>';
};
if (goog.DEBUG) {
  com.poovarasan.application.cboxPattern.soyTemplateName = 'com.poovarasan.application.cboxPattern';
}


com.poovarasan.application.normalHeader = function(opt_data, opt_ignored) {
  return '' + aui.page.header({logo: 'jira', headerLink: '#'});
};
if (goog.DEBUG) {
  com.poovarasan.application.normalHeader.soyTemplateName = 'com.poovarasan.application.normalHeader';
}


com.poovarasan.application.appHeader = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  goog.asserts.assert(opt_data.isLoggedIn == null || goog.isBoolean(opt_data.isLoggedIn), "expected param 'isLoggedIn' of type boolean|null|undefined.");
  var isLoggedIn = /** @type {boolean|null|undefined} */ (opt_data.isLoggedIn);
  return '' + aui.page.header({logo: 'bamboo', headerLink: '#', primaryNavContent: '<ul class="aui-nav"></ul>', secondaryNavContent: '<ul class="aui-nav"><li><form class="aui-quicksearch" method="post" action="/foo"><label class="assistive" for="quicksearchid">Search</label><input type="search" name="quicksearchname" placeholder="Quick Search" class="search" id="quicksearchid"></form></li>' + ((isLoggedIn) ? '<h1>loggedom</h1>' : '<li><a href="https://example.com/" class="aui-button aui-button-primary">Sign In</a></li><li><a href="https://example.com/" class="aui-button">Register</a></li>') + '</ul>'});
};
if (goog.DEBUG) {
  com.poovarasan.application.appHeader.soyTemplateName = 'com.poovarasan.application.appHeader';
}
