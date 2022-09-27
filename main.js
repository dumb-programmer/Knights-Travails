const getKinghtPositions = (currentPos) => {
    const transformArray = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];
    const res = [];
    for (const item of transformArray) {
        const [x, y] = item
        const pos = [currentPos[0] + x, currentPos[1] + y]
        if (pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8) {
            res.push(pos);
        }
    }
    return res;
}