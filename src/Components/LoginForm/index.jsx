import React from 'react';
import { useContext } from 'react';
import { shopiContext } from '../../Context';
import firebase from './firebase';

const LoginForm = () => {
  const context = useContext(shopiContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Verifica si el usuario ya existe en Firebase por su correo electrónico
      const userCredential = await firebase.auth().fetchSignInMethodsForEmail(context.email);

      if (userCredential.length === 0) {
        // Si el usuario no existe, crea una cuenta nueva con el correo electrónico y nombre ingresados
        await firebase.auth().createUserWithEmailAndPassword(context.email, ''); // La contraseña es opcional y se puede dejar en blanco para este caso
        await firebase.auth().currentUser.updateProfile({
          displayName: context.name,
        });
        alert('Cuenta creada exitosamente');
        console.log('Cuenta creada exitosamente');
      } else {
        // Si el usuario ya existe, inicia sesión con el correo electrónico ingresado
        await firebase.auth().signInWithEmailAndPassword(context.email, ''); // La contraseña es opcional y se puede dejar en blanco para este caso
        alert('Inicio de sesión exitoso');
        console.log('Inicio de sesión exitoso');

      }
    } catch (error) {
      console.error('Error al iniciar sesión o crear cuenta:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className='flex-col justify-between items-center mt-8'>
        <div  className='mb-4 flex justify-between items-center' >
          <label htmlFor="name">Name:</label>
          <input
            className='border border-black rounded-lg w-40 ml-1 p-1 focus:outline-none'
            type="text"
            placeholder='Camila'
            id="name"
            value={context.name}
            onChange={(e) => context.setName(e.target.value)}
          />
        </div>
        <div className='mb-4 flex justify-between items-center'>
          <label htmlFor="email">Email:</label>
          <input
            className='border border-black rounded-lg w-40 p-1 ml-1 focus:outline-none'
            type="email"
            placeholder='example@email.com'
            id="email"
            value={context.email}
            onChange={(e) => context.setEmail(e.target.value)}
          />
        </div>
        <button className='bg-black py-3 text-white w-full rounded-lg hover:bg-[#299fff]' type="submit">Sign in or Check in</button>
      </div>
    </form>
  );
};

export default LoginForm;
