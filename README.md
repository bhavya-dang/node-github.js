# node-github.js

<div align="center">
  </br>
    <p>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/v/node-github.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/dt/node-github.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://github.com/Sync-Codes/node-github.js"><img src="https://circleci.com/gh/Sync-Codes/node-github.js.svg?style=shield" alt="circleci" /></a>
  <p>
    A simple node.js wrapper for the Github API V3</br>
    <a href="https://nodei.co/npm/node-github.js/"><img src="https://nodei.co/npm/node-github.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>

  </p>
  <p>
</div>

- 📦 **Lightweight**: Modular to the core. Less then 200 lines of clean and optimized code.
- 🔰 **Simplistic**: Build to be beginner friendly, to suit everyone's needs.

## Installation

```bash
npm install node-github.js --save
```

## Dependencies

It depends on [axios](https://npmjs.org/package/axios) as a main dependency and [moment](https://npmjs.org/package/moment) to parse the date/time returned by the data.

```bash
npm install
```

## Declaration

```js
const GithubClient = require("node-github.js");
const client = new GithubClient();
```

## Usage

The methods return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#:~:text=Description,when%20the%20promise%20is%20created.&text=This%20lets%20asynchronous%20methods%20return,some%20point%20in%20the%20future.). You can resolve it using `.then()` to get the results.

```js
client.getUser("Sync-Codes").then((data) => console.log(data)); // returns a user object with the data
```

## Result Data

```js
{
  username: 'Sync-Codes',
  avatar: 'https://avatars.githubusercontent.com/u/37131433?v=4',
  name: 'Bhavya Dang',
  bio: 'Web Developer and Designer',
  website: 'https://synxc.carrd.co/',
  followers: 11,
  following: 25,
  createdAt: 'Mar 7th, 2018',
  location: 'India',
  total_public_repos: 45,
  total_private_repos: 'None'
}
```

# Other Methods

## .getUserRepo(para)

Returns a repo object with the Repositiory data of the username passed as `para`.

## .getUserOrgs(para)

Returns a orgs object with the Organization data of the username passed as `para`.

## .searchUsers(query)

Returns an object containing the best match results of the user. Filtered by the `query` parameter passed.

## .searchTopics(query)

Returns an object containing the best match results of the topic. Filtered by the `query`. The topic is always a _featured_ topic.

## Contact

You can contact me on my Discord (Sync#9069).

## Issues

Found an issue? Open up an issue [here!](https://github.com/Sync-Codes/node-github.js/issues/**new**)

## License

&copy; Sync-Codes, 2020</br>
Released under MIT License.
