import PropTypes from 'prop-types';

function StatsItem({ option, value }) {
  return (
    <li>
      <span>{option}</span>
      <span>
        {value}
        {option === 'Positive feedback' ? '%' : ''}
      </span>
    </li>
  );
}

StatsItem.propTypes = {
  option: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsItem;
