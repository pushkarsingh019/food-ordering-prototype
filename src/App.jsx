import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RestrauntScreen from "./screens/RestrauntScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route
                    path="/restraunt/:restrauntId"
                    element={<RestrauntScreen />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
