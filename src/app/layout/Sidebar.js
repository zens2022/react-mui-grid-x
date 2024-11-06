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
                    href ? (
                        <ListItem
                            key={index}
                            disablePadding
                        >
                            <ListItemButton href={href}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ) : (<ListSubheader key={index}>{text}</ListSubheader>)
                ))}
            </List>
        </Box>
    </Drawer>
)