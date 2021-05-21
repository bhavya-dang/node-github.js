const axios = require("axios");
const moment = require("moment");

class GithubClient {
  getUser(username) {
    if (typeof username !== "string") {
      throw new TypeError("username provided is not a valid string.");
    }
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((data) => {
        const userObj = {
          username: data.data.login,
          avatar: data.data.avatar_url,
          name: data.data.name,
          bio: data.data.bio,
          website: data.data.blog,
          followers: data.data.followers,
          following: data.data.following,
          createdAt: moment(data.data.created_at).format("MMM Do, YYYY"),
          location: data.data.location,
          total_public_repos: data.data.public_repos,
          total_private_repos:
            data.data.private_repos === undefined
              ? "None"
              : data.data.private_repos,
        };
        return userObj;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          throw new Error("user not found.");
        } else {
          console.log(err.message);
        }
      });
  }

  getUserOrgs(username) {
    if (typeof username !== "string") {
      throw new TypeError("username provided is not a valid string.");
    }
    return axios
      .get(`https://api.github.com/users/${username}/orgs`)
      .then((data) => {
        // if(data === undefined) {
        //   return
        // }
        let orgs = [];
        for (let i = 0; i < data.data.length; i++) {
          orgs.push(data.data[i].login);
        }

        let orgRepos = [];
        for (let i = 0; i < data.data.length; i++) {
          orgRepos.push(data.data[i].repos_url.replace(/(?:api\.)/g, ""));
        }

        let membersURL = [];
        for (let i = 0; i < data.data.length; i++) {
          membersURL.push(data.data[i].members_url.replace(/(?:api\.)/g, ""));
        }

        const orgObj = {
          organizations: orgs,
          repos_url: orgRepos,
          members_url: membersURL,
        };
        return orgObj;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          throw new Error("user not found.");
        } else {
          console.log(err.message);
        }
      });
  }

  getUserRepo(username, repo) {
    if (typeof username !== "string") {
      throw new TypeError("username provided is not a valid string.");
    } else if (typeof repo !== "string") {
      throw new TypeError("username provided is not a valid string.");
    } else if (typeof repo !== "string" && typeof username !== "string") {
      throw new TypeError("username and repo provided are not valid strings.");
    } else if (!username) {
      throw new Error("username is not specified");
    } else if (repo && typeof repo === "string" && !username) {
      throw new Error("username is not specified");
    } else if (!repo) {
      throw new Error("repo is not specified");
    } else if (username && typeof username === "string" && !repo) {
      throw new Error("repo is not specified");
    }
    return axios
      .get(`https://api.github.com/repos/${username}/${repo}`)
      .then((data) => {
        const repoObj = {
          archived: data.data.archived,
          createdAt: moment(data.data.created_at).format("MMM Do, YYYY"),
          defaultBranch: data.data.default_branch,
          name: data.data.name,
          description: data.data.description,
          forks: data.data.forks_count,
          watchers: data.data.watchers_count,
          repo_url: `https://github.com/${username}/${repo}`,
          cloneURL: data.data.clone_url.replace(/(?:api\.)/g, ""),
          deploymentsURL: data.data.deployments_url.replace(/(?:api\.)/g, ""),
          collaboratorsURL: data.data.collaborators_url.replace(
            /(?:api\.)/g,
            ""
          ),
          contributorsURL: data.data.contributors_url.replace(/(?:api\.)/g, ""),
          private: data.data.private,
          owner: data.data.owner.login,
          gitUrl: data.data.git_url,
          homepage: data.data.homepage,
          has_downloads: data.data.has_downloads,
          has_projects: data.data.has_projects,
          has_issues: data.data.has_issues,
          has_pages: data.data.has_pages,
          has_wiki: data.data.has_wiki,
          language: data.data.language,
        };
        return repoObj;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          throw new Error("repo not found.");
        } else {
          console.log(err.message);
        }
      });
  }

  searchUsers(query) {
    if (typeof query !== "string") {
      throw new TypeError("query provided is not a valid string.");
    }
    return axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then((data) => {
        const resultsObj = {
          totalResults: data.data.total_count,
          items: data.data.items,
        };
        return resultsObj;
      });
  }

  searchTopics(topic) {
    const headers = {
      Accept: "application/vnd.github.mercy-preview+json",
    };
    if (typeof topic !== "string") {
      throw new TypeError("topic provided is not a valid string.");
    }
    return axios
      .get(
        `https://api.github.com/search/topics?q=${query}+is:featured`,
        headers
      )
      .then((data) => {
        const topicsObj = {
          totalResults: data.data.total_count,
          items: data.data.items,
        };
        return topicsObj;
      });
  }
}

module.exports = GithubClient;
const client = new GithubClient();
client.getUser("Sync-Codes").then((data) => console.log(data));
