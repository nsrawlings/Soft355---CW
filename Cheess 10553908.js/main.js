window.onload = function() {
	console.log("Main")
};

// only allow pieces to be dragged when the board is oriented
// in their direction
function onDragStart (source, piece, position, orientation) {
  if ((orientation === 'white' && piece.search(/^w/) === -1) ||
      (orientation === 'black' && piece.search(/^b/) === -1)) {
    return false
  }
}

function clickShowPositionBtn () {
  console.log('Current position as an Object:')
  console.log(board.position())

  console.log('Current position as a FEN string:')
  console.log(board.fen())
}

function removeGreySquares () {
  $('#myBoard .square-55d63').css('background', '')
  //console.log("Remove Grey Squares")
}

function greySquare (square) {
  var $square = $('#myBoard .square-' + square)

  var background = whiteSquareGrey
  if ($square.hasClass('black-3c85d')) {
    background = blackSquareGrey
  }

  $square.css('background', background)
}

function onDrop (source, target) {
  removeGreySquares()
  console.log("Drop")
}

function onMouseoverSquare (square, piece) {
	console.log("Mouse Over");
	postion = board.position();
	chess.moves(square, piece);
}

function onMouseoutSquare (square, piece) {
  removeGreySquares()
  //console.log("Mouse out Sqaure")
}

function onSnapEnd () {
  //console.log("Snap End")
}

function createArratBoard(fen, arrayBoard)
{
	fenArray = fen.split('/');

	for(var i = 0; i < 8; i++)
	{
		var line = fenArray[i].split('');
		
		if(line[0] != '8')
		{
			for(var j = 0; j < line.length; j++)
			{
				if(line[j] == '1' || line[j] == '2' || line[j] == '3' || line[j] == '4' || line[j] == '5'
				|| line[j] == '6' || line[j] == '7')
				{
					for	(var k = 0; k < line[j]; k++)
					{
						arrayBoard[i][j] = ('-')
					}
				}
				else
				{
					arrayBoard[i][j] = line[j];
				}
			}
		}
		else
		{
			for	(var k = 0; k < 8; k++)
			{
				arrayBoard[i][k] = '-';
			}
		}
	}
	
	return arrayBoard;
}

function setBoardStart()
{	
	var config = 
	{
		draggable: true,
		showNotation: false,
		orientation: 'white',
		position: 'start',
		onDragStart: onDragStart,
		onDrop: onDrop,
		onMouseoutSquare: onMouseoutSquare,
		onMouseoverSquare: onMouseoverSquare,
		onSnapEnd: onSnapEnd
	}
	
	board = Chessboard('mainBoard', config)
	var fen = board.fen();
	
	chess.board = createArratBoard(chess.board);
	
	$(window).resize(board.resize)

	return board;
}


