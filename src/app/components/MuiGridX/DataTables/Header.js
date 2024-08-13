import { TableHead, TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { MuiGridXContent } from "../MuiGridXProvider";

export const Header = () => {
    const { state: { columns } } = useContext(MuiGridXContent);
    return (
        <TableHead>
            <TableRow>
                {columns.map(({ name }, idx) => (
                    <TableCell key={idx}>
                        {name}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}