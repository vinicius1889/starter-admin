import React from 'react';

const Label = ({color, classes, title}) => (
    <span className={`label ${color} ${classes}`}>
    {title}
  </span>
)

export default Label;

