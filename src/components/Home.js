import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCryptoApi } from '../redux/crypto/crypto';
import '../styles/home.css';

const HomePage = () => {
  const crypto = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    if (crypto.length === 0) {
      dispatch(fetchCryptoApi());
    }
  });

  return (
    <section className="container">
      {crypto.map((coin) => (
        <div className="grid-item" key={coin.rank}>
          <NavLink
            to="/details"
            state={coin}
          >
            <BsArrowRightCircle className="details" />
          </NavLink>
          <div id={coin.id}>
            <h2>{coin.name}</h2>
            <p>
              $
              {Number(coin.priceUsd).toFixed(3)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomePage;
