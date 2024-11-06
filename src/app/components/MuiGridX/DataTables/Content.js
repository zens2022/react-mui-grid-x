import { TableBody, TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { MuiGridXContent } from "../MuiGridXProvider";

export const Content = () => {
    const { state: { columns, renderList } } = useContext(MuiGridXContent);
    return (
        <TableBody>
            {renderList.map((row, rowIndex) => (
                <TableRow
                    key={`row-${rowIndex}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    {columns.map(({ data, renderCell = d => d }, columnIndex) => (
                        <TableCell key={`cell-${rowIndex}-${columnIndex}`}>
                            {renderCell(row[data], row, data, rowIndex, columnIndex)}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    )
}