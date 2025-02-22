# Re

## **1. Array.prototype.at()**

Return value at the index

```php
array.at(index)
```

index: position

## **Lodash _.at(object, [paths])**

Create an array of values corresponding to paths of object

```php
_.at(object, [paths])
```

Arguments

* object (Object): The object to iterate over.
* [paths] (...(string|string[])): The property paths to pick.

Return (Array): Returns the picked values.

## **2. Array.prototype.concat()**

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```php
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* … ,*/ valueN)
```

valueN: array

Return: new Array

## **Lodash Concat()**

Creates a new array concatenating array with any additional arrays and/or values.

```php
_.concat(array, [values])
```

Arguments

* array (Array): The array to concatenate.
* [values] (...*): The values to concatenate.

Return: (Array): Returns the new concatenated array.

## **3. Array.prototype.every()**

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```php
// Arrow function
every((element) => { /* … */ } )
every((element, index) => { /* … */ } )
every((element, index, array) => { /* … */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* … */ })
every(function(element, index) { /* … */ })
every(function(element, index, array){ /* … */ })
every(function(element, index, array) { /* … */ }, thisArg)
```

## **Lodash every()**

Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).

```php
_.every(collection, [predicate=_.identity])
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [predicate=_.identity] (Function): The function invoked per iteration.

## **4. Array.prototype.flat()**

The flat() method creates a new array with all sub-array elements

```php
flat()
flat(depth)
```

depth: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

## **_.flatten(array)**

Flattens array a single level deep.

```php
  _.flatten(array)
```

Arguments

* array (Array): The array to flatten.

Return (Array): Returns the new flattened array.

## **_.flattenDeep(array)**

Recursively flattens array

```php
  _.flattenDeep(array)
```

Arguments

* array (Array): The array to flatten.

Return (Array): Returns the new flattened array.

## **_.flattenDepth(array, [depth=1])**

Recursively flatten array up to depth times.

```php
  __.flattenDepth(array, [depth=1])
```

Arguments

* array (Array): The array to flatten.
* [depth=1] (number): The maximum recursion depth.

Return (Array): Returns the new flattened array.

## **5. Array.prototype.flatMap()**

The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. map() + flat(depth = 1)

```php
// Arrow function
flatMap((currentValue) => { /* … */ } )
flatMap((currentValue, index) => { /* … */ } )
flatMap((currentValue, index, array) => { /* … */ } )

// Callback function
flatMap(callbackFn)
flatMap(callbackFn, thisArg)

// Inline callback function
flatMap(function(currentValue) { /* … */ })
flatMap(function(currentValue, index) { /* … */ })
flatMap(function(currentValue, index, array){ /* … */ })
flatMap(function(currentValue, index, array) { /* … */ }, thisArg)
```

Return A new array with each element being the result of the callback function and flattened by a depth of 1.

## **flatMap(collection, [iteratee=_.identity])**

Creates a flattened array of values by running each element in collection thru iteratee and flattening the mapped results. The iteratee is invoked with three arguments: (value, index|key, collection).

```php
_.flatMap(collection, [iteratee=_.identity])
```

## **flatMapDeep**

```php
_.flatMapDeep(collection, [iteratee=_.identity])
```

## **flatMapDepth(collection, [iteratee=_.identity])**

```php
_.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.
* [depth=1] (number): The maximum recursion depth.

Returns
(Array): Returns the new flattened array.

## **6. Array.prototype.forEach()**

The forEach() method executes a provided function once for each array element.

```php
// Arrow function
forEach((element) => { /* … */ })
forEach((element, index) => { /* … */ })
forEach((element, index, array) => { /* … */ })

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* … */ })
forEach(function(element, index) { /* … */ })
forEach(function(element, index, array){ /* … */ })
forEach(function(element, index, array) { /* … */ }, thisArg)
```

## forEach

Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

```php
_.forEach(collection, [iteratee=_.identity])
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.

Returns collection.

## forEachRight

_.forEachRight(collection, [iteratee=_.identity])
Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.

## **7.Array.prototype.includes()**

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```php
includes(searchElement)
includes(searchElement, fromIndex)
```

* searchElement: The value to search for.
* fromIndex: The position in this array at which to begin searching for searchElement.

## include

Checks if value is in collection. If collection is a string, it's checked for a substring of value, otherwise SameValueZero is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.

```php
_.includes(collection, value, [fromIndex=0])
```

Arguments

* collection (Array|Object|string): The collection to inspect.
* value (*): The value to search for.
* [fromIndex=0] (number): The index to search from.

Returns true if value is found, else false.

## **8. Array.prototype.map()**

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```php
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)
```

Return A new array with each element being the result of the callback function.

## **Map(Collection)**

Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

```php
_.map(collection, [iteratee=_.identity])

```

Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.

Returns (Array): Returns the new mapped array.

## **MapKeys - MapValues (Object)**

This method creates an object with the same values as object and keys generated by running each own enumerable string keyed property of object thru iteratee. The iteratee is invoked with three arguments: (value, key, object).

```php
_.mapKeys(object, [iteratee=_.identity])
```

Creates an object with the same keys as object and values generated by running each own enumerable string keyed property of object thru iteratee.

```php
_.mapValues(object, [iteratee=_.identity])
```

Arguments

* object (Object): The object to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.

Returns (Object): Returns the new mapped object.

## **9. Array.prototype.reduce() - reduceRight()**

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```php
// Arrow function
reduce((previousValue, currentValue) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

reduce((previousValue, currentValue) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

Return: The value that results from running the "reducer" callback function to completion over the entire array.

## **Reduce - ReduceRight(Collection)**

Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value.

The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```php
_.reduce(collection, [iteratee=_.identity], [accumulator])
```

This method is like _.reduce except that it iterates over elements of collection from right to left.

```php
_.reduceRight(collection, [iteratee=_.identity], [accumulator])
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratee=_.identity] (Function): The function invoked per iteration.
* [accumulator] (*): The initial value.

Returns: the accumulated value.

## **10.Array.prototype.slice()**

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```php
slice()
slice(start)
slice(start, end)
```

Return: A new array containing the extracted elements.

## **Slice(Array)**

Creates a slice of array from start up to, but not including, end.

```php
_.slice(array, [start=0], [end=array.length])
```

Arguments

* array (Array): The array to slice.
* [start=0] (number): The start position.
* [end=array.length] (number): The end position.

Return: (Array): Returns the slice of array.

## **11. Array.prototype.some()**

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```php
// Arrow function
some((element) => { /* … */ } )
some((element, index) => { /* … */ } )
some((element, index, array) => { /* … */ } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function(element) { /* … */ })
some(function(element, index) { /* … */ })
some(function(element, index, array){ /* … */ })
some(function(element, index, array) { /* … */ }, thisArg)
```

Return: Boolean

## **Some(Collection)

Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).

```php
_.some(collection, [predicate=_.identity])
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [predicate=_.identity] (Function): The function invoked per iteration.

Returns (boolean): Returns true if any element passes the predicate check, else false.

## Array _.fromPairs(pairs)

Return an **object** composed from key-value pairs

```php
_.fromPairs([['a', 1], ['b', 2]]);
//{ 'a': 1, 'b': 2 }
```

Arguments

* pairs (Array): The key-value pairs.

## Array __.head(array) - _.last(array)

Gets the first and last element of array.

```php
_.head([1, 2, 3]);
// => 1
_.last([1, 2, 3]);
// => 3
```

Arguments

* array (Array): The array to query.

## Array _.nth(array, [n=0])

Gets the element at index n of array. If n is negative, the nth element from the end is returned.

Arguments

* array (Array): The array to query.
* [n=0] (number): The index of the element to return.

Returns
(*): Returns the nth element of array.

## Array _.pull(array, [values])

Removes all given values from array using SameValueZero for equality comparisons.

```php
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
```

Arguments

* array (Array): The array to modify.
* [values] (...*): The values to remove.

Returns
(Array): Returns array.

### Array _.pullAll(array, values)

This method is like _.pull except that it accepts an array of values to remove.

```php
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pullAll(array, ['b', 'c']);
console.log(array);
// => ['b', 'b']
```

Arguments

* array (Array): The array to modify.
* values (Array): The values to remove.

Returns
(Array): Returns array.

### Array __.pullAllBy(array, values, [iteratee=_.identity])

This method is like _.pullAll except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The iteratee is invoked with one argument: (value).

```php
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```

Arguments

* array (Array): The array to modify.
* values (Array): The values to remove.
* [iteratee=_.identity] (Function): The iteratee invoked per element.

Returns
(Array): Returns array.

## Collection __.orderBy(collection, [iteratees=[_.identity]], [orders])

This method is like _.sortBy except that it allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order. Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.

```php
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// Sort by `user` in ascending order and by `age` in descending order.
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): The iteratees to sort by.
* [orders] (string[]): The sort orders of iteratees.

Returns
(Array): Returns the new sorted array.

## Sample and Shuffle

### _.sample(collection)

Gets a random element from collection

```php
_.sample([1, 2, 3, 4]);
// => 2
```

### _.sampleSize(collection, [n=1])

Gets n random elements at unique keys from collection up to the size of collection.

```php
_.sampleSize([1, 2, 3], 2);
// => [2, 3]
```

Arguments

* collection (Array|Object): The collection to sample.
* [n=1] (number): The number of elements to sample.
v
Returns
(Array): Returns the random elements.

### _.shuffle(collection)

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

```php
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

Arguments

* collection (Array|Object): The collection to shuffle.

Returns
(Array): Returns the new shuffled array.

## **Filter and Reject**

### Filter

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

```php
var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

_.filter(users, function(o) { return !o.active; });
// => objects for ['fred']
_.filter(users, 'active');
// => objects for ['barney']
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [predicate=_.identity] (Function): The function invoked per iteration.

Returns
(Array): Returns the new filtered array.

### Reject

The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for.

```php
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
_.reject(users, function(o) { return !o.active; });
// => objects for ['fred']
_.reject(users, 'active');
// => objects for ['barney']
```

Arguments

* collection (Array|Object): The collection to iterate over.
* [predicate=_.identity] (Function): The function invoked per iteration.

Returns
(Array): Returns the new filtered array.
