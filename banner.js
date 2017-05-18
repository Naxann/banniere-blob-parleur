$(".mainmenu").each(function(id, item) {
	var href = $(item).attr("href");
	var cssclass = href;
	if (href == "/") {
		cssclass = "home";
	} else {
		cssclass = href.substr(1);
		if (cssclass.indexOf("?") > 0) {
			cssclass = cssclass.substr(0, cssclass.indexOf("?"));
		}
		if (cssclass == "privmsg") {
			if ($(item).find("#i_icon_mini_new_message").length) {
				cssclass += " newmessage";
			}
		}
	}
	$(item).addClass(cssclass);
});
