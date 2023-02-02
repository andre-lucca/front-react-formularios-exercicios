import { SyntheticEvent, useState } from 'react';

import './style.css';

import backgroundImg from '../../assets/background.jpg'
import successImg from '../../assets/woman-success.png'
import closeEyeImg from '../../assets/close-eye.svg'
import openEyeImg from '../../assets/open-eye.svg'

function SignUp() {
  const [gotSuccess, setSuccess] = useState(false)
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const form = event.currentTarget
    const [nameInput, emailInput, passwordInput] = form.querySelectorAll('input')
    const [errorMessage] = form.getElementsByClassName('error-message')

    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
      errorMessage.textContent = 'Preencha todos os campos!'
      return
    }

    errorMessage.textContent = ''
    setSuccess(true)
  }

  function handleReset() {
    const [errorMessage] = document.getElementsByClassName('error-message')

    errorMessage.textContent = ''
  }

  return (
    <div className="container">
      <div className="content">
        {
          gotSuccess ?
            <div className="success-message">
              <img src={successImg} alt="Congrats" />
              <h2 className="sucess-text">Cadastro efetuado com sucesso!</h2>
            </div>
            :
            <form onSubmit={handleSubmit}>
              <h1>Cadastre-se</h1>
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <div className="pw-input-container">
                <input type={isPasswordVisible ? "text" : "password"} placeholder="Senha" />
                <img
                  src={isPasswordVisible ? openEyeImg : closeEyeImg}
                  alt="Password visibility"
                  onClick={() => setPasswordVisibility(!isPasswordVisible)}
                />
              </div>
              <p className="error-message"></p> <br />
              <button type="submit">cadastrar</button>
              <button
                type="reset"
                onClick={handleReset}
              >
                cancelar
              </button>
              <span>Já tem cadastro? Clique aqui!</span>
            </form>
        }
        <img src={backgroundImg} alt="Background image" />
      </div>
    </div>
  );
}

export default SignUp;
