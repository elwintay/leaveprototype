import React , {useEffect} from 'react'
import { useTable } from "react-table"
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { remove, update } from './redux/leaveSlice';
import Cookies from 'js-cookie'


function LeaveTable(){ 

    const dispatch = useDispatch();
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        credentials: 'include'
    };
    useEffect(()=>{
        console.log(Cookies.get("username"))
        console.log(Cookies.get("jwt"))
        fetch(`https://leaveease-server.vercel.app/api/leave/user/${Cookies.get("username")}`, requestOptions)
            .then(res => res.json())
            .then(leaves => {
                dispatch(update(leaves))
            })
            .catch(err => {
                console.log(err)
        })
    }, [])

    const leaves = useSelector(function(store) {
        return store.leave.value;
    });

    console.log(leaves)

    
    const data = React.useMemo(() => leaves, [leaves])
    const columns = React.useMemo(() => [
        {
            Header: "Id",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "user",
        },
        {
            Header: "Team",
            accessor: "team",
        },
        {
            Header: "Leave Type",
            accessor: "leaveType",
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
                                <button type="button" onClick={() => dispatch(remove(row.original.id))}><MdDeleteForever /></button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default LeaveTable