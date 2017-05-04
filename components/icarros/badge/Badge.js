import React from 'react';

const Badge = ({color, title, icon, classes}) => (
    <div className={classes} style={{width:67}}>
        <div className="badgestack">
            <div className={`hexagon badge-${color}`} />
            <i className={`fa fa-2x ${icon}`}></i>
        </div>
        <small className="text-muted">{title}</small>
    </div>
);


export default Badge;