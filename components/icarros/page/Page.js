import React from 'react';

const Page = ({children, height, classes}) => (
    <section className="vbox" style={height ? {height:height} : {height:window.innerHeight}}>
        <section className="scrollable">
            <div className="container full content-body">
                {children}
            </div>
        </section>
    </section>
)

export default Page;