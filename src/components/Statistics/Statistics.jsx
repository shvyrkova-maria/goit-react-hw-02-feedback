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

Statistics.protoType = {
  props: PropTypes.array.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
};

export default Statistics;
