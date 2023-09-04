import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeContact,
  addContact,
  updateContact
} from '../../redux/slices/contactsSlice'
import * as Styled from './ContactList.styles'

{
  /* Definindo a interface do Contato */
}
interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

const ContactList: React.FC = () => {
  {
    /* Usando Redux para obter a lista de contatos do estado */
  }
  const contacts = useSelector(
    (state: { contacts: Contact[] }) => state.contacts
  )

  {
    /* Ordenando contatos por nome */
  }
  const sortedContacts = [...contacts].sort((a: Contact, b: Contact) =>
    a.name.localeCompare(b.name)
  )

  const dispatch = useDispatch()

  {
    /* Estados para gerenciar o formulário de contato e suas interações */
  }
  const [showAddContactForm, setShowAddContactForm] = useState(false)
  const [newContact, setNewContact] = useState<Contact>({
    id: '',
    name: '',
    email: '',
    phone: ''
  })
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [searchValue, setSearchValue] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    {
      /* Função para limpar o campo de busca ao pressionar a tecla Esc */
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchValue('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  {
    /* Função para formatar números de telefone */
  }
  const formatPhoneNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, '')
    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
    } else {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
  }

  {
    /* Função para capitalizar nomes corretamente, ignorando preposições e artigos */
  }
  const capitalizeName = (name: string) => {
    const prepositionsAndArticles = [
      'e',
      'da',
      'de',
      'do',
      'das',
      'dos',
      'a',
      'an',
      'and',
      'the'
    ]
    return name.toLowerCase().replace(/\b\w+/g, function (word, index) {
      if (prepositionsAndArticles.includes(word) && index !== 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
  }

  {
    /* Lidando com a mudança de valores nos campos do formulário */
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value)
    } else if (name === 'name') {
      formattedValue = capitalizeName(value)
    }

    setNewContact((prev) => ({ ...prev, [name]: formattedValue }))
  }

  {
    /* Função para rolar a página para o topo */
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  {
    /* Funções para iniciar edição, cancelar edição e submeter o formulário */
  }
  const handleEditStart = (contact: Contact) => {
    setEditingContact(contact)
    setNewContact(contact)
    setShowAddContactForm(true)
    scrollToTop()
  }

  const handleCancelEdit = () => {
    setEditingContact(null)
    setShowAddContactForm(false)
    setNewContact({
      id: '',
      name: '',
      email: '',
      phone: ''
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newContact.name || !newContact.phone) {
      setErrorMessage('Nome e telefone são obrigatórios!')
      return
    }

    if (editingContact) {
      dispatch(updateContact(newContact))
      handleCancelEdit()
    } else {
      const uniqueId = Date.now().toString()
      dispatch(addContact({ ...newContact, id: uniqueId }))
      setNewContact({
        id: '',
        name: '',
        email: '',
        phone: ''
      })
      setShowAddContactForm(false)
    }
    setErrorMessage(null)
  }

  {
    /* Filtrando contatos com base no valor de pesquisa */
  }
  const filteredContacts = sortedContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)
  )

  return (
    <Styled.ContactListContainer>
      <Styled.ListHeader>
        <Styled.Title>Lista de Contatos</Styled.Title>
        {/* Botão para adicionar novo contato */}
        <Styled.AddContactButton
          onClick={() => setShowAddContactForm(!showAddContactForm)}
        >
          Adicionar Contato
        </Styled.AddContactButton>
      </Styled.ListHeader>
      {/* Formulário de contato */}
      {showAddContactForm && (
        <Styled.FormContainer onSubmit={handleSubmit}>
          {/* Campos do formulário */}
          <Styled.InputField
            type="text"
            name="name"
            placeholder="Nome"
            value={newContact.name}
            onChange={handleInputChange}
            required
          />
          <Styled.InputField
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleInputChange}
          />
          <Styled.InputField
            type="text"
            name="phone"
            placeholder="Telefone"
            value={newContact.phone}
            onChange={handleInputChange}
            maxLength={16}
            required
          />
          <Styled.SaveButton type="submit">Salvar</Styled.SaveButton>
        </Styled.FormContainer>
      )}
      {/* Mensagem de erro, se houver */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Styled.SearchContainer>
        <Styled.SearchField
          type="text"
          placeholder="Pesquisar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Styled.SearchButton>Pesquisar</Styled.SearchButton>
      </Styled.SearchContainer>
      <Styled.ContactItemsContainer>
        {filteredContacts.length === 0 ? (
          <Styled.NoContactsMessage>
            Nenhum contato disponível.
          </Styled.NoContactsMessage>
        ) : (
          filteredContacts.map((contact: Contact) => (
            <Styled.ContactContainer key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <Styled.RemoveButton
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Remover
              </Styled.RemoveButton>
              <Styled.EditButton onClick={() => handleEditStart(contact)}>
                Editar
              </Styled.EditButton>
              <Styled.CancelEditButton onClick={handleCancelEdit}>
                Cancelar Edição
              </Styled.CancelEditButton>
            </Styled.ContactContainer>
          ))
        )}
      </Styled.ContactItemsContainer>
    </Styled.ContactListContainer>
  )
}

export default ContactList
