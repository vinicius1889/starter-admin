import React from 'react';


const PageHead = ({title, subtitle, children, classes}) => (
        <div className={`page-head ${classes}`}>
            <h3 dangerouslySetInnerHTML={{__html:title}}></h3>
            <span className="sub-title">{subtitle}</span>
            {children}
        </div>
    );


export default PageHead;
