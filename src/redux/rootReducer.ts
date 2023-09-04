// Importa a função que combina múltiplos redutores
import { combineReducers } from '@reduxjs/toolkit'
// Importa o redutor de contatos do slice de contatos
import contactsReducer from './slices/contactsSlice'

// Combina todos os redutores em um único redutor raiz.
// Isso facilita o gerenciamento de múltiplos slices/states na store Redux.
const rootReducer = combineReducers({
  // Mapeia o slice de contatos para a chave "contacts" no estado global
  contacts: contactsReducer
})

// Exporta o redutor raiz para ser usado na configuração da store Redux
export default rootReducer
