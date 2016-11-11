

$(document).ready(function() {
    $('.black').mouseover(function() {
        $(this).css("background-color",test);
    });
	$('.black').mouseenter(function() {
		$(this).css("height","50px");
		$(this).css("width","50px");
		$(this).css("margin","0px");
		});
		$('.black').mouseleave(function() {
		$(this).css("height","25px");
		$(this).css("width","25px");
		$(this).css("margin","12.5px");
	});
});

var test = function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/* $(document).ready(function() {
    $('.black').mouseover(function() {
        $(this).css("background-color",randomColor);
		$(this).css("width",randomSize);
		$(this).css("height",randomSize);
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
    var numbers = '4567894567';
	var placeholder = '';
    for (var i = 0; i < 2; i++ ) {
        placeholder += numbers[Math.floor(Math.random() * 10)];
    }
    return placeholder;
}

*/
