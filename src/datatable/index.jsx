// import React from 'react';
import './index.css'

function deleteAttributeFromJson(jsonData, attr) {
  // TODO change attr in list to delete multiple attr
Object.keys(jsonData).map((index) => {              
      delete jsonData[index]['userId']}
    )
}
export default function Datatable({data}) {
  deleteAttributeFromJson(data,'userId')
const columns = data[0] && Object.keys(data[0]);
return <table cellPadding={0} cellSpacing={0}>
<thead>
    <tr> {data[0]&& columns.map((heading) => <th>{heading}</th>)}</tr>
    </thead>
    <tbody>
    {data.map(row => <tr>
      {
        columns.map(column => <td>{row[column]}</td>)
      }
    </tr>)}
    </tbody>
    </table>
}
