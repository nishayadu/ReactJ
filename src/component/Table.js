import React,{Component} from 'react'
import Columns from './Columns';

function Table(){
    return(
<table>
    <tbody>
        <tr>
            <Columns/>
        </tr>
    </tbody>
</table>
    )
}

export default Table