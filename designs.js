// Select color input
// Select size input

let canvas,color,gridHeight,gridWidth;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
    makeGrid(gridHeight,gridWidth);
}); 

function makeGrid(height,width){
    canvas = $('#pixelCanvas');
    canvas.children().remove();
    for (let i = 1; i <= height; i++) {
        canvas.append('<tr id=row' + i + '></tr>');

        for (let j= 1; j <= width; j++) {
            $('#row' + i).append('<td></td>');  
        }    
    }

// color = $('#colorPicker');
$('td').click(function coloredCell(){
    color = $('#colorPicker').val();
    $(this).attr('bgcolor', color);
})


// Your code goes here!

};
