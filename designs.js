// Select color input
// Select size input
var height, width, color;



// Your code goes here!


$('#sizePicker').submit(function(events){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
	console.log('height: ' + height + 'and width: ' + width);
})

function makeGrid(x, y) {
	$('tr').remove();

for (var i = 1; i <= x; i++) {
	$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
	for (var j = 1; j <=y; j++) {
		$('#table' + i).append('<td></td>');
	}
}



$('td').click(function addColor() {
	color = $('#colorPicker').val();

	if ($(this).attr('style')) {
		$(this).removeAttr('style')
	} else {
		$(this).attr('style', 'background-color:' + color);
	}
})

}