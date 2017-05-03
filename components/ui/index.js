/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModules UI
 */

import React from 'react';

const UI = {};









UI.IStack = ({icon, size, color, bg, width, height, classes}) => {
  
  let _style = {
    backgroundColor : bg ? bg : '#757575',
    width: width,
    height: height
  };

  return (
    <div className={`iconStack ${classes}`}>
      <span style={_style}>
        <UI.I icon={icon} size={size} color={color} style={{lineHeight:height+'px'}} />
      </span>
    </div>
  )
}



UI.SearchBox = ({val, onChange}) => (
   <form className="search-content" action="#" method="post">
        <div className={'iconic-input'}>
          <i className="fa fa-search"></i>
          <input type="text" className="form-control" name="keyword" onChange={onChange} value={val}  placeholder="Search..."/>
        </div>
    </form>
);



UI.PageHead = ({title, subtitle, children, classes}) => (
  <div className={`page-head ${classes}`}>
    <h3 dangerouslySetInnerHTML={{__html:title}}></h3>
    <span className="sub-title">{subtitle}</span>
    {children}  
  </div>
);


UI.Pager = ({currentPage, itemsPerPage, totalItems, onNext, onPrevious, onPage, classes}) => {

  let pages = totalItems / itemsPerPage;
  
  let buttonArray = [];
  for (var i=0; i < pages; i++) {
    buttonArray.push(i);
  }

  const linkButtons = buttonArray.map(index => {
    return <li key={'page-key-' + index} className="paginate_button " aria-controls="DataTables_Table_1" tabIndex="0"><a href="#" onClick={onPage}>{index+1}</a></li>
  })

  return (
  	<div className={`tbl-footer ${classes}`}>
      <div>
          <div className="text-right m-t-lg">Showing {(currentPage*itemsPerPage)+1} to {(currentPage*itemsPerPage)+ itemsPerPage} of {totalItems} entries</div>
      </div>
      <div>
          <div className="dataTables_paginate paging_simple_numbers text-right" id="DataTables_Table_1_paginate">
              <ul className="pagination" style={{marginTop:5}}>
                  <li className="paginate_button previous disabled" aria-controls="DataTables_Table_1" tabIndex="0" id="DataTables_Table_1_previous"><a href="javascript:;" onClick={onPrevious}>Previous</a></li>
                  {linkButtons}
                  <li className="paginate_button next" aria-controls="DataTables_Table_1" tabIndex="0" id="DataTables_Table_1_next"><a href="javascript:;" onClick={onNext}>Next</a></li>
              </ul>
          </div>
      </div>
    </div>
  )
};


 
export default UI;