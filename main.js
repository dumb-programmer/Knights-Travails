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
}



const knightMoves = (start, end) => {
    const queue = [start];
    const traversed = new Set();
    const treeMap = new Map();
    let current = queue.shift();
    while (!(current[0] === end[0] && current[1] === end[1])) {
        const children = getKinghtPositions(current);
        treeMap.set(current, children);

        for (const child of children) {
            if (!traversed.has(JSON.stringify(child))) {
                queue.push(child);
            }
        }
        traversed.add(JSON.stringify(current));
        current = queue.shift();
    }

    // Backtrack
    let value = end;
    const keys = [...treeMap.keys()];
    const path = [];
    let i = keys.length - 1;
    while (i > -1) {
        const children = treeMap.get(keys[i]);
        for (const child of children) {
            if (child[0] === value[0] && child[1] === value[1]) {
                path.push(child);
                value = keys[i];
                break;
            }
        }
        i--;
    }
    path.push(start);
    path.reverse();

    console.log(`You made it in ${path.length} moves! Here's your path:`);
    for (const node of path) {
        console.log(node);
    }
}

knightMoves([0, 7], [7, 0]);
