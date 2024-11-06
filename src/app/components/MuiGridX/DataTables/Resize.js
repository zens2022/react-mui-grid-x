import { Resizable } from 're-resizable';
export const Resize = ({ children, width }) => {
    const enable = {
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false
    }

    return (
        <Resizable
            defaultSize={{ width }}
            enable={enable}
            style={{
                borderRight: '1px solid #eee',
                padding: '2px 10px',
                wordBreak: 'break-all',
            }}
        >
            {children}
        </Resizable>
    )
}