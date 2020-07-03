import users from '../../src/mock-api/data/users.json'
import mockApi from '../../src/mock-api/index'

describe('MockAPI', () => {
  it('fetchUsers method', async () => {
    expect.assertions(1);
    const data = await mockApi.fetchUsers();
    expect(data).toEqual(users);
  })
});