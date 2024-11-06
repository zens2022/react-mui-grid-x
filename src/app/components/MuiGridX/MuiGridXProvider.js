import { createContext, useEffect, useReducer } from "react";
import { getRenderListByPage } from "./Process/PaginationProcess";
import { sortList } from "./Process/SortProcess";

export const MuiGridXContent = createContext();

export const MuiGridXProps = {
    // DataTables props
    columns: [],
    list: [],
    renderList: [],
    height: 400,

    // Pagination props
    page: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 15],
    disabledPageSizeOptions: false,

    // Sort Ex. { data: 'XXXX', type: true }
    sort: { data: undefined, type: undefined }
};

export const MuiGridXType = {
    INIT_TABLE: 'INIT_TABLE',
    GOTO_PAGE: 'GOTO_PAGE',
    SET_PAGE_SIZE: 'SET_PAGE_SIZE',
    SET_SORT_COLUMN: 'SET_SORT_COLUMN',
};

const reducer = (state, { type, payload }) => {
    let {
        list,
        page,
        pageSize,
        sort,
    } = state;
    switch (type) {
        case MuiGridXType.INIT_TABLE:
            state.list = payload;
            state.page = 1;
            list = sortList(payload, sort);
            state.renderList = getRenderListByPage(list, 1, pageSize);
            break;
        case MuiGridXType.GOTO_PAGE:
            state.page = payload;
            list = sortList(list, sort);
            state.renderList = getRenderListByPage(list, payload, pageSize);
            break;
        case MuiGridXType.SET_PAGE_SIZE:
            state.page = 1;
            state.pageSize = payload;
            list = sortList(list, sort);
            state.renderList = getRenderListByPage(list, 1, payload);
            break;
        case MuiGridXType.SET_SORT_COLUMN:
            state.sort = payload;
            list = sortList(list, payload);
            state.renderList = getRenderListByPage(list, page, pageSize);
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