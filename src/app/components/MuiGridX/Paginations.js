import { Box, Pagination, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useContext } from "react";
import { MuiGridXContent, MuiGridXType } from "./MuiGridXProvider";
import { getPages, getRows } from "./Process/PaginationProcess";
import { MuiSelector } from "../MuiSelector/MuiSelector";

export const Paginations = () => {
    const {
        state: { list, page, pageSize, pageSizeOptions, disabledPageSizeOptions },
        dispatch
    } = useContext(MuiGridXContent);

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
            <Box sx={{ flex: 1 }} />
            {!disabledPageSizeOptions ? (
                <MuiSelector
                    sx={{ ml: 1 }}
                    label="Rows per page"
                    value={pageSize}
                    options={pageSizeOptions}
                    selectProps={{
                        inputProps: {
                            sx: { px: 2, py: '4px' }
                        }
                    }}
                    onChange={pageSize => {
                        dispatch({
                            type: MuiGridXType.SET_PAGE_SIZE,
                            payload: pageSize
                        });
                    }}
                />
            ) : (
                <Typography variant="subtitle2" color={grey[700]}>
                    Rows per page : {pageSize}
                </Typography>
            )}
        </Box>
    )
}