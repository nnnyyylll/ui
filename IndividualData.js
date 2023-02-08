import React from 'react'
import moment from "moment";


export const IndividualData = ({individualExcelData}) =>
 {
    return (
        <>
        
            <th>{moment(individualExcelData.Date).format("H:mm:ss")}</th>
            <th>{individualExcelData.Text}</th>
        </>
    )
}