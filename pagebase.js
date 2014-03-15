$(document).ready(function() {
	if (!localStorage.pageBase) localStorage.pageBase = JSON.stringify([]);
	var cloned = $.parseJSON(localStorage.pageBase);
	$.each(cloned, function(i, url) {
		$('#urls').append('<a href="' + url + '">' + url + '</a>');
	})
	$('#foo').click(function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			var cloned = $.parseJSON(localStorage.pageBase);
			cloned.push(tabs[0].url);
			localStorage.pageBase = JSON.stringify(cloned);
			console.log(tabs[0].url);
		});
	})
});