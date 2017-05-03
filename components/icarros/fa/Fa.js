import React from 'react';



const Fa = ({icon, size, color, classes}) => (
    <i style={size ? {fontSize:size} : {}} className={`fa fa-2x fa-${icon} ${classes}`}></i>
)

export default Fa;