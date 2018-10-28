'use strict';

$(document).ready(function () {
	var arrPage = [
		{ label: 'Главная', value: 'index' },
		{ label: 'test', value: 'test' },

		{ label: 'Вверх', value: '#' }
	];
	var textColor = "white",
	    bgColor = "#343434";

	$('<ol id="pages2342"></ol>').appendTo('body').css({
		'position': 'fixed',
		'left': -210, 'top': '20%',
		'width': 220,
		'max-height': '60%',
		'overflow': 'auto',
		'margin': 0,
		'padding': '20px',
		'border': '1px solid '+textColor,
		'border-left': 0,
		'background': bgColor,
		'zIndex': 54512, 'fontSize': 14,
		'color': textColor,
		'fontFamily': 'Arial, sans-serif',
		'lineHeight': '20px',
		'opacity': '0.6',
		'box-sizing': 'border-box',
	});

	for (var i = 0; i < arrPage.length; i++) {
		$('#pages2342').append('<li><a ' + (arrPage[i].className? "class="+arrPage[i].className:'') + ' href="' + arrPage[i].value + '.html">' + arrPage[i].label + '</a></li>');
	}
	$('#pages2342 li').css({
		'fontSize': 12,
		'color': textColor
	});

	$('#pages2342 a').css({
		'display': 'inline-block',
		'width': '100%',
		'fontSize': 14,
		'color': textColor,
		'text-decoration': 'none'
	});

	$('#pages2342 li:last').prepend('^').append('^').css({
		'fontWeight': 'bold',
		'listStyle': 'none',
		'textAlign': 'center'
	})
	.find('a')
	.attr('href', '#')
	.css({
		'width': 'auto'
	});

	$('<li><b id="arrow">&raquo;</b></li>').appendTo('#pages2342').css({
		'position': 'absolute',
		'top': '50%', 'right': 2,
		'height': 12,
		'margin-top': -12,
		'listStyle': 'none'
	});

	$('#arrow').css({ 'fontSize': 12, 'color': textColor });
	$('#pages2342').hover(function () {
		$(this).css({ 'left': 0, 'opacity': '1' });
	}, function () {
		$(this).css({ 'left': -210, 'opacity': '0.6' });
	});
	$('#pages2342 a').hover(function () {
		$(this).css('color', 'orange');
	}, function () {
		$(this).css('color', textColor);
	});
});