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

It depends on [node-fetch](https://npmjs.org/package/node-fetch) as a main dependency and [moment](https://npmjs.org/package/moment) to parse the date/time returned by the data.

```bash
npm install
```


## Declaration

```js
const git = require("node-github.js");
```

The methods return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#:~:text=Description,when%20the%20promise%20is%20created.&text=This%20lets%20asynchronous%20methods%20return,some%20point%20in%20the%20future.). You can resolve it using `async/await` or `.then()`

```js
git.getUser("username").then(() => console.log(data)) // returns a user object
```

# Other Methods

## .getUserRepo(para) 

Returns a repo object with the Repositiory data of the username passed as `para`.

## .getUserOrgs(para)

Returns a orgs object with the Organization data of the username passed as `para`.

## .searchUser(query)

Returns an object containing the best match result of the user. Filtered by the `query` parameter passed.

## .searchTopic(query)

Returns an object containing the best match result of the topic. Filtered by the `query`. The topic is always a *featured* topic.

## Contact

Join my [support server](https://discord.gg/V3NmpbJ) to be a Tester or even a collaborator!

## Issues

Found an issue? Open up an issue [here!](https://github.com/Sync-Codes/node-github.js/issues/**new**)

## License

&copy; Sync-Codes, 2020</br>
Released under MIT License.