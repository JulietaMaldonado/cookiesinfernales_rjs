import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarritoProvider } from "./components/ContextoCarrito/ContextoCarrito";

ReactDOM.createRoot(document.getElementById("root")).render(

    <CarritoProvider>
        <App />
    </CarritoProvider>

);