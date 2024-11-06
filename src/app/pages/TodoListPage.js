import { useEffect, useState } from "react";
import {
    Box,
    Card,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    TextField,
    InputAdornment,
    Button
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { TodoService } from "../service/TodoService";
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoListPage = () => {

    const [list, setList] = useState([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        let process = async () => {
            try {
                await loadList();
            } catch (err) {
                console.log(err);
            }
        }
        process();
    }, []);

    const loadList = async () => {
        let { data } = await TodoService.getList();
        setList(data);
    }

    /**
     * @param {number} id 
     */
    const delTask = async id => {
        await TodoService.delTask(id);
    }

    const addTask = async task => {
        await TodoService.addTask(task);
    }

    const addEvent = async () => {
        try {
            await addTask(task);
            await loadList();
            setTask("");
        } catch (err) {
            console.log(err);
        }
    }

    const delEvent = async (id, e) => {
        try {
            await delTask(id);
            await loadList();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Box>
            <Card
                elevation={3}
                sx={{
                    width: 600,
                    p: 1
                }}
            >
                <Typography variant="h5" color={grey[700]}>
                    Todo List
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <TextField
                        sx={{ my: 1, flex: 1 }}
                        size="small"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    Task =
                                </InputAdornment>
                            ),
                        }}
                        value={task}
                        onChange={({ target: { value } }) => { setTask(value) }}
                    />
                    <Button
                        variant="outlined"
                        disabled={task === ""}
                        sx={{ ml: 1 }}
                        onClick={addEvent}
                    >
                        Add
                    </Button>
                </Box>
                <List dense>
                    {list.map(({ id, task }, index) => (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <IconButton
                                    onClick={delEvent.bind(this, id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText>
                                {id} - {task}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </Box>
    )
}