const GithubClient = require("./index");
const client = new GithubClient();

test("the data is Mar 7th, 2018", () => {
  return client.getUser("Sync-Codes").then((data) => {
    expect(data.createdAt).toBe("Mar 7th, 2018");
  });
}, 3000);
