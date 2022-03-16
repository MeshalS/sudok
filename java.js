let puzzle = [
    // [8, 9, 5, 7, 4, 2, 1, 3, 6],
    // [2, 7, 1, 9, 6, 3, 4, 8, 5],
    // [4, 6, 3, 5, 8, 1, 7, 9, 2],

    // [9, 3, 4, 6, 1, 7, 2, 5, 8],
    // [5, 1, 7, 2, 3, 8, 9, 6, 4],
    // [6, 8, 2, 4, 5, 9, 3, 7, 1],

    // [1, 5, 9, 8, 7, 4, 6, 2, 3],
    // [7, 4, 6, 3, 2, 5, 8, 1, 9],
    // [3, 2, 8, 1, 9, 6, 5, 4, 7],
    1, 2, 3, 4, 5, 6, 7, 8, 8
];

// function getRow(puz, num) {
//     for (let i = 0; i < puz.length; i++) {
//         if (puz[i] == num) {
//             return console.log(puz[i]);

//         }
//     }


// }
// getRow(puzzle, 0);
// getRow(puzzle, 8);
// -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]
function getColumn(puz, num) {
    var x = [];
    for (let i = 0; i < puz.length; i++) {
        // puz[i =>0] return  [8, 9, 5, 7, 4, 2, 1, 3, 6]
        //  puz[i =>1] return   [2, 7, 1, 9, 6, 3, 4, 8, 5]
        for (let j = 0; j < puz[i].length; j++) {
            //[8, 9, 5, 7, 4, 2, 1, 3, 6] [j =>0] return 8
            if (j == num) {
                x.push(puz[i][j]);
                // puz[i =>0] return  [8, 9, 5, 7, 4, 2, 1, 3, 6] [j =>0] return 8
                // puz[i =>1] return   [2, 7, 1, 9, 6, 3, 4, 8, 5] [j =>0] return 2

            }
        }
    }
    return console.log(x);

}





// getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

// This grabs the values from column 0 and row 1 (second from the top left)
// getSection(puzzle, 1, 0);
// -> [ 7,4,2,9,6,3,5,8,1 ]