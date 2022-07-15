import { Box } from 'components/Box/Box';
import { Btn } from './FeedbackOptions.style';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box m={-3}>
      {Object.keys(options).map(e => (
        <Btn type="button" name={e} key={e} onClick={onLeaveFeedback}>
          {e}
        </Btn>
      ))}
    </Box>
  );
};
