import React from 'react';

const Table = ({data, classes}) => (
    <table className={`table ${classes}`}>
        <thead>
        <tr>
            {Object.keys(data[0]).map((key,i) => {
                return <th key={'row-'+key+'-'+i}>{key}</th>
            })}
        </tr>
        </thead>
        <tbody>
        {data.map((row,j) => {
            return <tr key={'r-'+j}>
                {Object.keys(row).map((column,k) => {
                    return <td key={'col-'+column+'-'+k}>{row[column]}</td>
                })}
            </tr>
        })}
        </tbody>
    </table>
)

export default Table;