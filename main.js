const knightMoves = require("./knightMoves");

const path = knightMoves([3, 3], [0, 0]);

console.log(`You made it in ${path.length} moves! Here's your path:`);
for (const node of path) {
    console.log(node);
}