import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DemoPage } from "../pages/DemoPage"

export const RouteList = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DemoPage />} />
            </Routes>
        </BrowserRouter>
    )
}