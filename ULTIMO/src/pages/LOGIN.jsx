import React from 'react'

const LOGIN = () => {
  
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      if (email === 'Lorena111@gmail.com' && password === '123456') {
        // Autenticación exitosa
        console.log('Inicio de sesión exitoso');
        setError('');
        // Aquí podrías redirigir al usuario a otra página
      } else {
        // Autenticación fallida
        setError('Correo electrónico o contraseña incorrectos');
      }
    };
  
    return (
      <div>
        <h2>Iniciar sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    );
  };
  
}

export default LOGIN