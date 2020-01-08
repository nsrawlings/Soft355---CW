function compare2dArrys(testArray, arrayToBeChecked)
{
    for(var i = 0; i <= testArray.lenght; i++)
    {
        for(var j = 0; j <= testArray.lenght; j++)
        {
            if(testArray[i][j] != arrayToBeChecked[i][j])
            {
                return 'false';
            }
        }
    }

    return 'true';
}

function compareMoves(testMoves, returnMoves)
{
    var match = 0;

    if(testMoves.length == returnMoves.length)
    {
        for(var i = 0; i <= returnMoves.lenght; i++)
        {
            for(var j = 0; j <= testMoves.lenght; j++)
            {
                if(testMoves[j] == retturnMoves[i])
                {
                    match = 1;
                }
            }
            if(match == 0)
            {
                return 'false';
            }
        }
    }
    else
    {
        return 'false';
    }

    return 'true';
}

suite("Utility Tests", function() {

    var startboard = new Array(8);

    for(var i = 0; i < 8; i++) {
        startboard[i] = new Array(8); 
    }
    
    chess = new ChessRules(startboard);

    test("Converts a chess co-ordinate into numbers", function() {
        var chessCoord = 'h2';
        
        var numPos = chess.convertLetterToNumber(chessCoord);

        chai.assert.equal(numPos[0], 7, "X coordiante is converted wrong or is in the wrong possition");
        chai.assert.equal(numPos[1], 1, "Y coordiante is converted wrong or is in the wrong possition");
    })
    test("Converts a number into chess co-ordinate ", function() {
        var numPos = [6, 1];
        
        var chessCoord = chess.convertNumberToLetter(numPos[1] + 1, numPos[0]);

        chai.assert.equal(chessCoord, 'g3', "X coordiante is converted wrong or is in the wrong possition");
    })
    test("Sets array board to fen string", function() {
        var fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';

        var board = createArrayBoard(fen, chess.board);

        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "P", "P", "P"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "p", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];

        var test = compare2dArrys(boardComplete, board);

        chai.assert.equal(test, 'true', "Starting board is nor set up right");
    })
});

suite("Peices Tests", function() 
{

    var startboard = new Array(8);

    for(var i = 0; i < 8; i++) {
        startboard[i] = new Array(8); 
    }
    
    chess = new ChessRules(startboard);
    test("Pawn Moves", function() {
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "-", "P", "P"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "P", "-", "-"], 
        ["-", "-", "-", "-", "p", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "-", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["d5", "e5"];
        moves = chess.pawnMove('w', 'd4', moves)

        var test = compareMoves(testMoves, moves);

        chai.assert.equal(test, 'true', "Pawn Moves are wrong");
    })

        
    test("Knight Moves", function() {
            
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "-", "P", "P"], 
        ["-", "q", "-", "-", "-", "P", "-", "-"], 
        ["-", "-", "-", "N", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "p", "-", "-", "-"], 
        ["p", "p", "p", "p", "-", "p", "p", "p"], 
        ["r", "n", "b", "-", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["c6", "e6", "b5", "f5", "b3"];

        moves = chess.knightMove('w', 'd4', moves)
    
        var test = compareMoves(testMoves, moves);
    
        chai.assert.equal(test, 'true', "Knight Moves are wrong");
    })

    test("Rook Moves", function() {
            
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "P", "P", "P"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "n", "-", "R", "-", "P", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "p", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["d5", "d3", "e4", "c4", "d6", "b4", "d7"];

        moves = chess.rookMove('w', 'd4', moves)
    
        var test = compareMoves(testMoves, moves);
    
        chai.assert.equal(test, 'true', "Rook Moves are wrong");
    })

    test("Bishop Moves", function() {
            
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "P", "P", "P"], 
        ["-", "-", "p", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "B", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["-", "-", "Q", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "p", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["e5", "c3", "c3", "e3", "c5", "f6", "b6", "g7", "a7"];

        moves = chess.bishopMove('w', 'd4', moves)
    
        var test = compareMoves(testMoves, moves);
    
        chai.assert.equal(test, 'true', "Bishop Moves are wrong");
    })

    test("King Moves", function() {
            
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "P", "P", "P"], 
        ["-", "-", "p", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "K", "-", "-", "-", "-"], 
        ["-", "-", "Q", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "p", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["d5", "e5", "e4", "e3", "d3", "c3", "c4"];

        moves = chess.kingMove('w', 'd4', moves)
    
        var test = compareMoves(testMoves, moves);
    
        chai.assert.equal(test, 'true', "King Moves are wrong");
    })

    test("Queen Moves", function() {
            
        var boardComplete = [["R", "N", "B", "Q", "K", "B", "N", "R"], 
        ["P", "P", "P", "P", "P", "P", "P", "P"], 
        ["-", "-", "p", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "Q", "-", "-", "-", "-"], 
        ["-", "-", "R", "-", "-", "-", "-", "-"], 
        ["-", "-", "-", "-", "-", "-", "-", "-"], 
        ["p", "p", "p", "p", "p", "p", "p", "p"], 
        ["r", "n", "b", "q", "k", "b", "n", "r"]];
        var moves = [];
        chess.board = boardComplete;
        var testMoves = ["e5", "c3", "c3", "e3", "f6", "g7", "d5", "d3", "e4", "c4", "d6", "f4", "b4", "d7", "g4", "a4", "h4"];
        moves = chess.queenMove('w', 'd4', moves)
    
        var test = compareMoves(testMoves, moves);
    
        chai.assert.equal(test, 'true', "Queen Moves are wrong");
    })

});