
import React, { useState } from 'react';

export default function FormularioContact() {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const enviarFormulario = (e) => {
        e.preventDefault();
        
        // Aquí podrías enviar los datos a un servidor o procesarlos de alguna manera
        console.log('Formulario enviado:', { nombre, email, mensaje });

        // Limpiar el formulario después de enviar
        setNombre('');
        setEmail('');
        setMensaje('');

        alert('Formulario enviado con éxito');
    }
    

  return (
    <div>
      <h1>Para mas información enviar un formulario</h1>
      <form onSubmit={enviarFormulario} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
            <label>Nombre</label>
            <input 
                type='text'
                placeholder='Escribe tu nombre'
                value= {nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div>
            <label>Email</label>
            <input 
                type='email'
                placeholder='Escribe tu email'
                value= {email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label>Mensaje</label>
            <textarea 
                placeholder='Escribe tu mensaje'
                value= {mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}