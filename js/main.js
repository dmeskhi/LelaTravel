//Navigation Code
jQuery(document).ready(function() {
jQuery('.toggle-nav').click(function(e) {
jQuery(this).toggleClass('active');
jQuery('.menu ul').toggleClass('active');
e.preventDefault();
});
});
//Tabs Code
jQuery(document).ready(function() {
jQuery('.tabs .tab-links a').on('click', function(e)  {
var currentAttrValue = jQuery(this).attr('href');
// Show/Hide Tabs
jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
// Change/remove current tab to active
jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
e.preventDefault();
});
});