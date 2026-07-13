import { createContext, useState } from "react";

import { db } from '../../firebase';

import {

collection,

getDocs

} from "firebase/firestore";


export const AuthContext=createContext();

export function AuthProvider({children}){

const [usuario,setUsuario]=useState(null);

const [logueado,setLogueado]=useState(false);

const login=async(usuarioIngresado,passwordIngresada)=>{

try{

const consulta=await getDocs(collection(db,"login"));

let encontrado=false;

consulta.forEach((doc)=>{

const datos=doc.data();

if(

datos.usuario===usuarioIngresado &&

datos.contrasenia===passwordIngresada

){

encontrado=true;

setUsuario(datos.usuario);

setLogueado(true);

}

});

return encontrado;

}

catch(error){

console.log(error);

return false;

}

}

const logout=()=>{

setUsuario(null);

setLogueado(false);

}

return (

        <AuthContext.Provider
            value={{
                usuario,
                logueado,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}