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

		var num = parseInt(ps[1]) - 1;

		var numPos = [charNum , num];

		return numPos
	}

	convertNumberToLetter(x, y)
	{

		var charNum = String.fromCharCode(97 + y);


		var charPos = charNum + (x + 1);

		return charPos
	}
	
	pawnMove(team, position, move)
	{
		
		var numPos = chess.convertLetterToNumber(position)

		if(team == 'w')
		{
			if(position == 'a2' || position == 'b2' || position == 'c2'|| position == 'd2' || position == 'e2' 
				|| position == 'f2' || position == 'g2' || position == 'h2')
			{
				if(this.board[numPos[1] + 2][numPos[0]] == '-')
				{
					console.log(this.board[numPos[1] + 2][numPos[0]]);
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0]));
				}
			}

			if(this.board[numPos[1] + 1][numPos[0]] == '-')
			{
				console.log(this.board[numPos[1] + 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
			}

			if(this.board[numPos[1] + 1][numPos[0] + 1] == 'r' || this.board[numPos[1] + 1][numPos[0] + 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'q' || this.board[numPos[1] + 1][numPos[0] + 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'p' || this.board[numPos[1] + 1][numPos[0] + 1] == 'b')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 1));
			}

			if(this.board[numPos[1] + 1][numPos[0] - 1] == 'r' || this.board[numPos[1] + 1][numPos[0] - 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'q' || this.board[numPos[1] + 1][numPos[0] - 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'p' || this.board[numPos[1] + 1][numPos[0] - 1] == 'b')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] - 1]);
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
					console.log(this.board[numPos[1] - 2][numPos[0]]);
					move.push(chess.convertNumberToLetter(numPos[1] - 2, numPos[0]));
				}
			}

			if(this.board[numPos[1] - 1][numPos[0]] == '-')
			{
				console.log(this.board[numPos[1] - 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0]));
			}

			if(this.board[numPos[1] - 1][numPos[0] + 1] == 'R' || this.board[numPos[1] - 1][numPos[0] + 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] + 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'P' || this.board[numPos[1] - 1][numPos[0] + 1] == 'B')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 1));
			}

			if(this.board[numPos[1] - 1][numPos[0] - 1] == 'R' || this.board[numPos[1] - 1][numPos[0] - 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] - 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'P' || this.board[numPos[1] - 1][numPos[0] - 1] == 'B')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 1));
			}

		}

		return move;
	}

	knightMove(team, position, move)
	{
		var numPos = chess.convertLetterToNumber(position)
		if(team == 'w')
		{
			if(numPos[1] + 2 < 8 && numPos[0] - 1 >= 0 )
			{
				if(this.board[numPos[1] + 2][numPos[0] - 1] == '-' || this.board[numPos[1] + 2][numPos[0] - 1] == 'r' || this.board[numPos[1] + 2][numPos[0] - 1] == 'n'
				|| this.board[numPos[1] + 2][numPos[0] - 1] == 'q' || this.board[numPos[1] + 2][numPos[0] - 1] == 'k'
				|| this.board[numPos[1] + 2][numPos[0] - 1] == 'p' || this.board[numPos[1] + 2][numPos[0] - 1] == 'b')
				{
					console.log(this.board[numPos[1] + 2][numPos[0] - 1]);
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0] - 1));
				}
			}
			if(numPos[1] + 2 < 8 && numPos[0] + 1 < 8 )
			{
				if(this.board[numPos[1] + 2][numPos[0] + 1] == '-' || this.board[numPos[1] + 2][numPos[0] + 1] == 'r' || this.board[numPos[1] + 2][numPos[0] + 1] == 'n'
				|| this.board[numPos[1] + 2][numPos[0] + 1] == 'q' || this.board[numPos[1] + 2][numPos[0] + 1] == 'k'
				|| this.board[numPos[1] + 2][numPos[0] + 1] == 'p' || this.board[numPos[1] + 2][numPos[0] + 1] == 'b')
				{
					console.log(this.board[numPos[1] + 2][numPos[0] + 1]);
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0] + 1));
				}
			}

			if(numPos[1] - 2 >= 0 && numPos[0] - 1 >= 0 )
			{
				if(this.board[numPos[1] - 2][numPos[0] - 1] == '-' || this.board[numPos[1] - 2][numPos[0] - 1] == 'r' || this.board[numPos[1] - 2][numPos[0] - 1] == 'n'
				|| this.board[numPos[1] - 2][numPos[0] - 1] == 'q' || this.board[numPos[1] - 2][numPos[0] - 1] == 'k'
				|| this.board[numPos[1] - 2][numPos[0] - 1] == 'p' || this.board[numPos[1] - 2][numPos[0] - 1] == 'b')
				{
					console.log(this.board[numPos[1] - 2][numPos[0] - 1]);
					move.push(chess.convertNumberToLetter(numPos[1] - 2, numPos[0] - 1));
				}
			}
			
			if(numPos[1] - 2 >= 0 && numPos[0] + 1 < 8 )
			{
				if(this.board[numPos[1] - 2][numPos[0] + 1] == '-' || this.board[numPos[1] - 2][numPos[0] + 1] == 'r' || this.board[numPos[1] - 2][numPos[0] + 1] == 'n'
				|| this.board[numPos[1] - 2][numPos[0] + 1] == 'q' || this.board[numPos[1] - 2][numPos[0] + 1] == 'k'
				|| this.board[numPos[1] - 2][numPos[0] + 1] == 'p' || this.board[numPos[1] - 2][numPos[0] + 1] == 'b')
				{
					console.log(this.board[numPos[1] - 2][numPos[0] + 1]);
					move.push(chess.convertNumberToLetter(numPos[1] - 2, numPos[0] + 1));
				}
			}
			
			if(numPos[1] + 1 < 8 && numPos[0] - 2 >= 0 )
			{
				if(this.board[numPos[1] + 1][numPos[0] - 2] == '-' || this.board[numPos[1] + 1][numPos[0] - 2] == 'r' || this.board[numPos[1] + 1][numPos[0] - 2] == 'n'
				|| this.board[numPos[1] + 1][numPos[0] - 2] == 'q' || this.board[numPos[1] + 1][numPos[0] - 2] == 'k'
				|| this.board[numPos[1] + 1][numPos[0] - 2] == 'p' || this.board[numPos[1] + 1][numPos[0] - 2] == 'b')
				{
					console.log(this.board[numPos[1] + 1][numPos[0] - 2]);
					move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] - 2));
				}
			}
			
			if(numPos[1] + 1 < 8 && numPos[0] + 2 < 8 )
			{
				if(this.board[numPos[1] + 1][numPos[0] + 2] == '-' || this.board[numPos[1] + 1][numPos[0] + 2] == 'r' || this.board[numPos[1] + 1][numPos[0] + 2] == 'n'
				|| this.board[numPos[1] + 1][numPos[0] + 2] == 'q' || this.board[numPos[1] + 1][numPos[0] + 2] == 'k'
				|| this.board[numPos[1] + 1][numPos[0] + 2] == 'p' || this.board[numPos[1] + 1][numPos[0] + 2] == 'b')
				{
					console.log(this.board[numPos[1] + 1][numPos[0] + 2]);
					move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 2));
				}
			}
			
			if(numPos[1] - 1 >= 0 && numPos[0] + 2 < 8 )
			{
				if(this.board[numPos[1] - 1][numPos[0] + 2] == '-' || this.board[numPos[1] - 1][numPos[0] + 2] == 'r' || this.board[numPos[1] - 1][numPos[0] + 2] == 'n'
				|| this.board[numPos[1] - 1][numPos[0] + 2] == 'q' || this.board[numPos[1] - 1][numPos[0] + 2] == 'k'
				|| this.board[numPos[1] - 1][numPos[0] + 2] == 'p' || this.board[numPos[1] - 1][numPos[0] + 2] == 'b')
				{
					console.log(this.board[numPos[1] - 1][numPos[0] + 2]);
					move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 2));
				}
			}
			
			if(numPos[1] - 1 >= 0 && numPos[0] - 2 >= 0 )
			{
				if(this.board[numPos[1] - 1][numPos[0] - 2] == '-' || this.board[numPos[1] - 1][numPos[0] - 2] == 'r' || this.board[numPos[1] - 1][numPos[0] - 2] == 'n'
				|| this.board[numPos[1] - 1][numPos[0] - 2] == 'q' || this.board[numPos[1] - 1][numPos[0] - 2] == 'k'
				|| this.board[numPos[1] - 1][numPos[0] - 2] == 'p' || this.board[numPos[1] - 1][numPos[0] - 2] == 'b')
				{
					console.log(this.board[numPos[1] - 1][numPos[0] - 2]);
					move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 2));
				}
			}
		}

		else
		{
			if(numPos[1] + 2 < 8 && numPos[0] - 1 >= 0 )
			{
				if(this.board[numPos[1] + 2][numPos[0] - 1] == '-' || this.board[numPos[1] + 2][numPos[0] - 1] == 'R' || this.board[numPos[1] + 2][numPos[0] - 1] == 'N'
				|| this.board[numPos[1] + 2][numPos[0] - 1] == 'Q' || this.board[numPos[1] + 2][numPos[0] - 1] == 'K'
				|| this.board[numPos[1] + 2][numPos[0] - 1] == 'P' || this.board[numPos[1] + 2][numPos[0] - 1] == 'B')
				{
					console.log(this.board[numPos[1] + 2][numPos[0] - 1]);
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0] - 1));
				}
			}
			if(numPos[1] + 2 < 8 && numPos[0] + 1 < 8 )
			{
				if(this.board[numPos[1] + 2][numPos[0] + 1] == '-' || this.board[numPos[1] + 2][numPos[0] + 1] == 'R' || this.board[numPos[1] + 2][numPos[0] + 1] == 'N'
				|| this.board[numPos[1] + 2][numPos[0] + 1] == 'Q' || this.board[numPos[1] + 2][numPos[0] + 1] == 'K'
				|| this.board[numPos[1] + 2][numPos[0] + 1] == 'P' || this.board[numPos[1] + 2][numPos[0] + 1] == 'B')
				{
					console.log(this.board[numPos[1] + 2][numPos[0] + 1]);
					move.push(chess.convertNumberToLetter(numPos[1] + 2, numPos[0] + 1));
				}
			}

			if(numPos[1] - 2 >= 0 && numPos[0] - 1 >= 0 )
			{
				if(this.board[numPos[1] - 2][numPos[0] - 1] == '-' || this.board[numPos[1] - 2][numPos[0] - 1] == 'R' || this.board[numPos[1] - 2][numPos[0] - 1] == 'N'
				|| this.board[numPos[1] - 2][numPos[0] - 1] == 'Q' || this.board[numPos[1] - 2][numPos[0] - 1] == 'K'
				|| this.board[numPos[1] - 2][numPos[0] - 1] == 'P' || this.board[numPos[1] - 2][numPos[0] - 1] == 'B')
				{
					console.log(this.board[numPos[1] - 2][numPos[0] - 1]);
					move.push(chess.convertNumberToLetter(numPos[1] - 2, numPos[0] - 1));
				}
			}
			
			if(numPos[1] - 2 >= 0 && numPos[0] + 1 < 8 )
			{
				if(this.board[numPos[1] - 2][numPos[0] + 1] == '-' || this.board[numPos[1] - 2][numPos[0] + 1] == 'R' || this.board[numPos[1] - 2][numPos[0] + 1] == 'N'
				|| this.board[numPos[1] - 2][numPos[0] + 1] == 'Q' || this.board[numPos[1] - 2][numPos[0] + 1] == 'K'
				|| this.board[numPos[1] - 2][numPos[0] + 1] == 'P' || this.board[numPos[1] - 2][numPos[0] + 1] == 'B')
				{
					console.log(this.board[numPos[1] - 2][numPos[0] + 1]);
					move.push(chess.convertNumberToLetter(numPos[1] - 2, numPos[0] + 1));
				}
			}
			
			if(numPos[1] + 1 < 8 && numPos[0] - 2 >= 0 )
			{
				if(this.board[numPos[1] + 1][numPos[0] - 2] == '-' || this.board[numPos[1] + 1][numPos[0] - 2] == 'R' || this.board[numPos[1] + 1][numPos[0] - 2] == 'N'
				|| this.board[numPos[1] + 1][numPos[0] - 2] == 'Q' || this.board[numPos[1] + 1][numPos[0] - 2] == 'K'
				|| this.board[numPos[1] + 1][numPos[0] - 2] == 'P' || this.board[numPos[1] + 1][numPos[0] - 2] == 'B')
				{
					console.log(this.board[numPos[1] + 1][numPos[0] - 2]);
					move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] - 2));
				}
			}
			
			if(numPos[1] + 1 < 8 && numPos[0] + 2 < 8 )
			{
				if(this.board[numPos[1] + 1][numPos[0] + 2] == '-' || this.board[numPos[1] + 1][numPos[0] + 2] == 'R' || this.board[numPos[1] + 1][numPos[0] + 2] == 'N'
				|| this.board[numPos[1] + 1][numPos[0] + 2] == 'Q' || this.board[numPos[1] + 1][numPos[0] + 2] == 'K'
				|| this.board[numPos[1] + 1][numPos[0] + 2] == 'P' || this.board[numPos[1] + 1][numPos[0] + 2] == 'B')
				{
					console.log(this.board[numPos[1] + 1][numPos[0] + 2]);
					move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 2));
				}
			}
			
			if(numPos[1] - 1 >= 0 && numPos[0] + 2 < 8 )
			{
				if(this.board[numPos[1] - 1][numPos[0] + 2] == '-' || this.board[numPos[1] - 1][numPos[0] + 2] == 'R' || this.board[numPos[1] - 1][numPos[0] + 2] == 'N'
				|| this.board[numPos[1] - 1][numPos[0] + 2] == 'Q' || this.board[numPos[1] - 1][numPos[0] + 2] == 'K'
				|| this.board[numPos[1] - 1][numPos[0] + 2] == 'P' || this.board[numPos[1] - 1][numPos[0] + 2] == 'B')
				{
					console.log(this.board[numPos[1] - 1][numPos[0] + 2]);
					move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 2));
				}
			}
			
			if(numPos[1] - 1 >= 0 && numPos[0] - 2 >= 0 )
			{
				if(this.board[numPos[1] - 1][numPos[0] - 2] == '-' || this.board[numPos[1] - 1][numPos[0] - 2] == 'R' || this.board[numPos[1] - 1][numPos[0] - 2] == 'N'
				|| this.board[numPos[1] - 1][numPos[0] - 2] == 'Q' || this.board[numPos[1] - 1][numPos[0] - 2] == 'K'
				|| this.board[numPos[1] - 1][numPos[0] - 2] == 'P' || this.board[numPos[1] - 1][numPos[0] - 2] == 'B')
				{
					console.log(this.board[numPos[1] - 1][numPos[0] - 2]);
					move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 2));
				}
			}
		}

		return move;
	}

	rookMove(team, position, move)
	{
		var numPos = chess.convertLetterToNumber(position)

		var blockedNorth = 0;
		var blockedEast = 0;
		var blockedSouth = 0;
		var blockedWest = 0;

		if(team == 'w')
		{
			for(var i = 1; i < 8; i++)
			{
				if(numPos[1] + i < 8)
				{
					if(this.board[numPos[1] + i][numPos[0]] != "R" && this.board[numPos[1] + i][numPos[0]] != "N"
					&& this.board[numPos[1] + i][numPos[0]] != "Q" && this.board[numPos[1] + i][numPos[0]] != "K"
					&& this.board[numPos[1] + i][numPos[0]] != "P" && this.board[numPos[1] + i][numPos[0]] != "B"
					&& blockedNorth != 1)
					{
						if(this.board[numPos[1] + i][numPos[0]] == '-' )
						{
							console.log(this.board[numPos[1] + i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0]));
						}
						if(this.board[numPos[1] + i][numPos[0]] == 'r' || this.board[numPos[1] + i][numPos[0]] == 'n'
						|| this.board[numPos[1] + i][numPos[0]] == 'q' || this.board[numPos[1] + i][numPos[0]] == 'k'
						|| this.board[numPos[1] + i][numPos[0]] == 'p' || this.board[numPos[1] + i][numPos[0]] == 'b'
						&& blockedNorth != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0]));
							blockedNorth = 1;
						}
					}
					else
					{
						blockedNorth = 1;
					}
				}

				if(numPos[1] - i >= 0)
				{
					if(this.board[numPos[1] - i][numPos[0]] != "R" && this.board[numPos[1] - i][numPos[0]] != "N"
					&& this.board[numPos[1] - i][numPos[0]] != "Q" && this.board[numPos[1] - i][numPos[0]] != "K"
					&& this.board[numPos[1] - i][numPos[0]] != "P" && this.board[numPos[1] - i][numPos[0]] != "B"
					&& blockedSouth != 1)
					{
						if(this.board[numPos[1] - i][numPos[0]] == '-')
						{
							console.log(this.board[numPos[1] - i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0]));
						}
						if(this.board[numPos[1] - i][numPos[0]] == 'r' || this.board[numPos[1] - i][numPos[0]] == 'n'
						|| this.board[numPos[1] - i][numPos[0]] == 'q' || this.board[numPos[1] - i][numPos[0]] == 'k'
						|| this.board[numPos[1] - i][numPos[0]] == 'p' || this.board[numPos[1] - i][numPos[0]] == 'b'
						&& blockedSouth != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0]));
							blockedSouth = 1;
						}
					}
					else
					{
						blockedSouth = 1;
					}			
				}

				if(numPos[0] + i < 8)
				{
					if(this.board[numPos[1]][numPos[0] + i] != "R" && this.board[numPos[1]][numPos[0] + i] != "N"
					&& this.board[numPos[1]][numPos[0] + i] != "Q" && this.board[numPos[1]][numPos[0] + i] != "K"
					&& this.board[numPos[1]][numPos[0] + i] != "P" && this.board[numPos[1]][numPos[0] + i] != "B"
					&& blockedEast != 1)
					{
						if(this.board[numPos[1]][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1]][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + i));
						}
						if(this.board[numPos[1]][numPos[0] + i] == 'r' || this.board[numPos[1]][numPos[0] + i] == 'n'
						|| this.board[numPos[1]][numPos[0] + i] == 'q' || this.board[numPos[1]][numPos[0] + i] == 'k'
						|| this.board[numPos[1]][numPos[0] + i] == 'p' || this.board[numPos[1]][numPos[0] + i] == 'b'
						&& blockedEast != 1)
						{
							console.log(this.board[numPos[1]][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + i));
							blockedEast = 1;
						}						
					}
					else
					{
						blockedEast = 1;
					}
				}

				if(numPos[0] - i >= 0)
				{
					if(this.board[numPos[1]][numPos[0] - i] != "R" && this.board[numPos[1]][numPos[0] - i] != "N"
					&& this.board[numPos[1]][numPos[0] - i] != "Q" && this.board[numPos[1]][numPos[0] - i] != "K"
					&& this.board[numPos[1]][numPos[0] - i] != "P" && this.board[numPos[1]][numPos[0] - i] != "B"
					&& blockedWest != 1)
					{
						if(this.board[numPos[1]][numPos[0] - i] == '-')
						{
							console.log(this.board[numPos[1]][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - i));
						}
						if(this.board[numPos[1]][numPos[0] - i] == 'r' || this.board[numPos[1]][numPos[0] - i] == 'n'
						|| this.board[numPos[1]][numPos[0] - i] == 'q' || this.board[numPos[1]][numPos[0] - i] == 'k'
						|| this.board[numPos[1]][numPos[0] - i] == 'p' || this.board[numPos[1]][numPos[0] - i] == 'b'
						&& blockedWest != 1)
						{
							console.log(this.board[numPos[1]][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - i));
							blockedWest = 1;
						}
					}
					else
					{
						blockedWest = 1;
					}
				}
			}
		}

		else
		{
			for(var i = 1; i < 8; i++)
			{
				if(numPos[1] + i < 8)
				{
					if(this.board[numPos[1] + i][numPos[0]] != "r" && this.board[numPos[1] + i][numPos[0]] != "n"
					&& this.board[numPos[1] + i][numPos[0]] != "q" && this.board[numPos[1] + i][numPos[0]] != "k"
					&& this.board[numPos[1] + i][numPos[0]] != "p" && this.board[numPos[1] + i][numPos[0]] != "b"
					&& blockedNorth != 1)
					{
						if(this.board[numPos[1] + i][numPos[0]] == '-' )
						{
							console.log(this.board[numPos[1] + i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0]));
						}
						if(this.board[numPos[1] + i][numPos[0]] == 'R' || this.board[numPos[1] + i][numPos[0]] == 'N'
						|| this.board[numPos[1] + i][numPos[0]] == 'Q' || this.board[numPos[1] + i][numPos[0]] == 'K'
						|| this.board[numPos[1] + i][numPos[0]] == 'P' || this.board[numPos[1] + i][numPos[0]] == 'B'
						&& blockedNorth != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0]));
							blockedNorth = 1;
						}
					}
					else
					{
						blockedNorth = 1;
					}
				}

				if(numPos[1] - i >= 0)
				{
					if(this.board[numPos[1] - i][numPos[0]] != "r" && this.board[numPos[1] - i][numPos[0]] != "n"
					&& this.board[numPos[1] - i][numPos[0]] != "q" && this.board[numPos[1] - i][numPos[0]] != "k"
					&& this.board[numPos[1] - i][numPos[0]] != "p" && this.board[numPos[1] - i][numPos[0]] != "b"
					&& blockedSouth != 1)
					{
						if(this.board[numPos[1] - i][numPos[0]] == '-')
						{
							console.log(this.board[numPos[1] - i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0]));
						}
						if(this.board[numPos[1] - i][numPos[0]] == 'R' || this.board[numPos[1] - i][numPos[0]] == 'N'
						|| this.board[numPos[1] - i][numPos[0]] == 'Q' || this.board[numPos[1] - i][numPos[0]] == 'K'
						|| this.board[numPos[1] - i][numPos[0]] == 'P' || this.board[numPos[1] - i][numPos[0]] == 'B'
						&& blockedSouth != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0]]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0]));
							blockedSouth = 1;
						}
					}
					else
					{
						blockedSouth = 1;
					}			
				}

				if(numPos[0] + i < 8)
				{
					if(this.board[numPos[1]][numPos[0] + i] != "r" && this.board[numPos[1]][numPos[0] + i] != "n"
					&& this.board[numPos[1]][numPos[0] + i] != "q" && this.board[numPos[1]][numPos[0] + i] != "k"
					&& this.board[numPos[1]][numPos[0] + i] != "p" && this.board[numPos[1]][numPos[0] + i] != "b"
					&& blockedEast != 1)
					{
						if(this.board[numPos[1]][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1]][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + i));
						}
						if(this.board[numPos[1]][numPos[0] + i] == 'R' || this.board[numPos[1]][numPos[0] + i] == 'N'
						|| this.board[numPos[1]][numPos[0] + i] == 'Q' || this.board[numPos[1]][numPos[0] + i] == 'K'
						|| this.board[numPos[1]][numPos[0] + i] == 'P' || this.board[numPos[1]][numPos[0] + i] == 'B'
						&& blockedEast != 1)
						{
							console.log(this.board[numPos[1]][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + i));
							blockedEast = 1;
						}						
					}
					else
					{
						blockedEast = 1;
					}
				}

				if(numPos[0] - i >= 0)
				{
					if(this.board[numPos[1]][numPos[0] - i] != "r" && this.board[numPos[1]][numPos[0] - i] != "n"
					&& this.board[numPos[1]][numPos[0] - i] != "q" && this.board[numPos[1]][numPos[0] - i] != "k"
					&& this.board[numPos[1]][numPos[0] - i] != "p" && this.board[numPos[1]][numPos[0] - i] != "b"
					&& blockedWest != 1)
					{
						if(this.board[numPos[1]][numPos[0] - i] == '-')
						{
							console.log(this.board[numPos[1]][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - i));
						}
						if(this.board[numPos[1]][numPos[0] - i] == 'R' || this.board[numPos[1]][numPos[0] - i] == 'N'
						|| this.board[numPos[1]][numPos[0] - i] == 'Q' || this.board[numPos[1]][numPos[0] - i] == 'K'
						|| this.board[numPos[1]][numPos[0] - i] == 'P' || this.board[numPos[1]][numPos[0] - i] == 'B'
						&& blockedWest != 1)
						{
							console.log(this.board[numPos[1]][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - i));
							blockedWest = 1;
						}
					}
					else
					{
						blockedWest = 1;
					}
				}
			}
		}
		return move;
	}

	bishopMove(team, position, move)
	{
		var numPos = chess.convertLetterToNumber(position)

		var blockedNorthEast = 0;
		var blockedNorthWest = 0;
		var blockedSouthEast = 0;
		var blockedSouthWest = 0;

		if(team == 'w')
		{
			for(var i = 1; i < 8; i++)
			{
				if(numPos[1] + i < 8 && numPos[0] + i < 8)
				{
					if(this.board[numPos[1] + i][numPos[0] + i] != "R" && this.board[numPos[1] + i][numPos[0] + i] != "N"
					&& this.board[numPos[1] + i][numPos[0] + i] != "Q" && this.board[numPos[1] + i][numPos[0] + i] != "K"
					&& this.board[numPos[1] + i][numPos[0] + i] != "P" && this.board[numPos[1] + i][numPos[0] + i] != "B"
					&& blockedNorthEast != 1)
					{
						if(this.board[numPos[1] + i][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1] + i][numPos[0] + i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] + i));
						}
						if(this.board[numPos[1] + i][numPos[0] + i] == 'r' || this.board[numPos[1] + i][numPos[0] + i] == 'n'
						|| this.board[numPos[1] + i][numPos[0] + i] == 'q' || this.board[numPos[1] + i][numPos[0] + i] == 'k'
						|| this.board[numPos[1] + i][numPos[0] + i] == 'p' || this.board[numPos[1] + i][numPos[0] + i] == 'b'
						&& blockedNorthEast != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0] + i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] + i));
							blockedNorthEast = 1;
						}
					}
					else
					{
						blockedNorthEast = 1;
					}
				}

				if(numPos[1] - i >= 0 && numPos[0] - i >= 0)
				{
					if(this.board[numPos[1] - i][numPos[0] - i] != "R" && this.board[numPos[1] - i][numPos[0] - i] != "N"
					&& this.board[numPos[1] - i][numPos[0] - i] != "Q" && this.board[numPos[1] - i][numPos[0] - i] != "K"
					&& this.board[numPos[1] - i][numPos[0] - i] != "P" && this.board[numPos[1] - i][numPos[0] - i] != "B"
					&& blockedSouthWest != 1)
					{
						if(this.board[numPos[1] - i][numPos[0]] == '-')
						{
							console.log(this.board[numPos[1] - i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] - i));
						}
						if(this.board[numPos[1] - i][numPos[0] - i] == 'r' || this.board[numPos[1] - i][numPos[0] - i] == 'n'
						|| this.board[numPos[1] - i][numPos[0] - i] == 'q' || this.board[numPos[1] - i][numPos[0] - i] == 'k'
						|| this.board[numPos[1] - i][numPos[0] - i] == 'p' || this.board[numPos[1] - i][numPos[0] - i] == 'b'
						&& blockedSouthWest != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] - i));
							blockedSouthWest = 1;
						}
					}
					else
					{
						blockedSouthWest = 1;
					}			
				}

				if(numPos[1] - i >= 0 && numPos[0] + i < 8)
				{
					if(this.board[numPos[1] - i][numPos[0] + i] != "R" && this.board[numPos[1] - i][numPos[0] + i] != "N"
					&& this.board[numPos[1] - i][numPos[0] + i] != "Q" && this.board[numPos[1] - i][numPos[0] + i] != "K"
					&& this.board[numPos[1] - i][numPos[0] + i] != "P" && this.board[numPos[1] - i][numPos[0] + i] != "B"
					&& blockedSouthEast != 1)
					{
						if(this.board[numPos[1] - i][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1] - i][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] + i));
						}
						if(this.board[numPos[1] - i][numPos[0] + i] == 'r' || this.board[numPos[1] - i][numPos[0] + i] == 'n'
						|| this.board[numPos[1] - i][numPos[0] + i] == 'q' || this.board[numPos[1] - i][numPos[0] + i] == 'k'
						|| this.board[numPos[1] - i][numPos[0] + i] == 'p' || this.board[numPos[1] - i][numPos[0] + i] == 'b'
						&& blockedSouthEast != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] + i));
							blockedSouthEast = 1;
						}						
					}
					else
					{
						blockedSouthEast = 1;
					}
				}

				if(numPos[1] + i < 8 && numPos[0] - i >= 0)
				{
					if(this.board[numPos[1] + i][numPos[0] - i] != "R" && this.board[numPos[1] + i][numPos[0] - i] != "N"
					&& this.board[numPos[1] + i][numPos[0] - i] != "Q" && this.board[numPos[1] + i][numPos[0] - i] != "K"
					&& this.board[numPos[1] + i][numPos[0] - i] != "P" && this.board[numPos[1] + i][numPos[0] - i] != "B"
					&& blockedNorthWest != 1)
					{
						if(this.board[numPos[1] + i][numPos[0] - i] == '-')
						{
							console.log(this.board[numPos[1] + i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] - i));
						}
						if(this.board[numPos[1] + i][numPos[0] - i] == 'r' || this.board[numPos[1] + i][numPos[0] - i] == 'n'
						|| this.board[numPos[1] + i][numPos[0] - i] == 'q' || this.board[numPos[1] + i][numPos[0] - i] == 'k'
						|| this.board[numPos[1] + i][numPos[0] - i] == 'p' || this.board[numPos[1] + i][numPos[0] - i] == 'b'
						&& blockedNorthWest != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] - i));
							blockedNorthWest = 1;
						}
					}
					else
					{
						blockedNorthWest = 1;
					}
				}
			}
		}

		else
		{
			for(var i = 1; i < 8; i++)
			{
				if(numPos[1] + i < 8 && numPos[0] + i < 8)
				{
					if(this.board[numPos[1] + i][numPos[0] + i] != "r" && this.board[numPos[1] + i][numPos[0] + i] != "n"
					&& this.board[numPos[1] + i][numPos[0] + i] != "q" && this.board[numPos[1] + i][numPos[0] + i] != "k"
					&& this.board[numPos[1] + i][numPos[0] + i] != "p" && this.board[numPos[1] + i][numPos[0] + i] != "b"
					&& blockedNorthEast != 1)
					{
						if(this.board[numPos[1] + i][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1] + i][numPos[0] + i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] + i));
						}
						if(this.board[numPos[1] + i][numPos[0] + i] == 'R' || this.board[numPos[1] + i][numPos[0] + i] == 'N'
						|| this.board[numPos[1] + i][numPos[0] + i] == 'Q' || this.board[numPos[1] + i][numPos[0] + i] == 'K'
						|| this.board[numPos[1] + i][numPos[0] + i] == 'P' || this.board[numPos[1] + i][numPos[0] + i] == 'B'
						&& blockedNorthEast != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0] + i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] + i));
							blockedNorthEast = 1;
						}
					}
					else
					{
						blockedNorthEast = 1;
					}
				}

				if(numPos[1] - i >= 0 && numPos[0] - i >= 0)
				{
					if(this.board[numPos[1] - i][numPos[0] - i] != "r" && this.board[numPos[1] - i][numPos[0] - i] != "n"
					&& this.board[numPos[1] - i][numPos[0] - i] != "q" && this.board[numPos[1] - i][numPos[0] - i] != "k"
					&& this.board[numPos[1] - i][numPos[0] - i] != "p" && this.board[numPos[1] - i][numPos[0] - i] != "b"
					&& blockedSouthWest != 1)
					{
						if(this.board[numPos[1] - i][numPos[0] - i] == '-')
						{
							console.log(this.board[numPos[1] - i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] - i));
						}
						if(this.board[numPos[1] - i][numPos[0] - i] == 'R' || this.board[numPos[1] - i][numPos[0] - i] == 'N'
						|| this.board[numPos[1] - i][numPos[0] - i] == 'Q' || this.board[numPos[1] - i][numPos[0] - i] == 'K'
						|| this.board[numPos[1] - i][numPos[0] - i] == 'P' || this.board[numPos[1] - i][numPos[0] - i] == 'B'
						&& blockedSouthWest != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] - i));
							blockedSouthWest = 1;
						}
					}
					else
					{
						blockedSouthWest = 1;
					}			
				}

				if(numPos[1] - i >= 0 && numPos[0] + i < 8)
				{
					if(this.board[numPos[1] - i][numPos[0] + i] != "r" && this.board[numPos[1] - i][numPos[0] + i] != "n"
					&& this.board[numPos[1] - i][numPos[0] + i] != "q" && this.board[numPos[1] - i][numPos[0] + i] != "k"
					&& this.board[numPos[1] - i][numPos[0] + i] != "p" && this.board[numPos[1] - i][numPos[0] + i] != "b"
					&& blockedSouthEast != 1)
					{
						if(this.board[numPos[1] - i][numPos[0] + i] == '-' )
						{
							console.log(this.board[numPos[1] - i][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] + i));
						}
						if(this.board[numPos[1] - i][numPos[0] + i] == 'R' || this.board[numPos[1] - i][numPos[0] + i] == 'N'
						|| this.board[numPos[1] - i][numPos[0] + i] == 'Q' || this.board[numPos[1] - i][numPos[0] + i] == 'K'
						|| this.board[numPos[1] - i][numPos[0] + i] == 'P' || this.board[numPos[1] - i][numPos[0] + i] == 'B'
						&& blockedSouthEast != 1)
						{
							console.log(this.board[numPos[1] - i][numPos[0]  + i]);
							move.push(chess.convertNumberToLetter(numPos[1] - i, numPos[0] + i));
							blockedSouthEast = 1;
						}						
					}
					else
					{
						blockedSouthEast = 1;
					}
				}

				if(numPos[1] + i < 8 && numPos[0] - i >= 0)
				{
					if(this.board[numPos[1] + i][numPos[0] - i] != "r" && this.board[numPos[1] + i][numPos[0] - i] != "n"
					&& this.board[numPos[1] + i][numPos[0] - i] != "q" && this.board[numPos[1] + i][numPos[0] - i] != "k"
					&& this.board[numPos[1] + i][numPos[0] - i] != "p" && this.board[numPos[1] + i][numPos[0] - i] != "b"
					&& blockedNorthWest != 1)
					{
						if(this.board[numPos[1] + i][numPos[0] - i] == '-')
						{
							console.log(this.board[numPos[1] + i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] - i));
						}
						if(this.board[numPos[1] + i][numPos[0] - i] == 'R' || this.board[numPos[1] + i][numPos[0] - i] == 'N'
						|| this.board[numPos[1] + i][numPos[0] - i] == 'Q' || this.board[numPos[1] + i][numPos[0] - i] == 'K'
						|| this.board[numPos[1] + i][numPos[0] - i] == 'P' || this.board[numPos[1] + i][numPos[0] - i] == 'B'
						&& blockedNorthWest != 1)
						{
							console.log(this.board[numPos[1] + i][numPos[0] - i]);
							move.push(chess.convertNumberToLetter(numPos[1] + i, numPos[0] - i));
							blockedNorthWest = 1;
						}
					}
					else
					{
						blockedNorthWest = 1;
					}
				}
			}
		}
		return move;
	}

	queenMove(team, position, move)
	{
		var rookMove = [];;
		var bishopMove = [];;
		bishopMove = this.bishopMove(team, position, bishopMove);
		rookMove = this.rookMove(team, position, rookMove);

		if(bishopMove.length != 0)
		{
			for(var i = 0; i < bishopMove.length; i++)
			{
				move.push(bishopMove[i]);
			}
		}

		if(rookMove.length != 0)
		{
			for(var i = 0; i < rookMove.length; i++)
			{
				move.push(rookMove[i]);
			}
		}

		return move;
	}

	kingMove(team, position, move)
	{
		var numPos = chess.convertLetterToNumber(position)
		if(team == 'w')
		{
			//North
			if(this.board[numPos[1] + 1][numPos[0]] == '-' || this.board[numPos[1] + 1][numPos[0]] == 'r' || this.board[numPos[1] + 1][numPos[0]] == 'n'
			|| this.board[numPos[1] + 1][numPos[0]] == 'q' || this.board[numPos[1] + 1][numPos[0]] == 'k'
			|| this.board[numPos[1] + 1][numPos[0]] == 'p' || this.board[numPos[1] + 1][numPos[0]] == 'b')
			{
				console.log(this.board[numPos[1] + 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
			}
			//North East
			if(this.board[numPos[1] + 1][numPos[0] + 1] == '-' || this.board[numPos[1] + 1][numPos[0] + 1] == 'r' || this.board[numPos[1] + 1][numPos[0] + 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'q' || this.board[numPos[1] + 1][numPos[0] + 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'p' || this.board[numPos[1] + 1][numPos[0] + 1] == 'b')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 1));
			}
			//East
			if(this.board[numPos[1]][numPos[0] + 1] == '-' || this.board[numPos[1]][numPos[0] + 1] == 'r' || this.board[numPos[1]][numPos[0] + 1] == 'n'
			|| this.board[numPos[1]][numPos[0] + 1] == 'q' || this.board[numPos[1]][numPos[0] + 1] == 'k'
			|| this.board[numPos[1]][numPos[0] + 1] == 'p' || this.board[numPos[1]][numPos[0] + 1] == 'b')
			{
				console.log(this.board[numPos[1]][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + 1));
			}
			//South East
			if(this.board[numPos[1] - 1][numPos[0] + 1] == '-' || this.board[numPos[1] - 1][numPos[0] + 1] == 'r' || this.board[numPos[1] - 1][numPos[0] + 1] == 'n'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'q' || this.board[numPos[1] - 1][numPos[0] + 1] == 'k'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'p' || this.board[numPos[1] - 1][numPos[0] + 1] == 'b')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 1));
			}
			//South
			if(this.board[numPos[1] - 1][numPos[0]] == '-' || this.board[numPos[1] - 1][numPos[0]] == 'r' || this.board[numPos[1] - 1][numPos[0]] == 'n'
			|| this.board[numPos[1] - 1][numPos[0]] == 'q' || this.board[numPos[1] - 1][numPos[0]] == 'k'
			|| this.board[numPos[1] - 1][numPos[0]] == 'p' || this.board[numPos[1] - 1][numPos[0]] == 'b')
			{
				console.log(this.board[numPos[1] - 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0]));
			}
			//South West
			if(this.board[numPos[1] - 1][numPos[0] - 1] == '-' || this.board[numPos[1] - 1][numPos[0] - 1] == 'r' || this.board[numPos[1] - 1][numPos[0] - 1] == 'n'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'q' || this.board[numPos[1] - 1][numPos[0] - 1] == 'k'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'p' || this.board[numPos[1] - 1][numPos[0] - 1] == 'b')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 1));
			}
			//West
			if(this.board[numPos[1]][numPos[0] - 1] == '-' || this.board[numPos[1]][numPos[0] - 1] == 'r' || this.board[numPos[1]][numPos[0] - 1] == 'n'
			|| this.board[numPos[1]][numPos[0] - 1] == 'q' || this.board[numPos[1]][numPos[0] - 1] == 'k'
			|| this.board[numPos[1]][numPos[0] - 1] == 'p' || this.board[numPos[1]][numPos[0] - 1] == 'b')
			{
				console.log(this.board[numPos[1]][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - 1));
			}
			//North West
			if(this.board[numPos[1] + 1][numPos[0] - 1] == '-' || this.board[numPos[1] + 1][numPos[0] - 1] == 'r' || this.board[numPos[1] + 1][numPos[0] - 1] == 'n'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'q' || this.board[numPos[1] + 1][numPos[0] - 1] == 'k'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'p' || this.board[numPos[1] + 1][numPos[0] - 1] == 'b')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] - 1));
			}
		}
		else
		{
			//North
			if(this.board[numPos[1] + 1][numPos[0]] == '-' || this.board[numPos[1] + 1][numPos[0]] == 'R' || this.board[numPos[1] + 1][numPos[0]] == 'N'
			|| this.board[numPos[1] + 1][numPos[0]] == 'Q' || this.board[numPos[1] + 1][numPos[0]] == 'K'
			|| this.board[numPos[1] + 1][numPos[0]] == 'P' || this.board[numPos[1] + 1][numPos[0]] == 'B')
			{
				console.log(this.board[numPos[1] + 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0]));
			}
			//North East
			if(this.board[numPos[1] + 1][numPos[0] + 1] == '-' || this.board[numPos[1] + 1][numPos[0] + 1] == 'R' || this.board[numPos[1] + 1][numPos[0] + 1] == 'N'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'Q' || this.board[numPos[1] + 1][numPos[0] + 1] == 'K'
			|| this.board[numPos[1] + 1][numPos[0] + 1] == 'P' || this.board[numPos[1] + 1][numPos[0] + 1] == 'B')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] + 1));
			}
			//East
			if(this.board[numPos[1]][numPos[0] + 1] == '-' || this.board[numPos[1]][numPos[0] + 1] == 'R' || this.board[numPos[1]][numPos[0] + 1] == 'N'
			|| this.board[numPos[1]][numPos[0] + 1] == 'Q' || this.board[numPos[1]][numPos[0] + 1] == 'K'
			|| this.board[numPos[1]][numPos[0] + 1] == 'P' || this.board[numPos[1]][numPos[0] + 1] == 'B')
			{
				console.log(this.board[numPos[1]][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1], numPos[0] + 1));
			}
			//South East
			if(this.board[numPos[1] - 1][numPos[0] + 1] == '-' || this.board[numPos[1] - 1][numPos[0] + 1] == 'R' || this.board[numPos[1] - 1][numPos[0] + 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] + 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] + 1] == 'P' || this.board[numPos[1] - 1][numPos[0] + 1] == 'B')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] + 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] + 1));
			}
			//South
			if(this.board[numPos[1] - 1][numPos[0]] == '-' || this.board[numPos[1] - 1][numPos[0]] == 'R' || this.board[numPos[1] - 1][numPos[0]] == 'N'
			|| this.board[numPos[1] - 1][numPos[0]] == 'Q' || this.board[numPos[1] - 1][numPos[0]] == 'K'
			|| this.board[numPos[1] - 1][numPos[0]] == 'P' || this.board[numPos[1] - 1][numPos[0]] == 'B')
			{
				console.log(this.board[numPos[1] - 1][numPos[0]]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0]));
			}
			//South West
			if(this.board[numPos[1] - 1][numPos[0] - 1] == '-' || this.board[numPos[1] - 1][numPos[0] - 1] == 'R' || this.board[numPos[1] - 1][numPos[0] - 1] == 'N'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'Q' || this.board[numPos[1] - 1][numPos[0] - 1] == 'K'
			|| this.board[numPos[1] - 1][numPos[0] - 1] == 'P' || this.board[numPos[1] - 1][numPos[0] - 1] == 'B')
			{
				console.log(this.board[numPos[1] - 1][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1] - 1, numPos[0] - 1));
			}
			//West
			if(this.board[numPos[1]][numPos[0] - 1] == '-' || this.board[numPos[1]][numPos[0] - 1] == 'R' || this.board[numPos[1]][numPos[0] - 1] == 'N'
			|| this.board[numPos[1]][numPos[0] - 1] == 'Q' || this.board[numPos[1]][numPos[0] - 1] == 'K'
			|| this.board[numPos[1]][numPos[0] - 1] == 'P' || this.board[numPos[1]][numPos[0] - 1] == 'B')
			{
				console.log(this.board[numPos[1]][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1], numPos[0] - 1));
			}
			//North West
			if(this.board[numPos[1] + 1][numPos[0] - 1] == '-' || this.board[numPos[1] + 1][numPos[0] - 1] == 'R' || this.board[numPos[1] + 1][numPos[0] - 1] == 'N'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'Q' || this.board[numPos[1] + 1][numPos[0] - 1] == 'K'
			|| this.board[numPos[1] + 1][numPos[0] - 1] == 'P' || this.board[numPos[1] + 1][numPos[0] - 1] == 'B')
			{
				console.log(this.board[numPos[1] + 1][numPos[0] - 1]);
				move.push(chess.convertNumberToLetter(numPos[1] + 1, numPos[0] - 1));
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

			if (type == 'N')
			{
				move = chess.knightMove(team, square, move);
			}

			if (type == 'R')
			{
				move = chess.rookMove(team, square, move);
			}

			if (type == 'B')
			{
				move = chess.bishopMove(team, square, move);
			}

			if (type == 'Q')
			{
				move = chess.queenMove(team, square, move);
			}

			if (type == 'K')
			{
				move = chess.kingMove(team, square, move);
			}
		}

		return move;
	}
}

