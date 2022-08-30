import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoApi } from '../redux/crypto/crypto';
import Coin from './Coin';

const HomePage = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(fetchCryptoApi());
    }
  });

  return (
    <section className="my-container">
      {crypto.map((coin) => (
        <Coin
          key={coin.id}
          id={coin.id}
          name={coin.name}
          price={coin.price}
        />
      ))}
    </section>
  );
};

export default HomePage;
