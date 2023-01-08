function sort_insert(A) { 
    let n = A.length;
    for (let i = 0; i < n; i++) { 
        let v = A[ i ], j = i-1;
        while (j >= 0 && A[j] > v) { 
            A[j+1] = A[j]; j--; 
        };
       A[j+1] = v;
    }                    
    return A;    
}

const array = [4,3,5,2,1];
console.log(sort_insert(array));