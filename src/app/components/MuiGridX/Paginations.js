import { Box, Pagination, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useContext } from "react";
import { MuiGridXContent, MuiGridXType } from "./MuiGridXProvider";
import { getPages, getRows } from "./Process/PaginationProcess";

export const Paginations = () => {
    const { state: { list, pagination }, dispatch } = useContext(MuiGridXContent);
    const { page, pageSize } = pagination;

    return (
        <Box sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'center'
        }}>
            <Typography variant="subtitle2" color={grey[700]}>
                Total Rows :  {getRows(list)}
            </Typography>
            <Box sx={{ flex: 1 }} />
            <Pagination
                page={page}
                count={getPages(getRows(list), pageSize)}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => {
                    dispatch({
                        type: MuiGridXType.GOTO_PAGE,
                        payload: page
                    })
                }}
            />
        </Box>
    )
}