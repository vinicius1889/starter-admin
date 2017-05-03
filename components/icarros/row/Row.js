import React from 'react';

const Row = ({children, classes, mason}) => (
    <div className={`row ${classes} ${mason ? `mason_row_3` : ``}`}>
        {children}
    </div>
);


export default Row;
