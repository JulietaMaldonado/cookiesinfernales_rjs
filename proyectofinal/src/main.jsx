import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CarritoProvider } from "./components/ContextoCarrito/ContextoCarrito";
import { AuthProvider } from "./components/AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <AuthProvider>
    <CarritoProvider>
        <App />
    </CarritoProvider>
</AuthProvider>
);