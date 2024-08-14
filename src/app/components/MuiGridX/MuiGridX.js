import { DataTables } from "./DataTables/DataTables";
import { Paginations } from "./Paginations";
import { MuiGridXProvider } from "./MuiGridXProvider";

export const MuiGridX = props => (
    <MuiGridXProvider {...props}>
        <DataTables />
        <Paginations />
    </MuiGridXProvider>
)