import { Personajes } from "./pages/Personajes";
import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Layout } from "./components/Layout";

function App() {

    return (
        <>
            <Routes>
                <Route element={<Layout />}>

                    <Route path="/" element={<Inicio />} />

                    <Route path="/personajes" element={<Personajes />} />

                </Route>

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;