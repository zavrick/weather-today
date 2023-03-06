import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store'; // import the configureMockStore function
import App from './App';

const mockStore = configureMockStore(); // create a mock store
const store = mockStore({}); // initialize the mock store with an empty state object

test('renders header', () => {
  render(
    <Provider store={store}> {/* wrap the App component with the Provider component */}
      <App />
    </Provider>
  );
  const header = screen.getByText(/today's weather/i);
  expect(header).toBeInTheDocument();
});