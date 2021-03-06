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
  if(!playerTurn)
  {
	return false
  }
}

function clickSaveGameBtn()
{
	if(pastMoves.length != 0)
	{
		var team;
		var gameName = document.getElementById('gameNameSave').value;
		saveInProgress = true;
		if(playerTurn)
		{
			team = playerTeam;
		}
		else
		{
			if(playerTeam == 'W')
			{
				team = "B";
			}
			else
			{
				team = "W"
			}
		}
		var saveMoves = {name: gameName, fen:  pastMoves, team: team,}
		socket.emit('saveMoves', saveMoves)
	}
}

function clickLoadGameBtn()
{

	var gameName = document.getElementById('gameNameLoad').value;
	if(gameName != "")
	{
		loadInProgress = true;

		var loadMoves = {name: gameName}
		socket.emit('loadMoves', loadMoves)
	}
}

function clickConcedeBtn()
{
	if(playerTeam == "B")
	{
		var victory = { msg:  'whiteVictory' }
		socket.emit('victory', victory)
	}
	if(playerTeam == "W")
	{
		var victory = { msg:  'blackVictory' }
		socket.emit('victory', victory)
	}
}

function clickSetTeamBtn()
{
	if(!gameInProgress)
	{
		playerTeam = 'W';
		playerTurn = true;
		board.orientation('white');
		gameInProgress = true;
		var team = { msg:  playerTeam }
		socket.emit('setTeam', team);
	}
}

function loadGame(name, moves, turn)
{
	board.position(moves[moves.length - 1]);	
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
	var legal = false;
  	removeGreySquares()
  	console.log("Drop")

  	moves = chess.moves(source, piece, moves);
	for (var i = 0; i < moves.length; i++) 
	{
		if(moves[i] == target)
		{
			legal = true;
		}
  	}

	if(legal == false)
	{
		return 'snapback';
	}
	/*else
	{
		var check = chess.check(piece);
		if(check == 'Check')
		{
			document.getElementById("check").innerHTML = check;
		}
		if(check == 'Check Mate')
		{
			document.getElementById("check").innerHTML = check;
		}
		else
		{
			document.getElementById("check").innerHTML = check;
		}
		
	}*/
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
	var fen = board.fen();
	
	chess.board = createArrayBoard(fen, chess.board);

	pastMoves.push(fen);

	var kings = chess.checkForKings(fen);
	if(kings == "kingsPresent")
	{
		playerTurn = false;
		var move = { msg:  fen }
		socket.emit('move', move)
	}
	else{
		if(kings == "whiteKing")
		{
			var victory = { msg:  'whiteVictory' }
			socket.emit('victory', victory)
		}
		if(kings == "blackKing")
		{
			var victory = { msg:  'blackVictory' }
			socket.emit('victory', victory)
		}
	}
	
	
}

function recieveMove(fen)
{
	board.position(fen);
	pastMoves.push(fen)
	chess.board = createArrayBoard(fen, chess.board);
}

function createArrayBoard(fen, arrayBoard)
{
	var fenArray = fen.split('/');
	var count;
	var lineCount = 0;
	for(var i = 7; i >= 0; i--)
	{
		
		count = 0;
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
						arrayBoard[lineCount][count] = ('-')
						count++;
					}
				}
				else
				{
					arrayBoard[lineCount][count] = line[j];
					count++;
				}
			}
		}
		else
		{
			for	(var k = 0; k < 8; k++)
			{
				arrayBoard[lineCount][k] = '-';
			}
		}
		lineCount++;
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
		onDragStart: onDragStart,
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


