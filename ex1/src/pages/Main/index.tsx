import { useState } from 'react'
import './style.css'

import openEyeImg from '../../assets/open-eye.svg'
import closeEyeImg from '../../assets/close-eye.svg'

function Main() {

  return (
    <div className="container">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button>Login</button>
      </form>
    </div >
  )
}

export default Main
