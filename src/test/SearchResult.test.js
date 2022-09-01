import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import SearchResult from '../components/SearchResult';

test('Check if Searched results renders correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <SearchResult />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
