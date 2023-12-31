import { server } from '../mocks/server';
// import nodeFetch, { Response } from 'node-fetch';
//@ts-ignore
// global.fetch = nodeFetch;
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.

afterAll(() => server.close());
describe('api interaction tests', () => {
  test('should call the mocked api', async () => {
    const res = await fetch('/');
    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    const json = await res.json();
    expect(json).toMatchInlineSnapshot(`
      {
        "foo": "bar",
      }
    `);
  });
});
