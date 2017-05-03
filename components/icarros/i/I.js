
import React from 'react';


const I = ({icon, size, color, classes, style}) => {
    let _classes = `material-icons ${classes}`;
    let _style = Object.assign({},
        { fontSize : size ? size : 24,
            verticalAlign: 'middle',
            color : color ? color : '#757575'},
        style);
    return (
        <i className={_classes} style={_style}>{icon}</i>
    )
}

export default I;