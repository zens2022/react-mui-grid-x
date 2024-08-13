import {
    TableContainer,
    Table,
    Paper
} from "@mui/material";
import { Header } from "./Header";
import { Content } from "./Content";

export const DataTables = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{
                width: 'max-content'
            }}>
                <Header />
                <Content />
            </Table>
        </TableContainer>
    )
}