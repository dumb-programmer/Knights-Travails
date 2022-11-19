const getKnightPositions = require("./getKnightPositions");

const knightMoves = (start, end) => {
    const queue = [start];
    const traversed = new Set();
    const treeMap = new Map();
    let current = queue.shift();
    while (!(current[0] === end[0] && current[1] === end[1])) {
        const children = getKnightPositions(current);
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

    return path;
}

module.exports = knightMoves;