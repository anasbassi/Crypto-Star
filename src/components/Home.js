import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { loadCoinThunk, reset, searchCoin } from '../redux/crypto/crypto';
import SearchBar from './Search';
import '../styles/home.css';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  const crypt = coins.crypto;

  useEffect(() => {
    dispatch(loadCoinThunk());
    dispatch(reset());
  }, []);

  const [value, setValue] = useState({ search: '' });

  const handleSearch = (e) => {
    e.preventDefault();
    if (value.search === '') {
      return;
    }
    dispatch(searchCoin(value.search));
    setValue({ search: '' });
  };

  const handleChange = (e) => {
    setValue({ search: e.target.value });
  };

  return (
    <section className="main-container">
      <SearchBar
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchValue={value.search}
      />
      <div className="container">
        {crypt.map((coin) => (
          <div key={coin.rank} className="grid-item">
            <NavLink
              to="/details"
              state={coin}
            >
              <BsArrowRightCircle className="details" />
            </NavLink>
            <h2>{coin.name}</h2>
            <p>
              $
              {Number(coin.priceUsd).toFixed(3)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomePage;
