function sort_select(A) {   
    var n = A.length;
    for (var i = 0; i < n-1; i++) { 
        var min = i;
        for (var j = i+1; j < n; j++) {
            if (A[j] < A[min]) min = j; 
        } 
        var t = A[min]; A[min] = A[ i ]; A[ i ] = t;
    }                    
    return A;
}

function sort_bubble(A) {                    
    var n = A.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
            if (A[j+1] < A[j]) {
                var t = A[j+1]; A[j+1] = A[j]; A[j] = t;
            }
        }
    }                     
    return A; 
}

const array1 = [4,3,5,2,1];
const array2 = [4,3,5,2,1];

console.log(sort_select(array1));
console.log(sort_bubble(array2));