import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';

const Coin = (props) => {
  const {
    id, name, price,
  } = props;

  // const dispatch = useDispatch();

  // const details = () => {
  //   dispatch(viewDetails(id));
  // };

  return (
    <div id={id}>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Coin;
