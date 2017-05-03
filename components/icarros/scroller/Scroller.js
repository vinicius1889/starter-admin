import React from 'react';

const Scroller = ({children, height}) => (
    <div className="scrollable" style={{height:height}}>
        {children}
    </div>
)

export default Scroller;