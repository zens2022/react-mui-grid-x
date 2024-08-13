import { TableBody, TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { MuiGridXContent } from "../MuiGridXProvider";

export const Content = () => {
    const { state: { columns, list } } = useContext(MuiGridXContent);
    return (
        <TableBody>
            {list.map((row, idx) => (
                <TableRow {...{
                    key: idx,
                    sx: { '&:last-child td, &:last-child th': { border: 0 } }
                }}>
                    {columns.map(({ data }, idx) => (
                        <TableCell key={idx}>
                            {row[data]}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    )
}