import { createContext, useEffect, useReducer } from "react";
import { getRenderListByPage } from "./Process/PaginationProcess";

export const MuiGridXContent = createContext();

export const MuiGridXProps = {
    columns: [],
    list: [],
    renderList: [],
    pagination: {
        page: 1,
        pageSize: 5
    }
};

export const MuiGridXType = {
    INIT_TABLE: 'INIT_TABLE',
    GOTO_PAGE: 'GOTO_PAGE'
};

const reducer = (state, { type, payload }) => {
    let {
        list,
        pagination: { pageSize }
    } = state;
    switch (type) {
        case MuiGridXType.INIT_TABLE:
            state.list = payload;
            state.pagination.page = 1;
            state.renderList = getRenderListByPage(payload, 1, pageSize);
            break;
        case MuiGridXType.GOTO_PAGE:
            state.pagination.page = payload;
            state.renderList = getRenderListByPage(list, payload, pageSize);
            break;
        default:
            console.error(
                `The [ ${type} ] type for MuiGridX is incorrect. Please refer to MuiGridXType.`
            );
    }
    return { ...state };
}

export const MuiGridXProvider = ({ children, columns, list, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        ...MuiGridXProps,
        columns,
        list,
        ...props
    });

    useEffect(() => {
        dispatch({ type: MuiGridXType.INIT_TABLE, payload: list })
    }, [list])

    return (
        <MuiGridXContent.Provider value={{ state, dispatch }}>
            {children}
        </MuiGridXContent.Provider>
    )
}