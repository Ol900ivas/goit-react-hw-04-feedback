import PropTypes from 'prop-types';
import { Button, FeedbackWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrap>
      {options.map(button => (
        <li key={button}>
          <Button type="button" onClick={onLeaveFeedback}>
            {button}
          </Button>
        </li>
      ))}
    </FeedbackWrap>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
