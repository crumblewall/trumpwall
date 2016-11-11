$(document).ready(function() {
    $('.brick').mouseover(function() {
        $(this).css("background-color",randomColor);
		$(this).css("width",randomSize);
		/* $(this).css("height",randomSize); */
    });
});

var randomColor = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var randomSize = function getRandomSize() {
    var numbers = '3333456789';
	var placeholder = '';
    for (var i = 0; i < 2; i++ ) {
        placeholder += numbers[Math.floor(Math.random() * 10)];
    }
    return placeholder;
}
