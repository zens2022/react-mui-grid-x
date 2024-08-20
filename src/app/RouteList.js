import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MuiGridXDemoPage } from "./pages/MuiGridXDemoPage"
import { HomePage } from "./pages/HomePage"

export const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mui-grid-x" element={<MuiGridXDemoPage />} />
            </Routes>
        </BrowserRouter>
    )
}