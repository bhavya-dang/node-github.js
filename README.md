## node-github.js

<div align="center">
  </br>
    <p>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/v/node-github.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/dt/node-github.js.svg?maxAge=3600" alt="NPM downloads" /></a>
  <p>
    A node.js wrapper for the Github API V3</br>
    <a href="https://nodei.co/npm/node-github.js/"><img src="https://nodei.co/npm/node-github.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>

  </p>
  <p>

</div>

- 📦 **Lightweight**: Modular to the core. Less then 200 lines of clean and optimized code.
- 🔰  **Simplistic**:  Build to be beginner friendly, to suit everyone's needs.
  
## Installation

```bash
npm install node-github.js
```

## Dependencies

```bash
npm install
```


## Decalaration
```js
const git = require("node-github.js");
```

> Example using Promises `.then()`
```js
git.getUser("username").then(() => console.log(data)) // returns a user object
```

> Example using `async/await`
```js
// in an async function
let data = await git.getUser("username")
console.log(data) // returns a user object
```

# Other Methods

## .getUserRepo(para) 

Returns a repo object with the Repositiory data of the username passed as `para`.

## .getUserOrgs(para)

Returns a orgs object with the Organization data of the username passed as `para`.

## .getUserOrgs(para)

Returns a orgs object with the Organization data of the username passed as `para`.

## .searchUser(query, followerCount)

Returns an object containing the best match result of the user. Filtered by the `query` and `followerCount` passed.

## .searchTopic(query)

Returns an object containing the best match result of the topic. Filtered by the `query`. The topic is always a *featured* topic.

## License

&copy; Sync, 2020</br>
Released under the Apache License 2.0.22