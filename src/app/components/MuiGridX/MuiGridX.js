import { DataTables } from "./DataTables/DataTables";
import { Paginations } from "./Paginations";
import { MuiGridXProvider, MuiGridXProps } from "./MuiGridXProvider";

/**
 * 
 * @param {MuiGridXProps} props 
 * @returns 
 */
export const MuiGridX = props => (
    <MuiGridXProvider {...props}>
        <DataTables />
        <Paginations />
    </MuiGridXProvider>
)