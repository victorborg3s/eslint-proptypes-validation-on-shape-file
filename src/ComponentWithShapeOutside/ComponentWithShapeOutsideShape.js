import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

export const propTypes = forbidExtraProps({
  aNestedProp: PropTypes.shape({
    innerPropA: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    innerPropB: PropTypes.string.isRequired,
  }).isRequired,
  notRequiredProp: PropTypes.number,
});

export const defaultProps = {
  notRequiredProp: 0,
};
