import React from 'react';



const Col = ({children, size, offset ,classes}) => {
    let colSize = '';
    if (typeof size === 'object') {
        colSize = Object.keys(size).map(k => {
            return `col-${k}-${size[k]} `;
        }).join(' ');
    } else {
        colSize = `col-md-${size}`;
    }

    let offsetSize = '';
    if (typeof offset === 'object') {
        offsetSize = Object.keys(offset).map(k => {
            return `col-${k}-offset-${offset[k]} `;
        }).join(' ');
    } else {
        offsetSize = `col-md-offset-${offset}`;
    }


    return (
        <div className={`${colSize} ${classes} ${offset ? `${offsetSize}` : ''}`}>
            {children}
        </div>
    );
};

export default Col;