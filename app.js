// Dependencies
const fetch = require("node-fetch"); // fetching data
const moment = require("moment"); // parsing time

module.exports.getUser = async (username) => {
  const data = await fetch(
    `https://api.github.com/users/${username}`
  ).then((res) => res.json());

  const userObj = {
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
    total_private_repos:
      data.private_repos === undefined ? "None" : data.private_repos,
  };
  return userObj;
};
module.exports.getUserOrgs = async (username) => {
  const data = await fetch(
    `https://api.github.com/users/${username}/orgs`
  ).then((res) => res.json());
  let orgs = [];
  for (i = 0; i < data.length; i++) {
    orgs.push(data[i].login);
  }

  let orgRepos = [];
  for (i = 0; i < data.length; i++) {
    orgRepos.push(data[i].repos_url.replace(/(?:api\.)/g, ""));
  }

  let membersURL = [];
  for (i = 0; i < data.length; i++) {
    membersURL.push(data[i].members_url.replace(/(?:api\.)/g, ""));
  }

  const orgObj = {
    organizations: orgs,
    repos_url: orgRepos,
    members_url: membersURL,
  };
  return orgObj;
};
module.exports.getUserRepo = async (username, repo) => {
  const data = await fetch(
    `https://api.github.com/repos/${username}/${repo}`
  ).then((res) => res.json());
  const repoObj = {
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
  };
  return repoObj;
};

module.exports.searchUser = async (query) => {
  const data = await fetch(
    `https://api.github.com/search/users?q=${query}`
  ).then((res) => res.json());
  const d = await fetch(
    `https://api.github.com/users/${query}/orgs`
  ).then((res) => res.json());
  let allOrgs = [];
  for (i = 0; i < d.length; i++) {
    allOrgs.push(d[i].login);
  }

  let item = data.items[0];
  const resultObj = {
    avatar: item.avatar_url,
    name: item.login,
    orgs: allOrgs,
    url: `https://github.com/${item.login}`,
  };
  return resultObj;
};
module.exports.searchTopic = async (query) => {
  const headers = {
    Accept: "application/vnd.github.mercy-preview+json",
  };
  const data = await fetch(
    `https://api.github.com/search/topics?q=${query}+is:featured`,
    { method: "GET", headers: headers }
  ).then((res) => res.json());

  let item = data.items[0];
  const topicObj = {
    createdAt: moment(item.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
    createdBy: item.created_by,
    description: item.description,
    displayName: item.display_name,
    featured: item.featured,
    released: item.released,
    shortDescription: item.short_description,
    updatedAt: moment(item.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a"),
  };
  return topicObj;
};
