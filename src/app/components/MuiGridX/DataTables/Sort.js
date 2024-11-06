import { Box } from "@mui/material";
import { useContext } from "react";
import { MuiGridXContent, MuiGridXType } from "../MuiGridXProvider";
import AscIcon from '@mui/icons-material/KeyboardArrowUp';
import DescIcon from '@mui/icons-material/KeyboardArrowDown';
import NotActiveIcon from '@mui/icons-material/Remove';

export const Sort = ({ data, enable, children }) => {
    const {
        state: { sort },
        dispatch
    } = useContext(MuiGridXContent);

    const Icon = sort.data !== data ? NotActiveIcon : (
        sort.type ? AscIcon : DescIcon
    );

    return enable ? (
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Box
                sx={{
                    flex: 1
                }}
            >
                {children}
            </Box>
            <Icon
                sx={{
                    userSelect: 'none',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    dispatch({
                        type: MuiGridXType.SET_SORT_COLUMN,
                        payload: { data, type: !sort.type }
                    })
                }}
            />
        </Box>
    ) : children
}