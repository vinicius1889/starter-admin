import React from 'react';


const Alert = ({color, persistant, title, onClose, classes, children}) => (
    <div className={`alert ${color}`}>
        {!persistant ? <button type="button" onClick={onClose}  className="close" data-dismiss="alert">×</button> : null}
        {title ? <h4>{title}</h4> : null}
        {children}
    </div>
);

export default Alert;
