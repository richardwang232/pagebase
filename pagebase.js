$(document).ready(function() {
	$('#foo').click(function() {
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			console.log(tabs[0].url);
		});
	})
});