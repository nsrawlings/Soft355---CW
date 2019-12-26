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

function onDrop (source, target, piece) 
{
	var moves = [];
	var leagl = false;
  	removeGreySquares()
  	console.log("Drop")

  	moves = chess.moves(source, piece, moves);

	for (var i = 0; i < moves.length; i++) 
	{
		if(moves[i] == target)
		{
			leagl = true;
		}
  	}

	if(leagl == false)
	{
		return 'snapback';
	}
}

function onMouseoverSquare (square, piece) {
	var moves = [];
	console.log("Mouse Over");
	postion = board.position();
	moves = chess.moves(square, piece, moves);

	// exit if there are no moves available for this square
  if (moves.length === 0) return

  // highlight the square they moused over
  greySquare(square)

  // highlight the possible squares for this piece
  for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i])
  }
}

function onMouseoutSquare (square, piece) {
  removeGreySquares()
  //console.log("Mouse out Sqaure")
}

function onSnapEnd () {
  //console.log("Snap End")
}

function createArrayBoard(fen, arrayBoard)
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
		showNotation: true,
		orientation: 'white',
		position: 'start',
		//onDragStart: onDragStart,
		onDrop: onDrop,
		onMouseoutSquare: onMouseoutSquare,
		onMouseoverSquare: onMouseoverSquare,
		onSnapEnd: onSnapEnd
	}
	
	console.log(chess.board);

	board = Chessboard('mainBoard', config)
	var fen = board.fen();
	
	chess.board = createArrayBoard(fen, chess.board);
	
	$(window).resize(board.resize)

	return board;
}


