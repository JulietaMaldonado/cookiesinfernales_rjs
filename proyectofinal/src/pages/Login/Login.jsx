import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import "./Login.css";

export function Login() {

    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");
    const [error, setError] = useState("");

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const correcto = await login(usuario, contrasenia);

        if (correcto) {

            navigate("/admin");

        } else {

            setError("Usuario o contraseña incorrectos.");

        }

    };

    return (

        <div className="logincontenedor">
        
            <form
                className="loginformulario"
                onSubmit={handleSubmit}
            >
                <h2>Iniciar sesión</h2>
                <label>Usuario</label>

                <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Ingrese su usuario"
                    required
                />

                <label>Contraseña</label>

                <input
                    type="password"
                    value={contrasenia}
                    onChange={(e) => setContrasenia(e.target.value)}
                    placeholder="Ingrese su contraseña"
                    required
                />

                {
                    error &&
                    <p className="mensajeError">
                        {error}
                    </p>
                }

                <button type="submit">
                    Ingresar
                </button>

            </form>

        </div>

    );

}