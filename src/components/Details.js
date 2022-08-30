import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section className="my-container">
      <h1 className="title">
        {state.name}
        <span>
          {state.symbol}
        </span>
      </h1>
      <p>
        Current price: $
        {Number(state.priceUsd).toFixed(3)}
      </p>
      <p>
        24hr volume:
        {Number(state.volumeUsd24Hr).toFixed(3)}
      </p>
      <p>
        24hr Change percentage:
        {Number(state.changePercent24Hr).toFixed(3)}
      </p>
      <p>
        Marker Cap:
        {Number(state.marketCapUsd).toFixed(3)}
      </p>
      <p>
        Supply:
        {Number(state.supply).toFixed(3)}
      </p>
      <p>
        Maximum Supply:
        {Number(state.maxSuppply).toFixed(3)}
      </p>
    </section>
  );
};

export default Details;
