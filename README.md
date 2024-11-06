# react-mui-grid-x

# Getting Started
``` js
import { MuiGridX } from "mui-grid-x";

const getList = () => _.range(_.random(10, 60)).map(value => ({
    column1: moment().add(value, 'hours').format('YYYY-MM-DD HH:mm'),
    column2: value,
    column3: value,
    column4: ['item-1', 'item-2', 'item-3', 'item-4'][_.random(0, 3)],
    column5: value
}));

const [list, setList] = useState(getList());

const columns = [{
    name: 'Column - 1',
    data: 'column1',
    width: 300,
    sort: true,
    renderColumn: value => (<Box sx={{ color: '#900' }}>{value}</Box>),
}, {
    name: 'Column - 2',
    data: 'column2',
    width: 300,
    sort: true,
}, {
    name: 'Column - 3',
    data: 'column3',
    width: 200,
    renderCell: value => (<button onClick={() => { alert(value) }}>Button</button>)
}, {
    name: 'Column - 4',
    data: 'column4',
    sort: true,
    width: 200,
}, {
    name: 'Column - 5',
    data: 'column5',
    width: 300,
}];

return (
    <Container>
        <Button
            sx={{ mt: 3 }}
            variant="outlined"
            onClick={() => {
                setList(getList())
            }}
        >
            Run
        </Button>
        <Box sx={{ mt: 3 }}>
            <MuiGridX
                columns={columns}
                list={list}
            />
        </Box>
    </Container>
)
```