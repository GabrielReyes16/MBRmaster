import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <iframe
                            src="/ui/html/index.html"
                            title="UI"
                            style={{ border: "none", width: "100%", height: "100vh" }}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
