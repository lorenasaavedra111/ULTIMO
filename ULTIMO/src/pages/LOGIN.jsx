import React from 'react'

const LOGIN = () => {
  
  return (
    <div className='container'>
      <h1>Login</h1>
      <form className='login-form'>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LOGIN
