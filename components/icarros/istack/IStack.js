import React from 'react';

import I from '../i/I';

const IStack = ({icon, size, color, bg, width, height, classes}) => {

    let _style = {
        backgroundColor : bg ? bg : '#757575',
        width: width,
        height: height
    };

    return (
        <div className={`iconStack ${classes}`}>
      <span style={_style}>
        <I icon={icon} size={size} color={color} style={{lineHeight:height+'px'}} />
      </span>
        </div>
    )
}

export default IStack;