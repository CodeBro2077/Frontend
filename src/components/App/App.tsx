// @ts-ignore
import AppHeader from '../AppHeader/AppHeader.tsx';
import { Route, Routes } from "react-router-dom";
// @ts-ignore
import AppMain from "../AppMain/AppMain.tsx";
// @ts-ignore
import AppTests from "../AppTests/AppTests.tsx";
// @ts-ignore
import AppError from "../AppError/AppError.tsx";

import './App.scss'

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<AppHeader />}>
                    <Route index element={<AppMain />} />
                    <Route path="tests" element={<AppTests />} />
                    <Route path="*" element={<AppError />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
