import { createContext, useEffect, useReducer } from "react";
import { getRenderListByPage } from "./Process/PaginationProcess";

export const MuiGridXContent = createContext();

export const MuiGridXProps = {
    // DataTables props
    columns: [],
    list: [],
    renderList: [],

    // Pagination props
    page: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 15]
};

export const MuiGridXType = {
    INIT_TABLE: 'INIT_TABLE',
    GOTO_PAGE: 'GOTO_PAGE',
    SET_PAGE_SIZE: 'SET_PAGE_SIZE'
};

const reducer = (state, { type, payload }) => {
    let {
        list,
        pageSize
    } = state;
    switch (type) {
        case MuiGridXType.INIT_TABLE:
            state.list = payload;
            state.page = 1;
            state.renderList = getRenderListByPage(payload, 1, pageSize);
            break;
        case MuiGridXType.GOTO_PAGE:
            state.page = payload;
            state.renderList = getRenderListByPage(list, payload, pageSize);
            break;
        case MuiGridXType.SET_PAGE_SIZE:
            state.page = 1;
            state.pageSize = payload;
            state.renderList = getRenderListByPage(list, 1, payload);
            break;
        default:
            console.error(
                `The [ ${type} ] type for MuiGridX is incorrect. Please refer to MuiGridXType.`
            );
    }
    return { ...state };
}

export const MuiGridXProvider = ({ children, ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        ...MuiGridXProps,
        ...props
    });

    useEffect(() => {
        dispatch({ type: MuiGridXType.INIT_TABLE, payload: props.list })
    }, [props.list]);

    return (
        <MuiGridXContent.Provider value={{ state, dispatch }}>
            {children}
        </MuiGridXContent.Provider>
    )
}