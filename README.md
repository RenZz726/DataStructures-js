# Closures — short summary

**Definition:** A closure is a function that remembers the lexical environment in which it was created.

**Key uses:**
- Data privacy / private state
- Currying
- Event handlers that capture values

**Pitfalls:**
- Unintended retained memory (be careful with large objects)
- Overuse makes code harder to follow

**Examples:** See `examples/closure-example.js`


# JS Learning Notes 📘

This repo contains my JavaScript learning journey:
- **js-basics/** → Core JS concepts from Udemy course
- **dsa/** → DSA problems solved in JavaScript (easy/medium/hard)

## How to run
```bash
# Run any JS file
node js-basics/variables.js
node dsa/easy/01-two-sum.js

