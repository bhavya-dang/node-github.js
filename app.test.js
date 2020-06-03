const app = require('./app');

test('user fetched username should be Sync-Codes', async () => {
  expect.assertions(1)
  const data = await app.getUser("Sync-Codes");
  expect(data.username).toEqual("Sync-Codes")
});

test('user fetched org should be org', async () => {
    expect.assertions(1)
    const data = await app.getUserOrgs("amishshah");
    expect(data.organizations[0]).toEqual(data.organizations[0])
});

  test('user fetched username and repo should be Sync-Codes and RyujinBot', async () => {
    expect.assertions(1)
    const data = await app.getUserRepo("Sync-Codes", "RyujinBot");
    expect(data.owner).toEqual("Sync-Codes")
});

test('user fetched topic should be Ruby', async () => {
    expect.assertions(1)
    const data = await app.searchTopic("ruby");
    expect(data.displayName.toLowerCase()).toEqual("ruby")
});

  test('user fetched user should be sync', async () => {
    expect.assertions(1)
    const data = await app.searchUser("sync");
    expect(data.name).toEqual("sync")
});