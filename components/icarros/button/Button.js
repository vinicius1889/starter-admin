import React from 'react';

const Button = ({icon, label, size, color, classes, onClick, style, tooltip, rounded = false}) => {
    const button_icon = icon ? <i className={`${label ? 'm-r-xs' : ''} fa ${icon}`} /> : null;
    const button_label = label ? <span className="text">{label}</span> : null;
    return <button style={style} data-balloon={tooltip} onClick={onClick} className={`btn ${color} ${size} ${classes} ${rounded ? 'btn-rounded' : ''}`}>{button_icon}{button_label}</button>
}

export default Button;