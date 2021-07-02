import PropTypes from 'prop-types';
import StatsItem from 'components/StatsItem/StatsItem';

function Statistics({ positivePercentage = 0, ...props }) {
  return (
    <ul>
      {Object.entries(props).map(([key, value]) => {
        return <StatsItem key={key} option={key} value={value} />;
      })}
      <StatsItem
        key={'positivePercentage'}
        option={'Positive feedback'}
        value={positivePercentage}
      />
    </ul>
  );
}

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
