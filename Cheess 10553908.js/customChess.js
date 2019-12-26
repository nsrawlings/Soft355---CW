window.onload = function() {
	console.log("Chess")
};

class ChessRules
{
	constructor(board)
	{
		this.board = board;
	}
	
	convertLetterToNumber(position)
	{
		var ps = position.split('');

		var charNum = ps[0].charCodeAt(0) - 97;

		var num = parseInt(ps[1]);

		var numPos = [charNum , num];

		return numPos
	}

	convertNumberToLetter(x, y)
	{

		var charNum = String.fromCharCode(97 + y);


		var charPos = charNum + x;

		return charPos
	}
	
	pawnMove(team, position, move)
	{
		
		var numPos = chess.convertLetterToNumber(position)

		if(team = 'w')
		{
			if(position == 'a2' || position == 'b2' || position == 'c2'|| position == 'd2' || position == 'e2' 
				|| position == 'f2' || position == 'g2' || position == 'h2')
			{
				if(this.board[numPos[1] + 2][numPos[0]] == '-')
				{
					console.log('Legal Move');
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0]));
				}
			}

			if(this.board[numPos[1] + 1][numPos[0]] == '-')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
			}

			if(this.board[numPos[1] + 1][numPos[0] + 1] == 'r' || this.board[numPos[1] + 1][numPos[0] + 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'q' || this.board[numPos[1] + 1][numPos[0] + 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'p' || this.board[numPos[1] + 1][numPos[0] + 1] == 'b')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 1));
			}

			if(this.board[numPos[1] + 1][numPos[0] - 1] == 'r' || this.board[numPos[1] + 1][numPos[0] - 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'q' || this.board[numPos[1] + 1][numPos[0] - 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'p' || this.board[numPos[1] + 1][numPos[0] - 1] == 'b')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] - 1));
			}

		}
		else
		{
			if(position == 'a7' || position == 'b7' || position == 'c7'|| position == 'd7' || position == 'e7' 
				|| position == 'f7' || position == 'g7' || position == 'h7')
			{
				if(this.board[numPos[1] - 2][numPos[0]] == '-')
				{
					console.log('Legal Move');
					move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
				}
			}

			if(this.board[numPos[1] + 1][numPos[0]] == '-')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
			}

			if(this.board[numPos[1] - 1][numPos[0] + 1] == 'R' || this.board[numPos[1] - 1][numPos[0] + 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] + 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'P' || this.board[numPos[1] - 1][numPos[0] + 1] == 'B')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 1));
			}

			if(this.board[numPos[1] - 1][numPos[0] - 1] == 'R' || this.board[numPos[1] - 1][numPos[0] - 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] - 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'P' || this.board[numPos[1] - 1][numPos[0] - 1] == 'B')
			{
				console.log('Legal Move');
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 1));
			}

		}

		return move;
	}
	
	moves(square, piece, move)
	{
		console.log("Moves")
		var ar = [];
		
		if(piece != false)
		{
			ar = piece.split('');
		
			var team = ar[0];
			
			var type = ar[1];
			
			if (type == 'P')
			{
				move = chess.pawnMove(team, square, move);
			}
		}

		return move;
	}
}

