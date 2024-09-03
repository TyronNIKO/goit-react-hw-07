import React from "react";
import ReactDOM from "react-dom/client";
// // Імпорт стилів нормалізації
// import "modern-normalize";
import "./index.css";
import App from "./components/App.jsx";
import {persistor, store} from "./redux/store.js";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
