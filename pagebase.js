$(document).ready(function() {
	var init = function() {
		$('#urls').empty();
		if (!localStorage.pageBase) localStorage.pageBase = JSON.stringify([]);
		var cloned = $.parseJSON(localStorage.pageBase);
		$.each(cloned, function(i, page) {
			$('#urls').append('<a href="' + page.url + '" target="_blank">' + page.title + '</a> <a href="#" class="delete-page" data-id="'+ i + '">x</a><br/>');
		});

	$('#foo').click(function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			var cloned = $.parseJSON(localStorage.pageBase);
			cloned.push({
				url: tabs[0].url,
				title: tabs[0].title
			});
			localStorage.pageBase = JSON.stringify(cloned);
			console.log(tabs[0].url);
			init();
		});
	});
	$('#urls .delete-page').click(function(event) {
		event.preventDefault();
		var page_id = $(event.target).data('id');
		var cloned = $.parseJSON(localStorage.pageBase);
		cloned.splice(page_id, 1);
		localStorage.pageBase = JSON.stringify(cloned);
		init();
	});
	};

	init();


});