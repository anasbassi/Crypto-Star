const FETCH_CRYPTO = 'cryptoStat/crypto/FETCH_CRYPTO';
const SEARCH_CRYPTO = 'cryptoStat/crypto/SEARCH_CRYPTO';
const CLEAR_SEARCH = 'cryptoStat/crypto/CLEAR_SEARCH';
const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO:
      return action.crypto;
    case SEARCH_CRYPTO:
      return {
        ...state,
        search: state.crypto.filter((coin) => coin.id === action.payload
        || coin.symbol.toLowerCase() === action.payload
        || coin.name.toLowerCase() === action.payload),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: [],
      };
    default:
      return state;
  }
};

export const fetchCrypto = (crypto) => ({
  type: FETCH_CRYPTO,
  crypto,
});

export const searchCoin = (coin) => ({
  type: SEARCH_CRYPTO,
  payload: coin.toLowerCase(),
});

export const reset = () => ({
  type: CLEAR_SEARCH,
});

export const fetchCryptoApi = () => (dispatch) => fetch('https://api.coincap.io/v2/assets#')
  .then((res) => res.json())
  .then((data) => dispatch(fetchCrypto(data.data)));

export default cryptoReducer;
