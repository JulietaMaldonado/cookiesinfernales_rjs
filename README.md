# 🍪 Cookies Infernales

Cookie Infernal es un sitio web desarrollado con **React** que permite visualizar un catálogo de cookies que puede ser agregado a un carrito de compras que puede ser modificado y también permite gestionar productos mediante un panel de administración protegido con autenticación de Firebase.


# 📋 Características

- Visualización del catálogo de productos.
- Carrito de compras utilizando **Context API**.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Vaciar completamente el carrito.
- Cálculo automático del precio total.
- Contador de productos en el ícono del carrito.
- Inicio de sesión mediante **Firebase Authentication**.
- Protección de rutas para el panel de administración.
- CRUD de productos utilizando **Cloud Firestore**.
- Creación de nuevos productos.
- Edición de productos existentes.
- Eliminación de productos con confirmación mediante modal.
- Diseño responsive.

# 🛠 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Firebase Authentication
- Cloud Firestore
- CSS


# 🚀 Instalación

1. Clonar el repositorio
2. Ingresar al proyecto
3. Instalar las dependencias


# 🔥 Configuración de Firebase
Crear un proyecto en Firebase.

Habilitar:

- Authentication
- Cloud Firestore

Crear un archivo llamado:
src/firebase.js
con una configuración similar a la siguiente:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "...",

    authDomain: "...",

    projectId: "...",

    storageBucket: "...",

    messagingSenderId: "...",

    appId: "..."

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

Reemplazar los valores por los proporcionados por Firebase.


# 👤 Usuario administrador

Crear un usuario desde Firebase Authentication utilizando Email/Password.

Ese usuario será el encargado de acceder al panel de administración para:
- Agregar productos
- Editar productos
- Eliminar productos


# ▶ Ejecutar el proyecto

Iniciar el servidor de desarrollo con:

npm run

Luego abrir en el navegador:

http://localhost:5173


# 📂 Estructura del proyecto

src
│
├── assets
├── components
│   ├── AuthContext
│   ├── ContextoCarrito
│   ├── ContactoForm
│   ├── Footer
│   ├── Header
│   ├── Item
│   ├── ItemList
│   ├── ItemListContainer
│   ├── NavBar
│   └── ProtectedRoute
│
├── pages
│   ├── Inicio
│   ├── Productos
│   ├── Carrito
│   ├── Contacto
│   ├── Login
│   └── CargarProductos
│
├── firebase.js
├── App.jsx
└── main.jsx


# 🔐 Autenticación

El acceso al panel de administración está protegido mediante un componente ProtectedRoute.

Si el usuario no inició sesión será redirigido automáticamente a la página de Login.


# 🛒 Carrito de compras

El carrito utiliza **Context API**, permitiendo:

- mantener el estado global;
- agregar productos;
- eliminar una unidad de un producto;
- eliminar completamente un producto;
- vaciar el carrito;
- calcular el precio total;
- mostrar la cantidad de productos junto al ícono del carrito.

# 📦 Administración de productos

El panel de administración permite realizar un CRUD completo sobre Cloud Firestore:

- Crear productos.
- Editar productos.
- Eliminar productos.
- Confirmar la eliminación mediante un modal.

Los productos agregados desde el panel se muestran automáticamente en la sección **Productos**.
