import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header = ({ children }) => (
    <AppBar
        position="fixed"
        sx={{ zIndex: ({ zIndex: { drawer } }) => drawer + 1 }}
    >
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                {children}
            </Typography>
        </Toolbar>
    </AppBar>
);
