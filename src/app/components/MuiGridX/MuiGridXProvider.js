import { createContext, useReducer } from "react";

export const MuiGridXContent = createContext();

export const MuiGridXProps = {
    columns: [],
    list: []
};

export const MuiGridXType = {
    INIT_TABLE: 'INIT_TABLE'
};

const reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case MuiGridXType.INIT_TABLE:
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
    return (
        <MuiGridXContent.Provider value={{ state, dispatch }}>
            {children}
        </MuiGridXContent.Provider>
    )
}