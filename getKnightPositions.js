const getKinghtPositions = (currentPos) => {
    const offsets = [
        [-2, -1], [-1, -2],
        [1, -2], [2, -1],
        [-2, 1], [-1, 2],
        [1, 2], [2, 1]
    ]
    const moves = [];
    for (const offset of offsets) {
        const [x, y] = offset;
        const pos = [currentPos[0] + x, currentPos[1] + y]
        if (pos[0] > -1 && pos[0] < 8 && pos[1] > -1 && pos[1] < 8) {
            moves.push(pos);
        }
    }
    return moves;
};

module.exports = getKinghtPositions;