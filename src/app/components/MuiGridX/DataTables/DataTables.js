import {
    TableContainer,
    Table,
    Paper
} from "@mui/material";
import { Header } from "./Header";
import { Content } from "./Content";
import { useContext } from "react";
import { MuiGridXContent } from "../MuiGridXProvider";

export const DataTables = () => {
    const { state: { height } } = useContext(MuiGridXContent);
    return (
        <TableContainer
            component={Paper}
            sx={{ height }}
        >
            <Table
                stickyHeader
                sx={{
                    width: 'max-content',
                }}
            >
                <Header />
                <Content />
            </Table>
        </TableContainer>
    )
}