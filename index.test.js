const getKinghtPositions = require("./getKnightPositions");
const knightMoves = require("./knightMoves");

it("knightPositions works", () => {
    expect(getKinghtPositions([0, 0])).toEqual([[1, 2], [2, 1]]);
    expect(getKinghtPositions([3, 3])).toEqual([
        [1, 2], [2, 1],
        [4, 1], [5, 2],
        [1, 4], [2, 5],
        [4, 5], [5, 4]
    ]);
    expect(getKinghtPositions([7, 0])).toEqual([[5, 1], [6, 2]]);
    expect(getKinghtPositions([5, 1])).toEqual([
        [3, 0], [7, 0],
        [3, 2], [4, 3],
        [6, 3], [7, 2]
    ]);
})

it("knightMoves works", () => {
    expect(knightMoves([0, 0], [1, 2])).toEqual([[0, 0], [1, 2]]);
    expect(knightMoves([0, 0], [3, 3])).toEqual([[0, 0], [2, 1], [3, 3]]);
    expect(knightMoves([3, 3], [0, 0])).toEqual([[3, 3], [2, 1], [0, 0]]);
    expect(knightMoves([3, 3], [4, 3])).toEqual([[3, 3], [5, 4], [3, 5], [4, 3]]);
})