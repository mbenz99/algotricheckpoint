
function dot_product(v1, v2) {

    if (v1.length !== v2.length) {
      throw new Error("Vectors must have equal length.");
    }
  
    let ps = 0; 
  
    
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
  
    return ps;
  }
  
  
  const v1 = [1, 2, 3];
  const v2 = [4, 5, 6];
  const product = dot_product(v1, v2);
  console.log(product); 

  
function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
    const array = [5, 2, 4, 6, 1, 3];
    const sortedArray = insertion_sort(array);
    console.log(sortedArray); 
