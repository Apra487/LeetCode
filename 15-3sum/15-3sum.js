/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(array) {
    
	array.sort((a, b) => a-b);

	let finalArr = [];
    let i = 0;
    
    
    for(let i = 0; i<array.length - 2; i++){
        let left = i+1;
        let right = array.length-1;
        if(i != 0 && array[i] == array[i-1]) continue;
        
        while(left < right){
            let total = array[i] + array[left] + array[right]
            if (total===0){
                finalArr.push([array[i], array[left], array[right]]);
                while(left < right && array[right-1] == array[right]){
                    right--;
                }
                while(left < right && array[left+1] == array[left]){
                   left++;
                }
                left++;
                right--;
                
            } else if (total > 0) right--;
            else left++;
        }
    }
    
    return finalArr;
    
}