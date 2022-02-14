var rotate = function(matrix) {
    // matrix.reverse();
    
    // Reversing the array
    let i = 0;
    let j = matrix.length - 1;
    
    while (i <= j){
        let temp = matrix[i]
        matrix[i] = matrix[j]
        matrix[j] = temp
        i++;
        j--;
    }
    
    // Flipping the position --> (0,1) -> (1,0)
    for (let i = 0; i<matrix.length; i++){
        for (let j = 0; j < matrix.length ; j++){
            // trck to prevent backflipping
            if (j > i){
                // console.log(matrix[j]);
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
                
        }
    }
};