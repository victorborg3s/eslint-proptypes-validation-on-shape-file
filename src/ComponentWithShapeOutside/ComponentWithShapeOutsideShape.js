import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

const propTypes = forbidExtraProps({
  aNestedProp: PropTypes.shape({
    innerPropA: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    innerPropB: PropTypes.string.isRequired,
  }).isRequired,
});

export default propTypes;
