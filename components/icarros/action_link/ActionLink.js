import React from 'react';

const ActionLink = ({dataid, itemSelected, children}) => (
    <a href="#" key={dataid} onClick={itemSelected}>{children}</a>
)

export default ActionLink;
