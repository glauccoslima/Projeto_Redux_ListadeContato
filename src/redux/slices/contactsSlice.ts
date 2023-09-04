// Importa funções necessárias do toolkit Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a interface para um Contact (Contato)
interface Contact {
  id: string
  name: string
  email: string
  phone: string
}

// Define o estado inicial como uma lista vazia de contatos
const initialState: Contact[] = []

// Cria um slice Redux para a gestão de contatos
const contactsSlice = createSlice({
  // Nome do slice (será utilizado em ações e é útil para debugging)
  name: 'contacts',
  // Define o estado inicial para o slice
  initialState,
  // Define os redutores para este slice
  reducers: {
    // Adiciona um contato ao estado
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
    },
    // Remove um contato com base em seu ID
    removeContact: (state, action: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== action.payload)
    },
    // Atualiza um contato existente com base em seu ID
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      )
      // Se o contato for encontrado, atualiza-o
      if (index !== -1) {
        state[index] = action.payload
      }
    }
  }
})

// Exporta as ações geradas pelo slice (útil para serem disparadas pelos componentes/UI)
export const { addContact, removeContact, updateContact } =
  contactsSlice.actions

// Exporta o redutor associado a este slice (será usado para configurar o armazenamento Redux)
export default contactsSlice.reducer
