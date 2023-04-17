import PropTypes from 'prop-types';
import { StatisticsUl, StatisticsLi, StatisticsP } from './Statistics.styled';
import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsUl>
      <StatisticsLi>
        <CgSmile />
        <StatisticsP> Good: {good}</StatisticsP>
      </StatisticsLi>
      <StatisticsLi>
        <CgSmileNone />
        <StatisticsP> Neutral: {neutral}</StatisticsP>
      </StatisticsLi>
      <StatisticsLi>
        <CgSmileSad />
        <StatisticsP> Bad: {bad}</StatisticsP>
      </StatisticsLi>
      <StatisticsLi>Total: {total}</StatisticsLi>
      <StatisticsLi>Positive feedback: {positivePercentage}%</StatisticsLi>
    </StatisticsUl>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
