import React from 'react';

const ProgressBar = ({label, now, max, theme}) => {
    let pct = Math.floor(now/max*100);
    return (
        <div>
            <div className="progress-label">{label}</div>
            <div className="progress progress-sm">
                <div className={`progress-bar animated fadeInLeft ${theme}`} role="progressbar" aria-valuenow={now} aria-valuemin="0" aria-valuemax={max} style={{width: pct+'%'}}>
                    <span className="sr-only">{now}</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;