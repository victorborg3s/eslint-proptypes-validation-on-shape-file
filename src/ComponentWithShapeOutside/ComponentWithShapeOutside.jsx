import React from 'react';
import { propTypes, defaultProps } from './ComponentWithShapeOutsideShape';

// Bug: not validating `a` as it isn't in the shape
function ComponentWithShapeOutside({ aNestedProp, notRequiredProp, a }) {
  return (
    <span id={aNestedProp.innerPropA}>
      This component has its shape in its definition&apos;s file
      {aNestedProp.innerPropB}
      :
      {notRequiredProp}
      {a}
    </span>
  );
}

ComponentWithShapeOutside.propTypes = propTypes;
ComponentWithShapeOutside.defaultProps = defaultProps;

export default ComponentWithShapeOutside;
