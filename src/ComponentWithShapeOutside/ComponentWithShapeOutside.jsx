import React from 'react';
import propTypes from './ComponentWithShapeOutsideShape';

function ComponentWithShapeOutside({ aNestedProp }) {
  return (
    <span id={aNestedProp.innerPropA}>
      This component has its shape in its definition&apos;s file
      {aNestedProp.innerPropB}
    </span>
  );
}

ComponentWithShapeOutside.propTypes = propTypes;

export default ComponentWithShapeOutside;
