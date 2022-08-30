const FETCH_CRYPTO = 'cryptoStat/crypto/FETCH_CRYPTO';

const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CRYPTO:
      return action.crypto;
    default:
      return state;
  }
};

export const fetchCrypto = (crypto) => ({
  type: FETCH_CRYPTO,
  crypto,
});

export const fetchCryptoApi = () => async (dispatch) => {
  const result = await fetch('https://api.coincap.io/v2/assets#');
  const json = await result.json();
  const crypto = json.map((coins) => ({
    id: coins.id,
    name: coins.name,
    price: coins.price,
  }));
  dispatch(fetchCrypto(crypto));
};

export default cryptoReducer;
