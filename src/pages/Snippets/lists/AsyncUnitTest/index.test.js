// https://testing-library.com/docs/react-testing-library/example-intro/
import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen } from '@testing-library/react';
import AsyncUnitTest from '.';


// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('https://dog.ceo/api/breeds/image/random', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({
      message: "https://images.dog.ceo/breeds/germanshepherd/n02106662_3815.jpg",
      status: "success",
    }))
  }),
)


// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())


it('renders AsyncUnitTest properly', async () => {
  // ARRANGE
  render(<AsyncUnitTest />);
  // ACT
  await screen.findByTestId('dogData')
  // ASSERT
  expect(screen.getByTestId('dogData')).toBeInTheDocument();
});