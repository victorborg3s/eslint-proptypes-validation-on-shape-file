import React from 'react';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';

function ComponentWithShapeInside({ aNestedProp }) {
  return (
    <span id={aNestedProp.innerPropA}>
      This component has its shape in its definition&apos;s file
    </span>
  );
}

ComponentWithShapeInside.propTypes = forbidExtraProps({
  aNestedProp: PropTypes.shape({
    innerPropA: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    innerPropB: PropTypes.string.isRequired,
  }).isRequired,
});

export default ComponentWithShapeInside;
