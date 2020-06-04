## node-github.js

<center><div align="center">
  </br>
    <p>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/v/node-github.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/node-github.js"><img src="https://img.shields.io/npm/dt/node-github.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://github.com/Sync-Codes/node-github.js"><img src="https://circleci.com/gh/Sync-Codes/node-github.js.svg?style=shield" alt="circleci" /></a>
  <p>
    A lightweight and fully maintained NodeJS Wrapper for the Github API V3.</br></br>
    <a href="https://nodei.co/npm/node-github.js/"><img src="https://nodei.co/npm/node-github.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>

  </p>
  <p>
</div>
<center>

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

## Usage

The methods return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#:~:text=Description,when%20the%20promise%20is%20created.&text=This%20lets%20asynchronous%20methods%20return,some%20point%20in%20the%20future.). You can resolve it using `async/await` or `.then()`

> Using [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
```js
git.getUser("username").then(() => console.log(data)); // returns a user object with the data
```

> Using [`async/await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
```js
const fetch = async () => {
    let data = await git.getUser("Sync-Codes");
    console.log(data);
}
fetch();
```

## Result Data
```js
{
  username: 'Sync-Codes',
  avatar: 'https://avatars3.githubusercontent.com/u/37131433?v=4',
  name: 'Bhavya Dang',
  bio: 'GFX/VFX Designer and Web Developer',
  website: 'https://instagram.com/syn.xc',
  followers: 10,
  following: 13,
  createdAt: 'Wednesday, March 7th 2018, 9:24:07 am',
  location: 'India',
  total_public_repos: 40,
  total_private_repos: 'None'
}
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
