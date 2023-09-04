// Importa a função para configurar e criar a store Redux
import { configureStore } from '@reduxjs/toolkit'
// Importa o redutor raiz que combina todos os redutores de slices
import rootReducer from './rootReducer'

// Configura e cria a store Redux utilizando o redutor raiz.
// A store mantém o estado global da aplicação e pode ser utilizada
// para despachar ações e acessar o estado da aplicação.
const store = configureStore({
  reducer: rootReducer
})

// Exporta a store configurada para ser utilizada em componentes e outros arquivos
export default store
