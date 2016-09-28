$(document).ready(function() {
  var $submenu = $('.submenu');
  var $mainmenu = $('.mainmenu');
	var iframeBox=$('#iframeBox');
  $submenu.hide();
  $submenu.first().delay(50).slideDown(500);
  $submenu.on('click', 'li', function() {
    $submenu.siblings().find('li').removeClass('chosen');
    $(this).addClass('chosen');
  });
  $mainmenu.on('click', 'li', function() {
    $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
  });
  $mainmenu.children('li:last-child').on('click', function() {
    $mainmenu.fadeOut().delay(200).fadeIn();
  });
  $mainmenu.on('click', 'li', function() {
		if ($(this).children().text()=="用户信息") {
			iframeBox.attr("src","userInfo.html");
		}
		else if ($(this).children().text()=="角色信息") {
			iframeBox.attr("src","bxjc.html");
		}
		else if ($(this).children().text()=="系统权限") {
			iframeBox.attr("src","ssggnjk.html");
		}



  });



});
