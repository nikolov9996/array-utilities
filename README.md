# Simple Array functions 

## Using only simple arrays of strings, number or mixed (string & numbers)
### Important thing is that the util functions will not modify the original array!
### Simple examples:
|Function Name|Arguments|Result|
|----------------|------------|--------------|
| createArray({ length }) | { length: 4 } | [ 1, 1, 1, 1 ] |
| sortArray({ arr, order }) | { arr: [ 3, 2, "x", "a" ], order: "ASC" } | [ '2', '3', 'a', 'x' ] |
| mergeArrays(arr) | [ [ 1, 1 ], [ 2, 2 ] ] | [ 1, 1, 2, 2 ] |
| randomizeArray(arr) | [ 1, 2, 3, 4, 5, 6] | [ 4, 1, 6, 3, 5, 2 ] |
| removeDuplicates({ arr }) |{ arr: [ "a", 3, 3, "a", "b" ] }| [ 'a', 3, 'b' ] |
| removeValue({ arr, value }) | { arr: [ "a", "b", "c" ], value: "c" } | [ 'a', 'b' ] |
| removeAllValues({ arr, value }) | { arr: [ "a", "b", "a", "c", "a" ], value: "a" } | [ 'b', 'c' ] |
| removeByIndex({ arr, index }) | { arr: [ "a", "b", "c" ], index: 0 } | [ 'b', 'c' ] |

# Complex Array functions - on the way
## will include advanced operations for arrays of objets and 2D arrays

