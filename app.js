const fetch = require("node-fetch");
const moment = require("moment");
module.exports.getUser = async (username) => {
fetch(
    `https://api.github.com/users/${username}`
  ).then((res) => res.json())
  .then(data => {
  return (userObj = {
    username: data.login,
    avatar: data.avatar_url,
    name: data.name,
    bio: data.bio,
    website: data.blog,
    followers: data.followers,
    following: data.following,
    createdAt: moment(data.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    location: data.location,
    total_public_repos: data.public_repos,
    total_private_repos: data.private_repos,
  });
});
};
module.exports.getUserOrgs = async (username) => {
  fetch(`https://api.github.com/users/${username}/orgs`)
    .then((res) => res.json())
    .then((data) => {
      let orgs = [];
      for (i = 0; i < data.length; i++) {
        orgs.push(data[i].login);
      }

      let orgRepos = [];
      for (i = 0; i < data.length; i++) {
        orgs.push(data[i].repos_url);
      }

      let membersURL = [];
      for (i = 0; i < data.length; i++) {
        membersURL.push(data[i].members_url);
      }

      return (orgObj = {
        organizations: orgs,
        repos_url: orgRepos,
        members_url: membersURL,
      });
    });
};
module.exports.getUserRepo = async (username, repo) => {
fetch(
    `https://api.github.com/repos/${username}/${repo}`
  ).then((res) => res.json())
  .then(data => {
  return (repoObj = {
    archived: data.archived,
    createdAt: moment(data.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    defaultBranch: data.default_branch,
    name: data.name,
    description: data.description,
    forks: data.forks_count,
    watchers: data.watchers_count,
    repo_url: `https://github.com/${username}/${repo}`,
    cloneURL: data.clone_url.replace(/(?:api\.)/g, ""),
    deploymentsURL: data.deployments_url.replace(/(?:api\.)/g, ""),
    collaboratorsURL: data.collaborators_url.replace(/(?:api\.)/g, ""),
    contributorsURL: data.contributors_url.replace(/(?:api\.)/g, ""),
    private: data.private,
    owner: data.owner.login,
    gitUrl: data.git_url,
    homepage: data.homepage,
    has_downloads: data.has_downloads,
    has_projects: data.has_projects,
    has_issues: data.has_issues,
    has_pages: data.has_pages,
    has_wiki: data.has_wiki,
    language: data.language,
  });
});
};
module.exports.searchUser = async (query, followerCount) => {
 fetch(
    `https://api.github.com/search/users?q=${query}+followers:%3E${followerCount}`
  ).then((res) => res.json())
  .then(data => {
  let item = data.items[0];
  return (resultObj = {
    avatar: item.avatar_url,
    name: item.login,
    orgs: this.getUserOrgs(`${item.login}`),
    url: `https://github.com/${this.searchUser.name}`,
  });
});
};
module.exports.searchTopic = async (query) => {
  const headers = {
    Accept: "application/vnd.github.mercy-preview+json",
  };
fetch(
    `https://api.github.com/search/topics?q=${query}+is:featured`,
    { method: "GET", headers: headers }
  ).then((res) => res.json());
.then(data => {
  let item = data.items[0];
  return (topicObj = {
    createdAt: moment(item.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    createdBy: item.created_by,
    description: item.description,
    displayName: item.display_name,
    featured: item.featured,
    released: item.released,
    shortDescription: item.short_description,
    updatedAt: moment(item.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
  });
});
};
