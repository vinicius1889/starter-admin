import React from 'react';


const Panel = ({title, children, scrollHeight, classes, height}) => {

    let baseStyle = {};
    if (height) {
        baseStyle = {height:height, overflow:'hidden'};
    }
    return (
        <section style={scrollHeight ? Object.assign({},baseStyle,{paddingBottom:30}) : baseStyle} className="panel panel-default m-b-lg">
            {title ? <header className="panel-heading text-uc">{title}{title ? <hr /> : null}</header> : null}
            <section style={scrollHeight ? {height:scrollHeight, overflowY:'scroll'} : {}} className={`panel-body ${classes}`}>
                {children}
            </section>
        </section>
    )
}


export default Panel;

