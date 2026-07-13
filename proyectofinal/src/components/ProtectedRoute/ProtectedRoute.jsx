import { Navigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../AuthContext/AuthContext";

export function ProtectedRoute({children}){

const {logueado}=useContext(AuthContext);

if(!logueado){

return <Navigate to="/login"/>

}

return children;

}