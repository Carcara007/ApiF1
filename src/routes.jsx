import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./routes/Home"
import Miami from './routes/Miami'
import Canada from './routes/Canada'
import China from './routes/China'
import Monaco from './routes/Monaco'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/canada" element={<Canada />} ></Route>
                <Route path="/china" element={<China />} ></Route>
                <Route path="/miami" element={<Miami />} ></Route>
                <Route path="/monaco" element={<Monaco />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes