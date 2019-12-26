window.onload = function() {
	console.log("Chess")
};

class ChessRules
{
	constructor(board)
	{
		var board = this.board;
	}
	
	
	pawnMove(team, position)
	{
		var move = [];
	
		if(team = 'w')
		{
			if(position == 'a2' || position == 'b2' || position == 'c2'|| position == 'd2' || position == 'e2' 
				|| position == 'f2' || position == 'g2' || position == 'h2')
			{
				move.push();
			}
		}
		else
		{
		
		}
	}
	
	moves(square, piece)
	{
		console.log("Moves")
		var ar = [];
		
		ar = piece.split('');
		
		var team = ar[0];
		
		var type = ar[1];
		
		if (type == 'P')
		{
			pawnMove(team, square);
		}
	}
}

