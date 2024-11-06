import { Box, InputLabel, Select, MenuItem } from "@mui/material";

/**
 * ### MuiSelector component
 * 
 * @returns 
 */
export const MuiSelector = ({
    label = "",
    value,
    options = [],
    onChange = value => { },
    itemRender = option => JSON.stringify(option),
    sx = {},
    selectProps = {},
    labelProps = {}
}) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        ...sx
    }}>
        <InputLabel
            sx={{ mr: label ? 1 : undefined }}
            {...labelProps}
        >{label}</InputLabel>
        <Select
            size="small"
            {...selectProps}
            value={value ? JSON.stringify(value) : ''}
            onChange={({ target: { value } }) => onChange(JSON.parse(value))}
        >
            {options.map((option, index) => (
                <MenuItem
                    key={index}
                    value={JSON.stringify(option)}
                >
                    {itemRender(option)}
                </MenuItem>
            ))}
        </Select>
    </Box>
);