// callbacks - actions that initate now but finish later

// Promises
let promise = new promise(function(resolve, reject) {
    // the function passed to new promise is the executor
})
// When new promise is created, the executor runs automatically
// the arguments resolve and reject and callbacks provided by javascript
// when the executor obtains result it calls one of these callbacks

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object.

// the new promise constructor will return the promise object which has these properties state, result
// state- initially pending, then fulfilled if resolved is called and rejected if rejected is called
// result- initially it is undefined, then changes to value if resolve(value) or error if reject(error)

// A promise that is resolved or rejected is called settled     
