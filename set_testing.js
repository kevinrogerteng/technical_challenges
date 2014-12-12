// Assume that the following functions are already 
// implemented. How would you write tests for these 
// functions?

// is this a set?
function is_set(set) {} // --> true or false

// Does x exist in set?
function is_in_set(set, x) {} // --> true or false

// Combination of both sets
function union(set1, set2) {} // → set

// What is in both sets?
function intersection(set1, set2) {} // → set

// What is not in both sets?
function difference(set1, set2) {} // → set

// Test with this:
function assert(expected) {
    if (!expected) {
        throw ‘test failed!’;
    }
}

// answers

function isSet(){
  var is_a_set = [1,2,3];
  var is_not_a_set = [1,2,3,3];

  assert(is_set([]));
  assert(is_set(is_a_set)); //should return true
  assert(!is_set(is_not_a_set)); //should return false

  //need to also check to see if undefined
  assert(!is_set(undefined));
  assert(!is_set(null));
  assert(!is_set(""));

}