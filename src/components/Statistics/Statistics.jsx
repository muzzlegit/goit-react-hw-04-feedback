import PropTypes from 'prop-types';
//STYLES
import theme from 'theme';
import { List, Item } from './Statistics.styled';
//CONSTS
const colors = {
  good: theme.colors.green,
  neutral: theme.colors.acent,
  bad: theme.colors.red,
};

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <List>
      <Item color={colors.good}>Good: {good}</Item>
      <Item color={colors.neutral}>Neutral: {neutral}</Item>
      <Item color={colors.bad}>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive Feedback: {positivePercentage} %</Item>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
