import {
    Box,
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader
} from "@mui/material";

export const Sidebar = ({ width, data }) => (
    <Drawer
        variant="permanent"
        sx={{
            width,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
            <List>
                {data.map(({ text, href }, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                    >
                        {href ? (
                            <ListItemButton href={href}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ) : (<ListSubheader>{text}</ListSubheader>)}
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
)