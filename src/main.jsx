import React from "react";
import ReactDOM from "react-dom/client";
// // Імпорт стилів нормалізації
// import "modern-normalize";
import "./index.css";
import App from "./components/App.jsx";
import {store} from "./redux/store.js";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
