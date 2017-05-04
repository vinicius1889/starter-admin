import React from 'react';

const Pager = ({currentPage, itemsPerPage, totalItems, onNext, onPrevious, onPage, classes}) => {

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

export default Pager;