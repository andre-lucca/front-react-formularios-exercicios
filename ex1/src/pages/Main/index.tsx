import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react'
import './style.css'

import openEyeImg from '../../assets/open-eye.svg'
import closeEyeImg from '../../assets/close-eye.svg'

function Main() {
  const [formState, setFormState] = useState({})
  const [isPwVisible, setPassWordVisibility] = useState(false)

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const form = event.currentTarget
    const [emailInput, passwordInput] = form.querySelectorAll('input')

    if (!emailInput.value || !passwordInput.value) {
      console.log('Os campos Email e Password precisam estar preenchidos.')
    }

    console.log('Sucesso!')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="E-mail"
        />
        <div className="password-input-container">
          <input
            type={isPwVisible ? "text" : "password"}
            placeholder="Senha"
          />
          <img
            src={isPwVisible ? openEyeImg : closeEyeImg}
            alt="Password visibility"
            onClick={() => setPassWordVisibility(!isPwVisible)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div >
  )
}

export default Main
