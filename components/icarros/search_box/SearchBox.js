import React from 'react';

const SearchBox =  ({val, onChange}) => (
    <form className="search-content" action="#" method="post">
        <div className={'iconic-input'}>
            <i className="fa fa-search"></i>
            <input type="text" className="form-control" name="keyword" onChange={onChange} value={val}  placeholder="Search..."/>
        </div>
    </form>
);


export default SearchBox;