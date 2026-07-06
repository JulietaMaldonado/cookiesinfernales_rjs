import { useState } from "react";
import '../ContactoForm/ContactoForm.css'

export function ContactoForm() {
  
 const [nombreApellido, setNombreApellido] = useState("");
  const [mail, setMail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState("");

  const validarFormulario = (e) => {
    e.preventDefault();

    let formularioValido = true;
    setErrorNombre("");
    setErrorMail("");
    setErrorMensaje("");
    setMensajeEnviado("");

    if (nombreApellido === "") {
      setErrorNombre("No puedes dejar esta casilla vacía.");
      formularioValido = false;
    }

    if (mail === "") {
      setErrorMail("No puedes dejar esta casilla vacía.");
      formularioValido = false;
    }

    if (mensaje === "") {
      setErrorMensaje("No puedes dejar esta casilla vacía.");
      formularioValido = false;
    }

    if (formularioValido) {
      setMensajeEnviado("¡Mensaje enviado!");
    }
  };

  return (
    <div className="contacto" id="contacto">
      <h2 className="contactotitulo">Contacto</h2>

      <form onSubmit={validarFormulario} noValidate>

        <label>Nombre y Apellido</label>
        <p className="mensajeerror">{errorNombre}</p>
        <input
          type="text"
          value={nombreApellido}
          onChange={(e) => setNombreApellido(e.target.value)}
        />

        <label>Mail</label>
        <p className="mensajeerror">{errorMail}</p>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label>Asunto</label>
        <input
          type="text"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
        />

        <label>Mensaje</label>
        <p className="mensajeerror">{errorMensaje}</p>
        <input
          type="text"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button className="botonenviar" type="submit">
          Enviar
        </button>

        <p className="mensajeenviado">{mensajeEnviado}</p>

      </form>
    </div>
  ); 
}
