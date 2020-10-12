// Set of commands that can be used to modify arrays
// Document should be used on index_final.html file
array[0];  //  coomand shold return string from array
array[0] = "new string"; // Assign "new string" to index [0]
// Be careful when calling an idex in an array that may not be there:
array[20] = 2020; // This will assing 14 new null indexes to the array and then 2020 to the last index

// array index can be assigned using the following:
array.test2 = 4;
array[0] = 4;

array.length; //  returns the length of the array
array.shift(); // To delete the first element in the array
array.pop(); // To pop an element off the end of an array
array.unshift("string", 5, 9,4.4)// Add elemets to the beginning of an array
array.push(4.98,[5878,4.3, {'Tweet':4}]);// To add things at the end of an array
array.splice(2,1);// you can use the splice function to delete elements at specific indexes
array.splice(2,0,"Give", 4.35,{'index':'value'}, function(){return "Bye"}, 2.35); // To add in element using the splice method
