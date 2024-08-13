import { DataTables } from "./DataTables/DataTables";
import { MuiGridXProvider } from "./MuiGridXProvider";

export const MuiGridX = props => (
    <MuiGridXProvider {...props}>
        <DataTables />
    </MuiGridXProvider>
)