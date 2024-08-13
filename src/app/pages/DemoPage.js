import { Box, Container } from "@mui/material";
import { MuiGridX } from "../components/MuiGridX/MuiGridX";
import _ from "lodash";

export const DemoPage = () => {

    const columns = [{
        name: 'Column - 1',
        data: 'column1'
    }, {
        name: 'Column - 2',
        data: 'column2'
    }, {
        name: 'Column - 3',
        data: 'column3'
    }, {
        name: 'Column - 4',
        data: 'column4'
    }, {
        name: 'Column - 5',
        data: 'column5'
    }];

    const list = _.range(10).map(value => ({
        column1: value,
        column2: value,
        column3: value,
        column4: value,
        column5: value
    }))

    return (
        <Container>
            <Box sx={{ mt: 3 }}>
                <MuiGridX
                    columns={columns}
                    list={list}
                />
            </Box>
        </Container>
    )
}