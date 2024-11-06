import { TableHead, TableRow, TableCell } from "@mui/material";
import { useContext } from "react";
import { MuiGridXContent } from "../MuiGridXProvider";
import { Resize } from "./Resize";
import { Sort } from "./Sort";

export const Header = () => {
    const { state: { columns } } = useContext(MuiGridXContent);
    return (
        <TableHead>
            <TableRow>
                {columns.map(({ name, data, sort, width, renderColumn = d => d }, idx) => (
                    <TableCell
                        key={idx}
                        sx={{ px: 0, py: 1 }}
                    >
                        <Resize width={width}>
                            <Sort data={data} enable={sort}>
                                {renderColumn(name)}
                            </Sort>
                        </Resize>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}