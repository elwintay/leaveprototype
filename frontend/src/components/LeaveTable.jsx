import React, { useState } from 'react'
import { useGlobalFilter, useTable } from "react-table"
import fakeData from "../fakeData.json"
import { MdDeleteForever } from "react-icons/md";


function LeaveTable(props){ 

    const [dataOrig, setDataOrig] = React.useState(fakeData)
    if (props.newData && !dataOrig.includes(props.newData)){
        setDataOrig([...dataOrig, props.newData])
        props.setNewData()
    }

    const handleDeleteClick = (leaveId) => {
        console.log(leaveId)
        console.log(dataOrig)
        const newLeaves = dataOrig.filter((leave) => leave.id !== leaveId)
        setDataOrig(newLeaves)
    }
    
    const data = React.useMemo(() => dataOrig, [dataOrig])
    const columns = React.useMemo(() => [
        {
            Header: "Id",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Team",
            accessor: "team",
        },
        {
            Header: "Leave Type",
            accessor: "type",
        },
        {
            Header: "Leave Date",
            accessor: "date",
        },
        {
            Header: "Shift",
            accessor: "shift",
        },
    ], [])

    const initialState = {hiddenColumns: ["id"]}

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data, initialState })

    return (
        <div className="flex flex-row justify-center p-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" {...getTableProps()}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                                <button type="button" onClick={() => handleDeleteClick(row.original.id)}><MdDeleteForever /></button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default LeaveTable