import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../../redux/slices/contactsSlice'
import { FormContainer } from './ContactForm.styles' // Importando o componente estilizado

{
  /* Componente de formulário para adicionar um novo contato */
}
const ContactForm: React.FC = () => {
  {
    /* Definindo estados locais para nome, email e telefone */
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  {
    /* Inicializando a função dispatch do Redux */
  }
  const dispatch = useDispatch()

  {
    /* Função para lidar com o envio do formulário */
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    {
      /* Criando um novo objeto de contato */
    }
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone
    }

    {
      /* Despachando a ação para adicionar o novo contato ao estado do Redux */
    }
    dispatch(addContact(newContact))

    {
      /* Resetando os estados locais após o envio */
    }
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <FormContainer>
      {' '}
      {/* Usando o componente estilizado para envolver o conteúdo */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o nome */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome completo"
        />

        {/* Campo de entrada para o email */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        {/* Campo de entrada para o telefone */}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
        />

        {/* Botão de envio do formulário */}
        <button type="submit">Adicionar</button>
      </form>
    </FormContainer>
  )
}

export default ContactForm
