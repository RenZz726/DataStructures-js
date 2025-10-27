arr1 = ["a", 1, "b", 2];
arr2 = ["b", 2, "a", 1];

for(let i = 0;i < arr1.length;i++){
    if(!arr2.includes(arr1[i]))
        console.log("Invalid");

}