import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      id: 'binance-coin',
      rank: '5',
      symbol: 'BNB',
      name: 'BNB',
      supply: '166801148.0000000000000000',
      maxSupply: '166801148.0000000000000000',
      marketCapUsd: '52439674534.8611545591519616',
      volumeUsd24Hr: '591217999.6071906117016311',
      priceUsd: '314.3843742302130592',
      changePercent24Hr: '3.1787192708406841',
      vwap24Hr: '306.8679752615906443',
      explorer: 'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    },
  }),
}));

test('Check if details page renders correctly', () => {
  const tree = render(
    <Router>
      <Details />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
