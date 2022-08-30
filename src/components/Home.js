import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCryptoApi } from '../redux/crypto/crypto';

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
        <div key={coin.rank}>
          <NavLink
            to="/details"
            id={coin.id}
            state={coin}
          >
            <h2>{coin.name}</h2>
            <p>
              $
              {Number(coin.priceUsd).toFixed(3)}
            </p>
          </NavLink>
        </div>
      ))}
    </section>
  );
};

export default HomePage;
